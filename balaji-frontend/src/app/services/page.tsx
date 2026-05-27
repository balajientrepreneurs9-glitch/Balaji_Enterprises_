'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home,
  Building2,
  Factory,
  Wrench,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Award,
  Sun,
  Battery,
  Settings,
  HeartHandshake
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Transform your home with clean, renewable energy. Reduce electricity bills and increase property value.',
      features: [
        'Custom system design',
        'Net metering support',
        '25-year warranty',
        'Free maintenance for 5 years'
      ],
      image: '/images/service residential.png',
      benefits: [
        'Save 70-90% on electricity bills',
        'Increase home value by 15-20%',
        'Government subsidies up to 40%',
        'Zero maintenance hassle'
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
      ],
      image: '/images/service commercial.png',
      benefits: [
        'Reduce operational costs by 60%',
        'Improve brand reputation',
        'Accelerated depreciation benefits',
        'Energy independence'
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
      ],
      image: '/images/service industrial.png',
      benefits: [
        'Lower production costs',
        'Uninterrupted power supply',
        'Meet sustainability goals',
        'Long-term energy security'
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
      ],
      image: '/images/sevice maintainence.png',
      benefits: [
        'Maximize energy output',
        'Extend system lifespan',
        'Prevent costly breakdowns',
        'Peace of mind'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Battery,
      title: 'Solar Battery Storage',
      description: 'Store excess energy for use during night or power outages. Complete energy independence.'
    },
    {
      icon: Settings,
      title: 'System Upgrades',
      description: 'Upgrade your existing solar system with latest technology for better efficiency.'
    },
    {
      icon: Sun,
      title: 'Solar Water Heaters',
      description: 'Eco-friendly water heating solutions for homes and commercial establishments.'
    },
    {
      icon: Zap,
      title: 'Energy Audits',
      description: 'Comprehensive energy assessment to identify savings opportunities.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'We discuss your energy needs, analyze your electricity bills, and understand your goals.',
      icon: Users
    },
    {
      number: '02',
      title: 'Site Survey & Design',
      description: 'Our engineers visit your location, assess roof/ground space, and create a custom system design.',
      icon: Settings
    },
    {
      number: '03',
      title: 'Proposal & Approval',
      description: 'Receive detailed proposal with costs, savings projections, and ROI analysis. We handle all approvals.',
      icon: CheckCircle
    },
    {
      number: '04',
      title: 'Professional Installation',
      description: 'Certified technicians install your system with minimal disruption. Quality assured at every step.',
      icon: Wrench
    },
    {
      number: '05',
      title: 'Testing & Commissioning',
      description: 'Rigorous testing, grid connection, and system activation. Complete documentation provided.',
      icon: Zap
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Lifetime support, regular maintenance, performance monitoring, and quick issue resolution.',
      icon: HeartHandshake
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Tier-1 solar panels from world-renowned manufacturers with 25-year performance warranty.'
    },
    {
      icon: Shield,
      title: 'Complete Protection',
      description: 'Comprehensive insurance coverage during installation and extended warranty on all components.'
    },
    {
      icon: TrendingUp,
      title: 'Maximum Savings',
      description: 'Optimized system design ensures highest energy generation and fastest return on investment.'
    },
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Residential systems installed in 2-3 days. Minimal disruption to your daily routine.'
    }
  ];

  const faqs = [
    {
      question: 'What size solar system do I need?',
      answer: 'System size depends on your electricity consumption, available space, and budget. For homes, typical systems range from 3kW to 10kW. Our experts will analyze your electricity bills and recommend the optimal size during the free consultation.'
    },
    {
      question: 'How much will I save on electricity bills?',
      answer: 'Most customers save 70-90% on their electricity bills. A 5kW residential system typically generates 20-25 units per day, saving ₹6,000-8,000 monthly. Actual savings depend on your consumption pattern and local electricity rates.'
    },
    {
      question: 'What is the payback period?',
      answer: 'With government subsidies and net metering, residential systems typically pay back in 3-5 years. Commercial systems have 4-6 year payback. After that, you enjoy free electricity for 20+ years.'
    },
    {
      question: 'Do I need to clean solar panels regularly?',
      answer: 'Panels should be cleaned every 2-3 months for optimal performance. Rain naturally cleans panels, but dust accumulation in dry seasons can reduce efficiency by 15-20%. We offer maintenance packages for hassle-free upkeep.'
    },
    {
      question: 'What happens during power cuts?',
      answer: 'Standard grid-tied systems shut down during power cuts for safety. If you need backup power, we recommend adding battery storage or a hybrid inverter system for uninterrupted power supply.'
    },
    {
      question: 'Can I expand my system later?',
      answer: 'Yes! We design systems with future expansion in mind. You can add more panels and upgrade your inverter as your energy needs grow. We provide seamless integration with existing systems.'
    }
  ];

  const comparisonFeatures = [
    { feature: 'System Design', residential: 'Custom', commercial: 'Optimized', industrial: 'Advanced' },
    { feature: 'Installation Time', residential: '2-3 days', commercial: '1-2 weeks', industrial: '2-4 weeks' },
    { feature: 'Warranty', residential: '25 years', commercial: '25 years', industrial: '25 years' },
    { feature: 'Maintenance', residential: '5 years free', commercial: 'Annual contract', industrial: 'Dedicated support' },
    { feature: 'Monitoring', residential: 'Mobile app', commercial: 'Web dashboard', industrial: 'Real-time analytics' },
    { feature: 'Subsidy', residential: 'Up to 40%', commercial: 'Tax benefits', industrial: 'Accelerated depreciation' }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Solar Services"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-semibold text-lg mb-4 tracking-wide uppercase">
              Our Services
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Complete <span className="text-secondary">Solar Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From residential rooftops to large-scale industrial installations, 
              we provide end-to-end solar energy solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-primary">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">More Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Additional Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive solar solutions to meet all your energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How We Work
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A streamlined 6-step process from consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-300"
              >
                <div className="text-6xl font-bold text-secondary/30 mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 mb-4 bg-secondary rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              The Balaji Advantage
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              What sets us apart from other solar companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Compare Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Service Comparison
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Choose the right solar solution for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              <thead className="bg-gradient-to-r from-primary to-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Residential</th>
                  <th className="px-6 py-4 text-center font-bold">Commercial</th>
                  <th className="px-6 py-4 text-center font-bold">Industrial</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-primary">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.residential}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.commercial}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.industrial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Common Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Everything you need to know about our solar services.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Get a free consultation and customized quote for your solar project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
