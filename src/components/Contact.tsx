
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <h2 className="text-heading-2 mb-4">Get In Touch</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below or through my contact information.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="fade-up" delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-subtle">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-transparent",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                        "transition-all duration-200"
                      )}
                      placeholder="Nama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border bg-transparent",
                        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                        "transition-all duration-200"
                      )}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border bg-transparent",
                      "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
                      "transition-all duration-200 resize-none"
                    )}
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={cn(
                    "w-full flex items-center justify-center h-12 px-6",
                    "bg-primary text-primary-foreground rounded-lg",
                    "font-medium transition-all duration-200",
                    "hover:bg-primary/90 hover:shadow-button",
                    "disabled:opacity-70 disabled:cursor-not-allowed",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center">
                      <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" /> 
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fade-up" delay={400} className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-subtle h-full">
              <h3 className="text-heading-3 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Buket Rata, Lhokseumawe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Email Address</h4>
                    <a 
                      href="mailto:alkhaidarkutablang@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      alkhaidarkutablang@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/082361138731" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +6282361138731
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
