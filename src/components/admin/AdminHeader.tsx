'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#081B3A] text-white z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">Balaji Entrepreneurs</h1>
        <span className="text-sm text-gray-300">Admin Panel</span>
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/admin/login' })}
        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </header>
  );
}
