export interface QuickActionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badgeColor?: string;
  actionText: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface WhyChooseItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  category: "all" | "veneers" | "before-after" | "restorative";
  title: string;
  patientInfo: string;
  description: string;
  dentist: string;
  imageBefore: string;
  imageAfter: string;
  duration: string;
  treatment: string;
}

export interface BlogItem {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  date: string;
}

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Procedures", href: "#procedures" },
  { name: "Gallery", href: "#gallery" },
  { name: "Smile Stories", href: "#testimonials" },
  { name: "Contact Us", href: "#appointment" },
  { name: "Blog", href: "#blog" },
];

export const CLINIC_CONTACT = {
  phone: "+971 6 556 7888",
  whatsapp: "+971 50 123 4567",
  emergency: "+971 50 999 8888",
  email: "care@smilecare.ae",
  address: "Al Buhaira Corniche, Al Majaz 3, Sharjah, UAE",
  openingHours: "Sat – Thu: 9:00 AM – 9:00 PM | Friday: Closed",
};

export const QUICK_ACTIONS: QuickActionItem[] = [
  {
    id: "action-1",
    title: "Book Visit",
    description: "Schedule your dental consultation.",
    icon: "CalendarCheck",
    badgeColor: "#EBF3FE",
    actionText: "Book now",
  },
  {
    id: "action-2",
    title: "Emergency Dentist",
    description: "Get urgent dental care today.",
    icon: "AlertCircle",
    badgeColor: "#FEECEB",
    actionText: "Emergency line",
  },
  {
    id: "action-3",
    title: "WhatsApp Us",
    description: "Chat with our dental team now.",
    icon: "MessageSquare",
    badgeColor: "#E6F7F0",
    actionText: "Start chat",
  },
  {
    id: "action-4",
    title: "Directions",
    description: "Find our clinic in Al Majaz, Sharjah.",
    icon: "MapPin",
    badgeColor: "#EFF4FF",
    actionText: "Get directions",
  },
];

export const CLINIC_STATS: StatItem[] = [
  { value: "15k+", label: "Satisfied Patients" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "17+", label: "Years of Excellence" },
  { value: "25k+", label: "Smile Restorations" },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "t1",
    title: "Cosmetic Dental Care",
    description: "Custom porcelain veneers, aesthetic gum re-contouring, and natural smile transformations.",
    image: "/images/treatment-1.jpg",
    tag: "Cosmetic Design",
  },
  {
    id: "t2",
    title: "Restorative Dentistry",
    description: "Precision titanium implants, crown rehabilitations, and microscopic endodontics.",
    image: "/images/treatment-2.jpg",
    tag: "Advanced Restorative",
  },
  {
    id: "t3",
    title: "Preventive Care",
    description: "Comprehensive bio-hygiene therapy, digital bite scans, and proactive oral wellness.",
    image: "/images/treatment-3.jpg",
    tag: "Preventive & Family",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "why-1",
    tag: "Clinical Excellence",
    title: "Board-Certified Specialists",
    description: "Multidisciplinary consultants with advanced international fellowships and extensive clinical mastery.",
    image: "/images/why-1.jpg",
  },
  {
    id: "why-2",
    tag: "Digital Precision",
    title: "Advanced 3D Technology",
    description: "Ultra-low dose CBCT 3D imaging, intraoral optical scanners, and painless laser-assisted protocols.",
    image: "/images/why-2.jpg",
  },
  {
    id: "why-3",
    tag: "Patient Experience",
    title: "Dedicated Boutique Care",
    description: "Serene clinical suites, individualized treatment sequencing, and zero-wait concierge appointments.",
    image: "/images/why-3.jpg",
  },
];

