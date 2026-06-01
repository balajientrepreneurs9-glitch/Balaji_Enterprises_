'use client';

import { motion } from 'framer-motion';

interface FilterButtonsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterButtons({ categories, activeCategory, onCategoryChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onCategoryChange(category)}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-[#F4B400] text-[#081B3A] shadow-lg scale-105'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
