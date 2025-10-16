"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function BooksCTA() {
  return (
    <motion.section
      id="books-cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Dapatkan Update Saat Buku Terbit
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Ingin jadi yang pertama tahu saat <strong>Jago Cash Flow</strong> resmi dirilis?  
          Daftarkan email Anda dan dapatkan bonus konten eksklusif.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            📬 Daftar Notifikasi
          </Link>
          <Link href="/about" className="btn-outline">
            👤 Tentang Penulis
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