export const TECHNOLOGY_ITEMS: TechnologyItem[] = [
  {
    id: "tech-1",
    title: "Intraoral Cameras",
    description: "High-definition real-time visualization allowing patients to see exactly what the dentist observes.",
    icon: "Scan",
  },
  {
    id: "tech-2",
    title: "Digital X-Ray (RVG)",
    description: "Instant diagnosis with over 80% reduced radiation compared to conventional dental radiographs.",
    icon: "Radio",
  },
  {
    id: "tech-3",
    title: "Soft Tissue Laser",
    description: "Bloodless, suture-free soft tissue sculpting with accelerated cellular healing and minimal discomfort.",
    icon: "Sparkles",
  },
  {
    id: "tech-4",
    title: "Zoom Whitening",
    description: "Clinically proven safe in-office light-activated system brightening smiles up to 8 shades in 45 minutes.",
    icon: "Sun",
  },
  {
    id: "tech-5",
    title: "Intelligent Systems",
    description: "AI-assisted radiographic diagnostic software for early sub-surface caries detection and margin analysis.",
    icon: "Cpu",
  },
  {
    id: "tech-6",
    title: "Damon Braces",
    description: "Passive self-ligating low-friction brackets offering gentle tooth movement and shorter treatment cycles.",
    icon: "Smile",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    category: "veneers",
    title: "Full Arch Porcelain Smile Rehabilitation",
    patientInfo: "Patient A.M., 34 — Aesthetic Restoration",
    description: "Corrected severe fluorosis discoloration, enamel wear, and asymmetrical midline through 10 ultrathin minimally prepped lithium disilicate veneers.",
    dentist: "Dr. Riyaz Jamaluddin, MSc Helsinki",
    duration: "2 Appointments over 10 Days",
    treatment: "Minimal prep E-Max Veneers",
    imageBefore: "/images/gallery-before.jpg",
    imageAfter: "/images/gallery-after.jpg",
  },
  {
    id: "gal-2",
    category: "before-after",
    title: "Comprehensive Restorative & Alignment Transformation",
    patientInfo: "Patient K.S., 29 — Bite & Aesthetic Alignment",
    description: "Treated anterior crowding and fractured incisal edges using Damon clear self-ligating mechanics followed by conservative aesthetic bonding.",
    dentist: "Dr. Riyaz Jamaluddin, MSc Helsinki",
    duration: "8 Months Treatment",
    treatment: "Orthodontics & Composite Artistry",
    imageBefore: "/images/gallery-before.jpg",
    imageAfter: "/images/gallery-after.jpg",
  },
  {
    id: "gal-3",
    category: "restorative",
    title: "Biomimetic Ceramic Crown & Implant Replacement",
    patientInfo: "Patient M.R., 42 — Posterior Rehabilitation",
    description: "Single-stage guided implant placement with immediate zirconia contouring restoring masticatory function and optimal gingival contours.",
    dentist: "Dr. Riyaz Jamaluddin, MSc Helsinki",
    duration: "3 Months Integration",
    treatment: "Guided Implant & Zirconia Crown",
    imageBefore: "/images/gallery-before.jpg",
    imageAfter: "/images/gallery-after.jpg",
  },
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: "blog-1",
    category: "EMERGENCY DENTAL",
    title: "What to do when a tooth gets knocked out or chips unexpectedly",
    description: "Crucial first 30-minute steps to preserve periodontal ligament cells and save a permanent avulsed tooth before reaching the clinic.",
    readTime: "4 min read",
    date: "March 2026",
  },
  {
    id: "blog-2",
    category: "ORTHODONTICS",
    title: "Types of Braces: Comparing Invisalign vs Damon System for adults",
    description: "A comprehensive clinical comparison of biological tooth movement speeds, comfort, daily lifestyle habits, and complex bite corrections.",
    readTime: "6 min read",
    date: "February 2026",
  },
  {
    id: "blog-3",
    category: "ENDODONTICS",
    title: "Tooth Pain: When is a root canal necessary versus a deep restoration?",
    description: "Understanding reversible vs irreversible pulpitis, modern rotary nickel-titanium instrumentation, and painless restorative therapies.",
    readTime: "5 min read",
    date: "January 2026",
  },
];
