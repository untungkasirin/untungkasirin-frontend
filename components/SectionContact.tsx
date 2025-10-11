"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function SectionContact() {
  return (
    <motion.section
      id="kontak"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="py-20 text-center bg-soft dark:bg-[var(--color-soft)] transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
        Siap Menata Ulang Cash Flow Bisnis Anda?
      </h2>
      <p className="text-secondary dark:text-gray-300 mb-8">
        Mari berdiskusi, saya senang berbagi insight dan solusi yang relevan.
      </p>
      <a
        href="https://wa.me/628xxxxxxx"
        target="_blank"
        className="btn-primary"
      >
        Hubungi via WhatsApp
      </a>
    </motion.section>
  );
}
