"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import { LineChart, Database, BookOpenCheck } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      icon: <LineChart className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Audit & Optimasi Cash Flow",
      desc: "Analisis mendalam terhadap arus kas bisnis Anda untuk menemukan kebocoran, menata kembali aliran uang, dan memperkuat kesehatan keuangan perusahaan.",
    },
    {
      icon: <Database className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Pembuatan Sistem Keuangan Digital",
      desc: "Membangun sistem keuangan berbasis data (ERP, dashboard, dan automation tools) agar proses pencatatan dan analisis keuangan menjadi efisien dan akurat.",
    },
    {
      icon: <BookOpenCheck className="w-10 h-10 text-[var(--color-primary)]" />,
      title: "Pelatihan Keuangan & Cash Flow",
      desc: "Workshop dan pelatihan interaktif untuk tim bisnis agar memahami laporan keuangan, membaca arus kas, dan mengelola keuangan dengan bijak.",
    },
  ];

  return (
    <motion.section
      id="services-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Bidang Layanan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-surface dark:bg-[var(--color-soft)] shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-[var(--text-secondary)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
