import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BackToTop } from "@/components/BackToTop";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AEO } from "@/components/AEO";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0d" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Premium Men's Grooming Across Dubai`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "barber dubai",
    "best barber dubai",
    "haircut dubai",
    "barber near me",
    "men's salon dubai",
    "fade haircut dubai",
    "beard trim dubai",
    "hair color dubai",
    "kids haircut dubai",
    "karama barber",
    "media city barber",
    "barber near media city",
    "barber near karama",
    "ramee royal hotel barber"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    title: `${siteConfig.name} — Premium Men's Grooming Across Dubai`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Premium Men's Grooming Across Dubai`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" }
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
  verification: {
    google: siteConfig.gscId,
    yandex: siteConfig.indexnowKey,
    yahoo: siteConfig.indexnowKey
  },
  other: {
    "yandex-verification": siteConfig.indexnowKey,
    "msvalidate.01": siteConfig.indexnowKey
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Prevent theme flash — set the dark class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('dh-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})()`
          }}
        />
        {/* IndexNow verification */}
        <link rel="indexnow" href={`${siteConfig.url}/${siteConfig.indexnowKey}.txt`} />
        {/* Preconnect to Google Fonts & Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        {/* Google Analytics (uncomment and add GA ID when ready) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`
        }} /> */}
      </head>
      <body className="min-h-screen bg-paper text-ink-900 antialiased dark:bg-ink-900 dark:text-white">
        <ThemeProvider>
          <LocalBusinessSchema />
          <AEO />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-ink-950"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
