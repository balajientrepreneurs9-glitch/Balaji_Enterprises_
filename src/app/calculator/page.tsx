'use client';

import { useState } from 'react';
import { Metadata } from 'next';

export default function CalculatorPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    monthlyBill: '',
    location: '',
    usageType: 'Residential',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          monthlyBill: parseFloat(formData.monthlyBill),
          location: formData.location,
          usageType: formData.usageType,
          customerName: formData.customerName || null,
          customerEmail: formData.customerEmail || null,
          customerPhone: formData.customerPhone || null,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Calculator error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#081B3A] to-[#163060] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Solar Calculator</h1>
          <p className="text-xl text-gray-300">Calculate your solar savings</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#081B3A] mb-6">Calculate Savings</h2>
              <form onSubmit={handleCalculate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Electricity Bill (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Usage Type</label>
                  <select
                    value={formData.usageType}
                    onChange={(e) => setFormData({ ...formData, usageType: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#F4B400]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F4B400] text-[#081B3A] font-semibold py-3 rounded-lg hover:bg-[#D49A00] disabled:opacity-50"
                >
                  {loading ? 'Calculating...' : 'Calculate Savings'}
                </button>
              </form>
            </div>

            {result && (
              <div className="bg-gradient-to-br from-[#081B3A] to-[#163060] text-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Your Solar Savings</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Recommended System Size</p>
                    <p className="text-3xl font-bold text-[#F4B400]">{result.systemSize} kW</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Monthly Savings</p>
                    <p className="text-2xl font-bold">₹{result.monthlySavings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Annual Savings</p>
                    <p className="text-2xl font-bold">₹{result.annualSavings.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">Payback Period</p>
                    <p className="text-2xl font-bold">{result.paybackPeriod} years</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm mb-1">CO₂ Reduction</p>
                    <p className="text-2xl font-bold">{result.co2Reduction} tons/year</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
