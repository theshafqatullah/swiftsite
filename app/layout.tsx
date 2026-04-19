import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Flashsite — AI Website Builder",
    template: "%s | Flashsite",
  },
  description: "Build beautiful, production-ready websites in minutes with AI. No coding required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${ibmPlexSans.variable} ${geistMono.variable}`}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
