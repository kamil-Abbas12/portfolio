"use client";

interface Project {
  num: string;
  title: string;
  desc: string;
  live?: string;
  github?: string;
  tags: string[];
  accent: string;
  category: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Top Dog Leads",
    desc: "Lead generation platform for Top Dog Leads LLC. Built with a focus on conversion-optimized design, performance, and modern full-stack architecture to capture and qualify leads at scale.",
    live: "https://topdoglead.com/",
    github: "https://github.com/kamil-Abbas12/topdogleads",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    accent: "#a3ff6e",
    category: "Lead Generation",
  },
  {
    num: "02",
    title: "Evergreen Real Estate",
    desc: "Full-stack real estate platform with property upload system, user dashboard for managing listings, advanced search & filters (like Zillow/Zoopla), Stripe payments, and a blog.",
    live: "https://evergreen-real-estate-website.vercel.app/",
    github: "https://github.com/kamil-Abbas12/RealEstateWebsite",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind", "Vercel"],
    accent: "#4cc9f0",
    category: "Real Estate",
  },
  {
    num: "03",
    title: "CRM System",
    desc: "Custom CRM platform with contact management, pipeline tracking, activity logs, role-based access control, and dashboard analytics — tailored for business sales teams.",
    live: "https://crm-etu4.vercel.app/",
    github: "https://github.com/kamil-Abbas12/crm",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    accent: "#f72585",
    category: "SaaS / CRM",
  },
  {
    num: "04",
    title: "Hawks Media LLC",
    desc: "Agency/media company website built for Hawks Media LLC. Clean, professional design with conversion-focused pages and modern UI crafted for business growth and client acquisition.",
    live: "https://hawksmediallc.com/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    accent: "#a3ff6e",
    category: "Agency Website",
  },
  {
    num: "05",
    title: "Roofing Landing Page",
    desc: "High-converting roofing company landing page for Top Dog Leads, designed to generate quality leads. Mobile-first, fast loading, with optimized form flows.",
    live: "https://roofing.topdoglead.com/",
    github: "https://github.com/kamil-Abbas12/roofing",
    tags: ["Next.js", "Tailwind", "Lead Gen", "Performance"],
    accent: "#4cc9f0",
    category: "Lead Generation",
  },
  {
    num: "06",
    title: "MedicalCare Platform",
    desc: "Healthcare web application with doctor profiles, appointment booking, service listings, and a clean accessible UI built specifically for the medical sector.",
    live: "https://medical-care-one.vercel.app/",
    github: "https://github.com/kamil-Abbas12/MedicalCare",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    accent: "#f72585",
    category: "Healthcare",
  },
  {
    num: "07",
    title: "HealthCare Website",
    desc: "Modern healthcare/medical website with service pages, patient information sections, and responsive layout optimized for accessibility and trust in the healthcare industry.",
    live: "https://heathcarewebsite.vercel.app/",
    github: "https://github.com/kamil-Abbas12/DentalCare",
    tags: ["Next.js", "React", "Tailwind CSS"],
    accent: "#a3ff6e",
    category: "Healthcare",
  },
  {
    num: "08",
    title: "Final Expense Leads",
    desc: "Specialized insurance lead generation funnel for final expense products. High-conversion landing page with form capture and lead qualification logic.",
    live: "https://finalexpense.topdoglead.com/",
    github: "https://github.com/kamil-Abbas12/final-expense",
    tags: ["Next.js", "Tailwind", "Lead Funnels", "API"],
    accent: "#4cc9f0",
    category: "Lead Generation",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#0d0d14] border-y border-white/5 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[300px] rounded-full bg-[#f72585]/4 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-[400px] h-[300px] rounded-full bg-[#4cc9f0]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label">Selected Work</div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <h2 className="font-clash text-[clamp(36px,5vw,60px)] font-bold text-white tracking-tight leading-none">
            Projects shipped<br />
            <span className="text-[#5a5a72]">&amp; live in production.</span>
          </h2>
          <a
            href="https://github.com/kamil-Abbas12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm"
          >
            All Repos ↗
          </a>
        </div>

        {/* Summary strip */}
        <div className="flex flex-wrap gap-6 mb-14 pb-10 border-b border-white/5">
          {[
            { num: "8+", label: "Live Projects", color: "#a3ff6e" },
            { num: "100%", label: "Client Satisfaction", color: "#4cc9f0" },
            { num: "3+", label: "Industries Served", color: "#f72585" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="font-clash text-2xl font-bold" style={{ color: s.color }}>{s.num}</span>
              <span className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72]">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.num}
              className="card-hover group bg-[#050508] border border-white/6 rounded-2xl overflow-hidden flex flex-col hover:border-opacity-40 transition-all duration-300"
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div
                className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
              />

              {/* Corner number watermark */}
              <div className="relative">
                <div
                  className="absolute top-4 right-5 font-clash text-[64px] font-bold leading-none select-none pointer-events-none opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500"
                  style={{ color: p.accent }}
                >
                  {p.num}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-1 block">
                      {p.category}
                    </span>
                    <span
                      className="font-fira text-[11px] tracking-wider"
                      style={{ color: p.accent }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-[#5a5a72] hover:text-[#a3ff6e] hover:border-[#a3ff6e]/30 transition-all text-sm font-bold"
                        title="GitHub"
                        aria-label="View on GitHub"
                      >
                        ⌥
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-[#5a5a72] hover:text-[#a3ff6e] hover:border-[#a3ff6e]/30 transition-all text-sm"
                        title="Live Site"
                        aria-label="View live site"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-clash text-[22px] font-bold text-white tracking-tight mb-3 leading-tight group-hover:text-white transition-colors duration-200">
                  {p.title}
                </h3>

                {/* Desc */}
                <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.85] flex-1 mb-6">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-fira text-[10px] px-2.5 py-1 rounded border transition-all duration-200 hover:opacity-80"
                      style={{
                        color: p.accent,
                        background: `${p.accent}08`,
                        borderColor: `${p.accent}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-r from-[#a3ff6e]/5 to-[#4cc9f0]/5 border border-white/6 rounded-2xl">
          <div>
            <p className="font-clash text-[22px] font-bold text-white tracking-tight mb-1">
              Have a project in mind?
            </p>
            <p className="font-satoshi text-[13px] text-[#5a5a72]">
              Let&apos;s build something great together — on time, on budget.
            </p>
          </div>
          <a
            href="mailto:kamilabbas929@gmail.com"
            className="btn-primary whitespace-nowrap"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </section>
  );
}