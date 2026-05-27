'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, TrendingUp, Search, ArrowRight, Mail } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import FilterButtons from '@/components/FilterButtons';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Solar Technology', 'Energy Savings', 'Installation Tips', 'Industry News', 'Case Studies'];

  const blogPosts = [
    {
      title: 'Complete Guide to Residential Solar Installation in 2024',
      excerpt: 'Everything you need to know about installing solar panels on your home, from planning to activation. Learn about costs, subsidies, and ROI.',
      image: '/images/project-1.jpg',
      category: 'Installation Tips',
      date: 'May 20, 2024',
      readTime: '8 min read',
      author: 'Rajesh Kumar',
      slug: 'residential-solar-guide-2024'
    },
    {
      title: 'How Solar Energy Can Reduce Your Electricity Bills by 90%',
      excerpt: 'Real-world case studies showing how homeowners and businesses are saving thousands on electricity with solar power.',
      image: '/images/project-2.jpg',
      category: 'Energy Savings',
      date: 'May 18, 2024',
      readTime: '6 min read',
      author: 'Priya Sharma',
      slug: 'reduce-electricity-bills-solar'
    },
    {
      title: 'Latest Solar Panel Technology: Bifacial and PERC Modules',
      excerpt: 'Discover the cutting-edge solar panel technologies that are revolutionizing energy efficiency and power generation.',
      image: '/images/project-3.jpg',
      category: 'Solar Technology',
      date: 'May 15, 2024',
      readTime: '10 min read',
      author: 'Amit Patel',
      slug: 'latest-solar-panel-technology'
    },
    {
      title: 'Government Solar Subsidies in India: Complete Guide 2024',
      excerpt: 'Navigate the complex world of solar subsidies, tax benefits, and incentives available for residential and commercial installations.',
      image: '/images/project-4.jpg',
      category: 'Industry News',
      date: 'May 12, 2024',
      readTime: '7 min read',
      author: 'Neha Desai',
      slug: 'government-solar-subsidies-2024'
    },
    {
      title: 'Case Study: 500kW Solar Installation for Residential Complex',
      excerpt: 'How we helped Green Valley Complex save ₹45 lakhs annually with a comprehensive solar solution.',
      image: '/images/project showcase 1.png',
      category: 'Case Studies',
      date: 'May 10, 2024',
      readTime: '5 min read',
      author: 'Rajesh Kumar',
      slug: 'green-valley-case-study'
    },
    {
      title: 'Solar Panel Maintenance: Best Practices for Maximum Efficiency',
      excerpt: 'Learn how to maintain your solar panels for optimal performance and longevity. Simple tips that make a big difference.',
      image: '/images/sevice maintainence.png',
      category: 'Installation Tips',
      date: 'May 8, 2024',
      readTime: '6 min read',
      author: 'Vikram Singh',
      slug: 'solar-panel-maintenance-tips'
    },
    {
      title: 'Commercial Solar: ROI Analysis and Business Benefits',
      excerpt: 'Why businesses are switching to solar energy and how it impacts their bottom line. Real numbers and projections.',
      image: '/images/project-5.jpg',
      category: 'Energy Savings',
      date: 'May 5, 2024',
      readTime: '9 min read',
      author: 'Priya Sharma',
      slug: 'commercial-solar-roi-analysis'
    },
    {
      title: 'Net Metering Explained: Sell Excess Solar Power Back to Grid',
      excerpt: 'Understanding net metering policies in India and how you can earn money from your solar installation.',
      image: '/images/project-6.jpg',
      category: 'Industry News',
      date: 'May 3, 2024',
      readTime: '7 min read',
      author: 'Amit Patel',
      slug: 'net-metering-explained'
    },
    {
      title: 'Industrial Solar Solutions: Powering Manufacturing Facilities',
      excerpt: 'How large-scale solar installations are transforming the industrial sector with clean, cost-effective energy.',
      image: '/images/project showcase 3.png',
      category: 'Case Studies',
      date: 'May 1, 2024',
      readTime: '8 min read',
      author: 'Neha Desai',
      slug: 'industrial-solar-solutions'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  const popularPosts = [
    { title: 'Top 10 Solar Myths Debunked', views: '12.5K' },
    { title: 'Solar Battery Storage Guide', views: '10.2K' },
    { title: 'Choosing the Right Solar Installer', views: '9.8K' },
    { title: 'Solar Panel Warranty Explained', views: '8.5K' }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Blog"
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
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <p className="text-secondary font-semibold text-lg mb-4 tracking-wide uppercase">
              Our Blog
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Solar Energy <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Expert advice, industry news, and practical tips to help you make the most of solar energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Featured Article</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Latest from Our Experts</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-96 lg:h-full">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {featuredPost.category}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
                <span>•</span>
                <span>{featuredPost.author}</span>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-secondary focus:outline-none text-lg"
              />
            </div>
          </div>

          <div className="mb-12">
            <FilterButtons
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Blog Grid with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <BlogCard key={post.slug} {...post} delay={index * 0.1} />
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white"
              >
                <Mail className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-2xl font-bold mb-3">Subscribe to Newsletter</h3>
                <p className="text-gray-200 mb-6">
                  Get the latest solar energy insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-full mb-3 text-gray-900 focus:outline-none"
                />
                <button className="w-full bg-secondary hover:bg-yellow-500 text-primary px-6 py-3 rounded-full font-bold transition-all">
                  Subscribe
                </button>
              </motion.div>

              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-bold text-primary">Popular Posts</h3>
                </div>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary hover:text-secondary transition-colors cursor-pointer mb-1">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-600">{post.views} views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.slice(1).map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        activeCategory === category
                          ? 'bg-secondary text-primary font-semibold'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
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
              Stop reading about it and start experiencing the benefits of solar energy.
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
