"use client";
import TestimonialsHero from "./components/TestimonialsHero";
import TestimonialsBooks from "./components/TestimonialsBooks";
import TestimonialsClients from "./components/TestimonialsClients";
import TestimonialsWorkshops from "./components/TestimonialsWorkshops";
import TestimonialsCTA from "./components/TestimonialsCTA";

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsBooks />
      <TestimonialsClients />
      <TestimonialsWorkshops />
      <TestimonialsCTA />
    </>
  );
}
