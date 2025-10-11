"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function SectionStory() {
  return (
    <motion.section
      id="profil"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-20 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
          Dulu, saya pikir bisnis yang profit pasti aman.
        </h2>
        <p className="text-lg text-secondary dark:text-gray-300 mb-8 leading-relaxed">
          Ternyata tidak. Banyak usaha yang kelihatannya laku keras, tapi diam-diam kesulitan bayar supplier
          atau gaji karyawan. Dari pengalaman mengelola keuangan puluhan outlet dan beberapa perusahaan,
          saya belajar satu hal penting: <span className="font-semibold text-[var(--color-primary)]">arus kas adalah darah bisnis.</span>
        </p>
        <a href="#tentang" className="btn-primary">Tentang Saya →</a>
      </div>
    </motion.section>
  );
}
