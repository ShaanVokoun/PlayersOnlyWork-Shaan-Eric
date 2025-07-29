import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/FadeIn";
export default function Hero() {
  return (
       <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, tortor vel maximus efficitur, est sapien gravida ex, eu luctus orci nisi pretium elit.
              </p>
              {/* Email */}
              <div className="max-w-md mx-auto mb-8">
                <div className="item-center gap-3">
                  <FadeIn delay={100}>
                    <Button className="bg-white text-black hover:bg-white-700 px-8">Lorem Ipsum</Button>
                  </FadeIn>
                </div>
                {/* Social proof */}
                <FadeIn delay={200}>
                  <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
  );
}
