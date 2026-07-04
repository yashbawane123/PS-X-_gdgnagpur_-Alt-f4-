import { DOCTORS } from "../lib/data";

export default function DoctorFinder() {
  return (
    <section id="doctors" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Find Care Nearby
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Connect with a doctor
          </h2>
          <p className="mt-2 text-slate-500">
            Verified professionals near you. Live booking coming soon.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {DOCTORS.map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
                {d.image}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-bold text-slate-900">{d.name}</h3>
                  <span className="flex items-center gap-0.5 text-xs font-semibold text-amber-500">
                    ★ {d.rating}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{d.specialty}</p>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-400">
                  <span>📍 {d.distance}</span>
                  <span className="text-teal-600">🕒 {d.availability}</span>
                </div>
              </div>
              <button
                className="shrink-0 cursor-not-allowed rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400"
                title="Booking coming soon"
              >
                Book
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-teal-300 bg-teal-50/50 p-4 text-center">
          <p className="text-sm text-teal-700">
            🚧 <strong>Coming Soon:</strong> Real-time booking, telemedicine video calls, and
            location-based clinic search via live API.
          </p>
        </div>
      </div>
    </section>
  );
}
