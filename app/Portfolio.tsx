import { type ReactNode } from 'react';

type IconProps = { size?: number };
function IconFrame({ size = 16, children }: { size?: number; children: ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
}
function ArrowDown({ size }: IconProps) { return <IconFrame size={size}><path d="M12 4v15m-7-7 7 7 7-7" /></IconFrame>; }
function ArrowUpRight({ size }: IconProps) { return <IconFrame size={size}><path d="M7 17 17 7M7 7h10v10" /></IconFrame>; }
function MoveUpRight({ size }: IconProps) { return <ArrowUpRight size={size} />; }
function MapPin({ size }: IconProps) { return <IconFrame size={size}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></IconFrame>; }
function Mail({ size }: IconProps) { return <IconFrame size={size}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></IconFrame>; }
function Linkedin({ size }: IconProps) { return <IconFrame size={size}><path d="M4 9v11M4 4v.01M9 20v-6a4 4 0 0 1 8 0v6M9 11v9" /><circle cx="4" cy="4" r="1" /></IconFrame>; }
function Github({ size }: IconProps) { return <IconFrame size={size}><path fill="currentColor" stroke="none" d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.77-.25.77-.55v-1.9c-3.15.69-3.82-1.34-3.82-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.7.08-.7 1.13.08 1.72 1.16 1.72 1.16 1.01 1.72 2.64 1.22 3.28.94.1-.73.39-1.22.72-1.5-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.56.23 2.72.12 3 .72.8 1.15 1.8 1.15 3.03 0 4.36-2.65 5.31-5.18 5.6.4.35.77 1.04.77 2.09v3.11c0 .3.2.65.78.55A11.3 11.3 0 0 0 12 .7Z" /></IconFrame>; }


const projects = [
  { name: 'Top Dog Leads', kind: 'Lead generation platform', url: 'https://topdoglead.com/', repo: 'https://github.com/kamil-Abbas12/topdogleads', mark: '01', tone: 'project-dark', tag: 'LIVE PLATFORM' },
  { name: 'Evergreen Real Estate', kind: 'Property discovery', url: 'https://evergreen-real-estate-website.vercel.app/', repo: 'https://github.com/kamil-Abbas12/RealEstateWebsite', mark: '02', tone: 'project-sand', tag: 'REAL ESTATE' },
  { name: 'CRM System', kind: 'Customer relationship management', url: 'https://crm-etu4.vercel.app/', repo: 'https://github.com/kamil-Abbas12/crm', mark: '03', tone: 'project-copper', tag: 'SAAS / CRM' },
  { name: 'Hawks Media', kind: 'Agency website', url: 'https://hawksmediallc.com/', mark: '04', tone: 'project-green', tag: 'WEB EXPERIENCE' },
  { name: 'Roofing Landing Page', kind: 'Conversion-focused landing page', url: 'https://roofing.topdoglead.com/', repo: 'https://github.com/kamil-Abbas12/roofing', mark: '05', tone: 'project-cream', tag: 'LANDING PAGE' },
  { name: 'MedicalCare', kind: 'Healthcare website', url: 'https://medical-care-one.vercel.app/', repo: 'https://github.com/kamil-Abbas12/MedicalCare', mark: '06', tone: 'project-blue', tag: 'HEALTHCARE' },
  { name: 'HealthCare Website', kind: 'Dental care website', url: 'https://heathcarewebsite.vercel.app/', repo: 'https://github.com/kamil-Abbas12/DentalCare', mark: '07', tone: 'project-cream', tag: 'HEALTHCARE' },
  { name: 'Final Expense Leads', kind: 'Lead generation experience', url: 'https://finalexpense.topdoglead.com/', repo: 'https://github.com/kamil-Abbas12/final-expense', mark: '08', tone: 'project-dark', tag: 'LEAD GENERATION' },
  { name: 'Pest Control', kind: 'Pest control lead generation', url: 'https://pestcontrol.topdoglead.com/', mark: '09', tone: 'project-blue', tag: 'LOCAL SERVICES' },
  { name: 'Best Medicare Advisor', kind: 'Medicare advisory website', url: 'http://bestmedicareadvisor.com/', mark: '10', tone: 'project-sand', tag: 'MEDICARE' },
  { name: 'Solar', kind: 'Solar lead generation', url: 'https://solar.topdoglead.com/', mark: '11', tone: 'project-green', tag: 'SOLAR' },
  { name: 'Affordable Care Act', kind: 'Healthcare lead generation', url: 'https://affordablecareact.topdoglead.com/', mark: '12', tone: 'project-copper', tag: 'HEALTHCARE' },
  { name: 'Hospital Indemnity', kind: 'Hospital indemnity lead generation', url: 'https://hospitalindemnity.topdoglead.com/', mark: '13', tone: 'project-cream', tag: 'INSURANCE' },
];

const stackGroups = [
  {
    label: 'WEB DEVELOPMENT',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'Firebase', 'Tailwind CSS', 'REST APIs', 'GraphQL', 'JWT Auth', 'Stripe', 'Python', 'Git & GitHub', 'Vercel', 'Docker (basic)'],
  },
  {
    label: 'SEO & ANALYTICS',
    items: ['Technical SEO', 'On-page SEO', 'Keyword research', 'Site audits', 'Rank tracking', 'SEMrush', 'Ahrefs', 'SE Ranking', 'Google Search Console', 'Bing Webmaster Tools', 'Google Analytics 4', 'Core Web Vitals'],
  },
  {
    label: 'PRACTICES',
    items: ['Responsive design', 'Mobile-first', 'Performance optimization', 'CI/CD', 'Agile / Scrum', 'Clean code'],
  },
];
const stackCount = stackGroups.reduce((total, group) => total + group.items.length, 0);

function SafeLink({ href, children, className = '', label }: { href: string; children: ReactNode; className?: string; label?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className} data-testid="link-external">{children}</a>;
}

function Portfolio() {
  return (
    <main className="portfolio-shell min-h-[100dvh] text-[#202e35]">
      <header className="site-header">
        <a href="#home" className="brand" data-testid="link-home" aria-label="Kamil Abbas home"><span className="brand-glyph">KA</span><span>KAMIL ABBAS<span className="brand-sub">ENGINEER / DEVELOPER</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work" data-testid="nav-work">Selected work</a><a href="#about" data-testid="nav-about">About</a><a href="#contact" data-testid="nav-contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:kamilabbas929@gmail.com" data-testid="link-availability"><span className="availability-dot" />Available for select work <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy hero-enter">
          <p className="eyebrow"><span className="eyebrow-line" />ISLAMABAD, PAKISTAN <span className="eyebrow-sep">/</span> FULL STACK WEB DEVELOPER</p>
          <h1 id="hero-title" data-testid="heading-intro">I build digital<br /><em>things that work.</em><span className="hero-qualification">Full-stack web developer · Technical SEO</span></h1>
          <p className="hero-description" data-testid="text-intro">From production-ready web applications and lead-generation sites to connected hardware, I bring an engineer’s eye to every layer of the build.</p>
          <div className="hero-actions">
            <a href="#work" className="button-primary" data-testid="button-view-work">Explore selected work <ArrowDown size={16} /></a>
            <SafeLink href="mailto:kamilabbas929@gmail.com" className="text-link" label="Email Kamil Abbas">Let’s talk <MoveUpRight size={16} /></SafeLink>
          </div>
        </div>
        <div className="hero-portrait hero-enter-delay" data-testid="profile-card">
          <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
          <div className="portrait-label"><span>FIG. 01</span><span>BUILDER PROFILE</span></div>
          <div className="portrait-frame"><img src="/mypic.png" width={912} height={1173} alt="Portrait of Kamil Abbas" data-testid="img-profile" /></div>
          <div className="portrait-caption"><span className="caption-index">01—</span><span>Kamil Abbas<br /><small>Developer by practice. Engineer by training.</small></span><span className="caption-pin"><MapPin size={13} /> Islamabad</span></div>
          <span className="orbit-cross cross-a">+</span><span className="orbit-cross cross-b">+</span>
        </div>
        <div className="hero-foot"><span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span><a href="#work" aria-label="Scroll to selected work" data-testid="link-scroll-work"><ArrowDown size={15} /></a><span>01 / 05</span></div>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div><p className="eyebrow"><span className="eyebrow-line" />A FEW THINGS I’VE PUT INTO THE WORLD</p><h2 id="work-title" data-testid="heading-work">Selected <em>work</em></h2></div>
          <p className="section-note">Web products, useful interfaces, and digital foundations built to do a real job.</p>
        </div>
        <div className="projects-grid" data-testid="project-list">
          {projects.map((project) => (
            <article key={project.mark} className={`project-card ${project.tone}`} data-testid={`card-project-${project.mark}`}>
              <div className="project-top"><span>{project.mark} / {String(projects.length).padStart(2, '0')}</span><span className="project-tag">{project.tag}</span></div>
              <a className="project-main-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} data-testid={`link-project-${project.mark}`}>
                <span className="project-art" aria-hidden="true"><span className="art-sun" /><span className="art-window"><i /><i /><i /><i /></span><span className="art-base" /><span className="art-index">{project.mark}</span></span>
                <span className="project-title-row"><span><strong>{project.name}</strong><small>{project.kind}</small></span><span className="project-arrow"><ArrowUpRight size={20} /></span></span>
              </a>
              <div className="project-links"><SafeLink href={project.url}>VISIT SITE <ArrowUpRight size={13} /></SafeLink>{project.repo && <SafeLink href={project.repo}><Github size={13} /> SOURCE</SafeLink>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-inner section-wrap">
          <div className="about-heading"><p className="eyebrow light-eyebrow"><span className="eyebrow-line" />THE PERSON BEHIND THE BUILDS</p><h2 id="about-title" data-testid="heading-about">Two disciplines.<br /><em>One curious mind.</em></h2>
            <p className="about-intro" data-testid="text-about">I’m Kamil, a full-stack web developer and electrical engineer in Islamabad with 4+ years of hands-on experience. I build useful web products and connected systems, and since March 2026 I’ve also focused on technical and on-page SEO for client sites.</p>
            <div className="credential-stamp"><span>PEC</span><span>REGISTERED<br />ENGINEER</span></div>
            <div className="resume-highlights" data-testid="resume-highlights">
              <div><strong>4+</strong><span>YEARS BUILDING</span></div>
              <div><strong>50+</strong><span>FIVERR PROJECTS</span></div>
              <div><strong>100%</strong><span>UPWORK JOB SUCCESS</span></div>
            </div>
            <p className="platform-credentials">UPWORK RISING TALENT <i>·</i> FIVERR LEVEL SELLER</p>
          </div>
          <div className="about-details">
            <div className="detail-block"><span className="detail-num">01</span><div><h3>Recent role</h3><p className="detail-title">Full Stack Web Developer</p><p>Top Dog Leads LLC <span className="detail-meta">· Remote · Jan 2026—Oct 1, 2026</span></p></div></div>
            <div className="detail-block"><span className="detail-num">02</span><div><h3>Independent work</h3><p className="detail-title">Freelance developer</p><p>Fiverr since May 2022 <span className="detail-meta">·</span> Upwork since Apr 2026 <span className="detail-meta">· Rising Talent · Fiverr Level Seller</span></p></div></div>
            <div className="detail-block"><span className="detail-num">03</span><div><h3>Education</h3><p className="detail-title">B.S. Electrical &amp; Electronics Engineering</p><p>COMSATS University Islamabad <span className="detail-meta">· 2024</span></p></div></div>
            <div className="detail-block capstone-block"><span className="detail-num">04</span><div><h3>Engineering capstone</h3><p className="detail-title">Smart water, thoughtfully engineered.</p><p>IoT smart water filtration and monitoring system integrating sensors, microcontrollers, automated filtration, and mobile monitoring.</p><div className="system-flow"><span>SENSORS</span><i /><span>CONTROL</span><i /><span>FILTER</span><i /><span>MOBILE</span></div></div></div>
            <div className="detail-block"><span className="detail-num">05</span><div><h3>SEO &amp; organic growth</h3><p className="detail-title">Technical and on-page SEO</p><p>Keyword research, site audits, rank tracking, indexing and crawl monitoring, Core Web Vitals, and GA4 analysis for client websites.</p></div></div>
            <div className="detail-block"><span className="detail-num">06</span><div><h3>Selected product build</h3><p className="detail-title">Multi-tenant SaaS booking platform</p><p>Role-based dashboards, Stripe payments, and automated email notifications; reduced booking management overhead by 40%.</p></div></div>
          </div>
        </div>
      </section>

      <section className="toolkit-section section-wrap" aria-labelledby="toolkit-title">
        <div className="toolkit-intro"><p className="eyebrow"><span className="eyebrow-line" />THE TOOLS IN MY WORKBENCH</p><h2 id="toolkit-title" data-testid="heading-toolkit">A stack for<br /><em>shipping ideas.</em></h2><p>From the first component to the last deploy, these are the tools I reach for.</p></div>
        <div className="stack-area">
          <div className="stack-topline"><span>WEB + SEO TOOLKIT</span><span>{stackCount} SKILLS &amp; TOOLS</span></div>
          <div className="stack-groups" data-testid="stack-list">
            {stackGroups.map((group, groupIndex) => (
              <div className="stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="stack-list">{group.items.map((tool, index) => <span className="stack-chip" key={tool} data-testid={`skill-${groupIndex}-${index}`}>{tool}<small>{String(index + 1).padStart(2, '0')}</small></span>)}</div>
              </div>
            ))}
          </div>
          <div className="stack-foot"><span>WEB APPS</span><span>SEARCH</span><span>PERFORMANCE</span><span>DELIVERY</span></div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-wrap"><div><p className="eyebrow light-eyebrow"><span className="eyebrow-line" />HAVE SOMETHING GOOD IN MIND?</p><h2 id="contact-title" data-testid="heading-contact">Let’s make<br /><em>it real.</em></h2></div><div className="contact-right"><p>Have a product to build, a system to connect, or an interesting problem to untangle? I’d like to hear about it.</p><SafeLink href="mailto:kamilabbas929@gmail.com" className="contact-email"><span>kamilabbas929@gmail.com</span><MoveUpRight size={19} /></SafeLink><div className="social-links"><SafeLink href="https://github.com/kamil-Abbas12" label="GitHub profile"><Github size={16} /> GITHUB</SafeLink><SafeLink href="https://www.linkedin.com/in/kamilabbas1214/" label="LinkedIn profile"><Linkedin size={16} /> LINKEDIN</SafeLink><SafeLink href="https://www.upwork.com/freelancers/kamila32">UPWORK <ArrowUpRight size={13} /></SafeLink><SafeLink href="https://www.fiverr.com/s/ZmXbPBa">FIVERR <ArrowUpRight size={13} /></SafeLink></div></div></div>
      </section>
      <footer className="site-footer section-wrap"><a href="#home" className="footer-brand" data-testid="link-footer-home">KA <span>KAMIL ABBAS</span></a><span>FULL STACK WEB DEVELOPER · ISLAMABAD, PAKISTAN</span><a href="mailto:kamilabbas929@gmail.com" data-testid="link-footer-email"><Mail size={14} /> SAY HELLO</a></footer>
    </main>
  );
}

export default Portfolio;