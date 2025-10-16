"use client";
import JCFHero from "./JCFHero";
import JCFProblem from "./JCFProblem";
import JCFContent from "./JCFContent";
import JCFTestimonials from "./JCFTestimonials";
import JCFAuthor from "./JCFAuthor";
import JCFCta from "./JCFCta";

export default function JagoCashFlowPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <JCFHero />
      <JCFProblem />
      <JCFContent />
      <JCFTestimonials />
      <JCFAuthor />
      <JCFCta />
    </main>
  );
}
