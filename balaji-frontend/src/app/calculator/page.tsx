"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingFeatures from '@/components/FloatingFeatures';

export default function CalculatorPage() {
  const [bill, setBill] = useState(5000);
  const [roofType, setRoofType] = useState('Flat');
  const [property, setProperty] = useState('Residential');
  
  // Auto lead capture with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Anonymous User',
          phone: '',
          email: '',
          requirement: `Calculator Try: ${property}, ${roofType}, Bill: ₹${bill}`,
          source: 'Calculator Auto'
        })
      }).catch(() => {});
    }, 2000); // 2 second debounce

    return () => clearTimeout(timer);
  }, [bill, roofType, property]);
  
  // Calculations
  const systemSize = (bill / 1000).toFixed(1); // Rough estimate: 1kW per Rs 1000 bill
  const areaNeeded = (parseFloat(systemSize) * 100).toFixed(0); // ~100 sq ft per kW
  const yearlySavings = (bill * 12 * 0.9).toFixed(0); // Assuming 90% savings
  const costEstimate = (parseFloat(systemSize) * 60000).toFixed(0); // ~60k per kW
  const payback = (parseFloat(costEstimate) / parseFloat(yearlySavings)).toFixed(1);
  const co2 = (parseFloat(systemSize) * 1.5).toFixed(1); // Tons per year

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get('name'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      requirement: `Solar Size: ${systemSize}kW, Bill: ${bill}`,
      source: 'Calculator'
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      alert("Thank you! Your quote request has been received.");
      (e.target as HTMLFormElement).reset();
    } catch(err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '4rem 0', background: 'var(--light-gray)', minHeight: '80vh' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2>Solar Savings Calculator</h2>
            <p style={{ color: 'var(--text-muted)' }}>Find out how much you can save by switching to solar energy.</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>Your Details</h3>
              
              <div className="form-group">
                <label className="form-label">Average Monthly Electricity Bill (₹)</label>
                <input 
                  type="range" 
                  min="1000" max="50000" step="500" 
                  value={bill} 
                  onChange={e => setBill(Number(e.target.value))} 
                  style={{ width: '100%', marginBottom: '1rem' }} 
                />
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)', textAlign: 'center' }}>₹{bill.toLocaleString()}</div>
              </div>

              <div className="form-group">
                <label className="form-label">Property Type</label>
                <select className="form-control" value={property} onChange={e => setProperty(e.target.value)}>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Roof Type</label>
                <select className="form-control" value={roofType} onChange={e => setRoofType(e.target.value)}>
                  <option>Flat RCC</option>
                  <option>Sloped Tin Shed</option>
                  <option>Sloped RCC</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ padding: '2rem', background: 'var(--primary)', color: 'white' }}>
                <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Estimated Results</h3>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Recommended Size</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>{systemSize} kW</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Yearly Savings</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>₹{Number(yearlySavings).toLocaleString()}</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Payback Period</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>{payback} Years</div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>CO₂ Reduction</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary)' }}>{co2} Tons/yr</div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: '#D1FAE5', borderRadius: '8px', color: '#065F46', textAlign: 'center' }}>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem', margin: 0 }}>
                  You can save ₹{Number(yearlySavings).toLocaleString()}/year 💰
                </p>
                <a href="https://wa.me/919919660760" style={{ display: 'block', backgroundColor: 'var(--secondary)', color: 'black', padding: '0.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', marginTop: '0.75rem' }}>
                  Book Free Site Visit
                </a>
              </div>

              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Get a Detailed Quote</h3>
                <form onSubmit={handleLeadSubmit}>
                  <div className="form-group">
                    <input name="name" type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input name="phone" type="tel" className="form-control" placeholder="Phone Number" required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Quote Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingFeatures />
      <Footer />
    </>
  );
}
