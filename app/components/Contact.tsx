"use client";

const contactLinks = [
  {
    icon: "💼",
    label: "LinkedIn",
    value: "kamilabbas1214",
    href: "https://www.linkedin.com/in/kamilabbas1214/",
    accent: "#4cc9f0",
  },
  {
    icon: "⭐",
    label: "Upwork",
    value: "Rising Talent Profile",
    href: "https://www.upwork.com/freelancers/kamila32",
    accent: "#a3ff6e",
  },
  {
    icon: "🛒",
    label: "Fiverr",
    value: "Level Seller · Since 2022",
    href: "https://www.fiverr.com/s/ZmXbPBa",
    accent: "#a3ff6e",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "kamil-Abbas12",
    href: "https://github.com/kamil-Abbas12",
    accent: "#f72585",
  },
  {
    icon: "📧",
    label: "Email",
    value: "kamilabbas929@gmail.com",
    href: "mailto:kamilabbas929@gmail.com",
    accent: "#a3ff6e",
  },
  {
    icon: "📞",
    label: "Phone / WhatsApp",
    value: "+92 318 8097832",
    href: "https://wa.me/923188097832",
    accent: "#4cc9f0",
  },
];

const openFor = [
  "Full-time remote roles",
  "Freelance projects (Upwork / Fiverr / Direct)",
  "Short-term contracts",
  "Startup & MVP development",
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0d0d14] border-t border-white/5 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#a3ff6e]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#4cc9f0]/4 blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#a3ff6e 1px,transparent 1px),linear-gradient(90deg,#a3ff6e 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label">Contact</div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <h2 className="font-clash text-[clamp(36px,5vw,64px)] font-bold text-white tracking-tight leading-[0.95] mb-6">
              Let&apos;s build<br />
              something<br />
              <span className="text-shimmer">remarkable.</span>
            </h2>
            <p className="font-satoshi text-[14px] text-[#5a5a72] leading-[1.9] mb-10 max-w-md">
              Open to full-time remote roles, freelance projects, and interesting
              collaborations worldwide. If you have something in mind — let&apos;s talk.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-2.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-[#050508] border border-white/6 rounded-xl hover:border-white/15 transition-all duration-200 hover:translate-x-1.5 hover:shadow-[0_0_20px_rgba(163,255,110,0.04)]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${link.accent}10` }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-0.5">
                      {link.label}
                    </p>
                    <p
                      className="font-satoshi text-[13px] truncate transition-colors group-hover:opacity-80"
                      style={{ color: link.accent }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <span className="text-[#5a5a72] group-hover:text-white transition-colors text-sm opacity-0 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-5">

            {/* Availability card */}
            <div className="relative bg-[#050508] border border-white/6 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#a3ff6e]/6 rounded-full blur-[80px] pointer-events-none" />

              {/* Status */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#a3ff6e] animate-pulse-dot" />
                <span className="font-fira text-[11px] uppercase tracking-widest text-[#a3ff6e]">
                  Available for work
                </span>
              </div>

              <h3 className="font-clash text-[26px] font-bold text-white tracking-tight mb-3">
                Open to opportunities
              </h3>
              <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.9] mb-7">
                Looking for remote full-time roles, freelance contracts, or project-based
                collaborations. Specializing in Next.js full-stack apps, real estate platforms,
                CRM systems, healthcare portals, and lead generation tools.
              </p>

              {/* Open for list */}
              <div className="space-y-2.5 mb-8">
                {openFor.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-[#a3ff6e]/10 border border-[#a3ff6e]/25 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff6e]" />
                    </span>
                    <span className="font-satoshi text-[13px] text-[#5a5a72]">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/kamilabbas1214/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center block text-center"
              >
                Connect on LinkedIn →
              </a>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="https://www.upwork.com/freelancers/kamila32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-center text-sm justify-center"
                >
                  Upwork ↗
                </a>
                <a
                  href="https://www.fiverr.com/s/ZmXbPBa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-center text-sm justify-center"
                >
                  Fiverr ↗
                </a>
              </div>
            </div>

            {/* Quick response card */}
            <div className="flex items-center gap-4 p-5 bg-[#050508] border border-white/6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#4cc9f0]/8 flex items-center justify-center text-lg flex-shrink-0">
                ⚡
              </div>
              <div>
                <p className="font-clash text-[14px] font-bold text-white tracking-tight">Fast Response</p>
                <p className="font-satoshi text-[12px] text-[#5a5a72]">Usually replies within 24 hours</p>
              </div>
              <div className="ml-auto">
                <span className="font-fira text-[10px] uppercase tracking-widest text-[#4cc9f0] px-2.5 py-1 bg-[#4cc9f0]/8 border border-[#4cc9f0]/20 rounded-full">
                  Active
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}