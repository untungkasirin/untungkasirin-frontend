import SectionHero from "@/components/SectionHero";
import SectionStory from "@/components/SectionStory";
import SectionBook from "@/components/SectionBook";
import SectionServices from "@/components/SectionServices";
import SectionTestimonials from "@/components/SectionTestimonials";
import SectionContact from "@/components/SectionContact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      {/* 🌟 Hero Section */}
      <SectionHero />

      {/* 🧭 Story Section */}
      <SectionStory />

      {/* 📘 Book Section */}
      <SectionBook />

      {/* 💼 Services Section */}
      <SectionServices />

      {/* 💬 Testimonials Section */}
      <SectionTestimonials />

      {/* 📞 Contact Section */}
      <SectionContact />
    </main>
  );
}
