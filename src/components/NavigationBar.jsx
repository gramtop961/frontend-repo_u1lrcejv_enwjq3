import { useEffect, useState } from 'react';

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#timeline', label: 'Schedule' },
    { href: '#register', label: 'Register' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
      }`}
      aria-label="PMIST CITA 2025 Navigation"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" role="navigation">
        <a href="#home" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 ring-indigo-500 rounded-md" aria-label="PMIST University Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1a237e] to-indigo-500 flex items-center justify-center text-white font-black">C</div>
          <div className="leading-tight">
            <p className="text-slate-900 font-extrabold tracking-tight">PMIST • CITA 2025</p>
            <p className="text-[11px] text-slate-600">Ponnaiyah Ramajayam Institute of Science and Technology</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-[#1a237e] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#1a237e] to-indigo-500 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 ring-indigo-500"
            aria-label="Register Now"
          >
            Register Now
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 bg-white/60 text-slate-900 focus:outline-none focus-visible:ring-2 ring-indigo-500"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/90">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-slate-800 hover:bg-indigo-50/70"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-gradient-to-r from-[#1a237e] to-indigo-500 text-white px-4 py-2 text-sm font-semibold shadow"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
}
