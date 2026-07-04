import { ROADMAP } from "../lib/data";

export default function Roadmap() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-300">
            Future Roadmap
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Where we're headed</h2>
          <p className="mt-2 text-slate-400">
            This demo runs on a fast rule engine. Here's what's next.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ROADMAP.map((r) => (
            <div
              key={r.phase}
              className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 transition hover:border-teal-500/50 hover:bg-slate-800"
            >
              <div className="text-3xl">{r.icon}</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-teal-400">{r.phase}</p>
              <h3 className="mt-1 text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
