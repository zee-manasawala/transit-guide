export interface QuickAnswer {
  paymentMethods: string[];
  primaryMethod: string;
  singleRidePrice: string;
  currency: string;
  dayPassPrice: string;
  warnings: string[];
}

export interface Ticket {
  name: string;
  price: string;
  validity: string;
  bestFor: string;
  zones: string;
  purchaseLocations: string[];
  details: string[];
  recommended?: boolean;
}

export interface AirportOption {
  mode: string;
  price: string;
  duration: string;
  frequency: string;
  cityPassValid: boolean;
  notes?: string;
}

export interface Airport {
  name: string;
  code: string;
  options: AirportOption[];
}

export interface GoodToKnowItem {
  icon: string;
  text: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  transitName: string;
  emoji: string;
  lastUpdated: string;
  quickAnswer: QuickAnswer;
  tickets: Ticket[];
  airport: Airport;
  goodToKnow: GoodToKnowItem[];
}