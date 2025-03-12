
import { BookOpen, CalendarDays } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const Education = () => {
  const educationHistory: EducationItem[] = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning. Conducted research on natural language processing and completed thesis on sentiment analysis algorithms."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National Institute of Technology",
      period: "2014 - 2018",
      description: "Graduated with honors. Focused on software engineering, data structures, and algorithms. Participated in multiple hackathons and coding competitions."
    },
    {
      degree: "High School Diploma",
      institution: "Science Academy",
      period: "2011 - 2014",
      description: "Completed advanced courses in mathematics, physics, and computer programming. Led the school's robotics club and won regional competitions."
    }
  ];

  return (
    <section id="education" className="py-24 section-padding relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-primary/10" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/30 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-heading-2 mb-10 gradient-text">Education</h2>
        </AnimatedSection>

        <div className="space-y-10">
          {educationHistory.map((edu, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="relative border-l-2 border-accent/30 pl-8 pb-2"
            >
              <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-accent shadow-[0_0_10px_rgba(174,103,250,0.3)]">
                <BookOpen size={20} className="text-accent" />
              </div>
              
              <div className="group hover:transform hover:translate-x-1 transition-transform duration-300">
                <h3 className="text-heading-3 mb-1 group-hover:text-accent transition-colors">{edu.degree}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-2">
                  <span className="font-medium">{edu.institution}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <div className="flex items-center gap-1 text-sm">
                    <CalendarDays size={14} className="text-primary" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
