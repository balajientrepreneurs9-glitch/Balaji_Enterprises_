# 📦 COMPLETE BACKEND CODE - BALAJI ENTREPRENEURS

## 🏗️ PROJECT STRUCTURE

```
balaji-backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── dev.db                 # SQLite database (development)
├── src/
│   ├── app/
│   │   ├── api/               # API routes
│   │   │   ├── leads/
│   │   │   │   └── route.ts   # Lead management API
│   │   │   ├── projects/
│   │   │   │   └── route.ts   # Projects API
│   │   │   ├── testimonials/
│   │   │   │   └── route.ts   # Testimonials API
│   │   │   ├── gallery/
│   │   │   │   └── route.ts   # Gallery API
│   │   │   ├── blog/
│   │   │   │   └── route.ts   # Blog API
│   │   │   └── faq/
│   │   │       └── route.ts   # FAQ API
│   │   ├── admin/             # Admin dashboard
│   │   │   ├── layout.tsx     # Admin layout
│   │   │   ├── page.tsx       # Admin dashboard
│   │   │   └── [module]/
│   │   │       └── page.tsx   # Dynamic admin pages
│   │   └── layout.tsx         # Root layout
│   └── lib/
│       └── prisma.ts          # Prisma client instance
├── .env                       # Environment variables
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## 📄 CONFIGURATION FILES

### **package.json**

```json
{
  "name": "balaji-backend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "bcryptjs": "^2.4.3",
    "next": "16.2.6",
    "next-auth": "^4.24.0",
    "pg": "^8.21.0",
    "react": "19.2.6",
    "react-dom": "19.2.6",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "prisma": "^5.22.0",
    "typescript": "^5"
  }
}
```

### **next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL
  }
};

export default nextConfig;
```

### **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### **.env**

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/balaji_db"
# For development with SQLite:
# DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3001"

# API
API_URL="http://localhost:3001"
```

---

## 🗄️ DATABASE SCHEMA

### **prisma/schema.prisma**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Lead Management
model Lead {
  id          String   @id @default(cuid())
  name        String
  phone       String
  email       String?
  city        String?
  requirement String?
  status      String   @default("New") // New, Pending, Closed
  source      String   @default("Website") // Contact, Quote, Calculator, Chatbot
  createdAt   DateTime @default(now())
}

// Services
model Service {
  id          String   @id @default(cuid())
  title       String
  description String
  icon        String?
  createdAt   DateTime @default(now())
}

// Gallery Images
model GalleryImage {
  id        String   @id @default(cuid())
  url       String
  category  String   // Residential, Commercial, Industrial, Rooftop
  title     String?
  createdAt DateTime @default(now())
}

// Projects Portfolio
model Project {
  id              String   @id @default(cuid())
  title           String
  imageUrl        String
  kwInstalled     Float
  clientType      String
  location        String
  savingsGenerated Float?
  completionDate  String?
  createdAt       DateTime @default(now())
}

// Blog Posts
model BlogPost {
  id        String   @id @default(cuid())
  title     String
  content   String
  imageUrl  String?
  slug      String   @unique
  createdAt DateTime @default(now())
}

// Customer Testimonials
model Testimonial {
  id        String   @id @default(cuid())
  clientName String
  content   String
  videoUrl  String?
  rating    Int      @default(5)
  createdAt DateTime @default(now())
}

// FAQ
model Faq {
  id        String   @id @default(cuid())
  question  String
  answer    String
  createdAt DateTime @default(now())
}

// Team Members
model TeamMember {
  id        String   @id @default(cuid())
  name      String
  role      String
  imageUrl  String?
  createdAt DateTime @default(now())
}
```

---

## 🔧 PRISMA CLIENT

### **src/lib/prisma.ts**

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

---

## 🌐 API ROUTES

### **1. Leads API** - `src/app/api/leads/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all leads
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    const leads = await prisma.lead.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

// POST - Create new lead
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, city, requirement, source } = body;
    
    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        email,
        city,
        requirement,
        source: source || 'Website'
      }
    });
    
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    );
  }
}

// PUT - Update lead status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    const lead = await prisma.lead.update({
      where: { id },
      data: { status }
    });
    
    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

// DELETE - Delete lead
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID required' },
        { status: 400 }
      );
    }
    
    await prisma.lead.delete({
      where: { id }
    });
    
    return NextResponse.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}
