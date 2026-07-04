import type { TriageResult, Severity } from "../lib/symptomEngine";
import { HEALTH_TIPS } from "../lib/data";

const STYLES: Record<
  Severity,
  { bg: string; border: string; badge: string; icon: string; label: string; bar: string }
> = {
  low: {
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    icon: "✅",
    label: "LOW",
    bar: "bg-green-500",
  },
  medium: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    icon: "⚠️",
    label: "MEDIUM",
    bar: "bg-amber-500",
  },
  high: {
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    icon: "🚨",
    label: "HIGH",
    bar: "bg-red-500",
  },
};

export default function ResultCard({ result }: { result: TriageResult }) {
  const s = STYLES[result.severity];
  const tips = HEALTH_TIPS.find((t) => t.category === result.tipsCategory);
  const barWidth = result.severity === "high" ? "100%" : result.severity === "medium" ? "60%" : "30%";

  return (
    <div className="flex justify-start">
      <div className={`max-w-[92%] rounded-2xl rounded-bl-sm border ${s.border} ${s.bg} p-4 shadow-sm`}>
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${s.badge}`}>
            <span>{s.icon}</span> {s.label} SEVERITY
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold text-slate-900">{result.title}</h3>

        {/* Severity meter */}
        <div className="mt-3">
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/70">
            <div className={`h-full rounded-full ${s.bar} transition-all`} style={{ width: barWidth }} />
          </div>
          <div className="mt-1 flex justify-between text-[10px] font-medium text-slate-400">
            <span>Self-care</span>
            <span>See doctor</span>
            <span>Emergency</span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">{result.recommendation}</p>

        <div className="mt-3 rounded-xl bg-white/70 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recommended next step</p>
          <p className="mt-1 text-sm font-medium text-slate-800">➡️ {result.action}</p>
          <p className="mt-1 text-xs text-slate-500">{result.detail}</p>
        </div>

        {result.matched.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {result.matched.slice(0, 6).map((m) => (
              <span key={m} className="rounded-full bg-white px-2 py-0.5 text-[11px] text-slate-500 ring-1 ring-slate-200">
                {m}
              </span>
            ))}
          </div>
        )}

        {tips && (
          <div className="mt-3 border-t border-white/60 pt-3">
            <p className="text-xs font-semibold text-slate-600">
              {tips.icon} Health tips for {tips.label}
            </p>
            <ul className="mt-1.5 space-y-1">
              {tips.tips.slice(0, 3).map((t) => (
                <li key={t} className="flex gap-1.5 text-xs text-slate-600">
                  <span className="text-teal-500">•</span> {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.severity !== "low" && result.matched.length > 0 && (
          <a
            href="#doctors"
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-teal-700"
          >
            Find a doctor near you →
          </a>
        )}
      </div>
    </div>
  );
}
