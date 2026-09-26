export interface ModelProfile {
  id: string;
  name: string;
  age: number;
  height: string;
  category: 'VIP' | 'Independent' | 'International' | 'Call Girls';
  location: string;
  languages: string[];
  hourlyRate: string;
  overnightRate: string;
  services: string[];
  image: string;
  galleryImages: string[];
  bio: string;
  verified: boolean;
  availableNow: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  badge: string;
  image: string;
}

export interface ServiceFormat {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  recommendedFor: string;
  icon: string;
}

export interface PricingTier {
  type: string;
  rates: string;
  duration: string;
  includes: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
