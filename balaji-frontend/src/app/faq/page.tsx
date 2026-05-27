"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingFeatures from '@/components/FloatingFeatures';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    { q: "What is the lifespan of a solar panel system?", a: "Most tier-1 solar panels come with a 25-year performance warranty, but they can continue to generate electricity for 30-40 years with proper maintenance." },
    { q: "How much can I save with a solar system?", a: "Savings depend on your current electricity bill and the size of the system. Typically, residential customers can reduce their bills by up to 90%." },
    { q: "Are there any government subsidies available?", a: "Yes! The Indian government offers subsidies for residential rooftop solar installations. Our team assists you with the complete documentation and approval process." },
    { q: "What happens during a power outage?", a: "If you have a grid-tied system without batteries, it will shut down during an outage for safety reasons. If you need backup, we recommend hybrid systems with battery storage." },
    { q: "Do solar panels require a lot of maintenance?", a: "Solar panels require very little maintenance. Regular cleaning to remove dust and debris is usually enough. We also offer comprehensive AMC plans." }
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <div style={{ padding: '5rem 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white', fontSize: '3rem' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>Find answers to common questions about solar energy.</p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card" style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => setOpen(open === i ? null : i)}>
              <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', margin: 0, color: open === i ? 'var(--secondary)' : 'var(--primary)' }}>{faq.q}</h3>
                {open === i ? <ChevronUp /> : <ChevronDown />}
              </div>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-muted)' }}>
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FloatingFeatures />
      <Footer />
    </>
  );
}
