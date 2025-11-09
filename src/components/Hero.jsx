import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 w-full">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              Personal Finance Tracker
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Take control of your money with clarity
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-xl">
              Track spending, set budgets, and visualize cash flow — all in one elegant dashboard built for peace of mind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#tracker" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
    </section>
  );
}
