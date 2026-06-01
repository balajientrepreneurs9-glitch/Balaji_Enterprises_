'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact',
        }),
      });

      if (response.ok) {
        setMessage('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', requirement: '' });
      } else {
        setMessage('Failed to submit. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch for solar solutions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#081B3A] mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-[#081B3A] mb-2">Address</h3>
                  <p className="text-gray-600">Balaji Entrepreneurs<br />Solar Energy Solutions</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#081B3A] mb-2">Phone</h3>
                  <p className="text-gray-600">+91 8882519245</p>
                  <a href="https://wa.me/918882519245?text=Hello%20Balaji%20Entrepreneurs%2C%20I%20am%20interested%20in%20your%20solar%20solutions." 
                     className="text-green-600 hover:text-green-700 text-sm mt-1 inline-block">
                    WhatsApp Us
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#081B3A] mb-2">Email</h3>
                  <p className="text-gray-600">balajientrepreneurs9@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#081B3A] mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#081B3A] mb-6">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#F4B400] text-[#081B3A] font-semibold py-3 rounded-lg hover:bg-[#D49A00] transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  {message && (
                    <p className={`text-center ${message.includes('Thank') ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
