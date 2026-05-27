'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@balajientrepreneurs.com', 'support@balajientrepreneurs.com'],
      link: 'mailto:info@balajientrepreneurs.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Solar Street, Green Park', 'Mumbai, Maharashtra 400001'],
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      link: null
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you respond to my inquiry?',
      answer: 'We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly at +91 98765 43210.'
    },
    {
      question: 'Do you provide free site surveys?',
      answer: 'Yes! We offer completely free site surveys and consultations. Our experts will visit your location, assess your requirements, and provide a detailed proposal at no cost.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Maharashtra and surrounding states. However, for large commercial and industrial projects, we can work across India. Contact us to discuss your location.'
    },
    {
      question: 'Can I get a quote over the phone?',
      answer: 'We can provide a rough estimate over the phone, but for an accurate quote, we recommend a site survey. This ensures we design the optimal system for your specific needs.'
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, link: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const reasons = [
    {
      icon: CheckCircle,
      title: 'Free Consultation',
      description: 'No-obligation discussion about your solar needs'
    },
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: '15+ years of industry experience'
    },
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Tailored systems for your specific requirements'
    },
    {
      icon: CheckCircle,
      title: 'Quick Response',
      description: 'We respond within 24 hours'
    }
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-blue-900 to-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Contact Us"
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
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Let's Start Your <span className="text-secondary">Solar Journey</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Have questions? Need a quote? Our solar experts are here to help you 
              make the switch to clean energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-2xl flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-200 text-sm">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-secondary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Send a Message</p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Get a Free Quote
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours 
                  with a customized solar solution for your needs.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <ContactForm />
              </div>
            </motion.div>

            {/* Why Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <p className="text-secondary font-semibold uppercase tracking-wider mb-3">Why Contact Us</p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  What You'll Get
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  When you reach out to us, you're taking the first step towards energy independence.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex-shrink-0">
                      <reason.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="relative h-80 bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-secondary" />
                    <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                    <p className="text-gray-200 mb-4">123 Solar Street, Green Park<br />Mumbai, Maharashtra 400001</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary hover:bg-yellow-500 text-primary px-6 py-3 rounded-full font-semibold transition-all"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4 font-semibold">Follow Us On Social Media</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary hover:bg-secondary text-white hover:text-primary rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Common Questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quick answers to questions you may have about contacting us.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Phone className="w-16 h-16 mx-auto mb-6 text-secondary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                For urgent solar system issues or emergency support, call us directly.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-yellow-500 text-primary px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-secondary/50 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                +91 98765 43210
              </a>
              <p className="mt-6 text-gray-300">Available 24/7 for existing customers</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
