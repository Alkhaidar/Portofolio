
import { CalendarDays, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface WorkItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const WorkExperience = () => {
  const workHistory: WorkItem[] = [
    {
      title: "Senior Web Developer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Lead development of enterprise web applications using React, Node.js, and GraphQL. Managed a team of five developers and implemented CI/CD pipelines that reduced deployment time by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Developed responsive user interfaces for clients in finance and healthcare sectors. Implemented state management with Redux and improved application performance by 30%."
    },
    {
      title: "Web Developer Intern",
      company: "CreativeTech Studio",
      period: "2017 - 2018",
      description: "Assisted in building and maintaining client websites. Gained hands-on experience with HTML, CSS, JavaScript, and modern frontend frameworks."
    }
  ];

  return (
    <section id="experience" className="py-24 section-padding relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 to-white" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-heading-2 mb-10 gradient-text">Work Experience</h2>
        </AnimatedSection>

        <div className="space-y-10">
          {workHistory.map((work, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="relative border-l-2 border-primary/20 pl-8 pb-2"
            >
              <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-primary shadow-[0_0_10px_rgba(120,119,198,0.3)]">
                <Briefcase size={20} className="text-primary" />
              </div>
              
              <div className="group hover:transform hover:translate-x-1 transition-transform duration-300">
                <h3 className="text-heading-3 mb-1 group-hover:text-primary transition-colors">{work.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-2">
                  <span className="font-medium">{work.company}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <div className="flex items-center gap-1 text-sm">
                    <CalendarDays size={14} className="text-accent" />
                    <span>{work.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{work.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
