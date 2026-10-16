import { PlumbingServiceItem, GalleryItem } from '../types';
import indianPlumberWashbasinImage from '../assets/images/indian_plumber_washbasin_repair_1792142098176.jpg';
import indianPlumberLeakRepairImage from '../assets/images/indian_plumber_leak_repair_1792143461584.jpg';
import indianTankInstallImage from '../assets/images/indian_tank_install_1792144139124.jpg';
import indianPipeFittingImage from '../assets/images/indian_pipe_fitting_1792144083527.jpg';
import indianBathroomWorkImage from '../assets/images/indian_bathroom_work_1792144104750.jpg';
import indianTapRepairImage from '../assets/images/indian_tap_repair_1792144122657.jpg';
import indianCpvcPipeRepairImage from '../assets/images/indian_cpvc_pipe_repair_1792143849040.jpg';

import royLogoImage from '../assets/images/roy_plumbing_logo.png';

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
  fullAddress: 'Sector 25, Rohini, North West Delhi - 110085, India',
  googleMapUrl: 'https://share.google/uBeOsd8eUNZdRPXvW',
  availability: '24/7 Service',
  businessType: 'Residential and Commercial Plumbing Services',
  promotionalHighlight: 'Quality Plumbing at Affordable Prices!',
  heroImage: indianPlumberWashbasinImage,
  logoImage: royLogoImage,
};

export const SERVICES: PlumbingServiceItem[] = [
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    description: 'Professional repair solutions for leaking pipes and water connections.',
    image: indianPlumberLeakRepairImage,
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
    image: indianTankInstallImage,
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
    image: indianPipeFittingImage,
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
    image: indianBathroomWorkImage,
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
    image: indianTapRepairImage,
    features: [
      'Dripping and jammed tap repair',
      'Wall mixer & sink faucet replacement',
      'Washer, spindle & cartridge changes',
    ],
  },
  {
    id: 'cpvc-pipe-repair',
    title: 'CPVC Pipe Repair',
    description: 'Expert CPVC pipe leak repair, crack fixing, and solvent weld joint sealing.',
    image: indianCpvcPipeRepairImage,
    features: [
      'CPVC line leak detection & prompt repair',
      'Solvent weld joint bonding & union fittings',
      'Hot & cold water line maintenance',
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
    image: indianPlumberLeakRepairImage,
  },
  {
    id: 'gal-2',
    title: 'Rooftop Water Tank Installation',
    category: 'Water Tank Installation',
    categoryKey: 'water-tank',
    description: 'Heavy-duty water tank installation with clean bypass valves and sturdy pipe support.',
    image: indianTankInstallImage,
  },
  {
    id: 'gal-3',
    title: 'Bathroom Plumbing & Wall Line Setup',
    category: 'Bathroom Plumbing',
    categoryKey: 'bathroom',
    description: 'Concealed copper and CPVC water line installation for modern bathrooms.',
    image: indianBathroomWorkImage,
  },
  {
    id: 'gal-4',
    title: 'Designer Tap & Basin Mixer Fitting',
    category: 'Tap & Faucet Repair',
    categoryKey: 'faucet',
    description: 'Precision mounting and leak-free sealing of luxury basin mixer tap.',
    image: indianTapRepairImage,
  },
  {
    id: 'gal-5',
    title: 'CPVC Pipeline Repair & Solvent Welding',
    category: 'CPVC Pipe Repair',
    categoryKey: 'cpvc-repair',
    description: 'Expert repair of concealed and open CPVC hot/cold water pipeline joints.',
    image: indianCpvcPipeRepairImage,
  },
  {
    id: 'gal-6',
    title: 'Pipe Fitting & Replacement Project',
    category: 'Pipe Fitting & Replacement',
    categoryKey: 'pipe-fitting',
    description: 'Clean in-wall pipe fitting, valve alignment, and sturdy water line replacement.',
    image: indianPipeFittingImage,
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
