"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function ServicesProcess() {
  const steps = [
    { number: "1", title: "Konsultasi Awal", desc: "Diskusi mendalam tentang kondisi keuangan dan tantangan bisnis Anda." },
    { number: "2", title: "Analisis & Rencana", desc: "Menganalisis data keuangan dan merancang strategi perbaikan arus kas." },
    { number: "3", title: "Implementasi Sistem", desc: "Membantu penerapan sistem digital dan SOP keuangan yang efisien." },
    { number: "4", title: "Evaluasi & Pendampingan", desc: "Monitoring hasil, pelatihan tim, dan penyempurnaan sistem untuk jangka panjang." },
  ];

  return (
    <motion.section
      id="services-process"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">Proses Kerja</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-xl bg-soft dark:bg-[var(--color-soft)] shadow-sm"
            >
              <div className="text-4xl font-bold text-[var(--color-accent)] mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-[var(--text-secondary)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
