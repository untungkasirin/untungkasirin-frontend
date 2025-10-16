"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFTestimonials() {
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
        "Buku ini praktis, mudah dipahami, dan sarat manfaat. Wajib jadi panduan bagi siapa pun yang ingin menikmati aliran kas yang berkah dan berkesinambungan.",
      name: "Ai Nur Bayinah",
      title: "Founder & CEO Halfinan Perencana Keuangan Syariah",
      photo: "/testimonials/testi-ai.jpg",
    },
    {
      quote:
        "Jago Cash Flow seperti teman ngobrol yang menuntun pelaku usaha memahami inti bisnis: bukan sekadar omzet besar, tapi arus kas yang sehat.",
      name: "Kamaludin Enuh",
      title: "CEO PT Jawara Edukasi Bisnis & Ketua Jaringan Wirausaha Kota Depok",
      photo: "/testimonials/testi-kamal.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide setiap 7 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <motion.section
      id="testimoni"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-12 leading-tight">
          Apa Kata Mereka?
        </h2>

        {/* Carousel Container */}
        <div className="relative h-[380px] flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-8 border border-[var(--color-border)] rounded-2xl bg-surface dark:bg-[var(--color-soft)] text-secondary dark:text-gray-300 shadow-sm max-w-2xl mx-auto flex flex-col items-center"
            >
              {/* Foto */}
              <img
                src={testimonials[index].photo}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[var(--color-primary)] shadow-md"
              />

              {/* Kutipan */}
              <p className="italic text-lg mb-4 max-w-md">
                “{testimonials[index].quote}”
              </p>

              {/* Nama & Jabatan */}
              <div className="text-center">
                <p className="font-semibold text-[var(--color-primary)]">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-secondary dark:text-gray-400">
                  {testimonials[index].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[var(--color-primary)] scale-110"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-[var(--color-primary)]"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
