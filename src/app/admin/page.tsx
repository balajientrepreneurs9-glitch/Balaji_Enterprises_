import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { Users, FileText, Image, MessageSquare, HelpCircle, Briefcase, Award } from 'lucide-react';

export default async function AdminDashboard() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/admin/login');
  }

  const [
    leadsCount,
    projectsCount,
    galleryCount,
    blogCount,
    testimonialsCount,
    faqCount,
    servicesCount,
    teamCount,
    recentLeads,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.project.count(),
    prisma.galleryImage.count(),
    prisma.blogPost.count(),
    prisma.testimonial.count(),
    prisma.faq.count(),
    prisma.service.count(),
    prisma.teamMember.count(),
    prisma.lead.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  const stats = [
    { label: 'Total Leads', value: leadsCount, icon: Users, color: 'bg-blue-500' },
    { label: 'Projects', value: projectsCount, icon: Briefcase, color: 'bg-green-500' },
    { label: 'Gallery Images', value: galleryCount, icon: Image, color: 'bg-purple-500' },
    { label: 'Blog Posts', value: blogCount, icon: FileText, color: 'bg-yellow-500' },
    { label: 'Testimonials', value: testimonialsCount, icon: MessageSquare, color: 'bg-pink-500' },
    { label: 'FAQs', value: faqCount, icon: HelpCircle, color: 'bg-indigo-500' },
    { label: 'Services', value: servicesCount, icon: Award, color: 'bg-red-500' },
    { label: 'Team Members', value: teamCount, icon: Users, color: 'bg-teal-500' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {session.user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">Recent Leads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
