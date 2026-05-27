import Link from 'next/link';
import { LayoutDashboard, Users, Image, Settings, LogOut, Sun, MessageSquare, Briefcase, FileText, HelpCircle } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 'bold' }}>
            <Sun color="var(--secondary)" size={24} />
            <span>Balaji Admin</span>
          </Link>
        </div>
        <nav>
          <Link href="/admin" className="admin-nav-item active">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/leads" className="admin-nav-item">
            <Users size={20} /> Leads
          </Link>
          <Link href="/admin/services" className="admin-nav-item">
            <Settings size={20} /> Services
          </Link>
          <Link href="/admin/projects" className="admin-nav-item">
            <Briefcase size={20} /> Projects
          </Link>
          <Link href="/admin/gallery" className="admin-nav-item">
            <Image size={20} /> Gallery
          </Link>
          <Link href="/admin/blogs" className="admin-nav-item">
            <FileText size={20} /> Blogs
          </Link>
          <Link href="/admin/testimonials" className="admin-nav-item">
            <MessageSquare size={20} /> Testimonials
          </Link>
          <Link href="/admin/faq" className="admin-nav-item">
            <HelpCircle size={20} /> FAQ
          </Link>
          <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Link href="/" className="admin-nav-item" style={{ color: 'var(--danger)' }}>
              <LogOut size={20} /> Logout
            </Link>
          </div>
        </nav>
      </aside>
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
