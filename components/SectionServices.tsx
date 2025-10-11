"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import { Briefcase, BookOpen, BarChart3 } from "lucide-react";

export default function SectionLayanan() {
  const layanan = [
    {
      icon: <BarChart3 className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Audit Cash Flow Bisnis",
      desc: "Meninjau arus kas dan menemukan kebocoran agar bisnis kamu tetap likuid dan efisien.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Bangun Sistem Keuangan",
      desc: "Membantu menyusun sistem keuangan yang rapi, terintegrasi, dan siap untuk scale-up.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[var(--color-primary)]" />,
      title: "Coaching & Mentoring",
      desc: "Sesi 1-on-1 untuk membantu kamu membaca laporan keuangan dan mengambil keputusan berbasis data.",
    },
  ];

  return (
    <motion.section
      id="layanan"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
          Layanan Profesional
        </h2>
        <p className="text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Saya membantu pemilik bisnis menata ulang sistem keuangan agar bisnisnya tidak hanya tumbuh, tapi juga sehat dan berkelanjutan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layanan.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-surface)] dark:bg-[var(--color-soft)] rounded-2xl shadow-sm p-8 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-secondary dark:text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
