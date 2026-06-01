import { prisma } from '@/lib/prisma';
import ServicesTable from '@/components/admin/ServicesTable';

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 20;

  const [services, total] = await Promise.all([
    prisma.service.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    }),
    prisma.service.count(),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <p className="text-gray-600 mt-2">Manage company services and offerings</p>
      </div>
      <ServicesTable services={services} total={total} page={page} limit={limit} />
    </div>
  );
}
