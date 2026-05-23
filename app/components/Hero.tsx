"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden bg-[#05050a]">
      {/* Radial glows */}
      <div className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full bg-[#a3ff6e]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[80px] left-[100px] w-[400px] h-[400px] rounded-full bg-[#4cc9f0]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f72585]/3 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#a3ff6e 1px,transparent 1px),linear-gradient(90deg,#a3ff6e 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 min-w-0">
            <div className="animate-fadeUp inline-flex items-center gap-2.5 bg-[#a3ff6e]/8 border border-[#a3ff6e]/20 rounded-full px-4 py-2 mb-10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#a3ff6e] animate-pulse-dot" />
              <span className="font-fira text-[11px] uppercase tracking-widest text-[#a3ff6e]">Open to Work · Remote Worldwide</span>
            </div>

            <h1 className="font-clash font-bold leading-[0.9] tracking-[-3px] text-white mb-8 animate-fadeUp delay-100">
              <span className="block text-[clamp(52px,9vw,110px)]">Full Stack</span>
              <span className="block text-[clamp(52px,9vw,110px)] text-shimmer">Developer</span>
              <span className="block text-[clamp(36px,5vw,64px)] text-white/30 font-light tracking-[-1px] mt-2">&amp; Engineer.</span>
            </h1>

            <p className="max-w-xl text-[#5a5a72] font-satoshi text-[15px] leading-[1.85] mb-12 animate-fadeUp delay-200">
              I build production-ready web applications with{" "}
              <span className="text-[#c8c8d8]">Next.js, React &amp; Node.js</span>. Currently at{" "}
              <span className="text-[#a3ff6e]">Top Dog Leads LLC</span>, freelancing on{" "}
              <span className="text-[#c8c8d8]">Upwork &amp; Fiverr</span> since 2022. Electrical Engineer bridging software &amp; hardware.
            </p>

            <div className="flex flex-wrap gap-4 mb-20 animate-fadeUp delay-300">
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="https://www.upwork.com/freelancers/kamila32" target="_blank" rel="noopener noreferrer" className="btn-ghost">Upwork ↗</a>
              <a href="https://www.fiverr.com/s/ZmXbPBa" target="_blank" rel="noopener noreferrer" className="btn-ghost">Fiverr ↗</a>
              <a href="https://github.com/kamil-Abbas12" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
            </div>

            <div className="flex flex-wrap gap-10 pt-10 border-t border-white/6 animate-fadeUp delay-400">
              {[
                { num: "3+", label: "Years Experience" },
                { num: "15+", label: "Projects Shipped" },
                { num: "2", label: "Active Platforms" },
                { num: "🏆", label: "Upwork Rising Talent" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-clash text-4xl font-bold text-white tracking-tight">{s.num}</span>
                  <span className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center animate-fadeUp delay-200">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a3ff6e]/30 via-[#4cc9f0]/20 to-[#f72585]/20 blur-[40px] scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#a3ff6e]/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-[-6px] rounded-full border border-[#a3ff6e]/10" />
              <div className="relative w-[340px] h-[340px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-2 border-[#a3ff6e]/25 shadow-[0_0_60px_rgba(163,255,110,0.12),0_0_120px_rgba(76,201,240,0.08)]">
                <img src="/mypic.png" alt="Kamil Abbas — Full Stack Developer" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-[#13131e] border border-[#a3ff6e]/25 rounded-full px-3 py-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#a3ff6e] animate-pulse-dot" />
                <span className="font-fira text-[10px] uppercase tracking-widest text-[#a3ff6e]">Available</span>
              </div>
              <div className="absolute -bottom-3 -left-3 flex items-center gap-2 bg-[#13131e] border border-[#4cc9f0]/25 rounded-full px-3 py-1.5 shadow-lg">
                <span className="text-[12px]">🏆</span>
                <span className="font-fira text-[10px] uppercase tracking-widest text-[#4cc9f0]">Rising Talent</span>
              </div>
              <div className="absolute inset-[-24px] rounded-full" style={{ animation: "spin 15s linear infinite reverse" }}>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#f72585]/60" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a3ff6e]/60" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4cc9f0]/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}