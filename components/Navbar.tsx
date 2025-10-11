"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const links = [
    { href: "#hero", label: "Beranda" },
    { href: "#profil", label: "Profil" },
    { href: "#buku", label: "Buku" },
    { href: "#layanan", label: "Layanan" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 dark:bg-[var(--color-soft)]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="#hero" className="text-xl font-bold text-[var(--color-primary)]">
          Untung Kasirin
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-[var(--color-primary)]" />
            ) : (
              <Sun className="w-5 h-5 text-[var(--color-primary)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md border border-[var(--color-border)] text-[var(--text-primary)] hover:border-[var(--color-primary)] transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-surface)] dark:bg-[var(--color-soft)] border-t border-[var(--color-border)] transition-all">
          <div className="flex flex-col space-y-3 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center gap-2 text-[var(--color-primary)] font-medium mt-2"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
