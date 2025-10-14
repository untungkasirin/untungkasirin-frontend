"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFContent() {
  const topics = [
    "Perbedaan laba dan cash flow — dan kenapa banyak bisnis bangkrut meski terlihat untung",
    "Cara membaca laporan arus kas tanpa harus jadi akuntan",
    "Teknik forecasting agar tidak lagi kebakaran jenggot saat kas menipis",
    "Strategi mempercepat piutang dan mengelola utang dengan aman",
    "Action plan 30 hari menjadi 'Cash Flow Master'",
  ];

  return (
    <motion.section
      id="isi-buku"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-10 leading-tight">
          Apa yang Akan Kamu Pelajari di Buku Ini?
        </h2>

        <p className="text-lg text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Buku <strong>Jago Cash Flow</strong> disusun berdasarkan pengalaman nyata di lapangan —
          bukan teori semata. Semua babnya dirancang agar mudah dipahami dan langsung bisa kamu praktikkan.
        </p>

        <ul className="text-left inline-block text-lg leading-relaxed text-secondary dark:text-gray-400 space-y-3">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] text-xl mt-1">✔</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
