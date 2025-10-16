"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <motion.section
      id="contact-cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Mari Bekerja Sama
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          Apakah Anda ingin memperbaiki arus kas, melatih tim keuangan, atau membangun sistem digital bisnis?  
          Hubungi saya dan mari wujudkan bersama.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="btn-outline">
            💼 Lihat Layanan
          </Link>
          <a href="mailto:hello@untungkasirin.com" className="btn-primary">
            📬 Kirim Email
          </a>
        </div>
      </div>
    </motion.section>
  );
}
