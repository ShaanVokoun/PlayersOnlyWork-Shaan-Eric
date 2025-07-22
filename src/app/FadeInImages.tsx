import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // shadcn utility, or use your own className combiner

interface FadeInImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, className }) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={cn(
        "transition-opacity duration-1000 ease-out opacity-0",
        isVisible && "opacity-100",
        className
      )}
    />
  );
};

// Example usage
export default function FadeInImages() {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Forest
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // Mountains
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80", // Beach
  ];

  return (
    <div className="space-y-8 p-8 max-w-2xl mx-auto">
      {images.map((src, idx) => (
        <FadeInImage
          key={src}
          src={src}
          alt={`Placeholder image ${idx + 1}`}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      ))}
    </div>
  );
}