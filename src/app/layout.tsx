import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
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
  title: "Freedom House Health Consulting - Healthcare Business Solutions",
  description: "Expert healthcare consulting services for modern healthcare businesses. Transform your operations with strategic insights and proven methodologies.",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Company Logo */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/20250627_FH Consulting_Logo.png" 
                alt="Freedom House Health Consulting Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold text-gray-900 ${spectral.className}`}>Freedom House Health Consulting</h1>
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
