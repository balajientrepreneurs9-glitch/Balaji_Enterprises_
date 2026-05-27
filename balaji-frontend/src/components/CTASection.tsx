'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  dark?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
  dark = false
}: CTASectionProps) {
  return (
    <section className={`py-20 ${dark ? 'bg-primary' : 'bg-gradient-to-br from-primary to-primary-light'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            {secondaryButtonText && secondaryButtonLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  {secondaryButtonText}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
