import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const calculatorSchema = z.object({
  monthlyBill: z.number().min(0),
  location: z.string().min(2).optional(),
  usageType: z.string().optional(),
  customerName: z.string().optional(),
  customerEmail: z.string().email().optional(),
  customerPhone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = calculatorSchema.parse(body);

    // Solar calculation logic
    const avgCostPerUnit = 8; // ₹8 per unit average
    const monthlyUnits = validated.monthlyBill / avgCostPerUnit;
    const dailyUnits = monthlyUnits / 30;
    
    // System size calculation (1kW generates ~4 units/day in India)
    const systemSizeKW = Math.ceil(dailyUnits / 4);
    
    // Cost calculation (₹50,000 per kW average)
    const systemCost = systemSizeKW * 50000;
    
    // Subsidy calculation
    let subsidy = 0;
    if (systemSizeKW <= 3) {
      subsidy = systemCost * 0.4; // 40% for up to 3kW
    } else if (systemSizeKW <= 10) {
      subsidy = (3 * 50000 * 0.4) + ((systemSizeKW - 3) * 50000 * 0.2); // 40% for first 3kW, 20% for rest
    }
    
    const netCost = systemCost - subsidy;
    const monthlySavings = validated.monthlyBill * 0.85; // 85% savings
    const annualSavings = monthlySavings * 12;
    const paybackPeriod = (netCost / annualSavings).toFixed(1);
    const co2Reduction = (monthlyUnits * 12 * 0.82).toFixed(0); // 0.82 kg CO2 per unit

    const result = {
      systemSizeKW,
      systemCost,
      subsidy,
      netCost,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: parseFloat(paybackPeriod),
      co2ReductionKg: parseInt(co2Reduction),
      monthlyUnits: Math.round(monthlyUnits),
    };

    // Save calculation if contact info provided
    if (validated.customerName && validated.customerPhone) {
      await prisma.calculation.create({
        data: {
          monthlyBill: validated.monthlyBill,
          location: validated.location || null,
          usageType: validated.usageType || null,
          systemSize: systemSizeKW,
          monthlySavings: Math.round(monthlySavings),
          annualSavings: Math.round(annualSavings),
          paybackPeriod: parseFloat(paybackPeriod),
          co2Reduction: parseInt(co2Reduction),
          customerName: validated.customerName,
          customerEmail: validated.customerEmail || null,
          customerPhone: validated.customerPhone,
        },
      });

      // Also create a lead
      await prisma.lead.create({
        data: {
          name: validated.customerName,
          email: validated.customerEmail || null,
          phone: validated.customerPhone,
          requirement: `Solar Calculator: ${systemSizeKW}kW system for ₹${validated.monthlyBill}/month bill in ${validated.location || 'Unknown'}`,
          source: 'Solar Calculator',
          status: 'New',
        },
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }
    console.error('POST /api/calculator error:', error);
    return NextResponse.json({ error: 'Calculation failed' }, { status: 500 });
  }
}
