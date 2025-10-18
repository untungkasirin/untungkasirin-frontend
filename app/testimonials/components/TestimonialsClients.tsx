"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function TestimonialsClients() {
  const testimonials = [
    {
      quote:
        "Buku ini mengingatkan bahwa cash flow lebih utama dari laba dan omzet. Panduan lengkap bagi siapa pun yang ingin lebih bijak mengelola uang—baik pribadi, keluarga, maupun bisnis.",
      name: "Dr. Sepky Mardian",
      title: "Institut Agama Islam SEBI",
      photo: "/testimonials/testi-sepky.jpg",
    },
    {
      quote:
        "Buku ini sangat bermanfaat bagi pengusaha kecil yang ingin naik kelas. Kita diajak memahami dan menghitung dengan cermat uang yang masuk dan keluar agar bisa langsung diterapkan dalam bisnis sehari-hari.",
      name: "Ir. Wisnu Salman",
      title: "Direktur Operasional Asosiasi Tambang Batuan Indonenesia",
      photo: "/testimonials/testi-wisnu.jpg",
    },
  ];

  return (
    <motion.section
      id="testi-clients"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Apa Kata Mereka?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-soft dark:bg-[var(--color-soft)] shadow-sm transition flex flex-col items-center"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[var(--color-primary)] shadow-md"
              />
              <p className="italic text-lg mb-4 text-[var(--text-secondary)]">“{t.quote}”</p>
              <div className="text-center">
                <p className="font-semibold text-[var(--color-primary)]">{t.name}</p>
                <p className="text-sm text-secondary dark:text-gray-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
