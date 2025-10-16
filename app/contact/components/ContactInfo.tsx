"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6 text-[var(--color-primary)]" />,
      label: "Email",
      value: "hello@untungkasirin.com",
      href: "mailto:hello@untungkasirin.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-[var(--color-primary)]" />,
      label: "Telepon / WhatsApp",
      value: "+62 812-3456-7890",
      href: "https://wa.me/6281234567890",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[var(--color-primary)]" />,
      label: "Lokasi",
      value: "Depok, Jawa Barat, Indonesia",
    },
  ];

  return (
    <motion.section
      id="contact-info"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-24 transition-colors duration-500 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12">
          Informasi Kontak
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--color-border)] rounded-2xl bg-soft dark:bg-[var(--color-soft)] shadow-sm"
            >
              <div className="flex justify-center mb-3">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{c.label}</h3>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-[var(--text-secondary)]">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Sosial Media */}
        <div className="flex justify-center gap-6 mt-10">
          <a href="https://linkedin.com/in/untungkasirin" target="_blank">
            <Linkedin className="w-6 h-6 text-[var(--color-primary)] hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com/untungkasirin" target="_blank">
            <Instagram className="w-6 h-6 text-[var(--color-primary)] hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
