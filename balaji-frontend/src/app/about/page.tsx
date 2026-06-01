'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, 
  Users, 
  Target, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Heart,
  Lightbulb,
  Globe,
  Leaf
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '50MW+', label: 'Installed Capacity' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every installation uses premium Tier-1 components with industry-leading warranties.'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Your satisfaction is our priority. We provide personalized solutions and lifetime support for every customer.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead with cutting-edge solar technology and smart energy management systems.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to reducing carbon footprint and creating a cleaner, greener future for generations.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started with a vision to make solar energy accessible to every Indian household.'
    },
    {
      year: '2012',
      title: '1000+ Installations',
      description: 'Crossed our first major milestone with installations across Uttar Pradesh.'
    },
    {
      year: '2016',
      title: 'Commercial Expansion',
      description: 'Expanded into commercial and industrial solar solutions.'
    },
    {
      year: '2020',
      title: '25MW Milestone',
      description: 'Achieved 25MW installed capacity, powering thousands of homes and businesses.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Awarded "Best Solar EPC Company" by Solar Energy Society of India.'
    },
    {
      year: '2024',
      title: '50MW+ Capacity',
      description: 'Doubled our capacity and expanded operations across multiple states.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'MNRE Approved Vendor',
    'Electrical Safety Certified',
    'Quality Management System',
    'Environmental Management',
    'NABCEP Certified Installers'
  ];

  const team = [
    {
      name: 'Rajesh Balaji',
      role: 'Founder & CEO',
      image: '/images/about team.png',
      description: '15+ years in renewable energy sector'
    },
    {
      name: 'Engineering Team',
      role: 'Technical Experts',
      image: '/images/about site.png',
      description: 'Certified solar installation professionals'
    },
    {
      name: 'Installation Crew',
      role: 'Field Operations',
      image: '/images/about installetion.png',
      description: 'Experienced technicians ensuring quality'
    }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="About Balaji Entrepreneurs"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-secondary font-semibold text-lg mb-4 tracking-wide uppercase">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Pioneering India's <span className="text-secondary">Solar Revolution</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been transforming how India powers its future. 
              From humble beginnings to becoming a trusted name in solar energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, Balaji Entrepreneurs began with a simple yet powerful vision: 
                  to make clean, renewable solar energy accessible and affordable for every Indian.
                </p>
                <p>
                  What started as a small team of passionate engineers has grown into one of 
                  Uttar Pradesh's most trusted solar energy companies, serving over 5,000 satisfied 
                  customers across residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our journey has been marked by unwavering commitment to quality, innovation, 
                  and customer satisfaction. We've installed over 50MW of solar capacity, 
                  helping thousands reduce their carbon footprint while saving significantly 
                  on energy costs.
                </p>
                <p>
                  Today, we stand proud as industry leaders, backed by certifications, awards, 
                  and most importantly, the trust of our customers who recommend us to their 
                  friends and family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about team.png"
                alt="Balaji Entrepreneurs Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-10 text-white"
            >
              <Target className="w-16 h-16 text-secondary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                To accelerate India's transition to renewable energy by providing world-class 
                solar solutions that are reliable, affordable, and sustainable. We aim to 
                empower every home and business with clean energy independence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-yellow-500 rounded-3xl p-10 text-primary"
            >
              <Globe className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-lg">
                To be India's most trusted and innovative solar energy company, leading the 
                nation towards a sustainable future. We envision a world where clean energy 
                is the norm, not the exception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Milestones That Matter
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A timeline of our growth, achievements, and commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-secondary via-yellow-400 to-secondary"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
                      <div className="text-5xl font-bold text-secondary mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-yellow-500 rounded-full flex items-center justify-center shadow-xl">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet The Experts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of certified professionals brings decades of combined experience in solar energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Certifications</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Certified Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our certifications reflect our commitment to quality, safety, and industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-gradient-to-r from-primary to-blue-900 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                <span className="font-semibold text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Let's work together to create a sustainable energy future for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-secondary/50 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all border-2 border-white/30"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
