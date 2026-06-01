'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Edit, Plus } from 'lucide-react';
import Modal from './Modal';
import Toast from './Toast';

interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  active: boolean;
  createdAt: Date;
}

export default function FaqTable({
  faqs,
  total,
  page,
  limit,
}: {
  faqs: Faq[];
  total: number;
  page: number;
  limit: number;
}) {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    category: 'General',
    order: 0,
    active: true,
  });

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    router.push(`/admin/faq?${params.toString()}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this FAQ?')) return;

    try {
      await fetch(`/api/faq/${id}`, { method: 'DELETE' });
      setToast({ message: 'FAQ deleted successfully', type: 'success' });
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to delete FAQ', type: 'error' });
    }
  };

  const handleEdit = (faq: Faq) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      order: faq.order,
      active: faq.active,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingFaq(null);
    setFormData({
      question: '',
      answer: '',
      category: 'General',
      order: 0,
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingFaq) {
        await fetch(`/api/faq/${editingFaq.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setToast({ message: 'FAQ updated successfully', type: 'success' });
      } else {
        await fetch('/api/faq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setToast({ message: 'FAQ created successfully', type: 'success' });
      }

      setIsModalOpen(false);
      router.refresh();
    } catch (error) {
      setToast({ message: 'Failed to save FAQ', type: 'error' });
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
              <option value="General">General</option>
              <option value="Installation">Installation</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Financing">Financing</option>
              <option value="Technical">Technical</option>
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
            Add FAQ
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Question</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <tr key={faq.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-md">{faq.question}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{faq.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{faq.order}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        faq.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {faq.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button onClick={() => handleEdit(faq)} className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(faq.id)} className="text-red-600 hover:text-red-800">
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
                  onClick={() => router.push(`/admin/faq?page=${page - 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => router.push(`/admin/faq?page=${page + 1}`)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingFaq ? 'Edit FAQ' : 'Add FAQ'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Question *</label>
            <input
              type="text"
              required
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Answer *</label>
            <textarea
              rows={6}
              required
              value={formData.answer}
              onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
              >
                <option value="General">General</option>
                <option value="Installation">Installation</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Financing">Financing</option>
                <option value="Technical">Technical</option>
              </select>
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
              {loading ? 'Saving...' : editingFaq ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
