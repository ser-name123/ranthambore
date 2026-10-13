'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  Package,
  Eye,
  Globe,
  Search,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Car,
  Layers,
  FileText,
  X,
  MapPin,
  Trash2,
  Star,
  HelpCircle,
  Save,
  ExternalLink,
  Sliders,
  Compass,
  Clock,
  ShieldCheck,
  Building2,
  BookOpen,
  ShieldAlert,
  Info,
  Lock,
  LogOut,
  EyeOff,
  Key,
  ArrowRight
} from 'lucide-react';

type TabType =
  | 'dashboard'
  | 'enquiries'
  | 'cms-hero'
  | 'cms-overview'
  | 'cms-vehicles'
  | 'cms-packages'
  | 'cms-services'
  | 'cms-zones'
  | 'cms-about'
  | 'cms-sightings'
  | 'cms-testimonials'
  | 'cms-guide'
  | 'cms-faqs'
  | 'cms-contact'
  | 'cms-legal'
  | 'cms-seo'
  | 'admin-profile';

interface Enquiry {
  id: string;
  reference_id: string;
  name: string;
  phone: string;
  email: string;
  safari_date: string;
  safari_mode: string;
  timing_preference: string;
  zone_preference: string;
  adults: number;
  children: number;
  status: 'New Enquiry' | 'Contacted' | 'Confirmed' | 'Cancelled';
  created_at: string;
  notes?: string;
}

