export default function ContactFooterSection() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Contact • PMIST University</h3>
            <div className="space-y-3 text-slate-200 text-sm">
              <p className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-[#d4af37] mt-2"></span> PMIST University, Vallam, Thanjavur - 613 403, Tamil Nadu, India</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-300"></span> cse@pmist.ac.in</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-300"></span> +91 4362 255 222</p>
              <p className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-indigo-300"></span> www.pmist.ac.in</p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-slate-200">
              <a href="#" aria-label="PMIST Facebook" className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20">Fb</a>
              <a href="#" aria-label="PMIST Twitter" className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20">Tw</a>
              <a href="#" aria-label="PMIST Instagram" className="p-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20">Ig</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="PMIST Campus Map"
              className="w-full h-[360px]"
              src="https://www.google.com/maps?q=PMIST%20University%20Vallam%20Thanjavur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a237e] to-indigo-500 flex items-center justify-center text-white font-black">C</div>
            <div>
              <p className="font-semibold">PMIST University • CITA 2025</p>
              <p className="text-xs text-slate-400">A Premier Institution Since 1994</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <a href="https://www.pmist.ac.in" target="_blank" rel="noreferrer" className="hover:text-white">PMIST Website</a>
            <a href="#" className="hover:text-white">School of Computing Sciences</a>
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/10 text-emerald-200 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span> NAAC A++ Grade
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
