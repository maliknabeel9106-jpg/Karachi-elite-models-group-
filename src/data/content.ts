import { ServiceCategory, ServiceFormat, PricingTier, Testimonial, FaqItem } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'vip-escorts',
    title: 'VIP & Elite Escorts in Karachi',
    subtitle: 'Sophisticated Companions for Discerning Gentlemen',
    description: 'Refined, high-profile companions chosen for elite business dinners, diplomatic galas, luxury travel, and exclusive private rendezvous. Flawless social etiquette, fluent English, and unmatched elegance guaranteed.',
    linkText: 'Explore VIP Escorts in Karachi →',
    badge: 'Signature Tier',
    image: '/images/WhatsApp%20Image%202026-09-14%20at%2011.01.52%20PM.jpeg'
  },
  {
    id: 'independent-escorts',
    title: 'Independent Escorts in Karachi',
    subtitle: 'Direct, Flexible & Tailored Engagements',
    description: 'Engage directly with verified independent companions without cumbersome agency intermediaries. Enjoy bespoke arrangements, authentic chemistry, and unhurried appointments coordinated confidentially via WhatsApp.',
    linkText: 'Discover Independent Escorts in Karachi →',
    badge: 'Direct Booking',
    image: '/images/WhatsApp%20Image%202026-09-14%20at%2011.01.53%20PM%20(1).jpeg'
  },
  {
    id: 'russian-escorts',
    title: 'Russian & International Escorts in Karachi',
    subtitle: 'Exotic Global Beauty & Cosmopolitan Charm',
    description: 'Indulge in the allure of breathtaking international models. Featuring tall, statuesque figures, magnetic charm, and cosmopolitan sophistication for unforgettable evenings in Karachi’s most prestigious hotel suites.',
    linkText: 'Browse Russian & International Escorts →',
    badge: 'International Roster',
    image: '/images/WhatsApp%20Image%202026-09-14%20at%2011.01.53%20PM.jpeg'
  },
  {
    id: 'call-girls',
    title: 'Premium Call Girls in Karachi',
    subtitle: 'Fast, Discreet & Readily Available Bookings',
    description: 'For prompt, reliable rendezvous with zero delays. Verified portraits, rapid response times under 15 minutes, and flexible availability across DHA, Clifton, and central Karachi districts.',
    linkText: 'View Call Girls in Karachi →',
    badge: 'Fast Response',
    image: '/images/WhatsApp%20Image%202026-09-14%20at%2011.01.53%20PM%20(2).jpeg'
  }
];

export const serviceFormats: ServiceFormat[] = [
  {
    id: 'in-call',
    title: 'In-Call Escort Service in Karachi',
    description: 'Host at our private, luxury apartments located in prime residential sectors of DHA Phases 5 & 6 and Clifton. Every apartment is immaculately maintained, fully air-conditioned, sanitized, and guarantees 100% discretion with private parking and secure access.',
    highlights: ['Discreet dedicated parking', 'Pristine, hygienic luxury suites', 'Complimentary refreshments', 'Total privacy assured'],
    recommendedFor: 'Guests desiring a hassle-free, secure sanctuary',
    icon: 'Building'
  },
  {
    id: 'out-call',
    title: 'Out-Call Escort Service in Karachi',
    description: 'Our companions arrive promptly and impeccably dressed at your private residence, penthouse, or personal property across Karachi. Discretion is paramount; companions arrive in unmarked executive vehicles without attracting unwanted attention.',
    highlights: ['Doorstep arrival across DHA & Clifton', 'Zero public disclosure', 'Flexible extension options', 'Punctual scheduling'],
    recommendedFor: 'Clients relaxing in their own residence',
    icon: 'Car'
  },
  {
    id: 'hotel-outcall',
    title: 'Hotel Outcall Escort Service in Karachi',
    description: 'Extensive experience with luxury hospitality protocol at Karachi’s top five-star destinations including Karachi Marriott, Pearl Continental (PC), Mövenpick, Ramada Plaza, and Avari Towers. Seamless arrival directly to your room or hotel lounge.',
    highlights: ['Familiar with 5-star hotel concierge', 'Direct room service protocol', 'Elegant evening dress codes', 'Discreet check-in etiquette'],
    recommendedFor: 'Business travelers and tourists staying in hotels',
    icon: 'Hotel'
  },
  {
    id: 'overnight-travel',
    title: 'Overnight & Travel Companion Service in Karachi',
    description: 'Book our elite models for extended 12 to 24-hour overnight engagements, weekend retreats, or executive travel companionship. Tailored multi-hour packages ensure full-day availability, relaxation, and companion attentiveness.',
    highlights: ['Full overnight availability (10 PM – 10 AM)', 'Intercity and international travel ready', 'Custom itinerary flexibility', 'Exclusive undivided attention'],
    recommendedFor: 'Extended weekends, holidays, and multi-day stays',
    icon: 'Moon'
  },
  {
    id: 'event-companion',
    title: 'Event & Dinner Companion Service in Karachi',
    description: 'Elevate your social status with a breathtaking, articulate companion at corporate galas, private dinners, art exhibitions, or VIP lounge evenings. Our models possess polished conversational etiquette and poise in any social environment.',
    highlights: ['Sophisticated conversational skills', 'Designer cocktail attire', 'Flawless etiquette in high-society circles', 'Confidential non-disclosure standard'],
    recommendedFor: 'Corporate galas, high-profile dinners, and networking',
    icon: 'Sparkles'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    type: 'Karachi Call Girls & Companions',
    rates: 'PKR 35,000 – 60,000',
    duration: '1 – 2 Hours',
    includes: 'Verified portrait, in-call or central outcall, rapid 30-min dispatch, refreshments'
  },
  {
    type: 'Independent Karachi Escorts',
    rates: 'PKR 50,000 – 90,000',
    duration: 'Custom / 2-3 Hours',
    includes: 'Direct coordination, customized preferences, private apartment or hotel suite'
  },
  {
    type: 'Russian & International Escorts in Karachi',
    rates: 'PKR 80,000 – 150,000',
    duration: 'Hourly / Multi-hour',
    popular: true,
    includes: 'European/Russian models, 5-star hotel outcall, luxury dining accompaniment'
  },
  {
    type: 'VIP Elite Karachi Escorts',
    rates: 'PKR 120,000+',
    duration: 'Hourly / Full Evening',
    includes: 'Celebrity/top-tier models, English fluency, executive events, overnight options'
  }
];

