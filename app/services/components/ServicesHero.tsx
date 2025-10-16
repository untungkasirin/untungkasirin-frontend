"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function ServicesHero() {
  return (
    <motion.section
      id="services-hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface text-center px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-6 leading-tight">
          Layanan Profesional
        </h1>
        <p className="text-lg md:text-xl text-secondary dark:text-gray-300 max-w-3xl mx-auto">
          Saya membantu pemilik bisnis dan profesional keuangan membangun sistem arus kas, 
          mengoptimalkan keputusan berbasis data, dan memastikan bisnis berjalan dengan sehat, efisien, dan berkelanjutan.
        </p>
      </div>
    </motion.section>
  );
}
