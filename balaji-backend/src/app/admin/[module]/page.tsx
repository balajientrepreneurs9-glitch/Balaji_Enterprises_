"use client";

import { usePathname } from 'next/navigation';

export default function AdminModulePage() {
  const pathname = usePathname();
  const moduleName = pathname.split('/').pop() || 'Module';
  const title = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

  return (
    <div>
      <div className="admin-header">
        <h2>{title} Management</h2>
        <button className="btn btn-primary">+ Add New {title}</button>
      </div>

      <div className="card" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p>This is the CMS interface for managing {title}.</p>
        <p>Here you would typically see a data table to Create, Read, Update, and Delete entries for your website's frontend.</p>
        <p>The database schema is already configured for this module.</p>
      </div>
    </div>
  );
}
