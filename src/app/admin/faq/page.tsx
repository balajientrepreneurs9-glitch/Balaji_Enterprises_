import { prisma } from '@/lib/prisma';
import FaqTable from '@/components/admin/FaqTable';

export default async function FaqPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 20;
  const category = params.category || '';

  const where: any = {};
  if (category) where.category = category;

  const [faqs, total] = await Promise.all([
    prisma.faq.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    }),
    prisma.faq.count({ where }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
        <p className="text-gray-600 mt-2">Manage frequently asked questions</p>
      </div>
      <FaqTable faqs={faqs} total={total} page={page} limit={limit} />
    </div>
  );
}
