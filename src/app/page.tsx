

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Accordion from "@/components/ui/accordion";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import Topbar from "@/components/ui/Topbar";
import Hero from "@/components/ui/hero"
import CardGrid from "@/components/ui/card";

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
          <CardGrid />
      </section>
      <section className="flex flex-col md:flex-row py-17 bg-black">
        <FadeIn className="flex-1 flex flex-col justify-end p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 dark:text-white mb-4">
            Lorem Ipsum
          </h2>
          <p className="text-xl font-light text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, tortor vel maximus efficitur, est sapien gravida ex, eu luctus orci nisi pretium elit.
          </p>
        </FadeIn>
        <FadeIn className="flex-1 p-8" delay={200}>
          <Accordion />
        </FadeIn>
      </section>
    </div>
  );
}
