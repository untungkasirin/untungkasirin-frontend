"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";

export default function ContactForm() {
  return (
    <motion.section
      id="contact-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-soft px-6 py-24 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
          Kirim Pesan
        </h2>

        <form
            action="https://formsubmit.co/untungkasirin@gmail.com"
            method="POST"
            className="bg-surface p-8 rounded-2xl shadow-sm border border-[var(--color-border)]"
            >
            <input type="hidden" name="_subject" value="Pesan Baru dari Website UntungKasirin.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://untungkasirin.com/thank-you" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    name="Nama Lengkap"
                    required
                    className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--color-primary)] outline-none transition"
                />
                </div>

                <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="Email"
                    required
                    className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--color-primary)] outline-none transition"
                />
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                Pesan
                </label>
                <textarea
                name="Pesan"
                rows={5}
                required
                className="w-full p-3 rounded-lg border border-[var(--color-border)] bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--color-primary)] outline-none transition"
                />
            </div>

            <button type="submit" className="btn-primary w-full">
                🚀 Kirim Pesan
            </button>
            </form>

      </div>
    </motion.section>
  );
}
