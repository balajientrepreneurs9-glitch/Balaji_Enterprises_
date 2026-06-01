import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Solar Projects | Balaji Entrepreneurs',
  description: 'Explore our completed solar installation projects across residential, commercial, and industrial sectors.',
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { active: true },
    orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
  });

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300">Powering homes and businesses with clean solar energy</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-[#F4B400] text-[#081B3A] px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#081B3A] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-semibold text-[#081B3A]">{project.kwInstalled} kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-semibold text-[#081B3A]">{project.clientType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-semibold text-[#081B3A]">{project.location}</span>
                    </div>
                    {project.savingsGenerated && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Annual Savings:</span>
                        <span className="font-semibold text-green-600">₹{project.savingsGenerated.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
