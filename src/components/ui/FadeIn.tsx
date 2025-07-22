import React from "react";
import { useFadeInOnScroll } from "@/lib/useFadeInOnScroll";

type FadeInProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all duration-900 ease-out opacity-0 translate-y-8 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}