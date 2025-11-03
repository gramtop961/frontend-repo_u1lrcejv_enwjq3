import { useEffect } from 'react';

export default function MainSections() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-6');
            e.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* About & CITA */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-stretch transform transition-all duration-700 opacity-0 translate-y-6 will-change-transform reveal">
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 rounded-full bg-[#d4af37]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold">About PMIST University</h2>
            </div>
            <p className="text-slate-300">
              Ponnaiyah Ramajayam Institute of Science and Technology (PMIST University), Thanjavur is a premier institution committed to excellence in education and research. With NAAC A++ accreditation and a legacy since 1994, PMIST fosters a vibrant ecosystem for innovation and student development.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card icon={SealIcon()} title="Academic Excellence" text="A rigorous, future-ready curriculum and outcome-based education." />
              <Card icon={UsersIcon()} title="Industry Connect" text="Collaborations and expert talks powering real-world learning." />
              <Card icon={ChipIcon()} title="Student Development" text="Hackathons, clubs, and research to build leading innovators." />
            </div>
          </div>
          <div className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-5 rounded-full bg-indigo-400" />
              <h2 className="text-2xl sm:text-3xl font-extrabold">About CITA 2025</h2>
            </div>
            <p className="text-slate-300">
              CITA (Computing Innovations, Technology & Applications) is PMIST's flagship college symposium celebrating technology, creativity, and collaboration. Join 1000+ students, 30+ events, and 15+ industry experts across two inspiring days.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-indigo-600/20 to-indigo-400/10 border border-indigo-400/20">
              <div className="flex items-center gap-3 text-indigo-200">
                {CalendarIcon()}
                <span>March 15–16, 2025 • Main Auditorium Block, PMIST University, Thanjavur</span>
              </div>
              <div className="mt-2 flex items-center gap-3 text-indigo-200">
                {PinIcon()}
                <span>Organized by Department of Computer Science & Engineering, PMIST University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="events" className="relative mx-auto max-w-6xl px-6 pb-4 transform transition-all duration-700 opacity-0 translate-y-6 will-change-transform reveal">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-4 h-4 rounded-full bg-[#d4af37]" />
          <h3 className="text-2xl font-bold">Event Highlights</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            title: 'Hackathon',
            text: '24-hr innovation sprint with mentors and prizes.',
          }, {
            title: 'Paper Presentation',
            text: 'Showcase research in AI, IoT, Cybersecurity, DS.',
          }, {
            title: 'Coding Challenge',
            text: 'Algorithmic problem solving across difficulty levels.',
          }, {
            title: 'Workshops',
            text: 'Hands-on sessions by industry experts and alumni.',
          }].map((c, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 hover:border-[#d4af37]/30 hover:bg-white/10 transition-all">
              <p className="text-lg font-semibold text-white">{c.title}</p>
              <p className="text-slate-300 mt-2 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-300 mt-4 text-sm">Registration via PMIST payment gateway. Details will be shared post form submission.</p>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative mx-auto max-w-6xl px-6 py-16 transform transition-all duration-700 opacity-0 translate-y-6 will-change-transform reveal">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="w-4 h-4 rounded-full bg-indigo-400" />
          <h3 className="text-2xl font-bold">Schedule Timeline</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">PMIST Blue Connector</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <DayCard day="Day 1" date="15 Mar 2025" items={[
            { time: '09:30', title: 'Inauguration', meta: 'Auditorium • CSE & Leadership' },
            { time: '10:30', title: 'Keynote: Future of AI', meta: 'Industry Expert • School of Computing Sciences' },
            { time: '12:00', title: 'Paper Presentation', meta: 'CSE Faculty Panel' },
            { time: '14:00', title: 'Workshops Track', meta: 'IoT • Cybersecurity • DS' },
          ]} />
          <DayCard day="Day 2" date="16 Mar 2025" items={[
            { time: '09:30', title: 'Hackathon Finale', meta: 'Mentor Review • Auditorium' },
            { time: '12:30', title: 'Coding Challenge Finals', meta: 'Lab Complex • CSE Department' },
            { time: '15:30', title: 'Valedictory & Awards', meta: 'Auditorium • Dignitaries' },
          ]} />
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="relative mx-auto max-w-6xl px-6 py-16 transform transition-all duration-700 opacity-0 translate-y-6 will-change-transform reveal">
        <div className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-4 h-4 rounded-full bg-[#d4af37]" />
            <h3 className="text-2xl font-bold">PMIST Registration Portal</h3>
          </div>
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="rounded-xl p-4 bg-white/5 border border-white/10">
      <div className="flex items-center gap-2 text-indigo-200">{icon}<span className="font-semibold text-white">{title}</span></div>
      <p className="text-sm text-slate-300 mt-1">{text}</p>
    </div>
  );
}

