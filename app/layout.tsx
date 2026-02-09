import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./modules/header";
import { Footer } from "./modules/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courses - CourseHub",
  description:
    "Explore our curated selection of top-tier courses across web development, marketing, and software engineering. Master Next.js, technical SEO, TypeScript design patterns, and more with expert-led content designed for developers at all levels.",
  openGraph: {
    title: "Courses - CourseHub",
    description:
      "Explore our curated selection of top-tier courses across web development, marketing, and software engineering. Master Next.js, technical SEO, TypeScript design patterns, and more with expert-led content designed for developers at all levels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
