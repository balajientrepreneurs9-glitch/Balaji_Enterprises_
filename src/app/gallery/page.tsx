import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Project Gallery | Balaji Entrepreneurs',
  description: 'View our solar installation projects gallery showcasing residential, commercial, and industrial installations.',
};

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    where: { active: true },
    orderBy: { createdAt: 'desc' },
  });

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Rooftop'];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-gray-300">Explore our solar installation projects</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div key={image.id} className="group relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={image.url}
                  alt={image.alt || image.title || 'Solar installation'}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {image.title && <h3 className="font-semibold text-lg">{image.title}</h3>}
                    <p className="text-sm text-gray-300">{image.category}</p>
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
