"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function JCFProblem() {
  return (
    <motion.section
      id="jcf-problem"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8 leading-tight">
          Pernahkah Bisnismu Terlihat Untung,<br /> Tapi Kas Sering Kosong?
        </h2>

        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-6">
          Banyak bisnis tumbang bukan karena rugi, tapi karena gagal mengelola arus kas.
          <br />Profit hanyalah angka di laporan, sementara arus kas adalah darah kehidupan bisnis.
        </p>

        <p className="text-md md:text-lg text-secondary dark:text-gray-400 max-w-3xl mx-auto">
          Buku <strong>Jago Cash Flow</strong> membantu kamu memahami, mengelola,
          dan mengoptimalkan arus kas agar bisnis tetap sehat, tumbuh, dan siap menghadapi krisis.
        </p>
      </div>
    </motion.section>
  );
}
