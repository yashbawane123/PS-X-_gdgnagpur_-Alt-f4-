import { useState } from "react";
import { HEALTH_TIPS } from "../lib/data";

export default function HealthTips() {
  const [active, setActive] = useState(0);
  const tip = HEALTH_TIPS[active];

  return (
    <section id="tips" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Curated Health Tips
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Practical advice by category
          </h2>
          <p className="mt-2 text-slate-500">Simple, doctor-informed guidance you can act on today.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {HEALTH_TIPS.map((t, i) => (
            <button
              key={t.category}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === i
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {tip.tips.map((t, i) => (
            <div
              key={t}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition hover:border-teal-200 hover:bg-teal-50/40"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-sm font-bold text-teal-700">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
