"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <motion.section
      id="services-cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Siap Memperkuat Sistem Keuangan Bisnis Anda?
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Jadwalkan konsultasi gratis untuk mengevaluasi kondisi arus kas dan sistem keuangan bisnis Anda hari ini.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            📞 Konsultasi Sekarang
          </Link>
          <Link href="/about" className="btn-outline">
            👤 Tentang Saya
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
