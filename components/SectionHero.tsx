"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function SectionHero() {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
          Bisnis boleh untung di laporan,<br /> tapi kalau kasnya seret — semua terasa berat.
        </h1>
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Saya membantu pemilik bisnis menata ulang arus kas, membangun sistem keuangan yang rapi,
          dan mengambil keputusan berbasis data — agar bisnis berjalan lancar, bukan hanya terlihat bagus di laporan.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#layanan" className="btn-primary">Audit Cash Flow Gratis</a>
          <a href="#buku" className="btn-outline">Baca Buku Jago Cash Flow</a>
        </div>
      </div>
    </motion.section>
  );
}
