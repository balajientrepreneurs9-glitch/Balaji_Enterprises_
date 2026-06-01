import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  requirement: z.string().min(5, 'Requirement must be at least 5 characters'),
  source: z.string().optional(),
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'lost']).optional(),
});

export const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters').optional(),
  location: z.string().min(2, 'Location is required'),
  kwInstalled: z.number().min(0, 'KW installed must be positive'),
  clientType: z.string().min(2, 'Client type is required'),
  imageUrl: z.string().url('Invalid image URL'),
  savingsGenerated: z.number().min(0).optional(),
  completionDate: z.string().optional(),
  featured: z.boolean().optional(),
  active: z.boolean().optional(),
});

export const testimonialSchema = z.object({
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role is required').optional(),
  company: z.string().min(2, 'Company is required').optional(),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  videoUrl: z.string().url('Invalid video URL').optional(),
  featured: z.boolean().optional(),
  active: z.boolean().optional(),
});

export const gallerySchema = z.object({
  url: z.string().url('Invalid image URL'),
  category: z.string().min(2, 'Category is required'),
  title: z.string().optional(),
  alt: z.string().optional(),
  active: z.boolean().optional(),
});

export const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().min(3, 'Slug is required'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters').optional(),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  category: z.string().min(2, 'Category is required').optional(),
  imageUrl: z.string().url('Invalid image URL').optional(),
  author: z.string().min(2, 'Author is required').optional(),
  readTime: z.string().optional(),
  published: z.boolean().optional(),
});

export const faqSchema = z.object({
  question: z.string().min(5, 'Question must be at least 5 characters'),
  answer: z.string().min(10, 'Answer must be at least 10 characters'),
  category: z.string().optional(),
  order: z.number().optional(),
  active: z.boolean().optional(),
});

export const serviceSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  order: z.number().optional(),
  active: z.boolean().optional(),
});

export const teamSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(2, 'Role is required'),
  description: z.string().optional(),
  imageUrl: z.string().url('Invalid image URL').optional(),
  email: z.string().email('Invalid email').optional(),
  phone: z.string().optional(),
  order: z.number().optional(),
  active: z.boolean().optional(),
});

export const calculatorSchema = z.object({
  monthlyBill: z.number().min(0, 'Monthly bill must be positive'),
  location: z.string().min(2, 'Location is required').optional(),
  usageType: z.string().min(2, 'Usage type is required').optional(),
  customerName: z.string().optional(),
  customerEmail: z.string().email('Invalid email').optional(),
  customerPhone: z.string().optional(),
});
