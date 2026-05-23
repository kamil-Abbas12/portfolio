"use client";

const links = [
  { href: "https://github.com/kamil-Abbas12",            label: "GitHub"   },
  { href: "https://www.linkedin.com/in/kamilabbas1214/", label: "LinkedIn" },
  { href: "https://www.upwork.com/freelancers/kamila32", label: "Upwork"   },
  { href: "https://www.fiverr.com/s/ZmXbPBa",            label: "Fiverr"   },
];

const navLinks = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#education",  label: "Education"  },
  { href: "#contact",    label: "Contact"    },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#a3ff6e]/30 to-transparent pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-[#a3ff6e]/5 blur-[60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Main footer content */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-clash text-2xl font-bold text-white">
              kamil<span className="text-[#a3ff6e]">.</span>
            </span>
            <p className="font-satoshi text-[13px] text-[#5a5a72] leading-[1.8] max-w-[220px]">
              Full Stack Developer building fast, scalable, and conversion-focused web apps.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3ff6e] animate-pulse-dot" />
              <span className="font-fira text-[10px] uppercase tracking-widest text-[#a3ff6e]">
                Available for Work
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-2">Navigation</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-satoshi text-[13px] text-[#5a5a72] hover:text-[#a3ff6e] transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + contact */}
          <div className="flex flex-col gap-3">
            <p className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] mb-2">Connect</p>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-satoshi text-[13px] text-[#5a5a72] hover:text-[#a3ff6e] transition-colors duration-200 w-fit"
              >
                <span className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity" />
                {l.label}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">↗</span>
              </a>
            ))}
            <a
              href="mailto:kamilabbas929@gmail.com"
              className="group flex items-center gap-2 font-satoshi text-[13px] text-[#5a5a72] hover:text-[#a3ff6e] transition-colors duration-200 w-fit mt-1"
            >
              <span className="w-1 h-1 rounded-full bg-current opacity-40 group-hover:opacity-100 transition-opacity" />
              kamilabbas929@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-fira text-[10px] text-[#5a5a72] uppercase tracking-widest">
            © {new Date().getFullYear()} Kamil Abbas · Islamabad, Pakistan
          </p>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-fira text-[10px] uppercase tracking-widest text-[#5a5a72] hover:text-[#a3ff6e] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="font-fira text-[10px] text-[#5a5a72]">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}