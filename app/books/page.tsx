"use client";
import BooksHero from "./components/BooksHero";
import BooksList from "./components/BooksList";
import BooksTestimonials from "./components/BooksTestimonials";
import BooksCTA from "./components/BooksCTA";

export default function BooksPage() {
  return (
    <>
      <BooksHero />
      <BooksList />
      <BooksTestimonials />
      <BooksCTA />
    </>
  );
}
