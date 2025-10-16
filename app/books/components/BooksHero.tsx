"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function BooksHero() {
  return (
    <motion.section
      id="books-hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
          Buku Karya <span className="text-[var(--color-accent)]">Untung Kasirin</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mx-auto">
          Saya percaya ilmu keuangan tidak harus rumit.  
          Melalui buku-buku ini, saya ingin membantu pelaku bisnis memahami angka dan mengelola kas dengan lebih tenang.
        </p>
      </div>
    </motion.section>
  );
}
