export interface HotelItem {
  id: string;
  title: string;          // Exact phrase from video (e.g. "Escort In Pc Hotel Karachi")
  hotelName: string;      // Formal hotel name
  location: string;       // Karachi area / street
  stars: number;          // Star rating
  imageUrl: string;       // Verified hotel photo
  description: string;    // Outcall description
  features: string[];     // Key tags
}

export const karachiHotelsList: HotelItem[] = [
  {
    id: 'pc-hotel',
    title: 'Escort In Pc Hotel Karachi',
    hotelName: 'Pearl Continental (PC) Hotel Karachi',
    location: 'Club Road, Civil Lines, Karachi',
    stars: 5,
    imageUrl: '/images/hotels/pc-hotel.jpg',
    description: 'Premier 5-star hotel in Karachi with private executive floors and luxury dining. Fast 20–30 minute discrete outcall arrival directly to your room or private suite.',
    features: ['5-Star Luxury Suite Outcalls', 'Executive Lounge Meet', 'Discreet Private Check-In']
  },
  {
    id: 'mariot-hotel',
    title: 'Escort In Marriott Hotel Karachi',
    hotelName: 'Karachi Marriott Hotel',
    location: '9 Abdullah Haroon Road, Civil Lines, Karachi',
    stars: 5,
    imageUrl: '/images/hotels/avari-hotel.jpg',
    description: 'Renowned 5-star destination frequented by international executives and diplomats. Seamless hotel suite dispatch with verified photo accuracy.',
    features: ['Diplomatic & VIP Floor Outcalls', 'Executive Dining Escort', 'Strict Non-Disclosure Protocol']
  },
  {
    id: 'beach-luxury-hotel',
    title: 'Escort In Beach Luxury Hotel Karachi',
    hotelName: 'Beach Luxury Hotel Karachi',
    location: 'Moulvi Tamizuddin Khan Road, Lalazar, Karachi',
    stars: 4,
    imageUrl: '/images/hotels/beach-luxury-hotel.jpg',
    description: 'Lush waterfront heritage destination in Lalazar. Ideal for serene evening dates, dinner companionship, and discreet private room outcalls.',
    features: ['Waterfront Garden Ambiance', 'Relaxed Intimate Setting', 'Direct Room Delivery']
  },
  {
    id: 'avari-hotel',
    title: 'Escort In Avari Towers Hotel Karachi',
    hotelName: 'Avari Towers Hotel Karachi',
    location: 'Fatima Jinnah Road, Karachi',
    stars: 5,
    imageUrl: '/images/hotels/mariot-hotel.jpg',
    description: 'Iconic multistory landmark hotel overlooking the Karachi skyline. VIP models available 24/7 for hotel appointments, dining accompaniment, and overnight stays.',
    features: ['High-Rise Panoramic Suites', '24/7 Concierge Service', 'Unmarked Chauffeur Arrival']
  },
  {
    id: 'royal-inn-hotel',
    title: 'Escort In Royal INN Hotel Karachi',
    hotelName: 'Royal Inn Hotel Karachi',
    location: 'Main Shahrah-e-Faisal / Commercial Corridor, Karachi',
    stars: 4,
    imageUrl: '/images/hotels/royal-inn-hotel.jpg',
    description: 'Centrally located boutique hotel with warm ambiance and quick highway access. Fast dispatch for corporate travelers staying on Shahrah-e-Faisal.',
    features: ['Fast Central Dispatch', 'Corporate Traveler Friendly', 'Cash / Crypto Payment Options']
  },
  {
    id: 'mehran-hotel',
    title: 'Escort In Mehran Hotel Karachi',
    hotelName: 'Hotel Mehran Karachi',
    location: 'Shahrah-e-Faisal, Karachi',
    stars: 4,
    imageUrl: '/images/hotels/mehran-hotel.jpg',
    description: 'Prominent city hotel positioned along the Shahrah-e-Faisal corridor. Our companions provide prompt, confidential hotel room companionship around the clock.',
    features: ['Prime Highway Connectivity', '24/7 Outcall Availability', '100% Confidential Protocol']
  },
  {
    id: 'seashell-inn-hotel',
    title: 'Escort In Seashell INN Hotel Karachi',
    hotelName: 'Seashell Inn Hotel Karachi',
    location: 'PECHS / Clifton Vicinity, Karachi',
    stars: 3,
    imageUrl: '/images/hotels/seashell-inn-hotel.jpg',
    description: 'Private, boutique lodging preferred for discreet short stays and budget-friendly executive relaxation in central Karachi.',
    features: ['Cozy Boutique Lodging', 'Prompt Local Outcall', 'Discreet Guest Policy']
  },
  {
    id: 'embassy-inn-hotel',
    title: 'Escort In Embassy Inn Hotel Karachi',
    hotelName: 'Embassy Inn Hotel Karachi',
    location: 'Main Shahrah-e-Faisal, Karachi',
    stars: 3,
    imageUrl: '/images/hotels/embassy-inn-hotel.jpg',
    description: 'Well-known business hotel on main Shahrah-e-Faisal. Verified independent and VIP escorts ready for discreet in-room visits within 25 minutes.',
    features: ['Reliable Business Lodging', 'Express Outcall Dispatch', 'Instant WhatsApp Confirmation']
  }
];

export const hotelEscortStats = [
  {
    value: '10+',
    label: 'Years in the field of escort service in karachi'
  },
  {
    value: '20k+',
    label: 'Client Served'
  },
  {
    value: '100%',
    label: 'Satisfactory rate of our customers'
  }
];
