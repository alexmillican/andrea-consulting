import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import Image from 'next/image';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Freedom House Healthcare Consulting",
  description: "Helping Life Sciences organizations optimize their market access leveraging HEOR tools.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Company Logo */}
            <div className="w-12 h-12 flex items-center justify-center -mt-1">
              <Image 
                src="/20250627_FH Consulting_Logo.png" 
                alt="Freedom House Healthcare Consulting Logo" 
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold text-gray-900 ${spectral.className}`}>Freedom House Healthcare Consulting</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
