export interface HealthTip {
  category: string;
  label: string;
  icon: string;
  tips: string[];
}

export const HEALTH_TIPS: HealthTip[] = [
  {
    category: "cold",
    label: "Cold & Flu",
    icon: "🤧",
    tips: [
      "Rest and get 7–9 hours of sleep to help your immune system recover.",
      "Drink warm fluids like tea with honey to soothe a sore throat.",
      "Use a humidifier or steam inhalation to ease congestion.",
      "Wash hands frequently to avoid spreading germs.",
    ],
  },
  {
    category: "infection",
    label: "Fever & Infection",
    icon: "🌡️",
    tips: [
      "Stay hydrated — water, broth, and electrolyte drinks help.",
      "Use paracetamol/acetaminophen to manage fever as directed.",
      "Dress lightly and keep your room cool to lower body temperature.",
      "Seek care if fever exceeds 39.4°C (103°F) or lasts over 3 days.",
    ],
  },
  {
    category: "digestive",
    label: "Digestive Health",
    icon: "🍵",
    tips: [
      "Sip clear fluids slowly to prevent dehydration.",
      "Try the BRAT diet (bananas, rice, applesauce, toast) for upset stomach.",
      "Avoid dairy, caffeine, and greasy foods until you recover.",
      "See a doctor if you can't keep fluids down for 24 hours.",
    ],
  },
  {
    category: "neurological",
    label: "Headaches",
    icon: "🧠",
    tips: [
      "Rest in a quiet, dark room during a headache or migraine.",
      "Stay hydrated — dehydration is a common headache trigger.",
      "Apply a cold or warm compress to your forehead or neck.",
      "Limit screen time and take regular breaks to reduce eye strain.",
    ],
  },
  {
    category: "general",
    label: "General Wellness",
    icon: "💪",
    tips: [
      "Aim for 30 minutes of movement most days of the week.",
      "Eat a balanced diet rich in fruits and vegetables.",
      "Manage stress with breathing exercises or short walks.",
      "Keep up with routine checkups and preventive screenings.",
    ],
  },
];

export interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  availability: string;
  image: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Amara Okafor",
    specialty: "General Physician",
    rating: 4.9,
    distance: "1.2 km away",
    availability: "Today, 3:00 PM",
    image: "👩🏾‍⚕️",
  },
  {
    name: "Dr. Rajesh Menon",
    specialty: "Internal Medicine",
    rating: 4.8,
    distance: "2.4 km away",
    availability: "Tomorrow, 10:00 AM",
    image: "👨🏽‍⚕️",
  },
  {
    name: "Dr. Sofia Almeida",
    specialty: "Family Medicine",
    rating: 4.7,
    distance: "3.1 km away",
    availability: "Today, 5:30 PM",
    image: "👩🏻‍⚕️",
  },
  {
    name: "Dr. Chen Wei",
    specialty: "Urgent Care",
    rating: 4.9,
    distance: "0.8 km away",
    availability: "Walk-in available",
    image: "🧑🏻‍⚕️",
  },
];

export interface RoadmapItem {
  phase: string;
  title: string;
  desc: string;
  icon: string;
}

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "Phase 2",
    title: "Real LLM-Based Triage",
    desc: "Swap the rule engine for Claude API to deliver nuanced, context-aware symptom assessment.",
    icon: "🤖",
  },
  {
    phase: "Phase 3",
    title: "Telemedicine & EHR Sync",
    desc: "Live video consults with doctors and secure electronic health record integration.",
    icon: "📹",
  },
  {
    phase: "Phase 4",
    title: "Wearable Data Integration",
    desc: "Pull heart rate, sleep, and activity data from wearables for proactive health insights.",
    icon: "⌚",
  },
];
