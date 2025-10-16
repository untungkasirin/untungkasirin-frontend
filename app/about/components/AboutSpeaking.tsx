"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function AboutSpeaking() {
  return (
    <motion.section
      id="speaking"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Pelatihan & Workshop</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
          Saya aktif menjadi pembicara dalam pelatihan keuangan, strategi bisnis, dan sistem digital.
          Tujuannya sederhana — membantu lebih banyak orang memahami arus kas dan membangun bisnis yang berkelanjutan.
        </p>
      </div>
    </motion.section>
  );
}