function DayCard({ day, date, items }) {
  return (
    <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white font-semibold">{day}</p>
        <span className="text-xs text-indigo-200">{date}</span>
      </div>
      <div className="relative pl-4 border-l-2 border-indigo-500/50">
        {items.map((it, idx) => (
          <div key={idx} className="relative pb-5">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-2 border-slate-900" />
            <p className="text-sm text-indigo-200">{it.time}</p>
            <p className="text-white font-medium">{it.title}</p>
            <p className="text-xs text-slate-300">{it.meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RegistrationForm() {
  useEffect(() => {
    const form = document.getElementById('pmist-form');
    if (!form) return;
    const onSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const id = String(data.get('studentId') || '').trim();
      const dept = String(data.get('department') || '');
      const events = data.getAll('events');
      const email = String(data.get('email') || '').trim();

      const idValid = /^PMIST\/[A-Z]{2,4}\/[0-9]{2,4}\/[0-9]{3,5}$/i.test(id);
      const emailValid = /.+@.+\..+/.test(email);

      const errorEl = document.getElementById('form-error');
      const successEl = document.getElementById('form-success');
      errorEl.classList.add('hidden');
      successEl.classList.add('hidden');

      if (!idValid) {
        errorEl.textContent = 'Enter a valid Student ID (e.g., PMIST/CSE/2025/0123).';
        errorEl.classList.remove('hidden');
        return;
      }
      if (!emailValid) {
        errorEl.textContent = 'Enter a valid email address.';
        errorEl.classList.remove('hidden');
        return;
      }
      if (!dept) {
        errorEl.textContent = 'Select your department.';
        errorEl.classList.remove('hidden');
        return;
      }
      if (events.length === 0) {
        errorEl.textContent = 'Choose at least one event.';
        errorEl.classList.remove('hidden');
        return;
      }

      successEl.classList.remove('hidden');
      form.reset();
    };
    form.addEventListener('submit', onSubmit);
    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  return (
    <form id="pmist-form" className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="PMIST Registration Form">
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium mb-1">Student ID (PMIST format)</label>
        <input name="studentId" required autoFocus placeholder="PMIST/CSE/2025/0123" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder:text-slate-400" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Department</label>
        <select name="department" required className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 text-white">
          <option value="" className="text-slate-900">Select</option>
          <option className="text-slate-900" value="CSE">CSE</option>
          <option className="text-slate-900" value="IT">IT</option>
          <option className="text-slate-900" value="ECE">ECE</option>
          <option className="text-slate-900" value="EEE">EEE</option>
          <option className="text-slate-900" value="MECH">MECH</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" type="email" required placeholder="you@pmist.ac.in" className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 text-white placeholder:text-slate-400" />
      </div>
      <fieldset className="sm:col-span-2">
        <legend className="block text-sm font-medium mb-1">Event Choices</legend>
        <div className="grid sm:grid-cols-3 gap-2">
          {['Hackathon','Paper Presentation','Coding Challenge','UI/UX Sprint','Workshop'].map((e) => (
            <label key={e} className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-2 cursor-pointer hover:bg-white/10">
              <input type="checkbox" name="events" value={e} className="accent-indigo-500" />
              <span className="text-sm">{e}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2 grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-gradient-to-br from-[#d4af37]/20 to-amber-300/10 border border-[#d4af37]/40">
          <p className="text-sm text-amber-200">PMIST Student Fee</p>
          <p className="text-lg font-semibold text-amber-100">₹ 199</p>
        </div>
        <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-500/15 to-indigo-300/10 border border-indigo-300/30">
          <p className="text-sm text-indigo-200">Other Institution Fee</p>
          <p className="text-lg font-semibold text-indigo-100">₹ 299</p>
        </div>
      </div>
      <div id="form-error" className="sm:col-span-2 hidden text-sm text-rose-300 bg-rose-900/20 border border-rose-300/30 rounded-xl px-3 py-2" role="alert" />
      <div id="form-success" className="sm:col-span-2 hidden text-sm text-emerald-300 bg-emerald-900/20 border border-emerald-300/30 rounded-xl px-3 py-2" role="status">
        Registration received! Check your email for PMIST payment gateway instructions.
      </div>
      <div className="sm:col-span-2 flex items-center justify-between gap-3">
        <button type="submit" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-[#1a237e] to-indigo-500 text-white font-semibold shadow hover:shadow-lg transition-all">Submit Registration</button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Payment" className="h-6 opacity-70" />
      </div>
    </form>
  );
}

// Simple inline icons (no external deps)
function SealIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
  );
}
function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );
}
function ChipIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}
