import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { gallerySchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = { active: true };
    if (category && category !== 'All') where.category = category;

    const images = await prisma.galleryImage.findMany({
      where,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ images });
  } catch (error) {
    console.error('GET /api/gallery error:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const image = await prisma.galleryImage.create({
      data: {
        url: body.url,
        category: body.category,
        title: body.title || null,
        alt: body.alt || null,
        active: body.active !== undefined ? body.active : true,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error('POST /api/gallery error:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}
