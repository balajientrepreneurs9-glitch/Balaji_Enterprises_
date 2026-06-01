# Balaji Entrepreneurs - Solar Energy Solutions

Complete production-ready Next.js application for solar energy business with admin dashboard, lead management, and solar calculator.

## 🚀 Features

### Frontend
- ✅ Responsive homepage with hero section
- ✅ About page with company history
- ✅ Services showcase
- ✅ Project portfolio
- ✅ Testimonials
- ✅ FAQ section
- ✅ Contact form with lead capture
- ✅ Solar calculator with ROI estimation
- ✅ Floating chat widget
- ✅ WhatsApp integration
- ✅ SEO optimized

### Backend & APIs
- ✅ RESTful API routes for all modules
- ✅ Prisma ORM with PostgreSQL
- ✅ Zod validation for all inputs
- ✅ NextAuth authentication
- ✅ Role-based access control
- ✅ Lead management system
- ✅ Project CRUD operations
- ✅ Blog management
- ✅ Gallery management
- ✅ FAQ management
- ✅ Team management
- ✅ Solar calculator API

### Admin Dashboard
- ✅ Secure authentication
- ✅ Dashboard analytics
- ✅ Lead management
- ✅ Project management
- ✅ Content management
- ✅ User management

## 📦 Tech Stack

- **Framework**: Next.js 15.1.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma 5.22.0
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Forms**: React Hook Form

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (Neon recommended)
- npm or yarn package manager

### Step 1: Clone and Install

```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate
```

### Step 2: Environment Variables

Create or update `.env` file with your credentials:

```env
# Database - IMPORTANT: Update with your valid Neon database URL
DATABASE_URL="postgresql://USER:PASSWORD@HOST/DATABASE?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-minimum-32-characters-long"
NEXTAUTH_URL="http://localhost:3000"

# Admin Credentials
ADMIN_EMAIL="admin@balajientrepreneurs.com"
ADMIN_PASSWORD="your-secure-password"
```

**⚠️ DATABASE SETUP REQUIRED:**

The provided database URL appears to be invalid or inaccessible. You need to:

1. Create a new Neon database at https://neon.tech
2. Copy the connection string
3. Update `DATABASE_URL` in `.env`
4. Run database migrations

### Step 3: Database Setup

```bash
# Push schema to database
npx prisma db push

# Seed demo data (optional)
npm run prisma:seed

# Or create migration
npx prisma migrate dev --name init
```

### Step 4: Create Admin User

Run this script to create an admin user:

```bash
node scripts/create-admin.js
```

Or manually in Prisma Studio:

```bash
npx prisma studio
```

### Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
balaji-entrepreneurs/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Seed data
├── public/
│   ├── images/                # Project images
│   └── logos/                 # Brand logos
├── src/
│   ├── app/
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # NextAuth
│   │   │   ├── leads/         # Lead management
│   │   │   ├── projects/      # Projects CRUD
│   │   │   ├── blog/          # Blog posts
│   │   │   ├── calculator/    # Solar calculator
│   │   │   └── ...
│   │   ├── admin/             # Admin dashboard
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ...
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client
│   │   ├── auth.ts            # Auth utilities
│   │   └── validations.ts     # Zod schemas
│   └── middleware.ts          # Route protection
├── .env                       # Environment variables
├── .env.example               # Example env file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🔌 API Endpoints

### Public APIs

```
GET  /api/projects?category=Residential&page=1&limit=12
GET  /api/testimonials?featured=true&limit=10
GET  /api/blog?category=Solar&page=1
GET  /api/faq?category=General
GET  /api/services
GET  /api/gallery?category=Residential
POST /api/leads              # Create lead
POST /api/calculator         # Calculate solar ROI
```

### Protected APIs (Admin Only)

```
POST   /api/projects         # Create project
PUT    /api/projects/:id     # Update project
DELETE /api/projects/:id     # Delete project
POST   /api/blog             # Create blog post
POST   /api/testimonials     # Create testimonial
```

## 🔐 Authentication

### Admin Login

Navigate to `/admin/login` and use credentials from `.env`:

```
Email: admin@balajientrepreneurs.com
Password: (from ADMIN_PASSWORD in .env)
```

### Protected Routes

All `/admin/*` routes are protected and require authentication.

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Database Schema

### Main Models

- **User**: Admin users with authentication
- **Lead**: Contact form submissions and inquiries
- **Project**: Solar installation projects
- **Testimonial**: Customer reviews
- **Blog**: Blog posts and articles
- **Gallery**: Project images
- **FAQ**: Frequently asked questions
- **Service**: Service offerings
- **Team**: Team members
- **Calculation**: Solar calculator results

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://yourdomain.com"
```

## 🔧 Configuration

### Tailwind Colors

Primary: `#081B3A` (Navy Blue)
Secondary: `#F4B400` (Golden Yellow)

### Image Optimization

Images are optimized using Next.js Image component. Add domains to `next.config.ts`:

```typescript
images: {
  domains: ['your-cdn-domain.com'],
}
```

## 📝 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "prisma:generate": "prisma generate",
  "prisma:push": "prisma db push",
  "prisma:seed": "tsx prisma/seed.ts",
  "prisma:studio": "prisma studio"
}
```

## 🐛 Troubleshooting

### Database Connection Issues

If you see `P1000: Authentication failed`:

1. Verify DATABASE_URL is correct
2. Check database is accessible
3. Ensure SSL mode is set correctly
4. Try creating a new Neon database

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Prisma Issues

```bash
# Regenerate Prisma Client
npx prisma generate

# Reset database (⚠️ deletes all data)
npx prisma migrate reset
```

## 📞 Support

For issues or questions:
- Email: info@balajientrepreneurs.com
- Phone: +91 98765 43210

## 📄 License

Copyright © 2024 Balaji Entrepreneurs. All rights reserved.

---

**Built with ❤️ for a sustainable future**
