'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Edit, Plus } from 'lucide-react';
import Modal from './Modal';
import Toast from './Toast';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  features: string[];
  active: boolean;
  order: number;
  createdAt: Date;
}

export default function ServicesTable({
  services,
  total,
  page,
  limit,
}: {
  services: Service[];
  total: number;
  page: number;
  limit: number;
}) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    features: '',
    active: true,
    order: 0,
  });

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this service?')) return;

    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
      setToast({ message: 'Service deleted successfully', type: 'success' });
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to delete service', type: 'error' });
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || '',
      features: service.features.join('\n'),
      active: service.active,
      order: service.order,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      icon: '',
      features: '',
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
        icon: formData.icon || null,
        features: formData.features.split('\n').filter((f) => f.trim()),
      };

      if (editingService) {
        await fetch(`/api/services/${editingService.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setToast({ message: 'Service updated successfully', type: 'success' });
      } else {
        await fetch('/api/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setToast({ message: 'Service created successfully', type: 'success' });
      }

      setIsModalOpen(false);
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to save service', type: 'error' });
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
            Add Service
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Features</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{service.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{service.features.length} features</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{service.order}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        service.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {service.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button onClick={() => handleEdit(service)} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="p-6 border-t flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total} results
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <button
                  onClick={() => router.push(`/admin/services?page=${page - 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => router.push(`/admin/services?page=${page + 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingService ? 'Edit Service' : 'Add Service'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji or icon name)</label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
              placeholder="e.g., ☀️ or sun"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Features (one per line)</label>
            <textarea
              rows={6}
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />
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
              {loading ? 'Saving...' : editingService ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
