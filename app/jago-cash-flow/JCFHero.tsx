"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFHero() {
  return (
    <motion.section
      id="jcf-hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Kolom kiri: Sampul Buku */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/book-jcf.png"
            alt="Buku Jago Cash Flow"
            className="w-72 md:w-80 drop-shadow-2xl rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Kolom kanan: Headline & CTA */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
            Jago Cash Flow
          </h1>

          <p className="text-lg md:text-xl text-secondary dark:text-gray-300 mb-6">
            Bisnis boleh untung di laporan, tapi kalau kasnya seret — semua terasa berat.
          </p>

          <p className="text-md md:text-lg text-secondary dark:text-gray-400 mb-8 max-w-lg">
            Buku <strong>Jago Cash Flow</strong> membantu kamu memahami, mengelola, dan mengoptimalkan arus kas
            agar bisnis tetap sehat, tumbuh, dan siap menghadapi krisis.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#beli" className="btn-primary">Beli Sekarang</a>
            <a href="#isi-buku" className="btn-outline">Lihat Isi Buku</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
