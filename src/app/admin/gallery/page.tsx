import { prisma } from '@/lib/prisma';
import GalleryTable from '@/components/admin/GalleryTable';

export default async function GalleryPage({
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

  const [images, total] = await Promise.all([
    prisma.galleryImage.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.galleryImage.count({ where }),
  ]);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
        <p className="text-gray-600 mt-2">Manage project gallery images</p>
      </div>
      <GalleryTable images={images} total={total} page={page} limit={limit} />
    </div>
  );
}
