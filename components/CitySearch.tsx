'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { getAllCities } from '@/data/cities';
import { useRouter } from 'next/navigation';

export default function CitySearch() {
  const [query, setQuery] = useState('');
  const cities = getAllCities();
  const router = useRouter();

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase()) ||
    city.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-3">Transit Guide</h1>
        <p className="text-xl text-gray-600">
          Simple guides to public transport in every city
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredCities.map((city) => (
          <button
            key={city.id}
            onClick={() => router.push(`/city/${city.id}`)}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">{city.emoji}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.country}</p>
                <p className="text-gray-500 text-xs mt-1">{city.transitName}</p>
              </div>
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        ))}
      </div>

      {filteredCities.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No cities found</p>
          <p className="text-gray-400 text-sm mt-2">
            We're adding more cities soon!
          </p>
        </div>
      )}
    </div>
  );
}