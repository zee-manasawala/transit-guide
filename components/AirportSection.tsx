'use client';

import { useState } from 'react';
import { Airport } from '@/data/types';
import { Plane, ChevronDown, AlertTriangle, CheckCircle } from 'lucide-react';

interface AirportSectionProps {
  airport: Airport;
}

export default function AirportSection({ airport }: AirportSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mx-6 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white rounded-2xl p-5 shadow-sm text-left border-2 border-transparent hover:border-blue-500 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Airport Connection</h3>
              <p className="text-gray-600 text-sm">
                {airport.name} ({airport.code}) to City
              </p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
        
        {isExpanded && (
          <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
            {airport.options.map((option, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 ${
                  i === 0 ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-semibold text-base">{option.mode}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {option.duration} • {option.frequency}
                    </p>
                  </div>
                  <p className="font-bold text-lg">{option.price}</p>
                </div>
                
                {!option.cityPassValid && (
                  <div className="flex items-start gap-2 mt-2 text-xs text-amber-700">
                    <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>City passes don't work - separate ticket needed</span>
                  </div>
                )}
                
                {option.cityPassValid && (
                  <div className="flex items-start gap-2 mt-2 text-xs text-green-700">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span>Your contactless card works!</span>
                  </div>
                )}
                
                {option.notes && (
                  <p className="text-xs text-gray-600 mt-2">{option.notes}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}