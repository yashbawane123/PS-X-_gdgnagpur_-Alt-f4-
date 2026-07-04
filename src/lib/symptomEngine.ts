export type Severity = "low" | "medium" | "high";

export interface TriageResult {
  severity: Severity;
  title: string;
  recommendation: string;
  action: string;
  matched: string[];
  detail: string;
  tipsCategory: string;
}

interface Rule {
  keywords: string[];
  weight: number; // contribution to severity score
  category: string;
}

// Rule-based symptom -> severity mapping. Looks "AI" in the demo, zero setup risk.
const RULES: Rule[] = [
  // High / emergency signals
  { keywords: ["chest pain", "chest tightness", "pressure in chest"], weight: 10, category: "cardiac" },
  { keywords: ["difficulty breathing", "shortness of breath", "can't breathe", "cannot breathe", "trouble breathing"], weight: 10, category: "respiratory" },
  { keywords: ["unconscious", "fainting", "passed out", "loss of consciousness"], weight: 10, category: "neurological" },
  { keywords: ["stroke", "slurred speech", "face drooping", "numbness on one side", "sudden weakness"], weight: 10, category: "neurological" },
  { keywords: ["severe bleeding", "heavy bleeding", "won't stop bleeding"], weight: 10, category: "trauma" },
  { keywords: ["seizure", "convulsion"], weight: 10, category: "neurological" },
  { keywords: ["suicidal", "want to die", "self harm"], weight: 10, category: "mental" },
  { keywords: ["blue lips", "turning blue"], weight: 10, category: "respiratory" },

  // Medium signals
  { keywords: ["high fever", "fever 103", "fever 104", "very high temperature"], weight: 5, category: "infection" },
  { keywords: ["persistent vomiting", "can't keep fluids", "vomiting blood"], weight: 6, category: "digestive" },
  { keywords: ["severe pain", "unbearable pain", "worst pain"], weight: 6, category: "general" },
  { keywords: ["dehydration", "dizzy", "dizziness", "lightheaded"], weight: 3, category: "general" },
  { keywords: ["migraine", "severe headache"], weight: 4, category: "neurological" },
  { keywords: ["rash spreading", "swelling", "allergic reaction", "hives"], weight: 4, category: "allergy" },
  { keywords: ["ear infection", "abdominal pain", "stomach pain", "back pain"], weight: 3, category: "general" },
  { keywords: ["persistent cough", "cough for weeks", "coughing blood"], weight: 5, category: "respiratory" },

  // Low signals
  { keywords: ["fever", "temperature"], weight: 2, category: "infection" },
  { keywords: ["headache"], weight: 1, category: "neurological" },
  { keywords: ["cough", "sore throat", "runny nose", "congestion", "sneezing", "stuffy nose"], weight: 1, category: "cold" },
  { keywords: ["chills"], weight: 1, category: "infection" },
  { keywords: ["fatigue", "tired", "exhausted"], weight: 1, category: "general" },
  { keywords: ["nausea"], weight: 2, category: "digestive" },
  { keywords: ["muscle ache", "body ache", "joint pain"], weight: 1, category: "general" },
  { keywords: ["cold", "flu"], weight: 1, category: "cold" },
  { keywords: ["diarrhea", "upset stomach"], weight: 2, category: "digestive" },
];

export function analyzeSymptoms(input: string): TriageResult {
  const text = input.toLowerCase();
  let score = 0;
  const matched: string[] = [];
  const categoryScores: Record<string, number> = {};

  for (const rule of RULES) {
    for (const kw of rule.keywords) {
      if (text.includes(kw)) {
        score += rule.weight;
        matched.push(kw);
        categoryScores[rule.category] = (categoryScores[rule.category] || 0) + rule.weight;
        break; // only count a rule once
      }
    }
  }

  // number of distinct symptoms slightly bumps concern
  const distinctBump = matched.length >= 3 ? 1 : 0;
  score += distinctBump;

  // dominant category for tips
  let tipsCategory = "general";
  let best = 0;
  for (const [cat, s] of Object.entries(categoryScores)) {
    if (s > best) {
      best = s;
      tipsCategory = cat;
    }
  }

  let severity: Severity = "low";
  if (score >= 10) severity = "high";
  else if (score >= 4) severity = "medium";
  else if (score === 0) {
    return {
      severity: "low",
      title: "Not enough information",
      recommendation:
        "I couldn't confidently identify specific symptoms. Try describing what you're feeling — for example: \"fever, headache, and chills\".",
      action: "Describe your symptoms",
      matched: [],
      detail:
        "Tip: mention duration, severity, and any specific body areas affected for a better assessment.",
      tipsCategory: "general",
    };
  }

  const templates: Record<Severity, Omit<TriageResult, "matched" | "tipsCategory">> = {
    low: {
      severity: "low",
      title: "Low Concern — Likely manageable at home",
      recommendation:
        "Your symptoms appear mild and commonly resolve with rest and self-care. Monitor how you feel over the next 24–48 hours.",
      action: "Self-care & monitor",
      detail:
        "Stay hydrated, rest well, and use over-the-counter remedies as needed. Seek care if symptoms worsen or persist beyond a few days.",
    },
    medium: {
      severity: "medium",
      title: "Medium Concern — Consider seeing a doctor",
      recommendation:
        "Your symptoms may benefit from professional evaluation. It's a good idea to consult a doctor or visit a clinic soon.",
      action: "See a doctor soon",
      detail:
        "Book an appointment within the next 24 hours. If symptoms escalate quickly or new severe symptoms appear, seek urgent care.",
    },
    high: {
      severity: "high",
      title: "High Concern — Seek emergency care now",
      recommendation:
        "Your symptoms may indicate a serious condition. Please seek emergency medical attention or call your local emergency number immediately.",
      action: "Go to ER / Call emergency",
      detail:
        "Do not wait. Call emergency services (e.g., 911 / 112) or go to the nearest emergency room right away.",
    },
  };

  const t = templates[severity];
  return { ...t, matched, tipsCategory };
}
