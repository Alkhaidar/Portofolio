
import AnimatedSection from "./AnimatedSection";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16 pb-32 md:pb-20 section-padding"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_50%,rgba(247,248,250,1),rgba(255,255,255,0))]" />
      
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <AnimatedSection 
            animation="fade-in" 
            className="mb-4"
          >
            <div className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-sm mb-6">
              Welcome to my portfolio
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-up" 
            delay={200} 
            className="mb-6"
          >
            <h1 className="text-heading-1 max-w-3xl text-balance mb-6 tracking-tight">
              Creating digital experiences with attention to detail
            </h1>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-up" 
            delay={400} 
            className="mb-10"
          >
            <p className="text-body-large text-muted-foreground max-w-xl text-balance">
              I'm a developer and designer passionate about crafting beautiful, 
              functional, and user-centered digital experiences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-up" 
            delay={600}
          >
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="#projects" 
                className={cn(
                  "inline-flex items-center justify-center h-11 px-6 py-3",
                  "bg-primary text-primary-foreground rounded-full",
                  "font-medium transition-all duration-200",
                  "hover:shadow-button hover:translate-y-[-2px]",
                  "active:translate-y-[0px] active:shadow-none"
                )}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center justify-center h-11 px-6 py-3",
                  "bg-secondary text-secondary-foreground rounded-full",
                  "font-medium transition-all duration-200",
                  "hover:bg-secondary/80 hover:shadow-button hover:translate-y-[-2px]",
                  "active:translate-y-[0px] active:shadow-none"
                )}
              >
                Contact Me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background shadow-subtle"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
