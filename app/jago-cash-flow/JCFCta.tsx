"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFCta() {
  return (
    <motion.section
      id="beli"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight">
          Dapatkan Buku <span className="text-primary dark:text-white">Jago Cash Flow</span>
        </h2>

        <p className="text-lg md:text-xl mb-10 text-secondary dark:text-gray-300 max-w-3xl mx-auto">
          Buku ini tersedia di berbagai platform marketplace resmi.
          Miliki sekarang dan mulai kelola arus kas bisnismu dengan cara yang benar.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <a
            href="https://tokopedia.com"
            target="_blank"
            className="btn-primary bg-[var(--color-primary)] text-white hover:opacity-90"
          >
            Tokopedia
          </a>
          <a
            href="https://shopee.com"
            target="_blank"
            className="btn-outline border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            Shopee
          </a>
          </div>
      </div>
    </motion.section>
  );
}
