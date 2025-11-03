import { useEffect, useRef } from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import MainSections from './components/MainSections';
import ContactFooterSection from './components/ContactFooterSection';

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;
    const update = () => {
      const h = document.documentElement;
      const st = h.scrollTop || document.body.scrollTop;
      const sh = h.scrollHeight - h.clientHeight;
      const p = Math.max(0, Math.min(1, sh ? st / sh : 0));
      if (bar) bar.style.width = `${p * 100}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      <NavigationBar />
      <HeroSection />
      <MainSections />
      <ContactFooterSection />

      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="w-[60vw] max-w-xl h-1 rounded-full bg-white/10 overflow-hidden">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-[#1a237e] to-[#d4af37] w-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
