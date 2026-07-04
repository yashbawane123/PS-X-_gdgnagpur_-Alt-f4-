import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SymptomChecker from "./components/SymptomChecker";
import HealthTips from "./components/HealthTips";
import DoctorFinder from "./components/DoctorFinder";
import Roadmap from "./components/Roadmap";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <SymptomChecker />
        <HealthTips />
        <DoctorFinder />
        <Roadmap />
      </main>
      <footer className="border-t border-slate-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-sm">
              🩺
            </div>
            <span className="font-extrabold text-slate-900">
              Smart<span className="text-teal-600">Care</span>
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-slate-400">
            SmartCare is a hackathon demo. It provides general, rule-based guidance only and is
            <strong> not a medical diagnosis</strong>. Always consult a qualified healthcare
            professional. In an emergency, call your local emergency number.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} SmartCare · Built for the 1-Hour Sprint 🚀
          </p>
        </div>
      </footer>
    </div>
  );
}
