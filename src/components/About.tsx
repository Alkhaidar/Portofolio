
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export const About = () => {
  const skills = [
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "Project Management",
    "SEO Optimization",
    "Digital Marketing"
  ];

  return (
    <section 
      id="about" 
      className="py-24 section-padding relative"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* About Content */}
          <div className="order-2 md:order-1">
            <AnimatedSection animation="fade-up">
              <h2 className="text-heading-2 mb-6 gradient-text">About Me</h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-body mb-4 text-muted-foreground">
                I'm a dedicated professional with a passion for creating elegant solutions to complex problems.
                With several years of experience in the tech industry, I've developed a keen eye for detail
                and a commitment to excellence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-body mb-6 text-muted-foreground">
                My approach combines creative thinking with technical expertise to deliver results
                that not only meet but exceed expectations. I believe in the power of continuous learning
                and staying at the forefront of emerging technologies.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          {/* Image/Profile */}
          <div className="order-1 md:order-2">
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elevation">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Your Profile Image</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/60 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/60 rounded-lg -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
