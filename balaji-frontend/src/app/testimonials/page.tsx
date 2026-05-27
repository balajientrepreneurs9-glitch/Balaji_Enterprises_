import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingFeatures from '@/components/FloatingFeatures';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Rahul Sharma", role: "Homeowner", content: "Balaji Entrepreneurs installed a 5kW system at my home. The installation was seamless, and my electricity bill has literally dropped to zero. Highly recommended!", rating: 5 },
    { name: "Priya Patel", role: "CEO, Tech Innovators", content: "We went with Balaji for our 50kW commercial solar setup. Their team is extremely professional and the ROI projections were spot on. Great job!", rating: 5 },
    { name: "Vikram Singh", role: "Factory Manager", content: "Our 500kW industrial project was completed on time despite several challenges. The technical expertise of their team is unmatched in the industry.", rating: 5 },
    { name: "Anjali Gupta", role: "Resident", content: "I appreciate their transparency and customer service. They helped me get the government subsidy without any hassle.", rating: 4 },
    { name: "Suresh Kumar", role: "Business Owner", content: "The electrical AMC service they provide for our manufacturing unit has reduced our downtime significantly. Very reliable partner.", rating: 5 }
  ];

  return (
    <>
      <Navbar />
      <div style={{ padding: '5rem 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container text-center">
          <h1 style={{ color: 'white', fontSize: '3rem' }}>Client Testimonials</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>Don't just take our word for it. Hear what our clients have to say.</p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container">
          <div className="grid grid-cols-3">
            {testimonials.map((test, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(test.rating)].map((_, j) => <Star key={j} size={18} fill="var(--secondary)" color="var(--secondary)" />)}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>"{test.content}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{test.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingFeatures />
      <Footer />
    </>
  );
}
