import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const PlayfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tej R's Insights: Passionate Web Developer | Learning, Building, Growing",
  description: "Explore the portfolio of Tej R, a passionate web developer dedicated to learning, building, and growing in the field of web development, erontend development. Discover projects, skills, and insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        {/* ${geistSans.variable} ${geistMono.variable} */}
        {children}
      </body>
    </html>
  );
}
