"use client";
import Accordion from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/FadeIn";

export default function FAQ(){
    return(
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
    );
}