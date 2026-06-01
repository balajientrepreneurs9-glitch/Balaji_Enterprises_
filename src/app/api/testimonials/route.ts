import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const testimonialSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  company: z.string().min(2),
  content: z.string().min(10),
  rating: z.number().min(1).max(5),
  image: z.string().url().optional(),
  featured: z.boolean().optional(),
  active: z.boolean().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '10');

    const where: any = { active: true };

    const testimonials = await prisma.testimonial.findMany({
      where,
      take: limit,
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    });

    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error('GET /api/testimonials error:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const testimonial = await prisma.testimonial.create({
      data: {
        clientName: body.clientName,
        role: body.role || null,
        company: body.company || null,
        content: body.content,
        videoUrl: body.videoUrl || null,
        rating: body.rating || 5,
        active: body.active !== undefined ? body.active : true,
        featured: body.featured !== undefined ? body.featured : false,
      },
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    console.error('POST /api/testimonials error:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
