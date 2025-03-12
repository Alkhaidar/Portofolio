
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
    <section id="experience" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-heading-2 mb-10">Work Experience</h2>
        </AnimatedSection>

        <div className="space-y-10">
          {workHistory.map((work, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 200}
              className="relative border-l-2 border-primary/20 pl-8 pb-2"
            >
              <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-primary/20">
                <Briefcase size={20} className="text-primary" />
              </div>
              
              <div>
                <h3 className="text-heading-3 mb-1">{work.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-2">
                  <span className="font-medium">{work.company}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <div className="flex items-center gap-1 text-sm">
                    <CalendarDays size={14} />
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
