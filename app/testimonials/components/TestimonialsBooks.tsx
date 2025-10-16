"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function TestimonialsBooks() {
  const testimonials = [
    {
      quote:
        "Buku ini menyajikan panduan praktis dari A sampai Z — relevan bagi UKM dan startup. Buku ini akan mengubah cara pandangmu tentang arus kas.",
      name: "Ahmad Gozali",
      title: "Financial Planner & Penulis Buku Habiskan Gajimu",
      photo: "/testimonials/testi-gozali.jpg",
    },
    {
      quote:
        "Bahasanya membumi dan penuh analogi sederhana. Buku ini wajib dibaca siapa pun yang serius ingin bisnisnya bertahan lama.",
      name: "Ai Nur Bayinah",
      title: "Founder & CEO Halfinan Perencana Keuangan Syariah",
      photo: "/testimonials/testi-ai.jpg",
    },
  ];

  return (
    <motion.section
      id="testi-books"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Pembaca Buku <span className="text-[var(--color-accent)]">Jago Cash Flow</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-surface dark:bg-[var(--color-soft)] shadow-sm transition-colors flex flex-col items-center"
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
