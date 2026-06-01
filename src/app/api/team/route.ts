import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { teamSchema } from '@/lib/validations';

export async function GET() {
  try {
    const team = await prisma.teamMember.findMany({
      where: { active: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    });

    return NextResponse.json({ team });
  } catch (error) {
    console.error('GET /api/team error:', error);
    return NextResponse.json({ error: 'Failed to fetch team' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const member = await prisma.teamMember.create({
      data: {
        name: body.name,
        role: body.role,
        description: body.description || null,
        imageUrl: body.imageUrl || null,
        email: body.email || null,
        phone: body.phone || null,
        active: body.active !== undefined ? body.active : true,
        order: body.order || 0,
      },
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    console.error('POST /api/team error:', error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
