"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFAuthor() {
  return (
    <motion.section
      id="penulis"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
          Tentang Penulis
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Foto Penulis */}
          <img
            src="/author-untungkasirin.jpg"
            alt="Untung Kasirin"
            className="w-40 h-40 rounded-full object-cover border-4 border-[var(--color-primary)] shadow-lg"
          />

          {/* Deskripsi */}
          <div className="text-left max-w-md">
            <p className="text-secondary dark:text-gray-300 mb-4 leading-relaxed">
              Untung Kasirin adalah seorang <strong>Finance Strategist</strong>,
              penulis buku <em>Jago Cash Flow</em>, dan praktisi keuangan dengan
              pengalaman lebih dari 14 tahun di bidang akuntansi dan manajemen keuangan bisnis.
            </p>
            <p className="text-secondary dark:text-gray-400 leading-relaxed">
              Ia percaya bahwa bisnis tidak mati karena rugi, tetapi karena gagal
              mengelola arus kas. Melalui buku dan karyanya, ia membantu ribuan
              pelaku usaha memahami dan mengendalikan keuangan bisnis mereka.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
