
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export const About = () => {
  const skills = [
    "Scientific Writer",
    "Enthusiastic Thinker",
    "Web Development",
    "UI/UX Design",
    "Mobile Development",
    "Project Management",
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
              <p className="text-body">Hi, My name is <strong>Al Khaidar, S.Tr.Kom.</strong>.</p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-body mb-4 text-muted-foreground">
              Saya adalah seorang Pemikir Teknologi dan pengembang yang memiliki hasrat dalam menciptakan pengalaman digital yang indah, fungsional, dan berfokus pada pengguna. Selain itu, saya juga seorang guru yang berdedikasi, berkomitmen untuk menginspirasi dan membimbing siswa di bidang teknologi dan desain.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-body mb-6 text-muted-foreground">
              Pendekatan saya menggabungkan pemikiran kreatif dengan keahlian teknis untuk menghasilkan hasil yang tidak hanya memenuhi, tetapi melampaui harapan. Saya percaya pada kekuatan pembelajaran terus-menerus dan tetap berada di garis depan teknologi yang sedang berkembang.
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
                  <img src="/Fix.jpg" alt="Profile" className="w-full h-full object-cover" />
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
