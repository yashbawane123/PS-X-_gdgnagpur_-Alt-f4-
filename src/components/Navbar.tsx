export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg shadow-md shadow-teal-600/25">
            🩺
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            Smart<span className="text-teal-600">Care</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 sm:flex">
          <a href="#checker" className="transition hover:text-teal-600">Symptom Checker</a>
          <a href="#tips" className="transition hover:text-teal-600">Health Tips</a>
          <a href="#doctors" className="transition hover:text-teal-600">Find a Doctor</a>
        </nav>

        <a
          href="#checker"
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 active:scale-95"
        >
          Start Check
        </a>
      </div>
    </header>
  );
}
