// Company Information
export const COMPANY_INFO = {
  name: "Gorakhpur Property Check",
  tagline: "Your Trusted Property Verification Partner",
  founder: "Arun Singh",
  location: "Gopalganj, Bihar",
  serviceArea: "Gorakhpur, Uttar Pradesh",
  established: "2024"
};

// Contact Information
export const CONTACT_INFO = {
  phone: "+91 9693420595",
  phone2: "+91 9335317832",
  email: "info@gorakpurpropertycheck.com",
  address: "Third Floor, Yashodhara Complex, Near PSC Camp, Gorakhpur",
  whatsapp: "+91 9693420595"
};

// Services
export const SERVICES = [
  {
    id: 1,
    title: "Complete Land Verification",
    description: "Comprehensive property document verification and legal check from government records",
    icon: "🏠",
    features: [
      "Document authenticity check",
      "Legal status verification", 
      "Ownership history",
      "Government record verification"
    ]
  },
  {
    id: 2,
    title: "Khasra-Khata Verification",
    description: "Complete information extraction from government records including Khasra, Khata, map details",
    icon: "📋",
    features: [
      "Khasra number verification",
      "Khata number check",
      "Land survey records",
      "Map verification"
    ]
  },
  {
    id: 3,
    title: "G.D.A. Master Plan Check",
    description: "Land status verification in GDA master plan to ensure approved development area",
    icon: "🗺️",
    features: [
      "Master plan status",
      "Development permissions",
      "Future planning details",
      "Acquisition status check"
    ]
  },
  {
    id: 4,
    title: "Circle Rate Information",
    description: "Current and accurate circle rate information to help make informed investment decisions",
    icon: "💰",
    features: [
      "Current circle rates",
      "Rate comparison",
      "Market analysis",
      "Investment guidance"
    ]
  }
];

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: 1,
    name: "Basic Verification",
    price: 3000,
    duration: "3 days",
    features: [
      "Khasra-Khata Check",
      "Basic Document Verification", 
      "Ownership Status",
      "Government Record Check",
      "Basic Report"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Complete Verification", 
    price: 5000,
    duration: "2 days",
    features: [
      "All Basic features",
      "G.D.A. Master Plan Check",
      "Circle Rate Information",
      "Land Demarcation Details",
      "Detailed Report",
      "Legal Status Check"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Premium Service",
    price: 8000, 
    duration: "1 day",
    features: [
      "All Complete features",
      "Physical Site Visit",
      "Legal Consultation",
      "Market Analysis Report",
      "Same day report",
      "Expert Guidance"
    ],
    popular: false
  }
];

// Verification Checklist
export const VERIFICATION_CHECKLIST = [
  "Land Khasra, Map, Account Number (Gata)",
  "Whether land is under G.D.A. / Municipal Corporation / Housing Scheme acquisition",
  "Land Use classification",
  "Whether land is government, leased, or disputed",
  "Whether land demarcation has been completed",
  "Circle rate in that area",
  "Future road and development plan status",
  "Accurate expert report provision"
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    title: "Government Verified",
    description: "All information verified from official government records",
    icon: "🛡️"
  },
  {
    title: "100% Accurate",
    description: "Comprehensive verification with detailed reporting",
    icon: "✅"
  },
  {
    title: "Quick Response", 
    description: "Get your verification report within 24-48 hours",
    icon: "⚡"
  },
  {
    title: "Transparent Process",
    description: "Clear and honest reporting system with no hidden charges",
    icon: "👁️"
  },
  {
    title: "Expert Guidance",
    description: "Professional advice from property verification experts",
    icon: "👨‍🎓"
  },
  {
    title: "Affordable Pricing",
    description: "Quality service starting from just ₹3,000",
    icon: "💰"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Patna, Bihar",
    rating: 5,
    comment: "Saved me from buying a disputed property. Their verification report was detailed and accurate.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 2,
    name: "Priya Singh", 
    location: "Muzaffarpur, Bihar",
    rating: 5,
    comment: "Professional service with quick response. Got my property verified in just 24 hours.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 3,
    name: "Amit Sharma",
    location: "Gopalganj, Bihar", 
    rating: 5,
    comment: "Transparent process and fair pricing. Highly recommend for anyone buying property in Gorakhpur.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

// FAQ
export const FAQ = [
  {
    question: "What documents do I need for property verification?",
    answer: "You need property address, Khasra number, Khata number, and current owner details. We can also work with partial information."
  },
  {
    question: "How long does the verification process take?",
    answer: "Depending on the package, verification takes 1-3 days. Premium service provides same-day reports."
  },
  {
    question: "Is the information verified from government records?",
    answer: "Yes, all information is verified directly from official government databases and records."
  },
  {
    question: "Do you provide services for properties outside Gorakhpur?",
    answer: "Currently, we specialize in Gorakhpur properties, but we can assist with nearby areas on request."
  },
  {
    question: "What if the property has issues?",
    answer: "We provide detailed reports highlighting any issues found, along with recommendations for resolution."
  }
];

export default {
  COMPANY_INFO,
  CONTACT_INFO, 
  SERVICES,
  PRICING_PLANS,
  VERIFICATION_CHECKLIST,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  FAQ
};