'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Zap, 
  Calendar,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import FilterButtons from '@/components/FilterButtons';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const allProjects = [
    {
      title: 'Green Valley Residential Complex',
      location: 'Lucknow, Uttar Pradesh',
      capacity: '500 kW',
      year: '2024',
      image: '/images/project-1.jpg',
      category: 'Residential',
      description: 'Complete solar solution for 150 residential units with net metering.',
      savings: '₹45L annually',
      co2Reduction: '450 tons/year'
    },
    {
      title: 'Tech Park Solar Installation',
      location: 'Kanpur, Uttar Pradesh',
      capacity: '1.2 MW',
      year: '2024',
      image: '/images/project-2.jpg',
      category: 'Commercial',
      description: 'Large-scale rooftop installation for IT park with 24/7 monitoring.',
      savings: '₹1.2Cr annually',
      co2Reduction: '1200 tons/year'
    },
    {
      title: 'Manufacturing Unit Power Plant',
      location: 'Varanasi, Uttar Pradesh',
      capacity: '2.5 MW',
      year: '2023',
      image: '/images/project-3.jpg',
      category: 'Industrial',
      description: 'Ground-mounted solar farm for heavy manufacturing facility.',
      savings: '₹2.8Cr annually',
      co2Reduction: '2500 tons/year'
    },
    {
      title: 'Luxury Villa Solar System',
      location: 'Prayagraj, Uttar Pradesh',
      capacity: '15 kW',
      year: '2024',
      image: '/images/project-4.jpg',
      category: 'Residential',
      description: 'Premium solar installation with battery backup for luxury villa.',
      savings: '₹2.5L annually',
      co2Reduction: '15 tons/year'
    },
    {
      title: 'Shopping Mall Energy Solution',
      location: 'Agra, Uttar Pradesh',
      capacity: '800 kW',
      year: '2023',
      image: '/images/project-5.jpg',
      category: 'Commercial',
      description: 'Integrated solar solution for multi-level shopping complex.',
      savings: '₹85L annually',
      co2Reduction: '800 tons/year'
    },
    {
      title: 'Textile Factory Solar Plant',
      location: 'Meerut, Uttar Pradesh',
      capacity: '1.8 MW',
      year: '2023',
      image: '/images/project-6.jpg',
      category: 'Industrial',
      description: 'High-capacity solar installation for 24/7 textile operations.',
      savings: '₹2Cr annually',
      co2Reduction: '1800 tons/year'
    },
    {
      title: 'Residential Society Project',
      location: 'Gorakhpur, Uttar Pradesh',
      capacity: '350 kW',
      year: '2024',
      image: '/images/project-7.jpg',
      category: 'Residential',
      description: 'Community solar project for 100+ apartments with shared benefits.',
      savings: '₹35L annually',
      co2Reduction: '350 tons/year'
    },
    {
      title: 'Corporate Office Building',
      location: 'Lucknow, Uttar Pradesh',
      capacity: '600 kW',
      year: '2023',
      image: '/images/project-8.jpg',
      category: 'Commercial',
      description: 'Sustainable energy solution for 10-story corporate headquarters.',
      savings: '₹65L annually',
      co2Reduction: '600 tons/year'
    },
    {
      title: 'Pharmaceutical Plant',
      location: 'Bareilly, Uttar Pradesh',
      capacity: '3 MW',
      year: '2022',
      image: '/images/project-9.jpg',
      category: 'Industrial',
      description: 'Large-scale solar farm for pharmaceutical manufacturing unit.',
      savings: '₹3.5Cr annually',
      co2Reduction: '3000 tons/year'
    },
    {
      title: 'Farmhouse Solar Installation',
      location: 'Ayodhya, Uttar Pradesh',
      capacity: '25 kW',
      year: '2024',
      image: '/images/project-10.jpg',
      category: 'Residential',
      description: 'Off-grid solar solution for remote farmhouse with battery storage.',
      savings: '₹3.5L annually',
      co2Reduction: '25 tons/year'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  const stats = [
    { number: '50+', label: 'MW Installed', icon: Zap },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '5000+', label: 'Happy Customers', icon: Users },
    { number: '98%', label: 'Success Rate', icon: TrendingUp }
  ];

  const showcaseProjects = [
    {
      title: 'Award-Winning Installation',
      description: 'Recognized for excellence in solar engineering and design.',
      image: '/images/project showcase 1.png'
    },
    {
      title: 'Largest Residential Project',
      description: '500kW installation serving 150+ families.',
      image: '/images/project showcase 2.png'
    },
    {
      title: 'Industrial Excellence',
      description: '3MW solar farm powering major manufacturing facility.',
      image: '/images/project showcase 3.png'
    },
    {
      title: 'Smart Energy Solution',
      description: 'IoT-enabled monitoring and optimization system.',
      image: '/images/project showcase 4.png'
    }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Our Projects"
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
              Our Projects
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Powering <span className="text-secondary">India's Future</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of 500+ successful solar installations across 
              residential, commercial, and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Showcase Projects
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Highlighting our most impactful and innovative solar installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showcaseProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">All Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Complete Portfolio
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Browse through our diverse range of solar installations.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12">
            <FilterButtons
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-semibold">{project.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Annual Savings</div>
                        <div className="text-lg font-bold text-primary">{project.savings}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">CO₂ Reduction</div>
                        <div className="text-lg font-bold text-primary">{project.co2Reduction}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-primary">{filteredProjects.length}</span> projects
              {activeCategory !== 'All' && (
                <span> in <span className="font-bold text-secondary">{activeCategory}</span> category</span>
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Our Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making a Real Difference
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Every project contributes to a cleaner, more sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-secondary mb-3">50,000+</div>
              <div className="text-xl font-semibold mb-2">Tons of CO₂ Reduced</div>
              <p className="text-gray-200">Equivalent to planting 2.5 million trees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-secondary mb-3">₹500Cr+</div>
              <div className="text-xl font-semibold mb-2">Customer Savings</div>
              <p className="text-gray-200">Total electricity cost savings over 25 years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center"
            >
              <div className="text-5xl font-bold text-secondary mb-3">100%</div>
              <div className="text-xl font-semibold mb-2">Clean Energy</div>
              <p className="text-gray-200">Zero emissions, maximum impact</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
