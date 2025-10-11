"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function SectionBook() {
  return (
    <motion.section
      id="buku"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
          Buku Terbaru: Jago Cash Flow
        </h2>
        <p className="text-lg text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Panduan praktis mengelola kas bisnis, memahami laporan keuangan, dan membuat bisnis tetap likuid
          meski profit fluktuatif.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Image
            src="/book-jcf.png"
            alt="Buku Jago Cash Flow"
            width={220}
            height={320}
            className="rounded-xl shadow-md border border-[var(--color-border)] dark:border-gray-700"
          />
          <div className="max-w-md text-left">
            <ul className="list-disc list-inside text-secondary dark:text-gray-300 mb-6 space-y-2">
              <li>Cocok untuk pemilik UKM & startup</li>
              <li>Disertai studi kasus dan template keuangan</li>
              <li>Telah mendapat testimoni dari berbagai praktisi bisnis</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-primary">Baca Cuplikan</a>
              <a href="#" className="btn-outline">Dapatkan Bukunya</a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
