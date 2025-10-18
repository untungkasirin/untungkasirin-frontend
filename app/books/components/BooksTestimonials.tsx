"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function BooksTestimonials() {
  const testimonials = [
    {
      quote:
        "Jago Cash Flow seperti teman ngobrol yang menuntun pelaku usaha memahami inti bisnis: bukan sekadar omzet besar, tapi arus kas yang sehat. Ditulis dengan bahasa ringan dan relevan untuk semua pelaku UMKM.",
      name: "Kamaludin Enuh",
      title: "CEO PT Jawara Edukasi Bisnis & Ketua Jaringan Wirausaha Kota Depok",
      photo: "/testimonials/testi-kamal.jpg",
    },
    {
      quote:
        "Cash is the king, but flow is the key. Buku ini praktis, mudah dipahami, dan sarat manfaat. Wajib jadi panduan bagi siapa pun yang ingin menikmati aliran kas yang berkah dan berkesinambungan.",
      name: "Ai Nur Bayinah",
      title: "Founder & CEO Halfinan Perencana Keuangan Syariah",
      photo: "/testimonials/testi-ai.jpg",
    },
  ];

  return (
    <motion.section
      id="books-testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Apa Kata Mereka Tentang Buku Ini?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-soft dark:bg-[var(--color-soft)] shadow-sm transition-colors duration-500 flex flex-col items-center"
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
