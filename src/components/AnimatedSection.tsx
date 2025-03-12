
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-in" 
  | "fade-up" 
  | "slide-in-right" 
  | "slide-in-left" 
  | "blur-in";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  children: React.ReactNode;
}

export const AnimatedSection = ({
  animation = "fade-up",
  delay = 0,
  threshold = 0.2,
  children,
  className,
  ...props
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(animationClass, className)}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
