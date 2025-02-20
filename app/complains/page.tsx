'use client';

import React from 'react';
import Navbar from '../navbar/page';
import ComplaintForm from '../components/ComplaintForm';

export default function Complaints() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-8">Submit a Complaint</h1>
          <ComplaintForm />
        </div>
      </main>
    </div>
  );
} 