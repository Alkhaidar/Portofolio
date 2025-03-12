
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
      title: "Visual Communication Design Teacher",
      company: "SMK SWASTA ULUMUDDIN",
      period: "Juli 2024 - Present",
      description: "Sebagai Guru Desain Grafis dan TPAV di SMK Ulumuddin Boarding School di Lhokseumawe, Aceh, saya memiliki semangat untuk menginspirasi siswa dalam menciptakan karya visual dan multimedia yang luar biasa. Dengan keahlian dalam desain grafis, pengeditan video/audio, dan produksi sinematik, saya membimbing dan membina siswa untuk memanfaatkan kreativitas mereka serta mengembangkan keterampilan dalam desain dan teknologi multimedia. Pendekatan saya menggabungkan kreativitas dengan pengetahuan teknis, menciptakan lingkungan di mana siswa dapat berkembang dalam dunia penceritaan visual dan seni digital."
    },
    {
      title: "Network Techician",
      company: "PT. Medianusa Permana",
      period: "Maret 2023 - Juli 2023",
      description: "Selama magang saya sebagai Teknisi Jaringan di PT. Medianusa Permana dari Maret hingga Juli 2023, saya bertanggung jawab dalam pemasangan dan pemeliharaan peralatan, membantu teknisi senior dalam pemecahan masalah, serta memastikan kinerja perangkat tetap optimal. Peran ini memungkinkan saya untuk mengasah keterampilan teknis dan ketelitian, memastikan semua sistem berjalan dengan lancar. Sebagai bagian dari magang, saya terlibat dalam proyek penting di mana saya membantu pemasangan 500 Access Point di JW Marriott Hotel Medan. Menggunakan perangkat ARUBA Access Point, proyek ini bertujuan untuk meningkatkan cakupan dan kualitas Wi-Fi di seluruh hotel, memberikan akses internet yang cepat dan stabil bagi tamu dan staf, serta memperkuat infrastruktur jaringan untuk mendukung operasional hotel dan meningkatkan pengalaman tamu."
    },
    {
      title: "IT Techician",
      company: "Razan Computer",
      period: "Januari 2019 - Februari 2019",
      description: "Selama magang di Razan Komputer, saya memperoleh pengalaman praktis dalam berbagai tugas seperti instalasi komputer, perawatan printer, dan pemeliharaan perangkat keras secara umum. Saya juga berperan penting dalam mendukung kelancaran pelaksanaan Ujian Nasional di salah satu  SMP dengan menginstal dan mengonfigurasi jaringan IP untuk  komputer, memastikan sistem berjalan dengan lancar selama ujian berlangsung. Pengalaman ini mengasah keterampilan teknis saya dalam instalasi perangkat keras dan perangkat lunak, serta meningkatkan kemampuan saya dalam pemecahan masalah dan pemeliharaan sistem untuk memastikan kinerja yang optimal."
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
