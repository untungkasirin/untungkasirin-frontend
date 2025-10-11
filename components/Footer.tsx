"use client";
import { Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--color-border)] 
      bg-[var(--color-surface)] dark:bg-[var(--color-soft)]/90 
      backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand Info */}
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-[var(--color-primary)] text-lg font-semibold mb-2">
            Untung Kasirin
          </h3>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            Finance Strategist · Book Author · Tech Enthusiast
            <br />
            Membantu bisnis menata arus kas dan membangun sistem keuangan berbasis data.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/untungkasirin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-[var(--color-border)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/untungkasirin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full border border-[var(--color-border)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@untungkasirin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-full border border-[var(--color-border)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://wa.me/6281286113557"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-full border border-[var(--color-border)] text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--color-border)] text-center py-4 text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Untung Kasirin. All rights reserved.
      </div>
    </footer>
  );
}
