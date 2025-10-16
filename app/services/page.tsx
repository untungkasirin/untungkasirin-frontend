"use client";
import ServicesHero from "./components/ServicesHero";
import ServicesList from "./components/ServicesList";
import ServicesProcess from "./components/ServicesProcess";
import ServicesTestimonials from "./components/ServicesTestimonials";
import ServicesCTA from "./components/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesTestimonials />
      <ServicesCTA />
    </>
  );
}
