"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Link from "next/link";

export default function AboutBook() {
  return (
    <motion.section
      id="buku"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Buku Terbaru: <span className="text-[var(--color-accent)]">Jago Cash Flow</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/book-jcf.png"
            alt="Jago Cash Flow"
            className="w-56 rounded-xl shadow-lg border border-[var(--color-border)]"
          />
          <div className="max-w-md text-left">
            <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">
              <strong>“Jago Cash Flow”</strong> adalah panduan praktis bagi pelaku bisnis untuk memahami,
              mengelola, dan mengoptimalkan arus kas dengan cara sederhana. 
              Buku ini ditulis dengan bahasa yang ringan, studi kasus nyata, dan tips yang bisa langsung dipraktikkan.
            </p>
            <p className="text-[var(--text-secondary)] mb-6">
              Saat ini sedang dalam proses penerbitan dan segera tersedia dalam versi cetak dan digital.
            </p>
            <Link href="/books/jago-cash-flow" className="btn-outline">
              Lihat Detail Buku
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
