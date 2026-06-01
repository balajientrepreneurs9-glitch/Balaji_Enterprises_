import { prisma } from '@/lib/prisma';
import ProjectsTable from '@/components/admin/ProjectsTable';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; clientType?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 20;
  const search = params.search || '';
  const clientType = params.clientType || '';

  const where: any = {};
  if (clientType) where.clientType = clientType;
  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { location: { contains: search, mode: 'insensitive' } },
    ];
  }

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.project.count({ where }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Projects Management</h1>
        <p className="text-gray-600 mt-2">Manage completed solar projects</p>
      </div>
      <ProjectsTable projects={projects} total={total} page={page} limit={limit} />
    </div>
  );
}
