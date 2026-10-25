// Central brand + content configuration for Ayushi Beauty Parlour.
// Replace the placeholder contact details below with the parlour's real numbers.

export const BRAND = {
  name: "Ayushi",
  fullName: "Ayushi Beauty Parlour",
  descriptor: "Beauty Parlour",
  academyName: "Ayushi Pro Academy",
  city: "Muzaffarpur",
  tagline: "Muzaffarpur's Premier Bridal Beauty Parlour & Hair Lounge",
  whatsappNumber: "919876543210",
  phonePrimary: "+91 98765 43210",
  phoneSecondary: "+91 91234 56780",
  email: "hello@ayushibeautyparlour.com",
  addressLine1: "Club Road, Near Mithanpura Main Road",
  addressLine2: "Muzaffarpur, Bihar 842002",
  hours: "9:30 AM – 8:30 PM",
  hoursNote: "Open all 7 days",
  mapQuery: "Club Road, Mithanpura, Muzaffarpur, Bihar 842002",
  instagram: "https://www.instagram.com/",
};

export const waLink = (message) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  BRAND.mapQuery
)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

export const mapDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BRAND.mapQuery
)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Academy", to: "/academy" },
  { label: "Contact", to: "/contact" },
];

export const HERO_SLIDES = [
  {
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/7e7338df9_generated_25e16e62.png",
    alt: "Bride with airbrushed bridal makeup and gold jewellery in dramatic studio light",
  },
  {
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/632cb28e2_generated_39198cac.png",
    alt: "Luxury salon interior with gold mirrors and velvet chairs",
  },
  {
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/caa135912_generated_05ebde76.png",
    alt: "Hairstylist finishing a glossy blow-dry",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Brides Styled" },
  { value: 10, suffix: "+", label: "Years Expertise" },
  { value: 100, suffix: "%", label: "Organic Products" },
];

export const BEFORE_AFTER = {
  before:
    "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/db6e3925a_generated_0d599805.png",
  after:
    "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/c4ebe8baa_generated_be0b9653.png",
};

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal & Engagement" },
  { id: "hair", label: "Hair & Styling" },
  { id: "skin", label: "Skin & Facials" },
  { id: "nails", label: "Nails & Lashes" },
];