export default function CompleteWebsiteAdmin() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 1. ENQUIRIES
  const [enquiries, setEnquiries] = useState<Enquiry[]>([
    {
      id: 'enq-1',
      reference_id: 'RWL-2026-8941',
      name: 'Vikramaditya Singhania',
      phone: '+91 98201 44521',
      email: 'vikram.singhania@apexcorp.in',
      safari_date: '2026-10-18',
      safari_mode: 'Maruti Gypsy (6-Seater 4x4)',
      timing_preference: 'Morning (06:30 AM - 10:00 AM)',
      zone_preference: 'Zone 1 to 5 (Core Gates)',
      adults: 4,
      children: 1,
      status: 'New Enquiry',
      created_at: '15 Mins Ago',
      notes: 'Interested in Zone 3 or Zone 4 for tiger photography.'
    },
    {
      id: 'enq-2',
      reference_id: 'RWL-2026-8940',
      name: 'Dr. Michael & Sarah Vance',
      phone: '+44 7911 123456',
      email: 'm.vance@oxford.ac.uk',
      safari_date: '2026-10-22',
      safari_mode: 'Maruti Gypsy (6-Seater 4x4)',
      timing_preference: 'Morning (06:30 AM - 10:00 AM)',
      zone_preference: 'Zone 1 to 5 (Core Gates)',
      adults: 2,
      children: 0,
      status: 'Confirmed',
      created_at: '2 Hours Ago',
      notes: 'Foreign nationals from UK. Hotel pickup needed from Oberoi Vanyavilas.'
    },
    {
      id: 'enq-3',
      reference_id: 'RWL-2026-8939',
      name: 'Rohan Mehra & Family',
      phone: '+91 99887 65432',
      email: 'rohan.mehra@gmail.com',
      safari_date: '2026-10-15',
      safari_mode: 'Canter (20-Seater Safari Bus)',
      timing_preference: 'Afternoon (02:30 PM - 06:00 PM)',
      zone_preference: 'Zone 6 to 10 (Buffer Gates)',
      adults: 8,
      children: 2,
      status: 'Contacted',
      created_at: '4 Hours Ago',
      notes: 'Family group wanting all seats together in Canter.'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // 2. HERO & NOTICE BAR
  const [heroContent, setHeroContent] = useState({
    topNotice: '🐅 Current Booking Open for 2026-27 Season • Zones 1 to 10 Gypsy Permits Available • Instant Confirmation',
    badgeText: 'Official Wildlife Safari Assistance • Rajasthan Forest Dept Approved',
    mainHeading: 'Experience the Roar of the Bengal Tiger in Ranthambore',
    subHeading: 'Authorized Maruti Gypsy & Canter safaris across all 10 zones. Book certified naturalist guides, private luxury resort stays, and custom tiger photography tours.',
    stat1Number: '98%',
    stat1Label: 'Tiger Sighting Index',
    stat2Number: '25+ Yrs',
    stat2Label: 'Local Safari Heritage',
    stat3Number: '15,000+',
    stat3Label: 'Delighted Travelers',
    stat4Number: '10 Zones',
    stat4Label: 'Core & Buffer Access'
  });

  // 3. PARK SAFARI OVERVIEW & TIMINGS
  const [overviewContent, setOverviewContent] = useState({
    title: 'Safari in Ranthambore National Park',
    subtitle: 'The best site to see the majestic Bengal Tiger roaming freely in its native habitat.',
    description: 'In Ranthambore National Park & Tiger Reserve, there are two different kinds of jungle safaris available: Jeep Safari and Canter Safari. By entering basic information on the website, you can make an online safari reservation. The park is separated into ten zones.',
    morningShiftWinter: '07:00 AM - 10:30 AM',
    eveningShiftWinter: '02:00 PM - 05:30 PM',
    morningShiftSummer: '06:00 AM - 09:30 AM',
    eveningShiftSummer: '03:30 PM - 07:00 PM'
  });

  // 4. VEHICLES COMPARISON
  const [vehiclesContent, setVehiclesContent] = useState({
    gypsyTitle: 'Maruti Gypsy (Jeep Safari)',
    gypsyCapacity: '6 Persons Capacity',
    gypsyPricePerPerson: 2300,
    gypsyHighlights: '4x4 Off-Road Drive, Ideal for Photographers, Maneuverable on steep trails',
    canterTitle: 'Canter Safari (Safari Bus)',
    canterCapacity: '20 Persons Capacity',
    canterPricePerPerson: 1800,
    canterHighlights: 'High Seating Elevation, Economical for Families, Panoramic Forest Canopy View'
  });

  // 5. TOUR PACKAGES
  const [packages, setPackages] = useState([
    {
      id: 'pkg-1',
      name: 'Ranthambore Day Safari Express',
      duration: '1 Day Trip',
      price: 2999,
      safariCount: '1 Gypsy or Canter Safari',
      hotelType: 'Day Rest / Fresh-up Facility',
      badge: 'Best for Quick Trips'
    },
    {
      id: 'pkg-2',
      name: 'Ranthambore Weekend Wildlife Tour',
      duration: '1 Night / 2 Days',
      price: 6499,
      safariCount: '1 Tiger Safari Included',
      hotelType: '3-Star / Heritage Resort',
      badge: 'Most Popular'
    },
    {
      id: 'pkg-3',
      name: 'Classic Ranthambore Wildlife Escape',
      duration: '2 Nights / 3 Days',
      price: 11999,
      safariCount: '2 Tiger Safaris (Morning & Evening)',
      hotelType: 'Luxury Forest Resort with Pool',
      badge: 'Best Value'
    },
    {
      id: 'pkg-4',
      name: 'Royal Tiger Safari & Heritage Stay',
      duration: '3 Nights / 4 Days',
      price: 22499,
      safariCount: '4 Jungle Safaris across Core Zones',
      hotelType: '5-Star Heritage Haveli Stay',
      badge: 'Luxury Pick'
    },
    {
      id: 'pkg-5',
      name: 'Pro Photography & Private Gypsy Expedition',
      duration: '4 Nights / 5 Days',
      price: 38999,
      safariCount: '6 Exclusive Gypsy Safaris + Pro Naturalist',
      hotelType: 'Wilderness Luxury Camp + Gimbal Mounts',
      badge: 'Pro Special'
    }
  ]);

  // 6. SERVICES (6 CARDS)
  const [services, setServices] = useState([
    {
      id: 'srv-1',
      title: 'Maruti Gypsy Safari Booking',
      desc: 'Exclusive and sharing 4x4 open Gypsy safaris across Zones 1 to 10 with verified entry permits, licensed drivers, and certified nature guides.',
      tag: 'Core Experience'
    },
    {
      id: 'srv-2',
      title: 'Canter Safari Booking',
      desc: 'Economical 20-seater open safari bus permits ideal for families, groups, and last-minute travellers with panoramic elevated forest views.',
      tag: 'Best Value'
    },
    {
      id: 'srv-3',
      title: 'Resort & Jungle Camp Stays',
      desc: 'Curated bookings at handpicked heritage jungle resorts, eco-cottages, and 5-star wilderness retreats near National Park entry gates.',
      tag: 'Stay Assistance'
    },
    {
      id: 'srv-4',
      title: 'Railway Station & Airport Transfers',
      desc: 'Comfortable private AC cabs from Sawai Madhopur Junction, Jaipur International Airport, or Delhi NCR straight to your resort.',
      tag: 'Safe Transfers'
    },
    {
      id: 'srv-5',
      title: 'Ranthambore Fort & Chambal Safari',
      desc: 'Guided cultural excursions to the 10th-century UNESCO World Heritage Ranthambore Fort, Trinetra Ganesha Temple, and Chambal boat safari.',
      tag: 'Sightseeing'
    },
    {
      id: 'srv-6',
      title: 'Bespoke Wildlife Photography Tours',
      desc: 'Specialized arrangements for photographers featuring exclusive Gypsy positioning, expert trackers, beanbag mounts, and optimal lighting routes.',
      tag: 'Photography Special'
    }
  ]);

  // 7. ZONES 1 TO 10
  const [zones, setZones] = useState([
    { number: 'Zone 1', name: 'Singh Dwar & Sultanpur', type: 'Core Zone', famousTigers: 'T-107, T-120', highlights: 'Steep hill terrain & water ravines' },
    { number: 'Zone 2', name: 'Jogi Mahal & Phuta Kot', type: 'Core Zone', famousTigers: 'T-120 (Ganesh), T-84', highlights: 'Historic Jogi Mahal & Banyan tree' },
    { number: 'Zone 3', name: 'Padam Talao & Rajbagh Lake', type: 'Core Zone', famousTigers: 'T-124 (Riddhi) + Cubs', highlights: 'Rajbagh lake ruins, high tiger density' },
    { number: 'Zone 4', name: 'Malik Talao & Lakkad Dah', type: 'Core Zone', famousTigers: 'T-86 (Arrowhead), T-124', highlights: 'Lush marshlands & crocodile sightings' },
    { number: 'Zone 5', name: 'Bakola & Kachida Valley', type: 'Core Zone', famousTigers: 'T-108 & Sub-adults', highlights: 'Dense banyan groves & water pools' },
    { number: 'Zone 6', name: 'Kundal & Kala Pani', type: 'Buffer Zone', famousTigers: 'T-101 (Surya)', highlights: 'High leopard & sloth bear territory' },
    { number: 'Zone 7', name: 'Chidikho & Jamuda', type: 'Buffer Zone', famousTigers: 'T-102 & transit tigers', highlights: 'Scenic plateau & migratory paths' },
    { number: 'Zone 8', name: 'Balas & Neemli Dang', type: 'Buffer Zone', famousTigers: 'T-89 & Leopards', highlights: 'Steep gorges & rocky ravines' },
    { number: 'Zone 9', name: 'Qualji & Kuwalji River', type: 'Buffer Zone', famousTigers: 'T-123 corridor', highlights: 'Chambal river boundary & birding' },
    { number: 'Zone 10', name: 'Kushalipura & Halonda', type: 'Buffer Zone', famousTigers: 'T-123 & sub-adults', highlights: 'Scenic ravines and quieter safari tracks' }
  ]);

  // 8. ABOUT COMPANY & PILLARS
  const [aboutContent, setAboutContent] = useState({
    title: 'About Ranthambore Wild Life Tour',
    badge: '12+ Years of Wildlife Heritage',
    story: 'Based in Sawai Madhopur, Ranthambore Wild Life Tour is a dedicated safari and hospitality facilitation operator helping travelers from around the world explore the majestic tiger kingdom.',
    pillar1: 'Authorized Operators: Licensed facilitation for forest safari permits.',
    pillar2: '100% Transparent Quotations: Official gate entry, vehicle hire, and guide fees included.',
    pillar3: 'Certified Naturalists: Expert local trackers with profound territory knowledge.',
    pillar4: '24/7 Safari Support: On-ground assistance in Sawai Madhopur from arrival to departure.'
  });

  // 9. TIGER SIGHTINGS TICKER
  const [sightings, setSightings] = useState([
    {
      id: 'sig-1',
      code: 'T-124',
      name: 'Riddhi',
      zone: 'Zone 3',
      landmark: 'Rajbagh Lake Palace',
      time: '07:15 AM',
      date: 'Today',
      notes: 'Spotted with 2 cubs drinking water at the lakeshore.'
    },
    {
      id: 'sig-2',
      code: 'T-120',
      name: 'Ganesh (Male)',
      zone: 'Zone 2',
      landmark: 'Jogi Mahal Waterhole',
      time: '04:40 PM',
      date: 'Yesterday',
      notes: 'Resting under the historic banyan tree.'
    },
    {
      id: 'sig-3',
      code: 'T-86',
      name: 'Arrowhead',
      zone: 'Zone 4',
      landmark: 'Malik Talao Causeway',
      time: '08:30 AM',
      date: '10 Oct 2026',
      notes: 'Crossed the vehicle path in full daylight view.'
    }
  ]);

  // 10. TESTIMONIALS
  const [testimonials, setTestimonials] = useState([
    {
      id: 'rev-1',
      name: 'Aditya & Neha Sharma',
      location: 'New Delhi, India',
      tour: 'Classic 2N/3D Wildlife Escape',
      quote: 'Booking our Ranthambore safaris through Ranthambore Wild Life Tour was the best decision! We got Zone 3 on the morning safari and saw tigress Riddhi with her cubs near Padam Talao.',
      rating: 5
    },
    {
      id: 'rev-2',
      name: 'Marcus & Clara Vance',
      location: 'London, United Kingdom',
      tour: 'Tiger Photography Master Tour',
      quote: 'As avid wildlife photographers, we wanted dedicated Gypsy safaris with optimal lighting angles. The team coordinated every permit flawlessly and arranged an exquisite heritage lodge.',
      rating: 5
    },
    {
      id: 'rev-3',
      name: 'Rajesh Nair & Family',
      location: 'Bengaluru, India',
      tour: 'Family Holiday Package (3 Safaris)',
      quote: 'Travelling with kids can be tricky, but from our railway station pickup to hotel check-in and Canter safari boarding, everything was executed like clockwork.',
      rating: 5
    }
  ]);

  // 11. TRAVEL GUIDE ARTICLES
  const [travelGuides, setTravelGuides] = useState([
    {
      id: 'tg-1',
      title: 'Best Time to Visit Ranthambore: Month-by-Month Guide',
      category: 'Seasonal Planning',
      summary: 'From misty winter mornings (Nov-Feb) to hot summer months (Apr-Jun) when tigers frequent waterholes, understand seasonal sighting patterns.'
    },
    {
      id: 'tg-2',
      title: 'Essential Safari Packing List: What to Wear in the Jungle',
      category: 'Visitor Preparation',
      summary: 'Why earthy greens, browns, and khakis matter, essential winter layers for open Gypsy drives, dust protection, and camera beanbags.'
    },
    {
      id: 'tg-3',
      title: 'How to Reach Ranthambore: Train, Road & Flight Options',
      category: 'Transit & Route',
      summary: 'Direct express trains to Sawai Madhopur (SWM), flight connections via Jaipur (JAI), and the new Delhi-Mumbai Expressway route.'
    }
  ]);

  // 12. FAQS
  const [faqs, setFaqs] = useState([
    {
      id: 'faq-1',
      q: 'How far in advance should I book my Ranthambore safari?',
      a: 'Safari permits in Ranthambore open up to 90 to 120 days in advance through the Forest Department portal. Due to strict vehicle caps per zone, peak dates sell out quickly. We strongly advise booking at least 30 to 60 days ahead for Maruti Gypsy permits.'
    },
    {
      id: 'faq-2',
      q: 'What government ID proof is needed for booking and entry?',
      a: 'For Indian Nationals: Government photo ID such as Aadhaar Card, Passport, Voter ID, or Driving License. For Foreign Nationals: Original Passport and Visa details. The exact original ID used during booking must be carried.'
    },
    {
      id: 'faq-3',
      q: 'Can I choose my specific safari zone?',
      a: 'When you submit your enquiry, we submit your zone preference (Zones 1-5 Core or Zones 6-10 Buffer). However, the Rajasthan Forest Department computerised lottery system assigns final zones based on quota availability.'
    },
    {
      id: 'faq-4',
      q: 'Are tiger sightings guaranteed on a safari?',
      a: 'No. Ranthambore National Park is a protected wild habitat spanning over 1,300 sq km. Wildlife sightings depend entirely on animal movements, weather, and chance.'
    }
  ]);

  // 13. CONTACT DETAILS & HELPLINES
  const [contactInfo, setContactInfo] = useState({
    phone1: '+91 99719 65629',
    phone2: '+91 78349 42435',
    whatsappNumber: '+91 99719 65629',
    email: 'booking@ranthamborewildlifetour.com',
    officeAddress: 'Ranthambore Road, Opp. Forest Booking Office, Sawai Madhopur, Rajasthan 322001',
    timing: '06:00 AM - 09:30 PM (All 7 Days)'
  });

  // 14. LEGAL & CANCELLATION
  const [legalContent, setLegalContent] = useState({
    disclaimer: 'Ranthambore Wild Life Tour is an independent tour assistance operator in Sawai Madhopur. We are not the official portal of Rajasthan Forest Department.',
    cancellationSummary: 'Charges for the Jeep Safari and Canter Safari are not refundable once confirmed. If the safari booking is not confirmed, the booking fees will be returned.',
    rescheduleNotice: 'All bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve.'
  });

  // 15. SEO & SEARCH VISIBILITY
  const [seoContent, setSeoContent] = useState({
    metaTitle: 'Ranthambore Safari & Wildlife Tours | Gypsy & Canter Booking',
    metaDescription: 'Plan your unforgettable Ranthambore safari experience. Book authorized Maruti Gypsy & Canter permits, luxury wildlife resort stays, and custom tiger photography tours.',
    keywords: 'Ranthambore safari booking, Ranthambore wildlife tours, Ranthambore tour packages, Jeep safari Ranthambore, Canter safari booking Ranthambore, Ranthambore tiger reserve, Sawai Madhopur wildlife packages',
    canonicalUrl: 'https://ranthamborewildlifetour.com',
    ogImageUrl: '/images/hero_tiger.jpg',
    googleAnalyticsId: 'G-XXXXXXXXXX',
    googleSearchConsoleTag: 'google-site-verification=ranthambore-token-2026',
    indexingDirective: 'index, follow'
  });

  // 16. ADMIN PROFILE & CREDENTIALS
  const [adminProfile, setAdminProfile] = useState({
    fullName: 'Rajeshwar Singh Rathore',
    email: 'admin@ranthamborewildlifetour.com',
    phone: '+91 99719 65629',
    role: 'Lead Wildlife Operations Director',
    location: 'Sawai Madhopur Field Office, Rajasthan',
    emailAlertsEnabled: true,
    whatsappAlertsEnabled: true
  });

  const [passwordState, setPasswordState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // AUTHENTICATION STATE
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState('admin@ranthamborewildlifetour.com');
  const [loginPassword, setLoginPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    setTimeout(() => {
      if (
        (loginEmail === 'admin@ranthamborewildlifetour.com' || loginEmail === 'admin' || loginEmail.includes('@')) &&
        (loginPassword.length >= 4)
      ) {
        setIsAuthenticated(true);
        showToast('Welcome back, Super Admin! Logged in successfully.');
      } else {
        setLoginError('Invalid email or password. Please use demo credentials.');
      }
      setIsLoggingIn(false);
    }, 400);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter(item => {
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.phone.includes(searchQuery) ||
        item.reference_id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = statusFilter === 'All' || item.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [enquiries, searchQuery, statusFilter]);

  // IF NOT AUTHENTICATED: RENDER ADMIN LOGIN PORTAL
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0b0a09] text-[#f4efea] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-[#ea580c] selection:text-white">
        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-950/95 border border-emerald-500/50 text-emerald-200 text-xs font-bold shadow-2xl backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Ambient background glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10 space-y-6">
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ea580c] to-[#f59e0b] items-center justify-center text-3xl shadow-2xl shadow-orange-950/50 border border-amber-400/30">
              🐅
            </div>
            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              Ranthambore <span className="text-[#ea580c]">Control Center</span>
            </h1>
            <p className="text-xs text-[#8a8175]">
              Super Admin &amp; Operations Management Portal
            </p>
          </div>

          {/* Login Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d2e4d9] shadow-xl backdrop-blur-xl space-y-5 text-xs text-[#082318]">
            <div className="border-b border-[#d2e4d9] pb-3 text-center">
              <h2 className="text-sm font-bold text-[#082318]">Administrator Sign In</h2>
              <p className="text-[11px] text-[#517362] mt-0.5">Enter authorized credentials to access website management</p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[#c8bfb4] font-semibold mb-1.5">Admin Email / Username</label>
                <div className="relative">
                  <Users className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8175]" />
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    placeholder="admin@ranthamborewildlifetour.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1815] border border-[#2b241e] text-white focus:outline-none focus:border-[#ea580c] transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[#c8bfb4] font-semibold">Secret Password</label>
                  <span
                    className="text-[10px] text-amber-400 hover:underline cursor-pointer"
                    onClick={() => alert('For password reset, please contact the Sawai Madhopur operations desk at +91 99719 65629.')}
                  >
                    Forgot?
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8175]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#1c1815] border border-[#2b241e] text-white focus:outline-none focus:border-[#ea580c] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8a8175] hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <label className="flex items-center gap-2 cursor-pointer text-[#a89f92] hover:text-white">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded bg-[#1c1815] border-[#2b241e] text-[#ea580c] focus:ring-0 cursor-pointer"
                  />
                  <span>Remember my login on this device</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs shadow-lg shadow-orange-950/50 flex items-center justify-center gap-2 cursor-pointer transition disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <span>Verifying Credentials...</span>
                ) : (
                  <>
                    <span>Sign In to Admin Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Credentials Box */}
            <div className="p-3.5 rounded-2xl bg-[#1a1714] border border-[#2e261f] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-amber-400">Quick Demo Access</span>
                <span className="text-[10px] text-[#73685c]">Pre-filled</span>
              </div>
              <div className="font-mono text-[11px] text-[#a89f92] space-y-0.5">
                <p>Email: <span className="text-white">admin@ranthamborewildlifetour.com</span></p>
                <p>Password: <span className="text-white">admin123</span></p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLoginEmail('admin@ranthamborewildlifetour.com');
                  setLoginPassword('admin123');
                  setIsAuthenticated(true);
                  showToast('Welcome back, Super Admin! Logged in successfully.');
                }}
                className="w-full mt-1 py-1.5 rounded-lg bg-[#25201c] hover:bg-amber-500/20 text-amber-300 text-[11px] font-semibold border border-amber-500/20 transition cursor-pointer"
              >
                ⚡ 1-Click Instant Demo Login
              </button>
            </div>

            <div className="text-center pt-1">
              <Link href="/" className="text-[11px] text-[#8a8175] hover:text-white transition">
                ← Return to Public Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#082318] flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-900 border border-emerald-500/50 text-white text-xs font-bold shadow-2xl backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP HEADER */}
      <header className="h-16 border-b border-[#d2e4d9] bg-white px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-600 flex items-center justify-center text-lg shadow-md">
            🐅
          </div>
          <div>
            <h1 className="font-serif text-base sm:text-lg font-bold text-[#082318] leading-tight">
              Website CMS <span className="text-emerald-800">Control Panel</span>
            </h1>
            <p className="text-[11px] text-[#517362]">
              Edit every text, image, card, package, and inquiry across the entire website
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#edf5f0] hover:bg-emerald-50 border border-[#d2e4d9] text-[#082318] text-xs font-semibold transition"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">View Public Website</span>
            <ExternalLink className="w-3 h-3 text-[#517362]" />
          </Link>

          {/* Admin Avatar Button */}
          <button
            onClick={() => setActiveTab('admin-profile')}
            className={`flex items-center gap-2 pl-2 border-l border-[#d2e4d9] hover:opacity-90 transition cursor-pointer ${
              activeTab === 'admin-profile' ? 'ring-2 ring-emerald-500/50 rounded-xl p-1 bg-emerald-50' : ''
            }`}
            title="Manage Admin Profile & Security"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-700 to-teal-600 text-white font-bold text-xs flex items-center justify-center border border-emerald-600/40 shadow-sm">
              RS
            </div>
            <div className="hidden md:block text-left text-xs">
              <p className="font-bold text-[#082318] leading-none">{adminProfile.fullName.split(' ')[0]}</p>
              <p className="text-[10px] text-emerald-800 mt-0.5 font-semibold">Admin Profile</p>
            </div>
          </button>

          {/* Logout Button */}
          <button
            onClick={() => {
              setIsAuthenticated(false);
              showToast('Logged out of Admin Console safely.');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 hover:text-rose-800 border border-rose-200 text-xs font-semibold transition cursor-pointer"
            title="Sign Out of Admin Console"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR */}
        <aside className="w-64 border-r border-[#d2e4d9] bg-[#f4f8f5] p-3 space-y-4 shrink-0 overflow-y-auto">
          {/* MAIN */}
          <div>
            <p className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#73685c]">
              Main
            </p>
            <div className="space-y-1 mt-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'dashboard'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-amber-400" />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('enquiries')}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'enquiries'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#ea580c]" />
                  <span>Safari Enquiries</span>
                </div>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#ea580c] text-white">
                  {enquiries.filter(e => e.status === 'New Enquiry').length}
                </span>
              </button>
            </div>
          </div>

          {/* HOMEPAGE SECTIONS */}
          <div>
            <p className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#73685c]">
              Website Sections (CMS)
            </p>
            <div className="space-y-1 mt-1">
              <button
                onClick={() => setActiveTab('cms-hero')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-hero'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4 text-orange-400" />
                <span>Hero &amp; Notice Bar</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-overview')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-overview'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Safari Overview &amp; Shifts</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-vehicles')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-vehicles'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Car className="w-4 h-4 text-amber-400" />
                <span>Gypsy vs Canter Specs</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-packages')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-packages'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Package className="w-4 h-4 text-yellow-400" />
                <span>Tour Packages</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-services')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-services'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Services (6 Cards)</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-zones')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-zones'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Safari Zones Guide</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-about')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-about'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Building2 className="w-4 h-4 text-orange-400" />
                <span>About Company &amp; Pillars</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-sightings')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-sightings'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Tiger Sightings Ticker</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-testimonials')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-testimonials'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Guest Reviews</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-guide')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-guide'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Travel Guide Articles</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-faqs')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-faqs'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>FAQs &amp; ID Rules</span>
              </button>
            </div>
          </div>

          {/* CONTACT & LEGAL */}
          <div>
            <p className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#73685c]">
              Contact &amp; Policies
            </p>
            <div className="space-y-1 mt-1">
              <button
                onClick={() => setActiveTab('cms-contact')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-contact'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Phones, WhatsApp &amp; Office</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-legal')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-legal'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Cancellation &amp; Policies</span>
              </button>

              <button
                onClick={() => setActiveTab('cms-seo')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'cms-seo'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span>SEO &amp; Google SERP</span>
              </button>

              <button
                onClick={() => setActiveTab('admin-profile')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === 'admin-profile'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    : 'text-[#a89f92] hover:bg-[#1a1714] hover:text-white'
                }`}
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Admin Profile &amp; Login</span>
              </button>
            </div>
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0e0d0c]">
          {/* TAB 0: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-5 max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">
                    Website Management <span className="text-[#ea580c]">Dashboard</span>
                  </h2>
                  <p className="text-xs text-[#8a8175]">
                    Overview of all 13 manageable website content sections and incoming customer inquiries.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Website Online
                </span>
              </div>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div onClick={() => setActiveTab('enquiries')} className="p-4 rounded-2xl bg-[#161412] hover:bg-[#1e1b17] border border-[#26221d] cursor-pointer transition">
                  <span className="text-[#8a8175]">Pending Inquiries</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-amber-400">
                      {enquiries.filter(e => e.status === 'New Enquiry').length}
                    </span>
                    <span className="text-[10px] text-amber-400/80">Need Callback</span>
                  </div>
                  <p className="text-[10px] text-[#6d655b] mt-1">{enquiries.length} Total Received</p>
                </div>

                <div onClick={() => setActiveTab('cms-packages')} className="p-4 rounded-2xl bg-[#161412] hover:bg-[#1e1b17] border border-[#26221d] cursor-pointer transition">
                  <span className="text-[#8a8175]">Tour Packages</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-white">{packages.length}</span>
                    <span className="text-[10px] text-emerald-400">Active</span>
                  </div>
                  <p className="text-[10px] text-[#6d655b] mt-1">Package Cards</p>
                </div>

                <div onClick={() => setActiveTab('cms-zones')} className="p-4 rounded-2xl bg-[#161412] hover:bg-[#1e1b17] border border-[#26221d] cursor-pointer transition">
                  <span className="text-[#8a8175]">Safari Zones</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-white">{zones.length}</span>
                    <span className="text-[10px] text-amber-400">Zones 1-10</span>
                  </div>
                  <p className="text-[10px] text-[#6d655b] mt-1">Gates &amp; Habitats</p>
                </div>

                <div onClick={() => setActiveTab('cms-sightings')} className="p-4 rounded-2xl bg-[#161412] hover:bg-[#1e1b17] border border-[#26221d] cursor-pointer transition">
                  <span className="text-[#8a8175]">Tiger Sightings</span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-serif text-white">{sightings.length}</span>
                    <span className="text-[10px] text-emerald-400">On Ticker</span>
                  </div>
                  <p className="text-[10px] text-[#6d655b] mt-1">Real-time Sightings</p>
                </div>
              </div>

              {/* Grid of All 12 Content Sections Shortcuts */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8a8175]">
                  Manage Website Content Sections
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  {[
                    { label: 'Hero & Notice Bar', tab: 'cms-hero', desc: 'Heading & stats' },
                    { label: 'Safari Overview', tab: 'cms-overview', desc: 'Journey & timings' },
                    { label: 'Vehicle Specs', tab: 'cms-vehicles', desc: 'Gypsy vs Canter' },
                    { label: 'Tour Packages', tab: 'cms-packages', desc: '5 packages' },
                    { label: 'Services Grid', tab: 'cms-services', desc: '6 service cards' },
                    { label: 'Safari Zones Guide', tab: 'cms-zones', desc: 'Gates & tigers' },
                    { label: 'About Company', tab: 'cms-about', desc: 'Story & pillars' },
                    { label: 'Sightings Ticker', tab: 'cms-sightings', desc: 'Moving strip' },
                    { label: 'Guest Reviews', tab: 'cms-testimonials', desc: 'Testimonials' },
                    { label: 'Travel Guides', tab: 'cms-guide', desc: '3 articles' },
                    { label: 'FAQs Section', tab: 'cms-faqs', desc: 'Questions & answers' },
                    { label: 'Contact Details', tab: 'cms-contact', desc: 'WhatsApp & phones' }
                  ].map(sec => (
                    <button
                      key={sec.label}
                      onClick={() => setActiveTab(sec.tab as TabType)}
                      className="p-3 rounded-xl bg-[#1c1916] hover:bg-[#25201c] border border-[#2b251f] text-left transition group"
                    >
                      <p className="font-bold text-white group-hover:text-amber-400">{sec.label}</p>
                      <p className="text-[10px] text-[#8a8175] mt-0.5">{sec.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4 max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">
                    Website Safari <span className="text-[#ea580c]">Enquiries</span>
                  </h2>
                  <p className="text-xs text-[#8a8175]">Directly received from website booking forms.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8a8175]">Status:</span>
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-[#1c1916] border border-[#2e2822] text-xs text-white focus:outline-none"
                  >
                    <option value="All">All ({enquiries.length})</option>
                    <option value="New Enquiry">New Enquiry</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </div>
              </div>

              <div className="rounded-2xl bg-[#161412] border border-[#26221d] overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#26221d] bg-[#1a1714] text-[11px] font-bold uppercase text-[#8a8175]">
                      <th className="py-3 px-4">Ref &amp; Guest</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Safari Date</th>
                      <th className="py-3 px-4">Vehicle &amp; Zone</th>
                      <th className="py-3 px-4">Pax</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#26221d]">
                    {filteredEnquiries.map(enq => (
                      <tr key={enq.id} className="hover:bg-[#1e1a17] transition">
                        <td className="py-3 px-4 font-bold text-white">{enq.name}</td>
                        <td className="py-3 px-4 font-mono text-[#c8bfb4]">{enq.phone}</td>
                        <td className="py-3 px-4 text-white">{enq.safari_date}</td>
                        <td className="py-3 px-4 text-[#ea580c]">{enq.safari_mode}</td>
                        <td className="py-3 px-4">{enq.adults} Adults</td>
                        <td className="py-3 px-4">
                          <select
                            value={enq.status}
                            onChange={e => {
                              const newSt = e.target.value as any;
                              setEnquiries(prev => prev.map(item => item.id === enq.id ? { ...item, status: newSt } : item));
                              showToast(`Status updated for ${enq.name}`);
                            }}
                            className="text-[11px] font-bold px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-white"
                          >
                            <option value="New Enquiry">New Enquiry</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <a
                            href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-bold"
                          >
                            <MessageCircle className="w-3 h-3" /> WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: HERO & NOTICE BAR */}
          {activeTab === 'cms-hero' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Hero Section &amp; <span className="text-[#ea580c]">Top Notice Bar</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Top Announcement Notice Bar</label>
                  <input
                    type="text"
                    value={heroContent.topNotice}
                    onChange={e => setHeroContent({ ...heroContent, topNotice: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Hero Badge Text</label>
                  <input
                    type="text"
                    value={heroContent.badgeText}
                    onChange={e => setHeroContent({ ...heroContent, badgeText: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Main Heading</label>
                  <input
                    type="text"
                    value={heroContent.mainHeading}
                    onChange={e => setHeroContent({ ...heroContent, mainHeading: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] font-serif font-bold text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Sub-Heading</label>
                  <textarea
                    rows={3}
                    value={heroContent.subHeading}
                    onChange={e => setHeroContent({ ...heroContent, subHeading: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={() => showToast('Hero section updated!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                    Save Hero Content
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAFARI OVERVIEW & SHIFTS */}
          {activeTab === 'cms-overview' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Safari Overview &amp; <span className="text-[#ea580c]">Shift Timings</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Section Title</label>
                  <input
                    type="text"
                    value={overviewContent.title}
                    onChange={e => setOverviewContent({ ...overviewContent, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Overview Description</label>
                  <textarea
                    rows={4}
                    value={overviewContent.description}
                    onChange={e => setOverviewContent({ ...overviewContent, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[#8a8175] mb-1">Winter Morning Shift</label>
                    <input
                      type="text"
                      value={overviewContent.morningShiftWinter}
                      onChange={e => setOverviewContent({ ...overviewContent, morningShiftWinter: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Winter Evening Shift</label>
                    <input
                      type="text"
                      value={overviewContent.eveningShiftWinter}
                      onChange={e => setOverviewContent({ ...overviewContent, eveningShiftWinter: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={() => showToast('Safari overview updated!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                    Save Overview
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GYPSY VS CANTER */}
          {activeTab === 'cms-vehicles' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Gypsy vs Canter <span className="text-[#ea580c]">Vehicle Specs</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                  <h3 className="font-bold text-amber-400">Maruti Gypsy (Jeep)</h3>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Title</label>
                    <input
                      type="text"
                      value={vehiclesContent.gypsyTitle}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, gypsyTitle: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Capacity</label>
                    <input
                      type="text"
                      value={vehiclesContent.gypsyCapacity}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, gypsyCapacity: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Est. Rate Per Person (₹)</label>
                    <input
                      type="number"
                      value={vehiclesContent.gypsyPricePerPerson}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, gypsyPricePerPerson: Number(e.target.value) })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                  <h3 className="font-bold text-amber-400">Canter Safari (Bus)</h3>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Title</label>
                    <input
                      type="text"
                      value={vehiclesContent.canterTitle}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, canterTitle: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Capacity</label>
                    <input
                      type="text"
                      value={vehiclesContent.canterCapacity}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, canterCapacity: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Est. Rate Per Person (₹)</label>
                    <input
                      type="number"
                      value={vehiclesContent.canterPricePerPerson}
                      onChange={e => setVehiclesContent({ ...vehiclesContent, canterPricePerPerson: Number(e.target.value) })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => showToast('Vehicle specs saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                  Save Vehicle Details
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: TOUR PACKAGES */}
          {activeTab === 'cms-packages' && (
            <div className="space-y-4 max-w-5xl mx-auto text-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-white">
                  Tour Packages <span className="text-[#ea580c]">Manager</span>
                </h2>
                <button
                  onClick={() => {
                    const newPkg = {
                      id: `pkg-${Date.now()}`,
                      name: 'New Custom Package',
                      duration: '2 Nights / 3 Days',
                      price: 13500,
                      safariCount: '2 Safaris Included',
                      hotelType: 'Deluxe Resort',
                      badge: 'New'
                    };
                    setPackages([newPkg, ...packages]);
                    showToast('Added new package!');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#ea580c] text-white font-bold"
                >
                  + Add Package
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.map(pkg => (
                  <div key={pkg.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                    <input
                      type="text"
                      value={pkg.name}
                      onChange={e => {
                        const val = e.target.value;
                        setPackages(prev => prev.map(p => p.id === pkg.id ? { ...p, name: val } : p));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-bold text-white text-sm"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={pkg.duration}
                        onChange={e => {
                          const val = e.target.value;
                          setPackages(prev => prev.map(p => p.id === pkg.id ? { ...p, duration: val } : p));
                        }}
                        className="px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                      />
                      <input
                        type="number"
                        value={pkg.price}
                        onChange={e => {
                          const val = Number(e.target.value);
                          setPackages(prev => prev.map(p => p.id === pkg.id ? { ...p, price: val } : p));
                        }}
                        className="px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-mono font-bold text-white text-right"
                      />
                    </div>
                    <input
                      type="text"
                      value={pkg.safariCount}
                      onChange={e => {
                        const val = e.target.value;
                        setPackages(prev => prev.map(p => p.id === pkg.id ? { ...p, safariCount: val } : p));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SERVICES */}
          {activeTab === 'cms-services' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Services <span className="text-[#ea580c]">(6 Cards)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(srv => (
                  <div key={srv.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400">
                      {srv.tag}
                    </span>
                    <input
                      type="text"
                      value={srv.title}
                      onChange={e => {
                        const val = e.target.value;
                        setServices(prev => prev.map(s => s.id === srv.id ? { ...s, title: val } : s));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                    />
                    <textarea
                      rows={3}
                      value={srv.desc}
                      onChange={e => {
                        const val = e.target.value;
                        setServices(prev => prev.map(s => s.id === srv.id ? { ...s, desc: val } : s));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => showToast('Services cards saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                  Save Services
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: ZONES 1-10 */}
          {activeTab === 'cms-zones' && (
            <div className="space-y-4 max-w-5xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Safari Zones <span className="text-[#ea580c]">Guide (Zones 1-10)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {zones.map((zone, idx) => (
                  <div key={zone.number} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{zone.number}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400">
                        {zone.type}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={zone.name}
                      onChange={e => {
                        const val = e.target.value;
                        setZones(prev => prev.map((z, i) => i === idx ? { ...z, name: val } : z));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-white font-semibold"
                    />
                    <div>
                      <span className="text-[10px] text-[#8a8175] block">Prominent Tigers:</span>
                      <input
                        type="text"
                        value={zone.famousTigers}
                        onChange={e => {
                          const val = e.target.value;
                          setZones(prev => prev.map((z, i) => i === idx ? { ...z, famousTigers: val } : z));
                        }}
                        className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-amber-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => showToast('Zone details saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                  Save Zones
                </button>
              </div>
            </div>
          )}

          {/* TAB 8: ABOUT COMPANY */}
          {activeTab === 'cms-about' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                About Company &amp; <span className="text-[#ea580c]">Trust Pillars</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Company Section Title</label>
                  <input
                    type="text"
                    value={aboutContent.title}
                    onChange={e => setAboutContent({ ...aboutContent, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Experience Story</label>
                  <textarea
                    rows={4}
                    value={aboutContent.story}
                    onChange={e => setAboutContent({ ...aboutContent, story: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div className="space-y-2 pt-2">
                  <label className="block text-[#8a8175] font-bold">The 4 Trust Pillars</label>
                  <input
                    type="text"
                    value={aboutContent.pillar1}
                    onChange={e => setAboutContent({ ...aboutContent, pillar1: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                  />
                  <input
                    type="text"
                    value={aboutContent.pillar2}
                    onChange={e => setAboutContent({ ...aboutContent, pillar2: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                  />
                  <input
                    type="text"
                    value={aboutContent.pillar3}
                    onChange={e => setAboutContent({ ...aboutContent, pillar3: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                  />
                  <input
                    type="text"
                    value={aboutContent.pillar4}
                    onChange={e => setAboutContent({ ...aboutContent, pillar4: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={() => showToast('About company content saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                    Save About Content
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: SIGHTINGS TICKER */}
          {activeTab === 'cms-sightings' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-white">
                  Tiger Sightings <span className="text-[#ea580c]">Ticker</span>
                </h2>
                <button
                  onClick={() => {
                    const newSig = {
                      id: `sig-${Date.now()}`,
                      code: 'T-124',
                      name: 'Riddhi',
                      zone: 'Zone 3',
                      landmark: 'Rajbagh Lake',
                      time: 'Just Now',
                      date: 'Today',
                      notes: 'Tigress spotted along water shoreline.'
                    };
                    setSightings([newSig, ...sightings]);
                    showToast('New sighting added!');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#ea580c] text-white font-bold"
                >
                  + Add Sighting
                </button>
              </div>

              <div className="space-y-3">
                {sightings.map(sig => (
                  <div key={sig.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#ea580c]">{sig.code}</span>
                        <input
                          type="text"
                          value={sig.name}
                          onChange={e => {
                            const val = e.target.value;
                            setSightings(prev => prev.map(s => s.id === sig.id ? { ...s, name: val } : s));
                          }}
                          className="px-2 py-0.5 rounded bg-[#1c1916] border border-[#2e2822] text-white font-bold"
                        />
                        <input
                          type="text"
                          value={sig.zone}
                          onChange={e => {
                            const val = e.target.value;
                            setSightings(prev => prev.map(s => s.id === sig.id ? { ...s, zone: val } : s));
                          }}
                          className="w-24 px-2 py-0.5 rounded bg-[#1c1916] border border-[#2e2822] text-amber-400 font-bold"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setSightings(prev => prev.filter(s => s.id !== sig.id));
                          showToast(`Removed sighting`);
                        }}
                        className="p-1 rounded bg-rose-950/40 text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={sig.landmark}
                      onChange={e => {
                        const val = e.target.value;
                        setSightings(prev => prev.map(s => s.id === sig.id ? { ...s, landmark: val } : s));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: TESTIMONIALS */}
          {activeTab === 'cms-testimonials' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Guest Reviews &amp; <span className="text-[#ea580c]">Testimonials</span>
              </h2>
              <div className="space-y-3">
                {testimonials.map(rev => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={rev.name}
                        onChange={e => {
                          const val = e.target.value;
                          setTestimonials(prev => prev.map(r => r.id === rev.id ? { ...r, name: val } : r));
                        }}
                        className="px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                      />
                      <input
                        type="text"
                        value={rev.location}
                        onChange={e => {
                          const val = e.target.value;
                          setTestimonials(prev => prev.map(r => r.id === rev.id ? { ...r, location: val } : r));
                        }}
                        className="px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#8a8175]"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={rev.quote}
                      onChange={e => {
                        const val = e.target.value;
                        setTestimonials(prev => prev.map(r => r.id === rev.id ? { ...r, quote: val } : r));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => showToast('Reviews saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                  Save Reviews
                </button>
              </div>
            </div>
          )}

          {/* TAB 11: TRAVEL GUIDES */}
          {activeTab === 'cms-guide' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Travel Guide <span className="text-[#ea580c]">Articles</span>
              </h2>
              <div className="space-y-3">
                {travelGuides.map((guide, idx) => (
                  <div key={guide.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <span className="text-[10px] text-amber-400 font-bold">{guide.category}</span>
                    <input
                      type="text"
                      value={guide.title}
                      onChange={e => {
                        const val = e.target.value;
                        setTravelGuides(prev => prev.map((g, i) => i === idx ? { ...g, title: val } : g));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                    />
                    <textarea
                      rows={2}
                      value={guide.summary}
                      onChange={e => {
                        const val = e.target.value;
                        setTravelGuides(prev => prev.map((g, i) => i === idx ? { ...g, summary: val } : g));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => showToast('Travel guide articles saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                  Save Guides
                </button>
              </div>
            </div>
          )}

          {/* TAB 12: FAQS */}
          {activeTab === 'cms-faqs' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-white">
                  FAQs &amp; <span className="text-[#ea580c]">ID Rules Accordion</span>
                </h2>
                <button
                  onClick={() => {
                    const newFaq = {
                      id: `faq-${Date.now()}`,
                      q: 'New Question About Safari Booking?',
                      a: 'Official response regarding permits and guidelines.'
                    };
                    setFaqs([newFaq, ...faqs]);
                    showToast('New FAQ added!');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#ea580c] text-white font-bold"
                >
                  + Add FAQ
                </button>
              </div>

              <div className="space-y-3">
                {faqs.map(faq => (
                  <div key={faq.id} className="p-4 rounded-2xl bg-[#161412] border border-[#26221d] space-y-2">
                    <input
                      type="text"
                      value={faq.q}
                      onChange={e => {
                        const val = e.target.value;
                        setFaqs(prev => prev.map(f => f.id === faq.id ? { ...f, q: val } : f));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] font-bold text-white"
                    />
                    <textarea
                      rows={3}
                      value={faq.a}
                      onChange={e => {
                        const val = e.target.value;
                        setFaqs(prev => prev.map(f => f.id === faq.id ? { ...f, a: val } : f));
                      }}
                      className="w-full px-2 py-1 rounded bg-[#1c1916] border border-[#2e2822] text-[#c8bfb4]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 13: CONTACT DETAILS */}
          {activeTab === 'cms-contact' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Phones, WhatsApp &amp; <span className="text-[#ea580c]">Office Address</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Primary Booking WhatsApp</label>
                    <input
                      type="text"
                      value={contactInfo.whatsappNumber}
                      onChange={e => setContactInfo({ ...contactInfo, whatsappNumber: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Helpline Calling Number</label>
                    <input
                      type="text"
                      value={contactInfo.phone1}
                      onChange={e => setContactInfo({ ...contactInfo, phone1: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Secondary Phone Number</label>
                    <input
                      type="text"
                      value={contactInfo.phone2}
                      onChange={e => setContactInfo({ ...contactInfo, phone2: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Booking Email Address</label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Office Address (Sawai Madhopur)</label>
                  <textarea
                    rows={2}
                    value={contactInfo.officeAddress}
                    onChange={e => setContactInfo({ ...contactInfo, officeAddress: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button onClick={() => showToast('Contact information saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                    Save Contact Info
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 14: LEGAL & CANCELLATION */}
          {activeTab === 'cms-legal' && (
            <div className="space-y-4 max-w-4xl mx-auto text-xs">
              <h2 className="text-xl font-serif font-bold text-white">
                Cancellation Policy &amp; <span className="text-[#ea580c]">Statutory Notice</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Footer Statutory Disclaimer</label>
                  <textarea
                    rows={3}
                    value={legalContent.disclaimer}
                    onChange={e => setLegalContent({ ...legalContent, disclaimer: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">Safari Cancellation Policy Rule</label>
                  <textarea
                    rows={3}
                    value={legalContent.cancellationSummary}
                    onChange={e => setLegalContent({ ...legalContent, cancellationSummary: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white"
                  />
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={() => showToast('Policy content saved!')} className="px-4 py-2 rounded-xl bg-[#ea580c] text-white font-bold">
                    Save Policy Text
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 15: SEO & GOOGLE SERP */}
          {activeTab === 'cms-seo' && (
            <div className="space-y-5 max-w-4xl mx-auto text-xs">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">
                  SEO Meta Tags &amp; <span className="text-[#ea580c]">Google Search Visibility</span>
                </h2>
                <p className="text-xs text-[#8a8175] mt-0.5">
                  Configure search engine meta tags, OpenGraph social cards, and Google search ranking snippets.
                </p>
              </div>

              {/* LIVE GOOGLE SERP PREVIEW */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                <div className="flex items-center justify-between border-b border-[#26221d] pb-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5" />
                    Live Google Search Result Preview
                  </span>
                  <span className="text-[10px] text-[#8a8175] bg-[#1c1916] px-2 py-0.5 rounded">
                    Desktop &amp; Mobile SERP
                  </span>
                </div>

                {/* Google Snippet Box */}
                <div className="p-4 rounded-xl bg-[#202124] border border-[#303134] space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-orange-600/30 text-orange-400 text-[10px] flex items-center justify-center font-bold">
                      🐅
                    </div>
                    <div className="text-[11px] text-[#dadce0] truncate">
                      <span>Ranthambore Wild Life Tour</span>
                      <span className="text-[#9aa0a6] text-[10px] ml-1.5">https://ranthamborewildlifetour.com</span>
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
                    {seoContent.metaTitle}
                  </h3>
                  <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-2">
                    {seoContent.metaDescription}
                  </p>
                </div>
              </div>

              {/* META TAGS FORM */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                {/* Meta Title */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[#c8bfb4] font-semibold">
                      Global Page Title (SEO Title Tag)
                    </label>
                    <span className={`text-[10px] font-bold ${
                      seoContent.metaTitle.length <= 60 ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {seoContent.metaTitle.length} / 60 characters
                    </span>
                  </div>
                  <input
                    type="text"
                    value={seoContent.metaTitle}
                    onChange={e => setSeoContent({ ...seoContent, metaTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                  />
                  <p className="text-[10px] text-[#73685c] mt-1">Recommended length: 50-60 characters for optimal display in Google SERPs.</p>
                </div>

                {/* Meta Description */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[#c8bfb4] font-semibold">
                      Meta Description (Search Snippet Summary)
                    </label>
                    <span className={`text-[10px] font-bold ${
                      seoContent.metaDescription.length <= 160 ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {seoContent.metaDescription.length} / 160 characters
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={seoContent.metaDescription}
                    onChange={e => setSeoContent({ ...seoContent, metaDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                  />
                  <p className="text-[10px] text-[#73685c] mt-1">Recommended length: 140-160 characters. Clearly explain permits, vehicles, and tours.</p>
                </div>

                {/* Focus Keywords */}
                <div>
                  <label className="block text-[#c8bfb4] font-semibold mb-1">
                    Primary Focus Keywords (Comma Separated)
                  </label>
                  <textarea
                    rows={2}
                    value={seoContent.keywords}
                    onChange={e => setSeoContent({ ...seoContent, keywords: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {seoContent.keywords.split(',').slice(0, 6).map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full text-[10px] bg-[#1e1a17] text-amber-300 border border-[#2e2822]">
                        {kw.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Canonical URL & OG Image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[#8a8175] mb-1">Canonical URL</label>
                    <input
                      type="text"
                      value={seoContent.canonicalUrl}
                      onChange={e => setSeoContent({ ...seoContent, canonicalUrl: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Social Card Image Path</label>
                    <input
                      type="text"
                      value={seoContent.ogImageUrl}
                      onChange={e => setSeoContent({ ...seoContent, ogImageUrl: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                </div>

                {/* Tracking & Search Console */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#26221d]">
                  <div>
                    <label className="block text-[#8a8175] mb-1">Google Search Console Verification Tag</label>
                    <input
                      type="text"
                      value={seoContent.googleSearchConsoleTag}
                      onChange={e => setSeoContent({ ...seoContent, googleSearchConsoleTag: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8a8175] mb-1">Google Analytics 4 Measurement ID</label>
                    <input
                      type="text"
                      value={seoContent.googleAnalyticsId}
                      onChange={e => setSeoContent({ ...seoContent, googleAnalyticsId: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#1c1916] border border-[#2e2822] text-white font-mono"
                    />
                  </div>
                </div>

                {/* Indexing Status */}
                <div className="pt-2 border-t border-[#26221d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-[#a89f92]">
                      Robots Directive: <strong>{seoContent.indexingDirective}</strong> • Sitemap: <strong>/sitemap.xml</strong> (Indexed)
                    </span>
                  </div>
                  <button
                    onClick={() => showToast('SEO meta tags & Google SERP settings published!')}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold transition shadow-lg shadow-orange-950/40"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save SEO Settings</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 16: ADMIN PROFILE & SECURITY */}
          {activeTab === 'admin-profile' && (
            <div className="space-y-5 max-w-4xl mx-auto text-xs">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">
                  Admin Profile &amp; <span className="text-[#ea580c]">Account Management</span>
                </h2>
                <p className="text-xs text-[#8a8175] mt-0.5">
                  Manage your admin credentials, login details, password, and lead alert notifications.
                </p>
              </div>

              {/* Profile Card Header */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1c1815] via-[#161412] to-[#12100e] border border-[#2e2822] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-[#ea580c] text-white font-serif font-bold text-xl flex items-center justify-center border-2 border-amber-400/40 shadow-xl shadow-orange-950/40">
                    RS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">{adminProfile.fullName}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Super Admin
                      </span>
                    </div>
                    <p className="text-xs text-[#a89f92] mt-0.5">{adminProfile.role}</p>
                    <p className="text-[11px] text-[#73685c] mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#ea580c]" />
                      {adminProfile.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Session Active
                  </span>
                </div>
              </div>

              {/* Personal Details Form */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Personal &amp; Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      value={adminProfile.fullName}
                      onChange={e => setAdminProfile({ ...adminProfile, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Admin Email Address</label>
                    <input
                      type="email"
                      value={adminProfile.email}
                      onChange={e => setAdminProfile({ ...adminProfile, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Direct Mobile / WhatsApp</label>
                    <input
                      type="text"
                      value={adminProfile.phone}
                      onChange={e => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white font-mono focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#c8bfb4] font-semibold mb-1">Official Role Title</label>
                    <input
                      type="text"
                      value={adminProfile.role}
                      onChange={e => setAdminProfile({ ...adminProfile, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-[#26221d]">
                  <button
                    onClick={() => showToast('Admin profile details updated!')}
                    className="px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold transition shadow-lg shadow-orange-950/40"
                  >
                    Save Profile Info
                  </button>
                </div>
              </div>

              {/* Password & Security */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Change Admin Password
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[#8a8175] mb-1">Current Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={passwordState.currentPassword}
                      onChange={e => setPasswordState({ ...passwordState, currentPassword: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8a8175] mb-1">New Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={passwordState.newPassword}
                      onChange={e => setPasswordState({ ...passwordState, newPassword: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8a8175] mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={passwordState.confirmPassword}
                      onChange={e => setPasswordState({ ...passwordState, confirmPassword: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#1c1916] border border-[#2e2822] text-white focus:outline-none focus:border-[#ea580c]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2 border-t border-[#26221d]">
                  <button
                    onClick={() => {
                      if (!passwordState.currentPassword || !passwordState.newPassword) {
                        alert('Please fill out password fields');
                        return;
                      }
                      if (passwordState.newPassword !== passwordState.confirmPassword) {
                        alert('New password and confirmation do not match');
                        return;
                      }
                      setPasswordState({ currentPassword: '', newPassword: '', confirmPassword: '' });
                      showToast('Admin password updated successfully!');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#25201c] hover:bg-[#302a24] text-amber-300 font-bold border border-[#3a342c] transition"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Inquiry Notifications & Alerts */}
              <div className="p-5 rounded-2xl bg-[#161412] border border-[#26221d] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Lead Alerts &amp; Notification Preferences
                </h4>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#1c1916] border border-[#2e2822]">
                    <div>
                      <p className="font-semibold text-white">Instant WhatsApp Lead Alert</p>
                      <p className="text-[11px] text-[#8a8175]">Send WhatsApp ping to admin mobile when a customer books a safari.</p>
                    </div>
                    <button
                      onClick={() => {
                        setAdminProfile({ ...adminProfile, whatsappAlertsEnabled: !adminProfile.whatsappAlertsEnabled });
                        showToast(`WhatsApp alerts ${!adminProfile.whatsappAlertsEnabled ? 'Enabled' : 'Disabled'}`);
                      }}
                      className={`px-3 py-1 rounded-lg font-bold text-xs ${
                        adminProfile.whatsappAlertsEnabled ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' : 'bg-stone-800 text-[#8a8175]'
                      }`}
                    >
                      {adminProfile.whatsappAlertsEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#1c1916] border border-[#2e2822]">
                    <div>
                      <p className="font-semibold text-white">Email Enquiry Notifications</p>
                      <p className="text-[11px] text-[#8a8175]">Send complete guest booking dossier to admin email.</p>
                    </div>
                    <button
                      onClick={() => {
                        setAdminProfile({ ...adminProfile, emailAlertsEnabled: !adminProfile.emailAlertsEnabled });
                        showToast(`Email alerts ${!adminProfile.emailAlertsEnabled ? 'Enabled' : 'Disabled'}`);
                      }}
                      className={`px-3 py-1 rounded-lg font-bold text-xs ${
                        adminProfile.emailAlertsEnabled ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' : 'bg-stone-800 text-[#8a8175]'
                      }`}
                    >
                      {adminProfile.emailAlertsEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Session Security & Sign Out */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                      Session Security &amp; Sign Out
                    </h4>
                    <p className="text-[11px] text-[#8a8175] mt-0.5">
                      End current active administrator session safely. You will need your password to log back in.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsAuthenticated(false);
                      showToast('Logged out successfully.');
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition cursor-pointer shrink-0"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out Now</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
