"use client";

/* ── LIGHT SECTION ── */

const stats = [
  { num: "3+",   label: "Years Freelancing" },
  { num: "15+",  label: "Projects Shipped"  },
  { num: "100%", label: "Client Satisfaction"},
  { num: "2",    label: "Active Platforms"  },
];

const techStack = ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS", "PostgreSQL", "Prisma"];

const highlights = [
  { icon: "💼", title: "Top Dog Leads LLC",   sub: "Full-Stack Dev · Full-time",     accent: "#059669" },
  { icon: "⭐", title: "Upwork Rising Talent", sub: "Earned Apr 2026",               accent: "#0284c7" },
  { icon: "🛒", title: "Fiverr Freelancer",    sub: "Level Seller · Since 2022",     accent: "#db2777" },
  { icon: "🏅", title: "PEC Registered",       sub: "Engineer #ELECT/114656",        accent: "#059669" },
];

export default function About() {
  return (
    <section id="about" className="section-light py-28 px-6 bg-[#f8f8f2] border-y border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">About Me</div>
        <h2 className="font-clash text-[clamp(36px,5vw,60px)] font-bold text-[#0d0d14] tracking-tight leading-none mb-16">
          The person behind<br />
          <span className="text-[#059669]">the code.</span>
        </h2>

        <div className="grid lg:grid-cols-[300px_1fr] gap-10 mb-10">

          {/* Photo + contact */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-black/8 bg-white" style={{ aspectRatio: "4/5" }}>
              <img src="/mypic.png" alt="Kamil Abbas" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-clash text-[20px] font-bold text-white tracking-tight">Kamil Abbas</p>
                <p className="font-fira text-[11px] text-[#a3ff6e] uppercase tracking-widest mt-1">Full Stack Developer</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 p-4 bg-white border border-[#059669]/20 rounded-xl shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#a3ff6e] animate-pulse-dot flex-shrink-0" />
                <span className="font-fira text-[11px] uppercase tracking-widest text-[#059669]">Available for Work</span>
              </div>
              <span className="font-fira text-[10px] text-[#6b6b80] uppercase tracking-widest">Remote</span>
            </div>

            {[
              { icon: "📍", val: "Islamabad, Pakistan" },
              { icon: "📧", val: "kamilabbas929@gmail.com" },
              { icon: "📞", val: "+92 318 8097832" },
            ].map((c) => (
              <div key={c.val} className="flex items-center gap-3 px-4 py-3 bg-white border border-black/6 rounded-xl hover:border-black/12 transition-colors duration-200 shadow-sm">
                <span className="text-base">{c.icon}</span>
                <span className="font-satoshi text-[12px] text-[#6b6b80]">{c.val}</span>
              </div>
            ))}
          </div>

          {/* Bio + stats + stack */}
          <div className="flex flex-col gap-6">

            {/* Bio */}
            <div className="bg-white border border-black/6 rounded-2xl p-7 shadow-sm">
              <p className="font-fira text-[10px] uppercase tracking-widest text-[#6b6b80] mb-5">Who I Am</p>
              <div className="space-y-4 text-[#6b6b80] font-satoshi text-[14px] leading-[1.95]">
                <p>
                  I&apos;m a <strong className="text-[#0d0d14] font-medium">Full Stack Web Developer</strong> currently building
                  modern, conversion-optimized web apps for{" "}
                  <strong className="text-[#059669] font-medium">Top Dog Leads LLC</strong> — a US-based lead generation company.
                </p>
                <p>
                  My background in <strong className="text-[#0d0d14] font-medium">Electrical Engineering (COMSATS University)</strong>{" "}
                  gives me an analytical edge. My FYP was an{" "}
                  <strong className="text-[#0284c7] font-medium">IoT Smart Water Filtration &amp; Monitoring System</strong> — integrating
                  sensors, microcontrollers, and a remote mobile monitoring app.
                </p>
                <p>
                  This blend of web mastery, engineering fundamentals, and IoT design
                  lets me build solutions that are truly full-spectrum — from cloud to hardware.
                </p>
              </div>
              <a
                href="mailto:kamilabbas929@gmail.com"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-[#a3ff6e] text-[#050508] font-fira text-[11px] uppercase tracking-widest hover:bg-[#b8ff85] transition-all duration-200 shadow-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-[#050508] animate-pulse-dot" />
                Hire Me →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 p-5 bg-white border border-black/6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group text-center">
                  <span className="font-clash text-[32px] font-bold text-[#0d0d14] tracking-tight group-hover:text-[#059669] transition-colors duration-300">{s.num}</span>
                  <span className="font-fira text-[9px] uppercase tracking-widest text-[#6b6b80] leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div className="bg-white border border-black/6 rounded-2xl p-6 shadow-sm">
              <p className="font-fira text-[10px] uppercase tracking-widest text-[#6b6b80] mb-4">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="card-hover group flex flex-col gap-3 p-5 bg-white border border-black/6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${h.accent}12` }}>
                {h.icon}
              </div>
              <div>
                <p className="font-clash text-[15px] font-bold text-[#0d0d14] tracking-tight leading-tight mb-1">{h.title}</p>
                <p className="font-fira text-[10px] uppercase tracking-widest leading-snug" style={{ color: h.accent }}>{h.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}