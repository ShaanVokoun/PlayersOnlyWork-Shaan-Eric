

"use client";
import Accordion from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import Topbar from "@/components/ui/Topbar";
import Hero from "@/components/ui/hero"
import CardPlacerholders from "@/components/ui/card";
import FAQ from "@/components/ui/faq";

export default function PlayersOnlyLanding() {
  return (
    <div className="bg-black flex flex-col min-h-screen text-white">
      {/* Header */}
      <FadeIn>
        <Topbar />
      </FadeIn>

      {/* Top header */}
      <Hero />

      {/* Value Proposition */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">Lorem ipsum </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </FadeIn>
          </div>
          {/* Card's in the grid order */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <CardPlacerholders />
            <CardPlacerholders />
          </div>
          <div className="gid md:grid-cols-2 lg:grid-colsp-2 gap-8">
            <CardPlacerholders />
            <CardPlacerholders />
          </div>
        </div>
      </section>
      {/* FAQS */}
      <FAQ />
    </div>
  );
}
