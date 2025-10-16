"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <motion.section
      id="hubungi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Siap Menata Ulang Keuangan Bisnis Anda?
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Mari berdiskusi tentang strategi, sistem, dan arus kas bisnis Anda — 
          agar bisnis tidak hanya terlihat untung di laporan, tapi juga lancar di rekening.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            📩 Hubungi Saya
          </Link>
          <Link href="/services" className="btn-outline">
            💼 Lihat Layanan
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
