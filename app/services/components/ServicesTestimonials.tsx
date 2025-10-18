"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function ServicesTestimonials() {
  const testimonials = [
    {
      quote:
        "Buku ini menjelaskan pengelolaan uang dengan bahasa sederhana dan contoh yang mudah dimengerti. Relevan untuk siapa pun—mulai dari individu, keluarga, hingga bisnis besar.",
      name: "Darto Damin, SE., MM, AAIK, ICPU, QCRO",
      title: "Direktur PT Sunday Insurance Indonesia",
      photo: "/testimonials/testi-darto.jpg",
    },
    {
      quote:
        "Buku ini membuka mata saya bahwa cash flow adalah ‘nafas kehidupan organisasi’. Ditulis dengan bahasa sederhana dan analogi yang mudah, sangat relevan bahkan untuk lembaga sosial yang ingin berkelanjutan.",
      name: "Hendra Aditya",
      title: "CEO Ruang Baik",
      photo: "/testimonials/testi-hendra.jpg",
    },
  ];

  return (
    <motion.section
      id="services-testimonials"
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
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-surface dark:bg-[var(--color-soft)] shadow-sm transition-colors duration-500 flex flex-col items-center"
            >
              <img
                src={t.photo}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[var(--color-primary)] shadow-md"
              />
              <p className="italic text-lg mb-4 text-[var(--text-secondary)]">
                “{t.quote}”
              </p>
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
