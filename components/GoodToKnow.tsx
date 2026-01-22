'use client';

import { useState } from 'react';
import { GoodToKnowItem } from '@/data/types';
import { ChevronDown, Clock, AlertCircle, Shield, Smartphone, Users, Phone, Volume2, MapPin, Wifi, CreditCard, TrendingDown, Map } from 'lucide-react';

interface GoodToKnowProps {
  items: GoodToKnowItem[];
}

const iconMap: Record<string, any> = {
  Clock,
  AlertCircle,
  Shield,
  Smartphone,
  Users,
  Phone,
  Volume2,
  MapPin,
  Wifi,
  CreditCard,
  TrendingDown,
  Map
};

export default function GoodToKnow({ items }: GoodToKnowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mx-6 mb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white rounded-2xl p-5 shadow-sm text-left border-2 border-transparent hover:border-purple-500 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Good to Know</h3>
              <p className="text-gray-600 text-sm">Tips & cultural notes</p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
        
        {isExpanded && (
          <div className="mt-5 pt-5 border-t border-gray-100">
            <ul className="space-y-4">
              {items.map((item, i) => {
                const IconComponent = iconMap[item.icon] || AlertCircle;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </button>
    </div>
  );
}