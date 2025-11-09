import { Wallet, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm">
            <Wallet size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">FlowLedger</span>
        </div>
        <nav className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
            <Settings size={16} />
            Settings
          </button>
          <a
            href="#tracker"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition"
          >
            Start Tracking
          </a>
        </nav>
      </div>
    </header>
  );
}
