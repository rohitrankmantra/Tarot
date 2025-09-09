import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Toaster } from "sonner"; // ✅ Import Sonner
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "Mystical Tarot Readings - Guidance & Clarity",
  description:
    "Professional tarot readings offering insightful guidance and clarity for your life journey. Book your personalized reading today.",
  generator: "v0.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />

        {/* ✅ Sonner toast provider */}
<Toaster
  position="top-center"
  richColors={false}
  duration={4000}
  toastOptions={{
    className:
      "shadow-lg border border-border/40  px-6 py-4  font-medium",
    style: {
      borderRadius: "1rem",
      color :"#ce42ee",
      backgroundColor:"#fceeed",
      fontSize:"16px",
    },
  }}
/>
      </body>
    </html>
  );
}
