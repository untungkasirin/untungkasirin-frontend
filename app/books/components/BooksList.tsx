"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function BooksList() {
  return (
    <motion.section
      id="books-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">Daftar Buku</h2>

        {/* Buku Jago Cash Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-surface rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
          <img
            src="/book-jcf.png"
            alt="Jago Cash Flow"
            className="w-56 rounded-lg shadow-md"
          />
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-bold mb-3 text-[var(--color-primary)]">
              Jago Cash Flow
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              Banyak bisnis terlihat sehat di laporan, tapi kehabisan napas di rekening.  
              Buku ini membantu Anda memahami arus kas dengan cara sederhana dan praktis —  
              agar bisnis tidak hanya terlihat untung, tetapi benar-benar punya uang.
            </p>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-6">
              *Sedang dalam proses penerbitan*
            </p>
            <Link href="/books/jago-cash-flow" className="btn-outline">
              Lihat Detail Buku
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