export const clientReviews: Testimonial[] = [
  {
    id: '1',
    quote: 'Her charm and poise were electric... one evening with this Karachi beauty and I was thoroughly impressed. Pure sophistication and warmth.',
    client: 'Anonymous VIP Executive',
    location: 'DHA Phase 6, Karachi',
    rating: 5
  },
  {
    id: '2',
    quote: 'Passionate, articulate, and completely stress-free. The finest private companion encounter I have experienced in Karachi. 10/10.',
    client: 'Discreet Business Traveler',
    location: 'Clifton, Karachi',
    rating: 5
  },
  {
    id: '3',
    quote: 'Punctual, graceful, and knowing exactly how to make a gentleman feel relaxed. An unforgettable evening at the Pearl Continental.',
    client: 'Repeat Corporate Client',
    location: 'Karachi Central',
    rating: 5
  },
  {
    id: '4',
    quote: 'Exceptional visual elegance and conversational depth. Kept me engaged all night. Truly top-tier luxury standard.',
    client: 'Elite Gentleman',
    location: 'Marriott Hotel, Karachi',
    rating: 5
  },
  {
    id: '5',
    quote: 'Remarkable international model. Beautiful, cultured, and delivered an evening beyond my highest expectations. Absolute perfection.',
    client: 'Satisfied Regular Guest',
    location: 'DHA Phase 8, Karachi',
    rating: 5
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'What is the average rate for Karachi escorts?',
    answer: 'Rates start from PKR 35,000 to PKR 150,000+ depending on the companion category, engagement duration, and whether you select in-call or hotel out-call service in Karachi. View our transparent pricing table above or contact us on WhatsApp for exact customized quotes.',
    category: 'Rates'
  },
  {
    question: 'Are there 24/7 Karachi escorts available?',
    answer: 'Yes, our verified Karachi escorts operate 24 hours a day, 7 days a week. Average dispatch response times are 15–30 minutes via WhatsApp. We accommodate morning, afternoon, evening, and late-night bookings across all major sectors.',
    category: 'Availability'
  },
  {
    question: 'Which areas have the best escort coverage in Karachi?',
    answer: 'Our models are stationed across DHA (Phases 1 through 8), Clifton (Blocks 1–9), Gulshan-e-Iqbal, PECHS, Shahrah-e-Faisal, Bath Island, and all five-star hotels (Marriott, Pearl Continental, Mövenpick, Ramada, and Avari Towers).',
    category: 'Locations'
  },
  {
    question: 'Can I book escorts for travel or events outside Karachi?',
    answer: 'Yes. Many of our VIP and independent companions are available for domestic travel (Islamabad, Lahore, Gwadar) and international trips. Travel arrangements, business-class flights, and luxury hotel accommodations are discussed confidentially on WhatsApp.',
    category: 'Travel'
  },
  {
    question: 'Are photos of Karachi escorts real and verified?',
    answer: 'Yes, 100%. Every profile in our Karachi directory is personally screened with authentic, up-to-date photos. We do not use misleading stock photos or outdated pictures. If desired, you may request a live selfie confirmation before finalizing your booking.',
    category: 'Verification'
  },
  {
    question: 'How do I ensure privacy when booking Karachi escorts?',
    answer: 'We prioritize your absolute discretion. We conduct all communications through end-to-end encrypted WhatsApp, require zero invasive personal credentials, meet in private secure locations or luxury hotels, and uphold strict non-disclosure policies.',
    category: 'Privacy'
  },
  {
    question: 'What is the difference between in-call and out-call service?',
    answer: 'In-call means you visit our companion at her private, luxury, air-conditioned apartment in DHA or Clifton. Out-call means the companion travels to your luxury hotel room, residence, or selected private venue.',
    category: 'Services'
  },
  {
    question: 'Can I request the same companion for repeat bookings?',
    answer: 'Absolutely. Many of our executive clients develop regular ongoing engagements with their preferred companions. You can check recurring availability and reserve your favorite companion in advance.',
    category: 'Repeat Bookings'
  }
];

export const siteConfig = {
  name: 'Karachi Escorts',
  tagline: 'Karachi Escorts | VIP Escorts in Karachi 24/7 Service',
  phone: '+92 340 2042663',
  phoneDisplay: '0340 2042663',
  email: 'info@karachisescortgroup.site',
  domain: 'karachisescortgroup.site',
  address: 'Suite 12, Main Shahrah-e-Faisal, Karachi, Sindh – 75300, Pakistan',
  whatsappUrl: 'https://wa.me/923402042663?text=Hi%2C%20I%20want%20to%20book%20a%20Companion',
  hours: '24 Hours / 7 Days a Week'
};
