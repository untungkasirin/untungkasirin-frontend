"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function AboutHero() {
  return (
    <motion.section
      id="tentang"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
          Tentang <span className="text-[var(--color-accent)]">Untung Kasirin</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Seorang <strong>Finance Strategist</strong>, <strong>Book Author</strong>, dan <strong>Tech Enthusiast </strong> 
          yang membantu pemilik bisnis memahami, mengelola, dan mengoptimalkan arus kas agar bisnis tetap sehat dan tumbuh berkelanjutan.
        </p>
        <img
          src="/author-untungkasirin.jpg"
          alt="Untung Kasirin"
          className="w-48 h-48 mx-auto rounded-full border-4 border-[var(--color-primary)] shadow-lg"
        />
      </div>
    </motion.section>
  );
}
