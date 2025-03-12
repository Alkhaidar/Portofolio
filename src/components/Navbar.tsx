
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);
      
      // Get all sections for highlighting active nav item
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "glass shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-lg font-semibold tracking-tight text-primary"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href.substring(1) 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary mt-1 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col space-y-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed top-[68px] left-0 right-0 bg-background/90 backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-border",
          mobileMenuOpen ? "opacity-100 h-auto" : "opacity-0 h-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-2 px-4 rounded-md transition-colors",
                activeSection === item.href.substring(1)
                  ? "bg-secondary/50 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary/30"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
