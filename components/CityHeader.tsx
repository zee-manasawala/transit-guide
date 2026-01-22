'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { City } from '@/data/types';

interface CityHeaderProps {
  city: City;
}

export default function CityHeader({ city }: CityHeaderProps) {
  const router = useRouter();

  return (
    <div className="bg-white px-6 pt-6 pb-6 sticky top-0 z-10 border-b border-gray-100">
      <button
        onClick={() => router.push('/')}
        className="flex items-center gap-2 text-blue-500 mb-4 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">All Cities</span>
      </button>
      
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{city.emoji}</span>
        <h1 className="text-4xl font-bold">{city.name}</h1>
      </div>
      <p className="text-gray-600 text-lg">{city.transitName}</p>
      <p className="text-gray-400 text-sm mt-2">
        Updated {new Date(city.lastUpdated).toLocaleDateString()}
      </p>
    </div>
  );
}