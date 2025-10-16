"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function TestimonialsCTA() {
  return (
    <motion.section
      id="testi-cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Siap Jadi Kisah Sukses Berikutnya?
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Mari berkolaborasi untuk membangun sistem keuangan yang kuat, sehat, dan berkelanjutan.
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
