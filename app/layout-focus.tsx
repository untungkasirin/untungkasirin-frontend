import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Jago Cash Flow — Buku Panduan Kelola Arus Kas Bisnis",
  description:
    "Pelajari cara membaca, mengelola, dan mengoptimalkan cash flow bisnis agar tidak sekadar untung di laporan, tapi juga kuat di kas.",
  openGraph: {
    title: "Jago Cash Flow — Buku Panduan Kelola Arus Kas Bisnis",
    description:
      "Buku Jago Cash Flow membantu Anda mengatur keuangan bisnis agar tetap sehat dan berkembang.",
    url: "https://untungkasirin.com/jago-cash-flow",
    siteName: "Untung Kasirin",
    images: [
      {
        url: "/og-image-jcf.jpg",
        width: 1200,
        height: 630,
        alt: "Jago Cash Flow by Untung Kasirin",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayoutFocus({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Fokus langsung ke konten */}
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
