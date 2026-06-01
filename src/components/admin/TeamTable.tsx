'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Edit, Plus } from 'lucide-react';
import Image from 'next/image';
import Modal from './Modal';
import ImageUpload from '../ImageUpload';
import Toast from './Toast';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string | null;
  imageUrl: string | null;
  email: string | null;
  phone: string | null;
  active: boolean;
  order: number;
  createdAt: Date;
}

export default function TeamTable({
  members,
  total,
  page,
  limit,
}: {
  members: TeamMember[];
  total: number;
  page: number;
  limit: number;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    imageUrl: '',
    email: '',
    phone: '',
    active: true,
    order: 0,
  });

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this team member?')) return;

    try {
      await fetch(`/api/team/${id}`, { method: 'DELETE' });
      setToast({ message: 'Team member deleted successfully', type: 'success' });
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to delete team member', type: 'error' });
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      description: member.description || '',
      imageUrl: member.imageUrl || '',
      email: member.email || '',
      phone: member.phone || '',
      active: member.active,
      order: member.order,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingMember(null);
    setFormData({
      name: '',
      role: '',
      description: '',
      imageUrl: '',
      email: '',
      phone: '',
      active: true,
      order: 0,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        description: formData.description || null,
        imageUrl: formData.imageUrl || null,
        email: formData.email || null,
        phone: formData.phone || null,
      };

      if (editingMember) {
        await fetch(`/api/team/${editingMember.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setToast({ message: 'Team member updated successfully', type: 'success' });
      } else {
        await fetch('/api/team', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setToast({ message: 'Team member created successfully', type: 'success' });
      }

      setIsModalOpen(false);
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to save team member', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-[#081B3A] text-white font-semibold rounded-lg hover:bg-[#0A2347] flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Team Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {members.map((member) => (
            <div key={member.id} className="bg-gray-50 rounded-lg overflow-hidden">
              {member.imageUrl && (
                <div className="relative h-48 w-full">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                {member.email && <p className="text-xs text-gray-500">{member.email}</p>}
                {member.phone && <p className="text-xs text-gray-500">{member.phone}</p>}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(member)}
                    className="flex-1 px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-1"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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
                  onClick={() => router.push(`/admin/team?page=${page - 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => router.push(`/admin/team?page=${page + 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMember ? 'Edit Team Member' : 'Add Team Member'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Photo</label>
            <ImageUpload
              folder="team"
              currentImage={formData.imageUrl}
              onUploadComplete={(url) => setFormData({ ...formData, imageUrl: url })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
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
              disabled={loading}
              className="flex-1 px-6 py-2 bg-[#F4B400] text-[#081B3A] font-semibold rounded-lg hover:bg-[#D49A00] disabled:opacity-50"
            >
              {loading ? 'Saving...' : editingMember ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
