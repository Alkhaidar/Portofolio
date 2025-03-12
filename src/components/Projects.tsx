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
      title: "Sistem Klasifikasi Uang Kuliah Tunggal",
      description:
        "Sistem Klasifikasi Uang Kuliah Tunggal (UKT) adalah sistem yang memprediksi besaran biaya kuliah mahasiswa berdasarkan faktor-faktor seperti pendapatan orang tua dan program studi, untuk memastikan penentuan biaya yang adil dan transparan.",
      tags: ["Flask", "Html", "Python", "MySql"],
      imageUrl: "/Project1.jpg", // Gambar dari folder public/images/
      linkUrl: "",
    },
    {
      title: "Tata Kelola Data Menggunakan Framework DAMA MBOK",
      description:
        "Tata Kelola Data menggunakan Framework DAMA MBOK adalah pendekatan sistematis untuk mengelola data dengan prinsip-prinsip terbaik yang mencakup kebijakan, prosedur, dan standar guna memastikan kualitas, keamanan, dan pemanfaatan data yang optimal dalam organisasi.",
      tags: ["Tata Kelola Data", "Data Governance"],
      imageUrl: "/Project4.jpg", // Gambar dari folder public/images/
      linkUrl: "",
    },
    {
      title: "Sistem Barang Masuk & Barang Keluar",
      description:
        "Sistem Barang Masuk & Barang Keluar adalah sistem yang digunakan untuk mencatat, memantau, dan mengelola alur pergerakan barang dari pemasok ke gudang (barang masuk) dan dari gudang ke pelanggan atau pengguna (barang keluar).",
      tags: ["Laravel", "Php", "Mysql", "Css"],
      imageUrl: "/Project3.jpg", // Gambar dari folder public/images/
      linkUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-24 section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-secondary/10" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="mb-16 text-center">
          <h2 className="text-heading-2 mb-4 gradient-text">My Projects</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Explore a selection of my recent work showcasing my skills and expertise across a range of technologies.
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
              <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-elevation transition-all duration-300 border border-primary/5 hover:border-primary/20">
                {/* Project Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl} // Mengambil gambar dari folder public/images/
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">No Image Available</span>
                    </div>
                  )}

                  <div
                    className={cn(
                      "absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 group-hover:opacity-100",
                      "transition-opacity duration-300"
                    )}
                  >
                    {project.linkUrl && (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:bg-white/90 transition-colors transform hover:scale-110 duration-200"
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
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground border border-primary/10"
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
