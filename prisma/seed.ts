import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@balajientrepreneurs.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@balajientrepreneurs.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    },
  });

  console.log('✅ Admin user created:', admin.email);

  // Seed Services
  const services = [
    {
      title: 'Residential Solar',
      description: 'Transform your home with clean, renewable energy. Reduce electricity bills and increase property value.',
      features: ['Custom system design', 'Net metering support', '25-year warranty', 'Free maintenance for 5 years'],
      order: 1,
    },
    {
      title: 'Commercial Solar',
      description: 'Power your business with sustainable energy solutions. Maximize ROI and demonstrate environmental leadership.',
      features: ['Large-scale installations', 'Tax benefits & incentives', 'Energy monitoring systems', 'Flexible financing options'],
      order: 2,
    },
    {
      title: 'Industrial Solar',
      description: 'Heavy-duty solar solutions for manufacturing and industrial facilities. Reduce operational costs significantly.',
      features: ['High-capacity systems', 'Load management', 'Grid integration', 'Performance guarantees'],
      order: 3,
    },
    {
      title: 'Solar Maintenance',
      description: 'Keep your solar system running at peak efficiency with our comprehensive maintenance services.',
      features: ['Regular inspections', 'Performance optimization', 'Quick repairs', '24/7 support'],
      order: 4,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.title },
      update: {},
      create: service as any,
    });
  }

  console.log('✅ Services seeded');

  // Seed FAQs
  const faqs = [
    {
      question: 'How much can I save with solar energy?',
      answer: 'Savings vary based on your energy consumption and system size, but most customers save 70-90% on their electricity bills. With government subsidies and net metering, you can achieve ROI in 3-5 years.',
      category: 'Savings',
      order: 1,
    },
    {
      question: 'What is the lifespan of solar panels?',
      answer: 'Our premium solar panels come with a 25-year performance warranty and typically last 30+ years. They maintain 80-85% efficiency even after 25 years of operation.',
      category: 'Technical',
      order: 2,
    },
    {
      question: 'Do solar panels work during cloudy days?',
      answer: 'Yes! Solar panels generate electricity even on cloudy days, though at reduced capacity (10-25% of peak output). Our systems are designed to maximize energy capture in all weather conditions.',
      category: 'Technical',
      order: 3,
    },
    {
      question: 'What government subsidies are available?',
      answer: 'The Indian government offers subsidies up to 40% for residential installations under 3kW and 20% for systems up to 10kW. We handle all subsidy paperwork and approvals for you.',
      category: 'Financial',
      order: 4,
    },
    {
      question: 'How long does installation take?',
      answer: 'Residential installations typically take 2-3 days, while commercial projects take 1-2 weeks depending on system size. We ensure minimal disruption to your daily operations.',
      category: 'Installation',
      order: 5,
    },
  ];

  for (const faq of faqs) {
    await prisma.faq.create({
      data: faq,
    });
  }

  console.log('✅ FAQs seeded');

  // Seed Testimonials
  const testimonials = [
    {
      clientName: 'Rajesh Kumar',
      role: 'Homeowner',
      company: 'Lucknow',
      content: 'Balaji Entrepreneurs transformed our home with a seamless solar installation. Our electricity bills have dropped by 80%, and the system works flawlessly. Highly recommended!',
      rating: 5,
      featured: true,
    },
    {
      clientName: 'Priya Sharma',
      role: 'Business Owner',
      company: 'Sharma Textiles',
      content: 'The commercial solar solution has been a game-changer for our business. Professional team, quality equipment, and excellent after-sales support. Worth every rupee!',
      rating: 5,
      featured: true,
    },
    {
      clientName: 'Amit Patel',
      role: 'Factory Manager',
      company: 'Patel Industries',
      content: 'We installed a 2MW system for our factory. The ROI exceeded our expectations, and the maintenance service is top-notch. Best decision we made for our facility.',
      rating: 5,
      featured: true,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }

  console.log('✅ Testimonials seeded');

  // Seed Projects
  const projects = [
    {
      title: 'Green Valley Residential Complex',
      description: 'Complete solar installation for 50+ residential units',
      imageUrl: '/images/project-1.jpg',
      kwInstalled: 500,
      clientType: 'Residential',
      location: 'Lucknow, Uttar Pradesh',
      savingsGenerated: 75000,
      completionDate: '2024',
      featured: true,
    },
    {
      title: 'Tech Park Solar Installation',
      description: 'Large-scale commercial solar project',
      imageUrl: '/images/project-2.jpg',
      kwInstalled: 1200,
      clientType: 'Commercial',
      location: 'Kanpur, Uttar Pradesh',
      savingsGenerated: 180000,
      completionDate: '2024',
      featured: true,
    },
    {
      title: 'Manufacturing Unit Power Plant',
      description: 'Industrial solar power plant',
      imageUrl: '/images/project-3.jpg',
      kwInstalled: 2500,
      clientType: 'Industrial',
      location: 'Varanasi, Uttar Pradesh',
      savingsGenerated: 375000,
      completionDate: '2023',
      featured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log('✅ Projects seeded');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
