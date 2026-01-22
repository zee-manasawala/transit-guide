'use client';

import { useState } from 'react';
import { Ticket } from '@/data/types';
import { ChevronDown } from 'lucide-react';

interface TicketOptionsProps {
  tickets: Ticket[];
}

export default function TicketOptions({ tickets }: TicketOptionsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mx-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Ticket Options</h2>
      
      <div className="space-y-3">
        {tickets.map((ticket, i) => (
          <button
            key={i}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            className={`w-full bg-white rounded-2xl p-5 shadow-sm text-left transition-all border-2 ${
              expandedIndex === i ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{ticket.name}</h3>
                  {ticket.recommended && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{ticket.bestFor}</p>
              </div>
              <div className="text-right ml-4 flex items-start gap-2">
                <div>
                  <p className="font-bold text-xl">{ticket.price}</p>
                  <p className="text-xs text-gray-500">{ticket.validity}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform mt-1 ${
                    expandedIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
            
            {expandedIndex === i && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="space-y-2 mb-4">
                  {ticket.details.map((detail, j) => (
                    <p key={j} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs font-semibold text-gray-600 mb-2">
                    WHERE TO BUY
                  </p>
                  <p className="text-sm text-gray-700">
                    {ticket.purchaseLocations.join(' • ')}
                  </p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}