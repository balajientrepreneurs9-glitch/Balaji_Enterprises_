'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Briefcase, Image, FileText, MessageSquare, HelpCircle, Award, UserCircle } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/leads', label: 'Leads', icon: Users },
    { href: '/admin/projects', label: 'Projects', icon: Briefcase },
    { href: '/admin/gallery', label: 'Gallery', icon: Image },
    { href: '/admin/blog', label: 'Blog', icon: FileText },
    { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
    { href: '/admin/faq', label: 'FAQ', icon: HelpCircle },
    { href: '/admin/services', label: 'Services', icon: Award },
    { href: '/admin/team', label: 'Team', icon: UserCircle },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#F4B400] text-[#081B3A] font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