export const SERVICES = [
  {
    id: "hd-bridal-makeup",
    name: "HD Bridal Makeup",
    category: "bridal",
    price: "₹8,000 – ₹15,000",
    duration: "3 hours",
    description:
      "High-definition base built layer by layer for a flawless camera finish, with lashes, contouring and a look designed around your lehenga and jewellery.",
  },
  {
    id: "airbrush-bridal",
    name: "Airbrush Bridal Makeover",
    category: "bridal",
    price: "₹12,000 – ₹22,000",
    duration: "4 hours",
    description:
      "Weightless airbrush application that stays fresh through every ritual and photograph, paired with a custom hairstyle and dupatta draping.",
  },
  {
    id: "engagement-makeup",
    name: "Engagement & Reception Makeup",
    category: "bridal",
    price: "₹6,000 – ₹9,000",
    duration: "2.5 hours",
    description:
      "Soft-glam or full-glam, tailored to the light and mood of your evening — luminous skin, defined eyes and a lip shade chosen for your outfit.",
  },
  {
    id: "bridal-package",
    name: "Complete Bridal Package",
    category: "bridal",
    price: "₹18,000 – ₹28,000",
    duration: "5 hours",
    description:
      "Bridal makeup, signature hairstyling, saree or lehenga draping, lashes and a pre-bridal skin consultation in one unhurried appointment.",
  },
  {
    id: "family-makeup",
    name: "Guest & Family Makeup",
    category: "bridal",
    price: "₹2,500 – ₹4,000",
    duration: "1.5 hours",
    description:
      "Elegant, long-wear looks for mothers, sisters and friends — grouped bookings available on the wedding morning.",
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    category: "hair",
    price: "₹3,500+",
    duration: "2 – 3 hours",
    description:
      "Frizz sealed at the cuticle for mirror-smooth hair that lasts up to four months, finished with a bond-repair mask.",
  },
  {
    id: "hair-botox",
    name: "Hair Botox & Smoothening",
    category: "hair",
    price: "₹4,500+",
    duration: "3 hours",
    description:
      "Deep repair for chemically tired hair — restores elasticity, softness and shine without flattening natural volume.",
  },
  {
    id: "bridal-hair",
    name: "Bridal Hair Styling",
    category: "hair",
    price: "₹2,500 – ₹6,000",
    duration: "1.5 hours",
    description:
      "Sculpted updos, soft waves or a sleek bun, finished with fresh florals, veils and maang tikka placement.",
  },
  {
    id: "global-colour",
    name: "Global Hair Colour",
    category: "hair",
    price: "₹2,800+",
    duration: "2 hours",
    description:
      "Ammonia-free, skin-tone matched colour with a gloss finish — from deep chocolate to warm caramel.",
  },
  {
    id: "haircut",
    name: "Signature Cut & Blow Dry",
    category: "hair",
    price: "₹700+",
    duration: "45 minutes",
    description:
      "A face-shape led cut with a bouncy blow-dry finish, styled to sit beautifully on day two as well.",
  },
  {
    id: "hydrafacial",
    name: "Ayushi Glow Hydrafacial",
    category: "skin",
    price: "₹2,500+",
    duration: "60 minutes",
    description:
      "Cleanse, extract and hydrate in one session — instant luminosity with zero downtime, ideal 3–5 days before an event.",
  },
  {
    id: "gold-facial",
    name: "24K Gold Radiance Facial",
    category: "skin",
    price: "₹1,800+",
    duration: "60 minutes",
    description:
      "A gold-foil ritual that warms and firms, leaving skin plumped and naturally lit from within.",
  },
  {
    id: "anti-acne",
    name: "Ozone Anti-Acne Treatment",
    category: "skin",
    price: "₹1,500+",
    duration: "45 minutes",
    description:
      "Targeted therapy for congestion and breakouts, calming inflammation and rebuilding the skin barrier.",
  },
  {
    id: "bridal-skin-prep",
    name: "Bridal Skin Prep (3 Sessions)",
    category: "skin",
    price: "₹6,000",
    duration: "3 × 60 minutes",
    description:
      "A four-week countdown programme — exfoliation, brightening and hydration so makeup sits flawlessly on the day.",
  },
  {
    id: "detan",
    name: "Bleach & De-Tan",
    category: "skin",
    price: "₹600+",
    duration: "30 minutes",
    description:
      "Gentle brightening for face, neck and arms to even out sun exposure before the mehndi and haldi functions.",
  },
  {
    id: "gel-extensions",
    name: "Gel Nail Extensions",
    category: "nails",
    price: "₹1,500+",
    duration: "90 minutes",
    description:
      "Lightweight, natural-looking extensions shaped to your hands in any length, with a high-gloss top coat.",
  },
  {
    id: "bridal-nail-art",
    name: "Bridal Gel Nail Art",
    category: "nails",
    price: "₹2,200+",
    duration: "2 hours",
    description:
      "Hand-painted gold filigree, chrome accents and pearl details designed to match your bridal jewellery.",
  },
  {
    id: "classic-lashes",
    name: "Classic Lash Extensions",
    category: "nails",
    price: "₹1,200+",
    duration: "90 minutes",
    description:
      "One-to-one lash application for an effortless, wide-awake look that lasts three to four weeks.",
  },
  {
    id: "volume-lashes",
    name: "Volume Lash Extensions",
    category: "nails",
    price: "₹2,000+",
    duration: "2 hours",
    description:
      "Handmade fans for a fuller, feather-light set — camera-ready without a strip lash in sight.",
  },
  {
    id: "mani-pedi",
    name: "Luxury Manicure & Pedicure",
    category: "nails",
    price: "₹1,400",
    duration: "75 minutes",
    description:
      "Warm soak, scrub, massage and a flawless polish finish — the quiet reset every bride deserves.",
  },
];

export const SERVICE_PREVIEW = [
  {
    title: "Bridal Makeup",
    copy: "HD & airbrush artistry built for 14-hour celebrations.",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/4c0eae8d0_generated_5ab56b01.png",
    category: "bridal",
  },
  {
    title: "Hair Keratin",
    copy: "Mirror-gloss smoothing that lasts up to four months.",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/27dad54ef_generated_5cb95087.png",
    category: "hair",
  },
  {
    title: "Luxury Facials",
    copy: "Hydration rituals that leave skin lit from within.",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/4453b1b6c_generated_589fb090.png",
    category: "skin",
  },
  {
    title: "Gel Nail Art",
    copy: "Hand-painted gold detail to match your bridal set.",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/8d9dba03a_generated_66235942.png",
    category: "nails",
  },
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "traditional", label: "Traditional Brides" },
  { id: "reception", label: "Reception Glam" },
  { id: "haldi", label: "Haldi & Mehndi" },
  { id: "hair", label: "Hair & Nails Art" },
];

