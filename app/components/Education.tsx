"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 bg-[#0d0d14] border-y border-white/5 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#4cc9f0]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#a3ff6e]/4 blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#4cc9f0 1px, transparent 1px), linear-gradient(90deg, #4cc9f0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label">Education &amp; Certifications</div>
        <h2 className="font-clash text-[clamp(36px,5vw,60px)] font-bold text-white tracking-tight leading-none mb-16">
          Academic roots.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* University */}
          <div className="card-hover group bg-[#050508] border border-white/6 rounded-2xl p-8 hover:border-[#4cc9f0]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(76,201,240,0.06)] relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#4cc9f0]/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-5">🎓</div>
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-1">
              Aug 2020 – 2024
            </p>
            <h3 className="font-clash text-[22px] font-bold text-white tracking-tight mb-1">
              B.S. Electrical &amp; Electronics Engineering
            </h3>
            <p className="font-fira text-[12px] text-[#4cc9f0] mb-4">
              COMSATS University Islamabad
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.8]">
              Strong foundation in electrical systems, circuits, signal processing, and automation.
              Courses included C++, MATLAB, LTSpice, Microcontrollers, and Digital Logic Design.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["C++", "MATLAB", "LTSpice", "Microcontrollers", "IoT"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* FYP */}
          <div className="card-hover group bg-[#050508] border border-white/6 rounded-2xl p-8 hover:border-[#a3ff6e]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,255,110,0.06)] relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#a3ff6e]/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-5">🌊</div>
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-1">
              Final Year Project
            </p>
            <h3 className="font-clash text-[22px] font-bold text-white tracking-tight mb-1">
              IoT Smart Water Filtration System
            </h3>
            <p className="font-fira text-[12px] text-[#a3ff6e] mb-4">
              Quality Monitoring &amp; Automation
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.8]">
              Integrated pH, turbidity, temperature &amp; conductivity sensors with microcontrollers
              and solenoid valves for automated filtration decisions. Remote monitoring via mobile app.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["IoT", "Sensors", "Arduino", "Mobile App", "Automation"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* PEC */}
          <div className="card-hover group bg-[#050508] border border-white/6 rounded-2xl p-8 hover:border-[#a3ff6e]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,255,110,0.06)] relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#a3ff6e]/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-5">🏅</div>
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-1">
              Issued Jan 2026
            </p>
            <h3 className="font-clash text-[22px] font-bold text-white tracking-tight mb-1">
              Registered Engineer
            </h3>
            <p className="font-fira text-[12px] text-[#a3ff6e] mb-4">
              Pakistan Engineering Council · #ELECT/114656
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.8]">
              Officially registered electrical engineer with PEC. Recognized for competency in
              power systems, IoT solutions, and modern engineering technologies.
            </p>
            {/* PEC badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a3ff6e]/8 border border-[#a3ff6e]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff6e]" />
              <span className="font-fira text-[10px] uppercase tracking-widest text-[#a3ff6e]">Verified · #ELECT/114656</span>
            </div>
          </div>

          {/* Upwork badge */}
          <div className="card-hover group bg-[#050508] border border-white/6 rounded-2xl p-8 hover:border-[#4cc9f0]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(76,201,240,0.06)] relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#4cc9f0]/5 blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="text-4xl mb-5">⭐</div>
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-1">
              Issued Apr 2026
            </p>
            <h3 className="font-clash text-[22px] font-bold text-white tracking-tight mb-1">
              Rising Talent Badge
            </h3>
            <p className="font-fira text-[12px] text-[#4cc9f0] mb-4">
              Upwork · Full-Stack Development
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.8]">
              Earned Upwork&apos;s Rising Talent designation within the first month — awarded for
              delivering quality work, maintaining strong client satisfaction, and professional conduct.
            </p>
            <a
              href="https://www.upwork.com/freelancers/kamila32"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 font-fira text-[11px] text-[#4cc9f0] hover:text-white transition-colors"
            >
              View Upwork Profile ↗
            </a>
          </div>
        </div>

        {/* Bottom timeline strip */}
        <div className="mt-12 p-8 bg-[#050508] border border-white/6 rounded-2xl">
          <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-8">Journey Timeline</p>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-3 left-0 right-0 h-px bg-white/5" />
            <div className="flex flex-wrap justify-between gap-y-8 relative z-10">
              {[
                { year: "2020", event: "Started B.S. EE at COMSATS", color: "#4cc9f0" },
                { year: "2022", event: "Joined Fiverr as freelancer", color: "#a3ff6e" },
                { year: "2024", event: "Graduated & joined Top Dog Leads", color: "#a3ff6e" },
                { year: "Jan 2026", event: "PEC Registration", color: "#f72585" },
                { year: "Apr 2026", event: "Upwork Rising Talent", color: "#4cc9f0" },
              ].map((item) => (
                <div key={item.year} className="flex flex-col items-center gap-3 flex-1 min-w-[80px]">
                  <div className="w-3 h-3 rounded-full border-2 border-current" style={{ color: item.color }} />
                  <span className="font-fira text-[10px] font-bold" style={{ color: item.color }}>{item.year}</span>
                  <span className="font-satoshi text-[11px] text-[#5a5a72] text-center leading-snug max-w-[100px]">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}