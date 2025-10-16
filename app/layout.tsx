import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://untungkasirin.com"),
  title: {
    default: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
    template: "%s | Untung Kasirin",
  },
  description:
    "Finance Strategist, Book Author, & Tech Enthusiast. Helping business owners manage cash flow, build strong systems, and make data-driven decisions.",
  keywords: [
    "Untung Kasirin",
    "Finance Strategist",
    "Cash Flow",
    "Manajemen Keuangan",
    "Buku Jago Cash Flow",
    "ERP Bisnis",
  ],
  openGraph: {
    type: "website",
    url: "https://untungkasirin.com",
    title: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
    description:
      "Helping business owners optimize cash flow and build strong financial systems.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Untung Kasirin — Finance Strategist & Tech Enthusiast",
    description:
      "Helping business owners optimize cash flow and build strong financial systems.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