export const GALLERY = [
  {
    id: "g1",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/1ff49b4be_generated_1ae3d5b3.png",
    category: "traditional",
    title: "The Heirloom Bride",
    description: "Traditional Look — HD Makeup, Hair & Draping",
    tall: true,
  },
  {
    id: "g2",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/516113fb4_generated_eed43b4b.png",
    category: "reception",
    title: "Champagne Hour",
    description: "Reception Look — Airbrush & Custom Hairstyle",
    tall: false,
  },
  {
    id: "g3",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/73036049a_generated_096c838d.png",
    category: "haldi",
    title: "Marigold Morning",
    description: "Haldi Look — Fresh Glow Makeup & Flower Styling",
    tall: true,
  },
  {
    id: "g4",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/993877a20_generated_3045d4de.png",
    category: "hair",
    title: "Jasmine Braid",
    description: "Bridal Hair — Braided Updo with Fresh Florals",
    tall: true,
  },
  {
    id: "g5",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/7d8d4efb1_generated_02e10245.png",
    category: "traditional",
    title: "Kaleere & Mehndi",
    description: "Traditional Detail — Bridal Mehndi & Gold Kaleere",
    tall: false,
  },
  {
    id: "g6",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/ecc8192e5_generated_4f6d4d7f.png",
    category: "reception",
    title: "Midnight Velvet",
    description: "Reception Look — Sleek Bun & Statement Jewellery",
    tall: true,
  },
  {
    id: "g7",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/57e8362cf_generated_8c245cfa.png",
    category: "haldi",
    title: "Henna Palms",
    description: "Mehndi Detail — Intricate Bridal Henna",
    tall: false,
  },
  {
    id: "g8",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/1bc8630a4_generated_e3beeb75.png",
    category: "hair",
    title: "Gilded Tips",
    description: "Nail Art — Gold Filigree on Nude Almond Nails",
    tall: false,
  },
  {
    id: "g9",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/f138ecc70_generated_55d7cb21.png",
    category: "traditional",
    title: "Ivory & Kundan",
    description: "Traditional Look — Soft Veil & Kundan Choker",
    tall: true,
  },
  {
    id: "g10",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/9639f9f23_generated_5821dca4.png",
    category: "reception",
    title: "Graphic Gold",
    description: "Reception Glam — Graphic Liner & Glass Skin",
    tall: false,
  },
  {
    id: "g11",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/e6808560e_generated_12766bbe.png",
    category: "haldi",
    title: "Mehndi Night",
    description: "Mehndi Look — Floral Braid & Dewy Makeup",
    tall: true,
  },
  {
    id: "g12",
    src: "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/1a61744ff_generated_46693e93.png",
    category: "hair",
    title: "Glass Blowout",
    description: "Hair Styling — High-Shine Blowout with Soft Waves",
    tall: true,
  },
];

export const REVIEWS = [
  {
    name: "Shreya Sinha",
    location: "Mithanpura, Muzaffarpur",
    service: "Airbrush Bridal Makeover",
    text: "My makeup survived a 14-hour wedding day and still looked fresh in the last photograph. The team understood exactly what I wanted without a single trial.",
  },
  {
    name: "Ankita Jha",
    location: "Club Road",
    service: "Complete Bridal Package",
    text: "Draping, hair, makeup — everything was calm and on time. My mother still talks about how comfortable the studio made her feel.",
  },
  {
    name: "Priyanka Kumari",
    location: "Kalambagh Chowk",
    service: "24K Gold Radiance Facial",
    text: "I booked the gold facial three days before my reception. My skin has never looked this healthy, and the glow was real, not just makeup.",
  },
  {
    name: "Nidhi Verma",
    location: "Bela",
    service: "Keratin Treatment",
    text: "Four months later my hair is still smooth. They explained every step and used products that suited my damaged ends.",
  },
  {
    name: "Ritika Singh",
    location: "Ramna",
    service: "Bridal Gel Nail Art",
    text: "The nail art matched my kundan set perfectly. Every guest asked where I got it done — I happily sent them all here.",
  },
  {
    name: "Sakshi Mishra",
    location: "Aghoria Bazar",
    service: "Engagement Makeup",
    text: "Soft glam that still looked like me. The studio lighting and the mirrors alone are worth the visit.",
  },
];

export const COURSES = [
  {
    id: "professional-bridal",
    title: "Professional Bridal Makeup Course",
    duration: "3 Months",
    level: "Beginner to Pro",
    fee: "₹45,000",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/da3ecbcc0_generated_574437b6.png",
    includes: [
      "HD, airbrush & cream-based techniques",
      "Colour theory for Indian skin tones",
      "Bridal hairstyling & draping basics",
      "Kit guidance and pricing your work",
      "Live bridal shoots and client handling",
    ],
  },
  {
    id: "advanced-hair",
    title: "Advanced Hair Styling & Chemical Treatments",
    duration: "1 Month",
    level: "Intermediate",
    fee: "₹28,000",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/8966ee688_generated_f170472a.png",
    includes: [
      "Keratin, botox & smoothening protocols",
      "Global colour and root touch-up work",
      "Bridal updos, blowouts & tongs",
      "Hair health diagnosis and consultation",
      "Salon-speed practice sessions",
    ],
  },
  {
    id: "self-grooming",
    title: "Self-Grooming & Personal Makeup Masterclass",
    duration: "1 Week",
    level: "All Levels",
    fee: "₹9,500",
    image:
      "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/eb743018d_generated_bc50480c.png",
    includes: [
      "Everyday skin prep and base matching",
      "Five-minute office and evening looks",
      "Bridal-adjacent looks for family events",
      "Product selection on any budget",
      "Personal kit review with our artists",
    ],
  },
];

export const ACADEMY_IMAGE =
  "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/a1edab4dd_generated_168c7e0f.png";

export const STUDIO_IMAGE =
  "https://media.base44.com/images/public/6addc1f8f0e5d5cc131935de/b8c708bd6_generated_50c49daa.png";

export const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
  "7:00 PM",
];