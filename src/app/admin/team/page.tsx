import { prisma } from '@/lib/prisma';
import TeamTable from '@/components/admin/TeamTable';

export default async function TeamPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 20;

  const [members, total] = await Promise.all([
    prisma.teamMember.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    }),
    prisma.teamMember.count(),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
        <p className="text-gray-600 mt-2">Manage team members and staff</p>
      </div>
      <TeamTable members={members} total={total} page={page} limit={limit} />
    </div>
  );
}
