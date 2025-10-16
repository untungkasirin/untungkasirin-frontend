"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function ServicesTestimonials() {
  const testimonials = [
    {
      quote:
        "Pendekatannya sangat praktis dan sistematis. Setelah audit arus kas, kami jadi tahu kebocoran dan bisa memperbaikinya cepat.",
      name: "Bei Fadilah",
      title: "Direktur PT Empat Sahabat Automasi",
      photo: "/testimonials/testi-bei.jpg",
    },
    {
      quote:
        "Workshopnya ringan tapi mengena. Tim saya jadi paham bagaimana membaca laporan arus kas dan mengambil keputusan yang lebih baik.",
      name: "Abdul Rozak",
      title: "Direktur PT Rekayasa Unggul Indonesia",
      photo: "/testimonials/testi-rozak.jpg",
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
          Apa Kata Klien?
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
