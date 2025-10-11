import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
  description:
    "Official website of Untung Kasirin, a Finance Strategist, Book Author, and Tech Enthusiast helping business owners optimize cash flow and build data-driven systems.",
  openGraph: {
    title: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
    description:
      "Helping business owners optimize cash flow and build strong financial systems.",
    url: "https://untungkasirin.com",
    siteName: "Untung Kasirin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Untung Kasirin Website Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
    description:
      "Helping business owners optimize cash flow and build strong financial systems.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500`}
      >
        {/* 🌗 Theme Provider: Controls Light/Dark Mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🔝 Navbar */}
          <Navbar />

          {/* ✨ Page Transition Wrapper */}
          <PageTransition>
            <main className="pt-16 min-h-screen">{children}</main>
          </PageTransition>

          {/* 🆙 Scroll to Top */}
          <ScrollToTop />

          {/* ⚓ Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
