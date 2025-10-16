"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-center px-6 py-24 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto"
      >
        {/* 🚫 Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
        </motion.div>

        {/* 🧭 Headline */}
        <h1 className="text-5xl font-bold text-[var(--color-primary)] mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] mb-3">
          Oops! Page not found.
        </h2>
        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
          The page you’re looking for might have been moved, renamed, or
          doesn’t exist anymore. Let’s get you back on track.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="btn-primary"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>

      {/* 🌈 Brand gradient glow (subtle) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[var(--color-primary)]/20 via-[var(--color-accent)]/10 to-transparent blur-3xl"
      />
    </section>
  );
}
