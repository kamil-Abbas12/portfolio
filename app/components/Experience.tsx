"use client";

const experiences = [
  {
    period: "Apr 2026 – Present",
    company: "Upwork",
    role: "Full Stack Web Developer",
    type: "Freelance · Remote",
    badge: "🏆 Rising Talent",
    badgeColor: "text-[#4cc9f0] bg-[#4cc9f0]/8 border-[#4cc9f0]/20",
    desc: "Delivering high-quality full-stack projects for international clients on Upwork. Earned the Rising Talent badge within the first month for consistently high client satisfaction and on-time delivery.",
    tags: ["Next.js", "MERN Stack", "TypeScript", "Vercel"],
    accent: "#4cc9f0",
  },
  {
    period: "Jan 2026 – Present",
    company: "Top Dog Leads LLC",
    role: "Full Stack Web Developer",
    type: "Full-time · Florida, US (Remote)",
    badge: "Full-time",
    badgeColor: "text-[#a3ff6e] bg-[#a3ff6e]/8 border-[#a3ff6e]/20",
    desc: "Design and develop modern, responsive, performance-optimized web applications for lead generation. Build conversion-focused funnels, landing pages, and dashboards.",
    highlights: [
      "Next.js, React, Tailwind CSS frontend development",
      "API integration, form handling & database management",
      "Lead-generation funnels & conversion-focused UIs",
      "Cross-browser compatibility & mobile-first design",
      "Clean code practices & Git version control",
    ],
    tags: ["Next.js", "React", "Tailwind", "Node.js", "MongoDB", "Git"],
    accent: "#a3ff6e",
  },
  {
    period: "May 2022 – Present",
    company: "Fiverr",
    role: "Full Stack Developer",
    type: "Freelance · Remote · Level Seller",
    badge: "Level Seller",
    badgeColor: "text-[#f72585] bg-[#f72585]/8 border-[#f72585]/20",
    desc: "4+ years delivering websites and web applications to clients worldwide. Specialized in full-stack apps, booking systems, dashboards, real estate platforms, and business websites.",
    highlights: [
      "MERN Stack applications with MongoDB databases",
      "Authentication, role-based access, payment gateways",
      "SEO optimization & performance improvements",
      "Vercel deployments & environment configurations",
    ],
    tags: ["MERN Stack", "Next.js", "TypeScript", "Stripe", "Firebase"],
    accent: "#f72585",
  },
  {
    period: "Jul – Sep 2024",
    company: "GBHEW — Water & Power Dept.",
    role: "Electrical Engineering Intern",
    type: "Internship · Gilgit, Pakistan · On-site",
    badge: "Internship",
    badgeColor: "text-[#5a5a72] bg-white/4 border-white/10",
    desc: "Hands-on training in rewinding and troubleshooting of electrical motors. Practical exposure to electrical systems, automation, and power infrastructure in real engineering environments.",
    tags: ["MATLAB", "Electrical Systems", "Automation", "Motor Troubleshooting"],
    accent: "#5a5a72",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[400px] rounded-full bg-[#a3ff6e]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-[#4cc9f0]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label">Experience</div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="font-clash text-[clamp(36px,5vw,60px)] font-bold text-white tracking-tight leading-none">
            Where I&apos;ve worked.
          </h2>
          {/* Mini stats */}
          <div className="flex gap-8">
            {[
              { num: "3+", label: "Years" },
              { num: "2", label: "Companies" },
              { num: "2", label: "Platforms" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="font-clash text-2xl font-bold text-[#a3ff6e]">{s.num}</span>
                <span className="font-fira text-[9px] uppercase tracking-widest text-[#5a5a72]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5 hidden lg:block" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-[54px] w-[15px] h-[15px] rounded-full border-2 border-[#050508] hidden lg:flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-125"
                  style={{ background: exp.accent }}
                />

                <div
                  className={`lg:pl-10 py-10 ${i < experiences.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <div className="grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12">

                    {/* Left meta */}
                    <div className="lg:pt-1 flex lg:flex-col gap-3 lg:gap-3 flex-wrap items-center lg:items-start">
                      <span
                        className="font-fira text-[10px] uppercase tracking-widest leading-relaxed"
                        style={{ color: exp.accent }}
                      >
                        {exp.period}
                      </span>
                      <span className="font-clash text-[15px] font-bold text-white lg:mt-1">
                        {exp.company}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border font-fira text-[10px] tracking-wider ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    {/* Right content */}
                    <div className="bg-[#050508] border border-white/6 rounded-2xl p-7 group-hover:border-white/10 transition-all duration-300 relative overflow-hidden">
                      {/* Hover accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, transparent, ${exp.accent}, transparent)` }}
                      />

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <h3 className="font-clash text-[22px] font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <p className="font-fira text-[11px] text-[#5a5a72] mb-4 tracking-wider">
                        {exp.type}
                      </p>
                      <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.9] mb-5">
                        {exp.desc}
                      </p>

                      {exp.highlights && (
                        <ul className="space-y-2 mb-6 bg-white/[0.02] rounded-xl p-4 border border-white/4">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-3 font-satoshi text-[12px] text-[#5a5a72]">
                              <span
                                className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: exp.accent }}
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-fira text-[10px] px-2.5 py-1 rounded border transition-all duration-200"
                            style={{
                              color: exp.accent,
                              background: `${exp.accent}08`,
                              borderColor: `${exp.accent}20`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#050508] border border-white/6 rounded-2xl">
          <div>
            <p className="font-clash text-[20px] font-bold text-white tracking-tight mb-1">
              Want to work together?
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72]">
              Open to full-time remote roles, freelance contracts & collaborations.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="https://www.upwork.com/freelancers/kamila32" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
              Upwork ↗
            </a>
            <a href="mailto:kamilabbas929@gmail.com" className="btn-primary text-sm">
              Email Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}