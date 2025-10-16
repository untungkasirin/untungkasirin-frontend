"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function AboutStory() {
  return (
    <motion.section
      id="perjalanan"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">Perjalanan Saya</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Saya memulai karier di dunia korporasi, bekerja di perusahaan nasional dan multinasional seperti{" "}
            <strong>Garudafood</strong>, <strong>PT Bright Food International (Alfa Group)</strong>, dan{" "}
            <strong>Coats Group plc</strong>. Dari pengalaman tersebut, saya menyaksikan langsung banyak bisnis
            yang terlihat untung di laporan, tapi kehabisan napas di rekening.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Dari situ saya belajar: bisnis tidak mati karena rugi, tetapi karena gagal mengelola arus kas.
            Kini, misi saya adalah membantu pelaku usaha memahami angka, menata ulang sistem keuangan, 
            dan mengambil keputusan berdasarkan data — bukan sekadar insting.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
