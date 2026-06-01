import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Balaji Entrepreneurs`,
    description: post.excerpt || post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug, published: true } });

  if (!post) notFound();

  return (
    <main className="min-h-screen">
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {post.imageUrl && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-[#F4B400] text-[#081B3A] px-3 py-1 rounded-full font-semibold">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-[#081B3A] mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
