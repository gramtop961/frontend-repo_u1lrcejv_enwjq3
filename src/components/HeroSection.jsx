import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-indigo-100 border border-white/20 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] inline-block"></span>
          <span className="text-xs font-medium tracking-wide">NAAC A++ • Excellence in Technical Education Since 1994</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          COLLEGE SYMPOSIUM <span className="text-[#d4af37]">CITA 2025</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
          Where Innovation Meets Excellence at PMIST University
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#1a237e] to-indigo-500 shadow-lg shadow-indigo-900/30 hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 ring-indigo-300"
            aria-label="Register for CITA 2025"
          >
            <svg className="group-hover:rotate-12 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
            <span>Register Now</span>
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-indigo-100 bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 ring-indigo-300"
          >
            Explore Events
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-indigo-100/90 text-sm">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">1000+ Students</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">30+ Events</span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">15+ Industry Experts</span>
        </div>
      </div>
    </section>
  );
}
