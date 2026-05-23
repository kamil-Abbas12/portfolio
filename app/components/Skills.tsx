
/* ── DARK SECTION ── */

const skillGroups = [
  { icon: "⚡", title: "Frontend",       accent: "#a3ff6e", tags: ["Next.js 15","React.js","TypeScript","JavaScript (ES6+)","Tailwind CSS","HTML5","CSS3","Framer Motion"] },
  { icon: "🔧", title: "Backend & DB",   accent: "#4cc9f0", tags: ["Node.js","Express.js","MongoDB","PostgreSQL","Prisma ORM","Firebase","REST APIs","JWT Auth"] },
  { icon: "🚀", title: "DevOps & Tools", accent: "#f72585", tags: ["Vercel","Git & GitHub","Postman","VS Code","Figma","Linux","npm / yarn","Stripe"] },
  { icon: "🌐", title: "Specialties",    accent: "#a3ff6e", tags: ["Lead Gen Platforms","Real Estate Sites","E-Commerce","CRM Systems","Admin Dashboards","Medical Portals","IoT Systems","Booking Systems"] },
];

const proficiencies = [
  { label: "Next.js / React",       pct: 95, color: "#a3ff6e" },
  { label: "Node.js / Express",     pct: 88, color: "#4cc9f0" },
  { label: "TypeScript",            pct: 85, color: "#a3ff6e" },
  { label: "MongoDB / PostgreSQL",  pct: 82, color: "#4cc9f0" },
  { label: "UI/UX & Tailwind CSS",  pct: 92, color: "#f72585" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#05050a] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#a3ff6e]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-[#4cc9f0]/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="section-label">Technical Skills</div>
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <h2 className="font-clash text-[clamp(36px,5vw,60px)] font-bold text-white tracking-tight leading-none">What I work with.</h2>
          <div className="hidden md:flex flex-col gap-2 min-w-[260px]">
            {proficiencies.slice(0,3).map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <span className="font-fira text-[9px] uppercase tracking-widest text-[#5a5a72] w-28 flex-shrink-0">{p.label}</span>
                <div className="flex-1 h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color, opacity: 0.7 }} />
                </div>
                <span className="font-fira text-[9px] text-[#5a5a72]">{p.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-10">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-[#050508] p-8 hover:bg-[#0d0d14] transition-colors duration-300 group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] pointer-events-none" style={{ background: group.accent }} />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200" style={{ background: `${group.accent}12` }}>{group.icon}</div>
                <h3 className="font-clash text-xl font-bold tracking-tight" style={{ color: group.accent }}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.tags.map((tag) => (<span key={tag} className="tag-pill">{tag}</span>))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="bg-[#050508] border border-white/6 rounded-2xl p-8 mb-10">
          <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-6">Core Proficiencies</p>
          <div className="flex flex-col gap-4">
            {proficiencies.map((p) => (
              <div key={p.label} className="flex items-center gap-4">
                <span className="font-satoshi text-[13px] text-[#c8c8d8] w-44 flex-shrink-0">{p.label}</span>
                <div className="flex-1 h-[5px] bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg,${p.color}90,${p.color})` }} />
                </div>
                <span className="font-fira text-[11px] font-bold w-10 text-right" style={{ color: p.color }}>{p.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
          <span className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72]">Also familiar with:</span>
          {["MATLAB","C++","LTSpice","Arduino","Raspberry Pi","SEO","Stripe"].map((t) => (
            <span key={t} className="font-fira text-[11px] text-[#5a5a72] hover:text-[#a3ff6e] transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}