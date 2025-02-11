import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round, Playfair_Display } from "next/font/google";
import "./globals.css";
import portfoliothimb from "../public/portfolio-thumbnail.jpg";
import Script from 'next/script'

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
  title: "Tej R's Insights: Web Developer | Learn, Build, Grow",
  description: "Explore the portfolio of Tej R, a passionate web developer dedicated to learning, building, and growing in the field of web development, frontend development. Discover projects, skills, and insights.",
  openGraph: {
    title: "Tej R's Insights: Web Developer | Learn, Build, Grow",
    description: "Explore the portfolio of Tej R, a passionate web developer dedicated to learning, building, and growing in the field of web development, frontend development. Discover projects, skills, and insights.",
    type: 'website',
    url: "https://tejdevin.vercel.app/",
    siteName: "Tej R's Portfolio Insights",
    images: [
      {
        url: portfoliothimb.src,
        width: 1200,
        height: 630,
        alt: "Tej R Portfolio Thumbnail",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NNEVWQ15D8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NNEVWQ15D8');
      `,
          }}
        />
      </head>
      <body  >
        {/* ${geistSans.variable} ${geistMono.variable} */}
        {children}
      </body>
    </html>
  );
}
