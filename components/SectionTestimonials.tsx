"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import Image from "next/image";

export default function SectionTestimoni() {
  const testi = [
    {
      nama: "Sam Ipoel",
      jabatan: "Inbound Marketing Practicioner & Founder ShankaraCiptaAI",
      foto: "/testimonials/testi-sam.jpg",
      teks: "Banyak pemilik usaha terkecoh sama angka laba di kertas, padahal rekening udah megap-megap. Untung Kasirin ngajak kita balik ke hal paling krusial yang sering dilupain: cash flow adalah oksigen bisnis.",
    },
    {
      nama: "Fitrah Muhammad",
      jabatan: "Director & CCO Lintasarta (Indosat Ooredoo Hutchison Group)",
      foto: "/testimonials/testi-fitrah.jpg",
      teks: "Tidak seperti kebanyakan buku tentang manajemen finansial yang lain, buku ini berhasil escape dari jebakan teori dengan memberi contoh-contoh praktis sesuai realita di sekeliling kita.",
    },
    {
      nama: "Asrul Aminullah",
      jabatan: "Head of Corporate Transformation Bank Syariah Indonesia",
      foto: "/testimonials/testi-asrul.jpg",
      teks: "Buku ini tidak hanya membahas apa itu arus kas, tetapi juga memberikan panduan langkah demi langkah untuk membaca, menganalisa, hingga memproyeksikan cash flow dengan tepat.",
    },
  ];

  return (
    <motion.section
      id="testimoni"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="bg-surface px-6 py-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
          Apa Kata Mereka
        </h2>
        <p className="text-secondary dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Beberapa pemimpin dan praktisi bisnis tentang karya dan program yang saya jalankan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testi.map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-soft)] dark:bg-[var(--color-surface)] p-8 rounded-2xl shadow-sm border border-[var(--color-border)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-[var(--color-primary)]">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm italic text-secondary dark:text-gray-300 mb-4">
                “{item.teks}”
              </p>
              <h4 className="font-semibold text-primary dark:text-white">
                {item.nama}
              </h4>
              <p className="text-xs text-secondary dark:text-gray-400">
                {item.jabatan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
