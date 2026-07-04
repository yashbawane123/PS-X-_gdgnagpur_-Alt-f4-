export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-teal-700 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
              AI-Powered Health Triage
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Not sure if you need a{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                doctor?
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
              Describe your symptoms and get an instant first-opinion assessment —
              know whether it's <strong>self-care</strong>, a <strong>doctor visit</strong>,
              or an <strong>emergency</strong>. Stop panicking. Stop delaying.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#checker"
                className="rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 hover:shadow-teal-600/40 active:scale-95"
              >
                Check My Symptoms →
              </a>
              <a
                href="#tips"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
              >
                Browse Health Tips
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Stat value="Instant" label="Assessment" />
              <Stat value="3-level" label="Severity triage" />
              <Stat value="24/7" label="Available" />
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="mx-auto max-w-sm rotate-1 rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-300/40">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-xl">🩺</div>
                <div>
                  <p className="text-sm font-bold text-slate-900">SmartCare</p>
                  <p className="text-xs text-slate-400">Symptom assessment</p>
                </div>
              </div>
              <div className="mt-4 space-y-2.5">
                <Bubble>I have a fever, headache and chills</Bubble>
                <div className="rounded-2xl rounded-bl-sm border border-amber-200 bg-amber-50 p-3">
                  <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    ⚠️ MEDIUM
                  </span>
                  <p className="mt-2 text-xs text-slate-600">
                    Consider seeing a doctor within 24 hours. Stay hydrated and rest.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -rotate-6 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-semibold text-slate-700">✅ 3 tips generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}

function Bubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-teal-600 px-3 py-2 text-xs text-white">
      {children}
    </div>
  );
}
