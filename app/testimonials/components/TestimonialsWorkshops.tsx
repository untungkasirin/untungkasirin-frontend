"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function TestimonialsWorkshops() {
  const testimonials = [
    {
      quote:
        "Pelatihannya ringan, interaktif, dan membuka wawasan. Banyak peserta yang jadi paham cara mengatur keuangan pribadi dengan lebih baik.",
      name: "Annisa Rahma",
      title: "HR Manager Master Kuliner Indonesia",
      photo: "/testimonials/testi-annisa.jpg",
    },
    {
      quote:
        "Workshop yang dibawakan sangat relate dengan kondisi peserta. Cara penyampaiannya sederhana tapi berdampak besar.",
      name: "Sam Ipoel",
      title: "Inbound Marketing Practicioner & Founder ShankaraCiptaAI",
      photo: "/testimonials/testi-sam.jpg",
    },
  ];

  return (
    <motion.section
      id="testi-workshops"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Pelatihan & Workshop
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-surface dark:bg-[var(--color-soft)] shadow-sm flex flex-col items-center"
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
