import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmileCare Medical Center | Premium Dental Clinic Sharjah",
  description: "Comprehensive dental implants, cosmetic transformations, and advanced restorative dentistry tailored with personalized care in Al Majaz, Sharjah.",
  keywords: ["dental clinic sharjah", "dental implants", "teeth whitening", "cosmetic dentistry", "Dr Riyaz Jamaluddin", "SmileCare"],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logosmallsymbol-png.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/logosmallsymbol-png.png",
  },
  openGraph: {
    title: "SmileCare Medical Center | Premium Dental Clinic",
    description: "Healthy, beautiful smiles for everyone. Specialist restorative, aesthetic, and implant dentistry.",
    url: "https://smilecare.ae",
    siteName: "SmileCare Medical Center",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#F8FAFD] text-[#596579] antialiased selection:bg-[#0861A8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
