
import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  linkUrl?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A complete web application with user authentication, dashboard, and analytics features.",
      tags: ["React", "Node.js", "MongoDB"],
      linkUrl: "#"
    },
    {
      title: "Project Two",
      description: "Mobile application for tracking fitness goals and nutrition with personalized recommendations.",
      tags: ["React Native", "Firebase", "UI/UX Design"],
      linkUrl: "#"
    },
    {
      title: "Project Three",
      description: "E-commerce platform with integrated payment processing and inventory management system.",
      tags: ["TypeScript", "Next.js", "Stripe"],
      linkUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <h2 className="text-heading-2 mb-4">My Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing my skills and expertise across
            different technologies and design approaches.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={200 + index * 100}
              className="group"
            >
              <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300">
                {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/50 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Image</span>
                  </div>
                  
                  <div className={cn(
                    "absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-300"
                  )}>
                    {project.linkUrl && (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-heading-3 mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-body mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
