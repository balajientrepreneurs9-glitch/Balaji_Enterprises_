import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Balaji Entrepreneurs - Solar Energy Experts',
  description: 'Learn about Balaji Entrepreneurs, your trusted partner in solar energy solutions. Expert installation, maintenance, and consultation services.',
  openGraph: {
    title: 'About Balaji Entrepreneurs - Solar Energy Experts',
    description: 'Leading solar energy solutions provider with expertise in residential, commercial, and industrial installations.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Balaji Entrepreneurs</h1>
          <p className="text-xl text-gray-300">Powering a sustainable future with solar energy</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-[#081B3A] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Balaji Entrepreneurs was founded with a vision to make clean, renewable solar energy accessible to everyone. 
                We believe in creating a sustainable future by harnessing the power of the sun.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With years of experience in the solar industry, we have successfully completed numerous residential, 
                commercial, and industrial solar installations across the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in solar energy solutions.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about site.png"
                alt="Solar installation site"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#081B3A] to-[#163060] text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To provide reliable, efficient, and affordable solar energy solutions that empower individuals and 
                businesses to reduce their carbon footprint while achieving energy independence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F4B400] to-[#D49A00] text-[#081B3A] p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be the leading solar energy provider, driving the transition to renewable energy and creating 
                a sustainable future for generations to come.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#081B3A] mb-8 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Expert Installation</h3>
                <p className="text-gray-600">
                  Professional installation by certified technicians ensuring optimal performance and safety.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Premium quality solar panels and equipment with comprehensive warranties and support.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Cost Savings</h3>
                <p className="text-gray-600">
                  Significant reduction in electricity bills with quick ROI and long-term savings.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Maintenance Support</h3>
                <p className="text-gray-600">
                  Regular maintenance and 24/7 support to ensure your system runs efficiently.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint and contribute to a cleaner, greener environment.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-[#081B3A] mb-3">Custom Solutions</h3>
                <p className="text-gray-600">
                  Tailored solar solutions designed to meet your specific energy needs and budget.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-4xl font-bold text-[#081B3A] mb-8 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Residential Solar Systems</h4>
                  <p className="text-gray-600">Complete home solar solutions with battery backup options</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Commercial Installations</h4>
                  <p className="text-gray-600">Large-scale solar systems for businesses and offices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Industrial Solutions</h4>
                  <p className="text-gray-600">High-capacity solar power plants for industrial facilities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Rooftop Systems</h4>
                  <p className="text-gray-600">Efficient rooftop solar installations maximizing space utilization</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Solar Consultation</h4>
                  <p className="text-gray-600">Expert guidance on system design and energy optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#F4B400] text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-[#081B3A] mb-2">Maintenance Services</h4>
                  <p className="text-gray-600">Regular servicing and performance monitoring</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white rounded-lg p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied customers who have made the switch to clean energy
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F4B400] text-[#081B3A] px-8 py-3 rounded-lg font-semibold hover:bg-[#D49A00] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/calculator"
                className="bg-white text-[#081B3A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Calculate Savings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
