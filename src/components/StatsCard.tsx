'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatsCardProps {
  number: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCard({ number, suffix = '+', label, delay = 0 }: StatsCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="w-full bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#F4B400] mb-2">
        {count}{suffix}
      </div>
      <div className="text-[#081B3A] text-lg font-medium">
        {label}
      </div>
    </motion.div>
  );
}
