'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Edit, Plus } from 'lucide-react';
import Image from 'next/image';
import Modal from './Modal';
import ImageUpload from '../ImageUpload';
import Toast from './Toast';

interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string | null;
  alt: string | null;
  active: boolean;
  createdAt: Date;
}

export default function GalleryTable({
  images,
  total,
  page,
  limit,
}: {
  images: GalleryImage[];
  total: number;
  page: number;
  limit: number;
}) {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const [formData, setFormData] = useState({
    url: '',
    category: 'Residential',
    title: '',
    alt: '',
    active: true,
  });

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    router.push(`/admin/gallery?${params.toString()}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this image?')) return;

    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      setToast({ message: 'Image deleted successfully', type: 'success' });
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to delete image', type: 'error' });
    }
  };

  const handleEdit = (image: GalleryImage) => {
    setEditingImage(image);
    setFormData({
      url: image.url,
      category: image.category,
      title: image.title || '',
      alt: image.alt || '',
      active: image.active,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingImage(null);
    setFormData({
      url: '',
      category: 'Residential',
      title: '',
      alt: '',
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingImage) {
        await fetch(`/api/gallery/${editingImage.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setToast({ message: 'Image updated successfully', type: 'success' });
      } else {
        await fetch('/api/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setToast({ message: 'Image added successfully', type: 'success' });
      }

      setIsModalOpen(false);
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to save image', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex gap-4 mb-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            >
              <option value="">All Categories</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Rooftop">Rooftop</option>
            </select>
            <button
              onClick={handleFilter}
              className="px-6 py-2 bg-[#F4B400] text-[#081B3A] font-semibold rounded-lg hover:bg-[#D49A00]"
            >
              Filter
            </button>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-[#081B3A] text-white font-semibold rounded-lg hover:bg-[#0A2347] flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Image
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
          {images.map((image) => (
            <div key={image.id} className="group relative bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={image.url} alt={image.alt || image.title || 'Gallery image'} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900 truncate">{image.title || 'Untitled'}</p>
                <p className="text-sm text-gray-500">{image.category}</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleEdit(image)}
                    className="flex-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-1"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="flex-1 px-3 py-1.5 text-sm bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="p-6 border-t flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total} results
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <button
                  onClick={() => router.push(`/admin/gallery?page=${page - 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => router.push(`/admin/gallery?page=${page + 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingImage ? 'Edit Image' : 'Add Image'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image *</label>
            <ImageUpload
              folder="gallery"
              currentImage={formData.url}
              onUploadComplete={(url) => setFormData({ ...formData, url })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Rooftop">Rooftop</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
            <input
              type="text"
              value={formData.alt}
              onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              className="w-4 h-4 text-[#F4B400] focus:ring-[#F4B400]"
            />
            <span className="text-sm font-medium text-gray-700">Active</span>
          </label>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="flex-1 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !formData.url}
              className="flex-1 px-6 py-2 bg-[#F4B400] text-[#081B3A] font-semibold rounded-lg hover:bg-[#D49A00] disabled:opacity-50"
            >
              {loading ? 'Saving...' : editingImage ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
