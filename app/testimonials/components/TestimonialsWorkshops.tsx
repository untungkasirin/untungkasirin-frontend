"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function TestimonialsWorkshops() {
  const testimonials = [
    {
      quote:
        "Saya sudah melewati krisis 1998, 2008, dan 2015. Pelajarannya jelas: hanya bisnis dengan cash flow sehat yang bisa bertahan. Buku ini mengajarkan caranya.",
      name: "Thomas Dosy",
      title: "CEO PT Bumi Cipta Rasa (Kenangan Brands)",
      photo: "/testimonials/testi-thomas.jpg",
    },
    {
      quote:
        "Jangan tunggu sampai terlambat—pelajari Jago Cash Flow karena bisa menjadi langkah nyata menyelamatkan bisnis Anda.",
      name: "Ari Wibowo",
      title: "Founder & CEO Master Kuliner Group",
      photo: "/testimonials/testi-ari.jpg",
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
          Apa Kata Mereka?
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
