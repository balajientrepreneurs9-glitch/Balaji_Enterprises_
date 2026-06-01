import { prisma } from '@/lib/prisma';
import TestimonialsTable from '@/components/admin/TestimonialsTable';

export default async function TestimonialsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const limit = 20;

  const [testimonials, total] = await Promise.all([
    prisma.testimonial.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.testimonial.count(),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
        <p className="text-gray-600 mt-2">Manage customer testimonials and reviews</p>
      </div>
      <TestimonialsTable testimonials={testimonials} total={total} page={page} limit={limit} />
    </div>
  );
}
