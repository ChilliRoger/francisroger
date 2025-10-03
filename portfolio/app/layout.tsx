import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Francis Roger - Portfolio",
  description: "Frontend Developer | Problem Solver | Lifelong Learner. Explore my projects, skills, and experience in web development.",
  keywords: ["Francis Roger", "Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Francis Roger" }],
  creator: "Francis Roger",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://francisroger.dev",
    title: "Francis Roger - Portfolio",
    description: "Frontend Developer | Problem Solver | Lifelong Learner",
    siteName: "Francis Roger Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Roger - Portfolio",
    description: "Frontend Developer | Problem Solver | Lifelong Learner",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.73/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
