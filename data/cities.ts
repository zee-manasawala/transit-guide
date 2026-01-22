import { City } from './types';

export const cities: City[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    transitName: 'Metro, Bus & Tram',
    emoji: '🇫🇷',
    lastUpdated: '2026-01-15',
    quickAnswer: {
      paymentMethods: ['contactless', 'app', 'physical_pass'],
      primaryMethod: 'contactless',
      singleRidePrice: '2.55',
      currency: 'EUR',
      dayPassPrice: '12.30',
      warnings: ['Day pass only sold at stations, not on buses']
    },
    tickets: [
      {
        name: 'Single Ride',
        price: '€2.55',
        validity: '90 minutes',
        bestFor: 'Best for 1-4 trips',
        zones: 'Zones 1-3',
        purchaseLocations: ['Ticket machines', 'Metro stations', 'RATP app'],
        details: [
          'Valid on Metro, Bus, Tram within zones',
          'Keep ticket until exit',
          'Can transfer between lines'
        ]
      },
      {
        name: 'Day Pass (Navigo)',
        price: '€8.65',
        validity: '24 hours',
        bestFor: 'Unlimited rides for one day',
        zones: 'Zones 1-5',
        purchaseLocations: ['Ticket machines', 'Metro stations'],
        details: [
          'Valid on all Metro, Bus, Tram, RER',
          'Worth it after 5 single rides',
          'Only available at stations, not on buses'
        ],
        recommended: true
      },
      {
        name: 'Week Pass (Navigo)',
        price: '€32.40',
        validity: '7 days',
        bestFor: 'For longer stays (5+ days)',
        zones: 'All zones',
        purchaseLocations: ['Metro stations', 'RATP offices'],
        details: [
          'Requires Navigo card (€5 fee)',
          'Photo required',
          'Valid Monday to Sunday only'
        ]
      }
    ],
    airport: {
      name: 'Charles de Gaulle',
      code: 'CDG',
      options: [
        {
          mode: 'RER B Train',
          price: '€14.00',
          duration: '35 minutes',
          frequency: 'Every 10-15 min',
          cityPassValid: false,
          notes: 'Check train destination - RER B splits into two branches'
        },
        {
          mode: 'Roissybus',
          price: '€14.00',
          duration: '60 minutes',
          frequency: 'Every 15-20 min',
          cityPassValid: false
        },
        {
          mode: 'Bus 350/351',
          price: '€2.05',
          duration: '70-90 minutes',
          frequency: 'Every 30 min',
          cityPassValid: false,
          notes: 'Budget option, can be crowded'
        }
      ]
    },
    goodToKnow: [
      {
        icon: 'Clock',
        text: 'Metro runs 5:30am - 1:00am (2:00am Fridays and Saturdays)'
      },
      {
        icon: 'AlertCircle',
        text: 'Keep your ticket until exit - inspectors fine €50 for no ticket'
      },
      {
        icon: 'Shield',
        text: 'Watch for pickpockets on Line 1 and at major tourist stations'
      },
      {
        icon: 'Smartphone',
        text: 'Download RATP app for real-time arrivals and service alerts'
      },
      {
        icon: 'Users',
        text: 'Let people exit before boarding - stand right on escalators'
      }
    ]
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    transitName: 'Underground, Bus & Rail',
    emoji: '🇬🇧',
    lastUpdated: '2026-01-15',
    quickAnswer: {
      paymentMethods: ['contactless', 'oyster', 'app'],
      primaryMethod: 'contactless',
      singleRidePrice: '2.80',
      currency: 'GBP',
      dayPassPrice: '8.10',
      warnings: ['Daily cap applies automatically with contactless. 2.90 is the maximum fare.']
    },
    tickets: [
      {
        name: 'Contactless Payment',
        price: '£2.80+',
        validity: 'Pay as you go',
        bestFor: 'Easiest option for tourists',
        zones: 'All zones',
        purchaseLocations: ['Just tap your card'],
        details: [
          'Automatic daily and weekly caps',
          'Same price as Oyster card',
          'Works on all Tube, Bus, DLR, Overground'
        ],
        recommended: true
      },
      {
        name: 'Oyster Card',
        price: '£7 deposit + credit',
        validity: 'Reloadable',
        bestFor: 'If you prefer not using your bank card',
        zones: 'All zones',
        purchaseLocations: ['Tube stations', 'Oyster Ticket Stops'],
        details: [
          'Same fares as contactless',
          '£7 deposit refundable',
          'Can be topped up at stations'
        ]
      },
      {
        name: 'Day Travelcard',
        price: '£15.20',
        validity: '24 hours',
        bestFor: 'Not recommended - contactless is cheaper',
        zones: 'Zones 1-6',
        purchaseLocations: ['Tube stations', 'Ticket machines'],
        details: [
          'More expensive than contactless daily cap',
          'Only buy if you don\'t have contactless card',
          'Includes 2-for-1 deals at attractions'
        ]
      }
    ],
    airport: {
      name: 'Heathrow',
      code: 'LHR',
      options: [
        {
          mode: 'Piccadilly Line (Tube)',
          price: '£5.60',
          duration: '50-60 minutes',
          frequency: 'Every 5 min',
          cityPassValid: true,
          notes: 'Contactless works - cheapest option'
        },
        {
          mode: 'Heathrow Express',
          price: '£25',
          duration: '15 minutes',
          frequency: 'Every 15 min',
          cityPassValid: false,
          notes: 'Fast but expensive - book online for discount'
        },
        {
          mode: 'Elizabeth Line',
          price: '£12.80',
          duration: '30-40 minutes',
          frequency: 'Every 10 min',
          cityPassValid: true,
          notes: 'Good middle ground - contactless works'
        }
      ]
    },
    goodToKnow: [
      {
        icon: 'Clock',
        text: 'Most Tube lines run 5:30am - 12:30am, Night Tube on weekends'
      },
      {
        icon: 'CreditCard',
        text: 'Always tap in AND out - you\'ll be charged maximum fare if you forget'
      },
      {
        icon: 'TrendingDown',
        text: 'Avoid peak hours (7-9am, 5-7pm) - fares are higher and trains packed'
      },
      {
        icon: 'Map',
        text: 'Mind the Gap! Stand on the right on escalators, walk on the left'
      },
      {
        icon: 'Smartphone',
        text: 'Download Citymapper app - it\'s the best for London transit'
      }
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    transitName: 'MRT & Bus',
    emoji: '🇸🇬',
    lastUpdated: '2026-01-15',
    quickAnswer: {
      paymentMethods: ['contactless', 'ez-link', 'app'],
      primaryMethod: 'contactless',
      singleRidePrice: '1.50',
      currency: 'SGD',
      dayPassPrice: '12.00',
      warnings: ['Daily cap applies automatically with contactless. 1.50 is the maximum fare.']
    },
    tickets: [
      {
        name: 'Contactless Payment',
        price: '$1.50+',
        validity: 'Pay as you go',
        bestFor: 'Easiest option for tourists',
        zones: 'All zones',
        purchaseLocations: ['Just tap your card'],
        details: [
          'Automatic daily and weekly caps',
          'Same price as ez-link card',
          'Works on all MRT, Bus, Express Bus'
        ],
        recommended: true
      },
      {
        name: 'EZ-Link Card',
        price: '$10 cost + $5 credit',
        validity: 'Reloadable',
        bestFor: 'If you prefer not using your bank card',
        zones: 'All zones',
        purchaseLocations: ['MRT stations', '7-Eleven', 'Cheers'],
        details: [
          'Same fares as contactless',
          'Can be topped up at stations'
        ]
      },
      {
        name: 'Singapore Tourist Pass',
        price: '$17.00+',
        validity: '1 day and up to 5 days',
        bestFor: 'Not recommended - contactless is cheaper',
        zones: 'Zones 1-6',
        purchaseLocations: ['MRT stations', '7-Eleven', 'Cheers'],
        details: [
          'More expensive than contactless daily cap',
          'Only buy if you don\'t have contactless card',
          'Includes Perks and Discounts around Singapore'
        ]
      }
    ],
    airport: {
      name: 'Changi Airport',
      code: 'SIN',
      options: [
        {
          mode: 'MRT',
          price: '$1.50',
          duration: '20-30 minutes',
          frequency: 'Every 5 min',
          cityPassValid: true,
          notes: 'Contactless works - cheapest option, only works with ez-link card'
        },
        {
          mode: 'Bus',
          price: '$1.00',
          duration: '15 minutes',
          frequency: 'Every 15 min',
          cityPassValid: false,
          notes: 'Fast but expensive - book online for discount'
        },
        {
          mode: 'Grab Taxi (or other taxi or ride-sharing services)',
          price: '$20-40',
          duration: '15-20 minutes',
          frequency: 'Arrives within 5 minutes',
          cityPassValid: true,
          notes: 'Most convenient option, but can be expensive'
        }
      ]
    },
    goodToKnow: [
      {
        icon: 'Clock',
        text: 'Most MRT lines run 5:30am - 12:00am'
      },
      {
        icon: 'CreditCard',
        text: 'Always tap in AND out - you\'ll be charged maximum fare if you forget'
      },
      {
        icon: 'TrendingDown',
        text: 'Avoid peak hours (7-9am, 5-7pm) - fares are higher and trains packed'
      },
      {
        icon: 'Map',
        text: 'Mind the Gap! Stand on the right on escalators, walk on the left'
      },
      {
        icon: 'Smartphone',
        text: 'Download Grab app - it\'s the best for getting around Singapore'
      }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    transitName: 'Metro & JR Lines',
    emoji: '🇯🇵',
    lastUpdated: '2026-01-15',
    quickAnswer: {
      paymentMethods: ['ic_card', 'mobile_suica', 'tickets'],
      primaryMethod: 'ic_card',
      singleRidePrice: '170',
      currency: 'JPY',
      dayPassPrice: '800',
      warnings: ['Get Suica/Pasmo card - much easier than buying tickets']
    },
    tickets: [
      {
        name: 'Suica / Pasmo IC Card',
        price: '¥500 deposit + credit',
        validity: 'Reloadable',
        bestFor: 'Essential for tourists - makes life easy',
        zones: 'All lines and zones',
        purchaseLocations: ['Train stations', 'Convenience stores'],
        details: [
          'Works on ALL trains, subways, and buses',
          'Also works at convenience stores and vending machines',
          '¥500 deposit refundable when leaving Japan'
        ],
        recommended: true
      },
      {
        name: 'Single Journey Ticket',
        price: '¥170-320',
        validity: 'One journey',
        bestFor: 'Not recommended - use IC card instead',
        zones: 'Specific route only',
        purchaseLocations: ['Ticket machines'],
        details: [
          'Must calculate fare yourself',
          'Separate tickets for different companies',
          'Time-consuming at ticket machines'
        ]
      },
      {
        name: '24-Hour Metro Pass',
        price: '¥800',
        validity: '24 hours',
        bestFor: 'Only if taking 5+ Metro rides in one day',
        zones: 'Tokyo Metro only (not JR)',
        purchaseLocations: ['Metro stations', 'Tourist offices'],
        details: [
          'Only works on Tokyo Metro lines (not JR)',
          'Must take 5+ rides to break even',
          'Suica is usually more convenient'
        ]
      }
    ],
    airport: {
      name: 'Narita International',
      code: 'NRT',
      options: [
        {
          mode: 'Narita Express (N\'EX)',
          price: '¥3,070',
          duration: '60 minutes',
          frequency: 'Every 30 min',
          cityPassValid: false,
          notes: 'Most comfortable - reserved seating'
        },
        {
          mode: 'Keisei Skyliner',
          price: '¥2,520',
          duration: '40 minutes',
          frequency: 'Every 20-40 min',
          cityPassValid: false,
          notes: 'Fastest to Ueno area'
        },
        {
          mode: 'Airport Bus',
          price: '¥1,300',
          duration: '90 minutes',
          frequency: 'Every 15-20 min',
          cityPassValid: false,
          notes: 'Budget option, goes to major hotels'
        }
      ]
    },
    goodToKnow: [
      {
        icon: 'Phone',
        text: 'Don\'t talk on your phone - it\'s considered very rude'
      },
      {
        icon: 'Volume2',
        text: 'Keep conversations quiet - trains are silent'
      },
      {
        icon: 'Users',
        text: 'Stand in line, let people exit first, don\'t eat/drink on trains'
      },
      {
        icon: 'MapPin',
        text: 'Stations are HUGE - allow 10-15 min for transfers at major stations'
      },
      {
        icon: 'Wifi',
        text: 'Most stations have free WiFi - look for "Japan Connected-free WiFi"'
      }
    ]
  }
];

export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getAllCities(): City[] {
  return cities;
}