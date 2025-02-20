'use client';

import React, { useState } from 'react'
import Navbar from '../navbar/page'
import Image from "next/image";
import Link from "next/link";
import RoyaltyCalculator from "../components/RoyaltyCalculator";
import UserGreeting from "../components/UserGreeting";
import MiningStats from "../components/MiningStats";
import ErrorBoundary from '../components/ErrorBoundary';

interface MiningStatsType {
  explosiveQuantity: number;
  blastedVolume: number;
  totalRoyalty: number;
  dueDate: string;
  lastCalculated: string;
}

interface RoyaltyCalculationData {
  calculations: {
    total_explosive_quantity: number;
    blasted_rock_volume: number;
    total_amount_with_vat: number;
  };
  calculation_date: string;
}

export default function Royalty() {
  const [miningStats, setMiningStats] = useState<MiningStatsType>({
    explosiveQuantity: 0,
    blastedVolume: 0,
    totalRoyalty: 0,
    dueDate: '',
    lastCalculated: ''
  });

  const handleRoyaltyCalculated = (data: RoyaltyCalculationData) => {
    setMiningStats({
      explosiveQuantity: data.calculations.total_explosive_quantity,
      blastedVolume: data.calculations.blasted_rock_volume,
      totalRoyalty: data.calculations.total_amount_with_vat,
      dueDate: data.calculation_date,
      lastCalculated: data.calculation_date
    });
  };

  const handleDueDateChange = (date: Date) => {
    setMiningStats((prev: MiningStatsType) => ({
      ...prev,
      dueDate: date.toISOString()
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
          <UserGreeting />
          <h2 className="text-2xl font-bold mb-6">Mining Statistics</h2>
          <MiningStats 
            {...miningStats} 
            onDueDateChange={handleDueDateChange}
          />
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-8">Mining Royalty Calculator</h2>
          <ErrorBoundary>
            <RoyaltyCalculator onCalculated={handleRoyaltyCalculated} />
          </ErrorBoundary>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Mining Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
