"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import { BarChart3, Layers, Settings } from "lucide-react";

export default function AboutExpertise() {
  const expertise = [
    {
      icon: <BarChart3 className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Manajemen Cash Flow",
      desc: "Merancang sistem dan strategi agar arus kas bisnis selalu sehat, stabil, dan siap untuk tumbuh.",
    },
    {
      icon: <Layers className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Sistem Keuangan & ERP",
      desc: "Membangun sistem digital yang memudahkan pencatatan, analisis, dan pengambilan keputusan.",
    },
    {
      icon: <Settings className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Strategi Bisnis & Keuangan",
      desc: "Membantu pemilik bisnis menerjemahkan angka menjadi strategi yang berdampak nyata pada pertumbuhan.",
    },
  ];

  return (
    <motion.section
      id="keahlian"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">Bidang Keahlian</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((e, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-soft dark:bg-[var(--color-soft)] shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{e.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
              <p className="text-[var(--text-secondary)]">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
