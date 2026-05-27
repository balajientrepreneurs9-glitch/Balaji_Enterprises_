'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Grid3x3, ArrowRight } from 'lucide-react';
import FilterButtons from '@/components/FilterButtons';
import Lightbox from '@/components/Lightbox';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Installation', 'Completed'];

  const galleryImages = [
    // Residential
    { src: '/images/project-1.jpg', alt: 'Green Valley Residential Complex', category: 'Residential' },
    { src: '/images/project-4.jpg', alt: 'Luxury Villa Solar System', category: 'Residential' },
    { src: '/images/project-7.jpg', alt: 'Residential Society Project', category: 'Residential' },
    { src: '/images/project-10.jpg', alt: 'Farmhouse Solar Installation', category: 'Residential' },
    
    // Commercial
    { src: '/images/project-2.jpg', alt: 'Tech Park Solar Installation', category: 'Commercial' },
    { src: '/images/project-5.jpg', alt: 'Shopping Mall Energy Solution', category: 'Commercial' },
    { src: '/images/project-8.jpg', alt: 'Corporate Office Building', category: 'Commercial' },
    { src: '/images/service commercial.png', alt: 'Commercial Solar Setup', category: 'Commercial' },
    
    // Industrial
    { src: '/images/project-3.jpg', alt: 'Manufacturing Unit Power Plant', category: 'Industrial' },
    { src: '/images/project-6.jpg', alt: 'Textile Factory Solar Plant', category: 'Industrial' },
    { src: '/images/project-9.jpg', alt: 'Pharmaceutical Plant', category: 'Industrial' },
    { src: '/images/service industrial.png', alt: 'Industrial Solar Installation', category: 'Industrial' },
    
    // Installation Process
    { src: '/images/process 1 consultaion.png', alt: 'Initial Consultation', category: 'Installation' },
    { src: '/images/process 2 site visit.png', alt: 'Site Survey', category: 'Installation' },
    { src: '/images/process 3 installetion.png', alt: 'Professional Installation', category: 'Installation' },
    { src: '/images/process 4 activation.png', alt: 'System Activation', category: 'Installation' },
    { src: '/images/about installetion.png', alt: 'Installation Team at Work', category: 'Installation' },
    
    // Completed Projects
    { src: '/images/project showcase 1.png', alt: 'Award-Winning Installation', category: 'Completed' },
    { src: '/images/project showcase 2.png', alt: 'Largest Residential Project', category: 'Completed' },
    { src: '/images/project showcase 3.png', alt: 'Industrial Excellence', category: 'Completed' },
    { src: '/images/project showcase 4.png', alt: 'Smart Energy Solution', category: 'Completed' },
    { src: '/images/about team.png', alt: 'Team with Completed Project', category: 'Completed' },
    { src: '/images/about site.png', alt: 'Site Completion', category: 'Completed' },
    
    // Additional
    { src: '/images/service residential.png', alt: 'Residential Solar Panel Array', category: 'Residential' },
    { src: '/images/sevice maintainence.png', alt: 'Maintenance Service', category: 'Installation' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const stats = [
    { number: '500+', label: 'Projects Photographed' },
    { number: '50MW+', label: 'Capacity Installed' },
    { number: '15+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Customers' }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Gallery"
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
            <Camera className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <p className="text-secondary font-semibold text-lg mb-4 tracking-wide uppercase">
              Our Gallery
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See Our Work <span className="text-secondary">In Action</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Browse through our extensive portfolio of solar installations, from residential 
              rooftops to large-scale industrial projects.
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

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Browse Gallery</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Solar Installations
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Filter by category to see specific types of projects.
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

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <p className="text-xs text-secondary font-semibold mb-1">{image.category}</p>
                    <p className="text-sm font-semibold line-clamp-2">{image.alt}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View
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
              Showing <span className="font-bold text-primary">{filteredImages.length}</span> images
              {activeCategory !== 'All' && (
                <span> in <span className="font-bold text-secondary">{activeCategory}</span> category</span>
              )}
            </p>
          </motion.div>
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
            <Grid3x3 className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want Your Project Featured Here?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to solar energy.
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
                View All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </main>
  );
}
