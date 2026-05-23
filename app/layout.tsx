import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamil Abbas — Full Stack Developer",
  description:
    "Full Stack Web Developer specializing in Next.js, React, Node.js, and MongoDB. Working at Top Dog Leads LLC, freelancing on Upwork & Fiverr. PEC Registered Engineer from Islamabad, Pakistan.",
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Web Developer Pakistan",
    "Kamil Abbas",
    "Upwork",
    "Fiverr",
  ],
  authors: [{ name: "Kamil Abbas", url: "https://www.linkedin.com/in/kamilabbas1214/" }],
  openGraph: {
    title: "Kamil Abbas — Full Stack Developer",
    description:
      "Building modern, performant web applications. Next.js · React · Node.js · MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@300;400;500;700&family=Fira+Code:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}