'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sun, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Home,
  Building2,
  Factory,
  Wrench
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import StatsCard from '@/components/StatsCard';

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Transform your home with clean, renewable energy. Reduce electricity bills and increase property value.',
      features: [
        'Custom system design',
        'Net metering support',
        '25-year warranty',
        'Free maintenance for 5 years'
      ]
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Power your business with sustainable energy solutions. Maximize ROI and demonstrate environmental leadership.',
      features: [
        'Large-scale installations',
        'Tax benefits & incentives',
        'Energy monitoring systems',
        'Flexible financing options'
      ]
    },
    {
      icon: Factory,
      title: 'Industrial Solar',
      description: 'Heavy-duty solar solutions for manufacturing and industrial facilities. Reduce operational costs significantly.',
      features: [
        'High-capacity systems',
        'Load management',
        'Grid integration',
        'Performance guarantees'
      ]
    },
    {
      icon: Wrench,
      title: 'Solar Maintenance',
      description: 'Keep your solar system running at peak efficiency with our comprehensive maintenance services.',
      features: [
        'Regular inspections',
        'Performance optimization',
        'Quick repairs',
        '24/7 support'
      ]
    }
  ];

  const projects = [
    {
      title: 'Green Valley Residential Complex',
      location: 'Mumbai, Maharashtra',
      capacity: '500 kW',
      year: '2024',
      image: '/images/project-1.jpg',
      category: 'Residential'
    },
    {
      title: 'Tech Park Solar Installation',
      location: 'Pune, Maharashtra',
      capacity: '1.2 MW',
      year: '2024',
      image: '/images/project-2.jpg',
      category: 'Commercial'
    },
    {
      title: 'Manufacturing Unit Power Plant',
      location: 'Nashik, Maharashtra',
      capacity: '2.5 MW',
      year: '2023',
      image: '/images/project-3.jpg',
      category: 'Industrial'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      company: 'Mumbai',
      content: 'Balaji Entrepreneurs transformed our home with a seamless solar installation. Our electricity bills have dropped by 80%, and the system works flawlessly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      company: 'Sharma Textiles',
      content: 'The commercial solar solution has been a game-changer for our business. Professional team, quality equipment, and excellent after-sales support. Worth every rupee!',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Factory Manager',
      company: 'Patel Industries',
      content: 'We installed a 2MW system for our factory. The ROI exceeded our expectations, and the maintenance service is top-notch. Best decision we made for our facility.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'How much can I save with solar energy?',
      answer: 'Savings vary based on your energy consumption and system size, but most customers save 70-90% on their electricity bills. With government subsidies and net metering, you can achieve ROI in 3-5 years.'
    },
    {
      question: 'What is the lifespan of solar panels?',
      answer: 'Our premium solar panels come with a 25-year performance warranty and typically last 30+ years. They maintain 80-85% efficiency even after 25 years of operation.'
    },
    {
      question: 'Do solar panels work during cloudy days?',
      answer: 'Yes! Solar panels generate electricity even on cloudy days, though at reduced capacity (10-25% of peak output). Our systems are designed to maximize energy capture in all weather conditions.'
    },
    {
      question: 'What government subsidies are available?',
      answer: 'The Indian government offers subsidies up to 40% for residential installations under 3kW and 20% for systems up to 10kW. We handle all subsidy paperwork and approvals for you.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Residential installations typically take 2-3 days, while commercial projects take 1-2 weeks depending on system size. We ensure minimal disruption to your daily operations.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Industry-leading expertise in solar installations'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Tier-1 solar panels with 25-year warranty'
    },
    {
      icon: Users,
      title: '5000+ Happy Customers',
      description: 'Trusted by homes and businesses across India'
    },
    {
      icon: TrendingUp,
      title: 'Maximum ROI',
      description: 'Optimized systems for fastest payback period'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We analyze your energy needs and site conditions',
      image: '/images/process 1 consultaion.png'
    },
    {
      number: '02',
      title: 'Site Survey',
      description: 'Detailed assessment and custom system design',
      image: '/images/process 2 site visit.png'
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation by certified technicians',
      image: '/images/process 3 installetion.png'
    },
    {
      number: '04',
      title: 'Activation',
      description: 'System testing, grid connection, and handover',
      image: '/images/process 4 activation.png'
    }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-blue-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Solar Energy"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-secondary font-semibold text-lg mb-4 tracking-wide uppercase"
              >
                WELCOME TO BALAJI ENTREPRENEURS
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Empowering Businesses.{' '}
                <span className="text-secondary">Building Tomorrow.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl"
              >
                Transform your energy future with India's leading solar solutions provider. 
                Save up to 90% on electricity bills with premium solar installations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-secondary/50 hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all border-2 border-white/30"
                >
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatsCard number={5000} suffix="+" label="Happy Customers" delay={1} />
              <StatsCard number={50} suffix="MW+" label="Installed Capacity" delay={1.1} />
              <StatsCard number={15} suffix="+" label="Years Experience" delay={1.2} />
              <StatsCard number={98} suffix="%" label="Customer Satisfaction" delay={1.3} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">India's Most Trusted Solar Partner</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine cutting-edge technology with unmatched expertise to deliver solar solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Comprehensive Solar Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From residential rooftops to large-scale industrial installations, we provide end-to-end solar energy solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple 4-Step Installation Process</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              From consultation to activation, we make going solar effortless and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/15 transition-all group">
                  <div className="text-6xl font-bold text-secondary/30 mb-4">
                    {step.number}
                  </div>
                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-200">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Powering India's Future</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} delay={index * 0.1} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Don't just take our word for it. Hear from thousands of satisfied customers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get answers to common questions about solar energy and our services.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Go Solar?"
        description="Join thousands of satisfied customers who have made the switch to clean, renewable energy. Get a free consultation and quote today!"
        primaryButtonText="Get Free Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Us Now"
        secondaryButtonLink="tel:+919876543210"
      />
    </main>
  );
}
