import { PlumbingServiceItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Roy Plumbing Services',
  mainTagline: 'Your Problem, Our Solution',
  secondaryTagline: 'Your Plumbing, Our Responsibility',
  phone: '9582885917',
  displayPhone: '+91 95828 85917',
  phoneTel: 'tel:9582885917',
  whatsappUrl:
    'https://wa.me/919582885917?text=Hello%20Roy%20Plumbing%20Services%2C%20I%20need%20plumbing%20services.%20Please%20contact%20me.',
  location: 'Rohini, Delhi, Sector 25',
  availability: '24/7 Service',
  businessType: 'Residential and Commercial Plumbing Services',
  promotionalHighlight: 'Quality Plumbing at Affordable Prices!',
  heroImage: '/src/assets/images/hero_plumber_repair_1792089013746.jpg',
};

export const SERVICES: PlumbingServiceItem[] = [
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    description: 'Professional repair solutions for leaking pipes and water connections.',
    image: '/src/assets/images/service_leak_repair_1792089014382.jpg',
    features: [
      'Concealed & exposed pipe leak repair',
      'High-pressure joint sealing',
      'Water seepage inspection & quick fixes',
    ],
  },
  {
    id: 'water-tank-installation',
    title: 'Water Tank Installation',
    description: 'Reliable water tank installation and plumbing connections.',
    image: '/src/assets/images/service_water_tank_1792089014291.jpg',
    features: [
      'Rooftop water storage tank fitting',
      'Inlet, outlet & overflow piping',
      'Ball valve & float valve setup',
    ],
  },
  {
    id: 'pipe-fitting-replacement',
    title: 'Pipe Fitting & Replacement',
    description: 'Pipe fitting, replacement, and plumbing connection services.',
    image: '/src/assets/images/service_bathroom_pipes_1792089032856.jpg',
    features: [
      'CPVC, UPVC, PVC & GI pipe installations',
      'Corroded and damaged pipe replacements',
      'Waterline rerouting & new connections',
    ],
  },
  {
    id: 'bathroom-plumbing',
    title: 'Bathroom Plumbing',
    description: 'Bathroom plumbing repairs, installations, and fitting solutions.',
    image: '/src/assets/images/service_bathroom_faucet_1792089014459.jpg',
    features: [
      'Shower, geyser & drain line fittings',
      'Sanitaryware connection & repairs',
      'Complete bathroom plumbing maintenance',
    ],
  },
  {
    id: 'tap-faucet-repair',
    title: 'Tap & Faucet Repair',
    description: 'Tap, mixer, and faucet repair or installation services.',
    image: '/src/assets/images/service_bathroom_faucet_1792089014459.jpg',
    features: [
      'Dripping and jammed tap repair',
      'Wall mixer & sink faucet replacement',
      'Washer, spindle & cartridge changes',
    ],
  },
  {
    id: 'residential-commercial',
    title: 'Residential & Commercial Plumbing',
    description: 'Plumbing solutions for homes, apartments, offices, and commercial properties.',
    image: '/src/assets/images/service_commercial_plumbing_1792089015201.jpg',
    features: [
      'Residential houses & apartment repairs',
      'Office, retail & commercial plumbing care',
      'Emergency maintenance & comprehensive repairs',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pipe Leak Detection & Repair',
    category: 'Leak Repair',
    categoryKey: 'leak-repair',
    description: 'Precision joint tightening and leak repair on residential water lines.',
    image: '/src/assets/images/service_leak_repair_1792089014382.jpg',
  },
  {
    id: 'gal-2',
    title: 'Rooftop Water Tank Installation',
    category: 'Water Tank Installation',
    categoryKey: 'water-tank',
    description: 'Heavy-duty water tank installation with clean bypass valves and sturdy pipe support.',
    image: '/src/assets/images/service_water_tank_1792089014291.jpg',
  },
  {
    id: 'gal-3',
    title: 'Bathroom Plumbing & Wall Line Setup',
    category: 'Bathroom Plumbing',
    categoryKey: 'bathroom',
    description: 'Concealed copper and CPVC water line installation for modern bathrooms.',
    image: '/src/assets/images/service_bathroom_pipes_1792089032856.jpg',
  },
  {
    id: 'gal-4',
    title: 'Designer Tap & Basin Mixer Fitting',
    category: 'Tap & Faucet Repair',
    categoryKey: 'faucet',
    description: 'Precision mounting and leak-free sealing of luxury basin mixer tap.',
    image: '/src/assets/images/service_bathroom_faucet_1792089014459.jpg',
  },
  {
    id: 'gal-5',
    title: 'Commercial Water Distribution Manifold',
    category: 'Residential & Commercial Projects',
    categoryKey: 'commercial',
    description: 'Commercial grade pipe network with pressure valves and clean multi-line drainage.',
    image: '/src/assets/images/service_commercial_plumbing_1792089015201.jpg',
  },
  {
    id: 'gal-6',
    title: 'Kitchen Sink Drainage & Trap Replacement',
    category: 'Pipe Fitting & Replacement',
    categoryKey: 'pipe-fitting',
    description: 'Clean under-sink pipe fitting, P-trap realignment, and water waste connection.',
    image: '/src/assets/images/hero_plumber_repair_1792089013746.jpg',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Workmanship',
    description: 'Thorough inspection, durable pipe fittings, and attention to detail on every repair or installation.',
  },
  {
    title: 'Quick Service',
    description: 'Prompt response across Rohini Sector 25 and neighboring areas to resolve urgent plumbing issues without delay.',
  },
  {
    title: 'Affordable Rates',
    description: 'Clear, upfront, and budget-friendly pricing with no hidden charges for both home and commercial jobs.',
  },
  {
    title: 'Professional Plumbing Solutions',
    description: 'Expert solutions tailored to modern residential fixtures, commercial properties, and complex pipe layouts.',
  },
  {
    title: '24/7 Service Availability',
    description: 'Round-the-clock emergency support so you are never stranded with a pipe burst or overflowing tank.',
  },
];
