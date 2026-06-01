'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="w-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100 hover:-translate-y-2"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-[#F4B400]" fill="currentColor" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4 relative z-10">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-[#F4B400] fill-[#F4B400]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic relative z-10">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4B400] to-[#D49A00] flex items-center justify-center text-[#081B3A] font-bold text-lg shadow-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-[#081B3A]">{name}</h4>
          <p className="text-sm text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
