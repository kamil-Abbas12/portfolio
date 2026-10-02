import type { Metadata } from "next";
import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamil Abbas",
  jobTitle: "Full-Stack Web Developer and SEO Specialist",
  description: "Full-stack developer and technical SEO specialist in Islamabad, Pakistan.",
  email: "mailto:kamilabbas929@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "COMSATS University Islamabad" },
  sameAs: [
    "https://github.com/kamil-Abbas12",
    "https://www.linkedin.com/in/kamilabbas1214/",
    "https://www.upwork.com/freelancers/kamila32",
    "https://www.fiverr.com/s/ZmXbPBa"
  ],
  knowsAbout: [
    "Full-stack web development", "Technical SEO", "On-page SEO", "Keyword research",
    "Site audits", "Core Web Vitals", "Google Analytics 4", "IoT systems"
  ]
};

export const metadata: Metadata = {
  title: "Full-Stack Developer & SEO Specialist | Kamil Abbas",
  description: "Full-stack developer and SEO specialist in Islamabad building fast web apps, lead-generation sites, and search-ready experiences with Next.js and React.",
  keywords: [
    "Kamil Abbas", "Full-Stack Developer", "SEO Specialist", "Technical SEO", "On-page SEO",
    "Next.js Developer", "React Developer", "Web Developer Islamabad", "Lead Generation"
  ],
  authors: [{ name: "Kamil Abbas", url: "https://www.linkedin.com/in/kamilabbas1214/" }],
  openGraph: {
    title: "Full-Stack Developer & SEO Specialist | Kamil Abbas",
    description: "Full-stack developer and SEO specialist in Islamabad building fast web apps, lead-generation sites, and search-ready experiences with Next.js and React.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer & SEO Specialist | Kamil Abbas",
    description: "Full-stack developer and SEO specialist in Islamabad building fast web apps, lead-generation sites, and search-ready experiences with Next.js and React.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        {children}
      </body>
    </html>
  );
}