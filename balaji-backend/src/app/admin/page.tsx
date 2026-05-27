"use client";

import { useState, useEffect } from 'react';
import { Download, Search, Filter } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      setLeads(data.leads || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const exportCSV = () => {
    const headers = "Name,Phone,Email,City,Requirement,Status,Source,Date\n";
    const csvContent = "data:text/csv;charset=utf-8," + headers + leads.map(l => {
      return `${l.name},${l.phone},${l.email || ''},${l.city || ''},"${l.requirement || ''}",${l.status},${l.source},${new Date(l.createdAt).toLocaleDateString()}`;
    }).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "leads.csv");
    document.body.appendChild(link);
    link.click();
  };

  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'New').length;
  const pendingLeads = leads.filter(l => l.status === 'Pending').length;
  const closedLeads = leads.filter(l => l.status === 'Closed').length;

  const filteredLeads = leads.filter(l => {
    if (filterStatus !== 'All' && l.status !== filterStatus) return false;
    if (search && !l.name.toLowerCase().includes(search.toLowerCase()) && !l.phone.includes(search)) return false;
    return true;
  });

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Leads',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(244, 180, 0, 0.5)',
        borderColor: 'rgba(244, 180, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="admin-header">
        <h2>Dashboard Overview</h2>
        <button onClick={exportCSV} className="btn btn-outline" style={{ border: '1px solid var(--text-muted)', color: 'var(--text-dark)' }}>
          <Download size={18} /> Export Leads
        </button>
      </div>

      <div className="grid grid-cols-4" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Total Leads</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{totalLeads}</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #3B82F6' }}>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>New Leads</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{newLeads}</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #F59E0B' }}>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Pending Leads</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{pendingLeads}</p>
        </div>
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #10B981' }}>
          <h4 style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Closed Leads</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{closedLeads}</p>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Leads Overview</h3>
          <Bar data={chartData} />
        </div>
      </div>

      <div className="card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3>Recent Leads</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="form-control" 
                style={{ paddingLeft: '35px', padding: '0.5rem 0.5rem 0.5rem 35px', width: '250px' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select className="form-control" style={{ padding: '0.5rem' }} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="table-wrapper">
          {loading ? (
            <p style={{ padding: '1rem' }}>Loading leads...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Source</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map(lead => (
                  <tr key={lead.id}>
                    <td>
                      <div style={{ fontWeight: 500 }}>{lead.name}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{lead.email || 'No email'}</div>
                    </td>
                    <td>{lead.phone}</td>
                    <td>{lead.source}</td>
                    <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span className={`badge ${lead.status === 'New' ? 'badge-new' : lead.status === 'Pending' ? 'badge-pending' : 'badge-closed'}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <select 
                        className="form-control" 
                        style={{ padding: '0.25rem', width: '120px' }}
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      >
                        <option value="New">New</option>
                        <option value="Pending">Pending</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No leads found</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
