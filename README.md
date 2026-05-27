# ⚡ Balaji Entrepreneurs - Solar Energy Solutions

<div align="center">

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3.0-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

**A premium, production-ready solar energy company website built with Next.js, TypeScript, and Tailwind CSS**

[Live Demo](#) • [Documentation](#-documentation) • [Features](#-features) • [Getting Started](#-getting-started)

</div>

---

## 🌟 Overview

Balaji Entrepreneurs is a modern, premium solar energy company website featuring a clean design, smooth animations, and full responsiveness. Built with the latest web technologies to provide an exceptional user experience.

### ✨ Design Inspiration
- **Tesla Energy** - Clean, bold, modern
- **Waaree** - Professional, trustworthy
- **SunPower** - Premium, responsive
- **Modern SaaS** - Interactive, engaging

---

## 🎯 Features

### 🎨 Design & UI
- ✅ Premium modern aesthetic
- ✅ Smooth Framer Motion animations
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds
- ✅ Professional typography (Inter font)
- ✅ Consistent spacing and layout
- ✅ Dark mode footer

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet optimized
- ✅ Desktop layouts
- ✅ Large screen support
- ✅ No overflow issues

### 🚀 Performance
- ✅ Fast build times (~3.3s)
- ✅ Next.js Image optimization
- ✅ Lazy loading
- ✅ Efficient animations
- ✅ Clean code structure

### 🎯 Functionality
- ✅ Contact form with validation
- ✅ Image lightbox with keyboard navigation
- ✅ Category filtering (Projects, Gallery, Blog)
- ✅ Search functionality
- ✅ FAQ accordions
- ✅ Animated statistics counters
- ✅ Newsletter signup

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| **Homepage** | `/` | Hero, services, projects, testimonials, FAQ |
| **About** | `/about` | Company story, team, timeline, certifications |
| **Services** | `/services` | Detailed services, process, comparison table |
| **Projects** | `/projects` | Portfolio with filtering and stats |
| **Gallery** | `/gallery` | Image gallery with lightbox |
| **Blog** | `/blog` | Articles with search and categories |
| **Contact** | `/contact` | Contact form and company info |

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.2.6](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/)
- **Images**: Next.js Image optimization

### Backend
- **Framework**: Next.js API Routes
- **Database**: [Prisma](https://www.prisma.io/) + SQLite
- **Admin Panel**: Custom admin dashboard

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/balaji-entrepreneurs.git
cd balaji-entrepreneurs
```

2. **Install dependencies**

**Frontend:**
```bash
cd balaji-frontend
npm install
```

**Backend:**
```bash
cd balaji-backend
npm install
```

3. **Set up environment variables**

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

**Backend** (`.env`):
```env
DATABASE_URL="file:./dev.db"
```

4. **Run database migrations**
```bash
cd balaji-backend
npx prisma generate
npx prisma db push
```

5. **Start development servers**

**Frontend** (Port 3000):
```bash
cd balaji-frontend
npm run dev
```

**Backend** (Port 3001):
```bash
cd balaji-backend
npm run dev
```

6. **Open your browser**
- Frontend: http://localhost:3000
- Backend Admin: http://localhost:3001/admin

---

## 📦 Project Structure

```
balaji-entrepreneurs/
├── balaji-frontend/          # Frontend Next.js application
│   ├── public/
│   │   ├── images/          # 30+ project images
│   │   └── logos/           # Company logos
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── components/      # 14 reusable components
│   │   └── lib/             # Utility functions
│   └── package.json
│
├── balaji-backend/           # Backend API & Admin
│   ├── prisma/              # Database schema
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/         # API routes
│   │   │   └── admin/       # Admin panel
│   │   └── lib/             # Prisma client
│   └── package.json
│
└── Documentation/            # Project documentation
```

---

## 🎨 Design System

### Colors
```css
Primary: #081B3A (Deep Navy Blue)
Secondary: #F4B400 (Solar Yellow)
White: #ffffff
Gray: #f5f5f5
Text: #222222
```

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 4xl-7xl, Bold
- **Body**: lg-xl, Regular

### Components
- **Border Radius**: rounded-2xl to rounded-3xl
- **Shadows**: shadow-lg to shadow-2xl
- **Transitions**: duration-300 to duration-500

---

## 🧩 Components

### Core Components (14)
1. **Navbar** - Premium sticky navigation
2. **Footer** - Dark footer with social links
3. **FloatingFeatures** - Floating action widgets
4. **SectionHeading** - Consistent section headers
5. **ServiceCard** - Service display cards
6. **ProjectCard** - Project showcase cards
7. **TestimonialCard** - Customer testimonials
8. **FAQAccordion** - Interactive FAQ
9. **CTASection** - Call-to-action sections
10. **StatsCard** - Animated statistics
11. **BlogCard** - Blog post cards
12. **FilterButtons** - Category filtering
13. **Lightbox** - Full-screen image viewer
14. **ContactForm** - Form with validation

---

## 📊 Build & Performance

### Build Stats
- **Build Time**: ~3.3 seconds
- **TypeScript**: ~4.4 seconds
- **Errors**: 0
- **Status**: Production Ready

### Performance Metrics
- ✅ Fast page loads
- ✅ Optimized images
- ✅ Lazy loading
- ✅ Efficient animations
- ✅ Clean code

---

## 🚀 Deployment

### Vercel (Recommended)

**Frontend:**
```bash
cd balaji-frontend
vercel
```

**Backend:**
```bash
cd balaji-backend
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Custom server

---

## 📚 Documentation

- **[FINAL_REPORT.md](./FINAL_REPORT.md)** - Complete project report
- **[PREMIUM_FRONTEND_STATUS.md](./PREMIUM_FRONTEND_STATUS.md)** - Detailed status
- **[START_HERE.md](./START_HERE.md)** - Quick reference guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Overview

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Balaji Entrepreneurs Team** - *Initial work*

---

## 🙏 Acknowledgments

- Design inspiration from Tesla Energy, Waaree, and SunPower
- Built with Next.js, Tailwind CSS, and Framer Motion
- Icons from Lucide React and React Icons

---

## 📞 Contact

- **Website**: [www.balajientrepreneurs.com](#)
- **Email**: info@balajientrepreneurs.com
- **Phone**: +91 98765 43210

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Balaji Entrepreneurs

</div>