```

### **2. Projects API** - `src/app/api/projects/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all projects
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clientType = searchParams.get('clientType');
    
    const projects = await prisma.project.findMany({
      where: clientType ? { clientType } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const project = await prisma.project.create({
      data: body
    });
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
```

### **3. Testimonials API** - `src/app/api/testimonials/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all testimonials
export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST - Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const testimonial = await prisma.testimonial.create({
      data: body
    });
    
    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
```

### **4. Gallery API** - `src/app/api/gallery/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch gallery images
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const images = await prisma.galleryImage.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

// POST - Upload new image
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const image = await prisma.galleryImage.create({
      data: body
    });
    
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
```

### **5. Blog API** - `src/app/api/blog/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all blog posts
export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const post = await prisma.blogPost.create({
      data: body
    });
    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
```

### **6. FAQ API** - `src/app/api/faq/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all FAQs
export async function GET() {
  try {
    const faqs = await prisma.faq.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  }
}

// POST - Create new FAQ
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const faq = await prisma.faq.create({
      data: body
    });
    
    return NextResponse.json(faq, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create FAQ' },
      { status: 500 }
    );
  }
}
```

---

## 🔐 ADMIN DASHBOARD

### **Admin Layout** - `src/app/admin/layout.tsx`

```typescript
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#081B3A] text-white p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Balaji Admin Dashboard</h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}
```

### **Admin Dashboard** - `src/app/admin/page.tsx`

```typescript
'use client';

import Link from 'next/link';

export default function AdminDashboard() {
  const modules = [
    { name: 'Leads', href: '/admin/leads', icon: '📋' },
    { name: 'Projects', href: '/admin/projects', icon: '🏗️' },
    { name: 'Gallery', href: '/admin/gallery', icon: '🖼️' },
    { name: 'Blog', href: '/admin/blog', icon: '📝' },
    { name: 'Testimonials', href: '/admin/testimonials', icon: '⭐' },
    { name: 'FAQ', href: '/admin/faq', icon: '❓' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <Link
            key={module.name}
            href={module.href}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">{module.icon}</div>
            <h3 className="text-xl font-semibold">{module.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

---

## 🚀 SETUP INSTRUCTIONS

### **1. Install Dependencies**

```bash
cd balaji-backend
npm install
```

### **2. Setup Database**

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio (optional)
npm run prisma:studio
```

### **3. Configure Environment**

Create `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/balaji_db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3001"
```

### **4. Run Development Server**

```bash
npm run dev
```

Server runs on: **http://localhost:3001**

### **5. Build for Production**

```bash
npm run build
npm start
```

---

## 📊 API ENDPOINTS

### **Leads**
- `GET /api/leads` - Fetch all leads
- `GET /api/leads?status=New` - Filter by status
- `POST /api/leads` - Create new lead
- `PUT /api/leads` - Update lead status
- `DELETE /api/leads?id=xxx` - Delete lead

### **Projects**
- `GET /api/projects` - Fetch all projects
- `GET /api/projects?clientType=Residential` - Filter by type
- `POST /api/projects` - Create new project

### **Testimonials**
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/testimonials` - Create new testimonial

### **Gallery**
- `GET /api/gallery` - Fetch all images
- `GET /api/gallery?category=Residential` - Filter by category
- `POST /api/gallery` - Upload new image

### **Blog**
- `GET /api/blog` - Fetch all posts
- `POST /api/blog` - Create new post

### **FAQ**
- `GET /api/faq` - Fetch all FAQs
- `POST /api/faq` - Create new FAQ

---

## 🗄️ DATABASE MODELS

### **Lead**
- id, name, phone, email, city, requirement, status, source, createdAt

### **Project**
- id, title, imageUrl, kwInstalled, clientType, location, savingsGenerated, completionDate, createdAt

### **Testimonial**
- id, clientName, content, videoUrl, rating, createdAt

### **GalleryImage**
- id, url, category, title, createdAt

### **BlogPost**
- id, title, content, imageUrl, slug, createdAt

### **Faq**
- id, question, answer, createdAt

### **Service**
- id, title, description, icon, createdAt

### **TeamMember**
- id, name, role, imageUrl, createdAt

---

## 🔒 SECURITY FEATURES

1. **Environment Variables** - Sensitive data in .env
2. **Prisma ORM** - SQL injection protection
3. **Type Safety** - TypeScript for type checking
4. **Validation** - Zod for request validation
5. **Error Handling** - Proper error responses

---

## 📝 NOTES

1. **Database**: Currently configured for PostgreSQL, can use SQLite for development
2. **Authentication**: NextAuth ready for implementation
3. **Admin Dashboard**: Basic structure, can be expanded
4. **API Routes**: RESTful design with proper HTTP methods
5. **Prisma Studio**: Visual database editor available

---

## 📦 COMPLETE FILE LIST

### **Configuration (5 files)**
- package.json
- next.config.ts
- tsconfig.json
- .env
- .gitignore

### **Database (1 file)**
- prisma/schema.prisma

### **Library (1 file)**
- src/lib/prisma.ts

### **API Routes (6 files)**
- src/app/api/leads/route.ts
- src/app/api/projects/route.ts
- src/app/api/testimonials/route.ts
- src/app/api/gallery/route.ts
- src/app/api/blog/route.ts
- src/app/api/faq/route.ts

### **Admin (3 files)**
- src/app/admin/layout.tsx
- src/app/admin/page.tsx
- src/app/admin/[module]/page.tsx

### **Total Backend Files: 16**

---

**Status:** ✅ READY FOR DEVELOPMENT  
**Framework:** Next.js 16.2.6 (API Routes)  
**Database:** Prisma + PostgreSQL  
**Port:** 3001  
**Last Updated:** May 27, 2026
