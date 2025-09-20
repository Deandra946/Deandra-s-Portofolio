import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Camera,
  PenTool,
  Database,
} from "lucide-react";
import project1 from "../assets/portofolio/1.png";
import project2 from "../assets/portofolio/2.png";
import project3 from "../assets/portofolio/3.jpg";
import project4 from "../assets/portofolio/4.jpg";
import project5 from "../assets/portofolio/5.jpg";
import project6 from "../assets/portofolio/6.jpg";
import project7 from "../assets/portofolio/7.png";
import project8 from "../assets/portofolio/8.jpg";
// import project2 from "figma:asset/portfolio/2.jpg";
// Tambahkan sesuai jumlah gambar

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Desain Landing page toko sepatu",
    category: "uiux",
    image: project1,
    description:
      "Desain UI/UX untuk platform e-commerce saat menjadi peserta magang di Dieng Cyber Indonesia.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    liveUrl: "#",
    type: "UI/UX Design",
  },
  {
    id: 2,
    title: "Website Perusahaan",
    category: "uiux",
    image: project2,
    description:
      "Landing page perusahaan saat menjadi peserta magang di Dieng Cyber Indonesia",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Web Development",
  },
  {
    id: 3,
    title: "Dokumentasi Acara 17 Agustus oleh Anshor dusun Larangan",
    category: "photography",
    image: project3,
    description:
      "Tim dokumentasi acara 17 agustus 2025 oleh Anshor dusun larangan, yang mengadakan lomba layangan",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
    githubUrl: "#",
    type: "Web Development",
  },
  {
    id: 4,
    title: "Dokumentasi Wisuda",
    category: "photography",
    image: project4,
    description: "Membantu mendokumentasikan teman saat wisuda.",
    tech: ["Photography"],
    liveUrl: "#",
    type: "Photography",
  },
  {
    id: 5,
    title: "Dokumentasi Acara Dasa Sura",
    category: "photography",
    image: project5,
    description:
      "Fotografi event tahunan desa dengan dokumentasi lengkap mulai dari persiapan hingga penutupan acara.",
    tech: ["Event Photography", "Documentation"],
    liveUrl: "#",
    type: "Photography",
  },
  {
    id: 6,
    title: "Menulis artikel",
    category: "copywriting",
    image: project6,
    description:
      "Menulis artikel tentang teknologi khususnya oprasi sistem di website Dieng Cyber Indonesia.",
    tech: ["Content Writing", "SEO Writing", "Research", "Tech Review"],
    liveUrl: "#",
    type: "Copywriting",
  },
  {
    id: 7,
    title: "Dokumentasi Akhirusannah TPQ",
    category: "photography",
    image: project8,
    description:
      "Tim dokumentasi Akhirusannah TPQ AN - NAHDHIYAH dusun larangan.",
    tech: ["Event Photography", "Documentation"],
    liveUrl: "#",
    type: "Copywriting",
  },
  {
    id: 8,
    title: "Sistem Data TPQ",
    category: "administration",
    image: project7,
    description:
      "Digitalisasi sistem administrasi TPQ dari manual ke digital dengan membuat aplikasi sederhana agar penginputan data lebih cepat dan simple.",
    tech: ["Excel", "Data Entry", "Database Design", "Administration"],
    type: "Data Management",
  },
];

const categories = [
  { name: "Semua", value: "all", icon: Eye },
  { name: "UI/UX & Web", value: "uiux", icon: Code },
  { name: "Photography", value: "photography", icon: Camera },
  { name: "Copywriting", value: "copywriting", icon: PenTool },
  { name: "Administrasi", value: "administration", icon: Database },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portofolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kumpulan karya dan project yang telah saya kerjakan dalam berbagai
            bidang mulai dari pengembangan web, desain UI/UX, fotografi, hingga
            copywriting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={
                activeCategory === category.value ? "default" : "outline"
              }
              onClick={() => setActiveCategory(category.value)}
              className="flex items-center gap-2"
              size="sm"
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group bg-background border-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-accent/20">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.type}
                  </Badge>
                  <div className="flex gap-2">
                    {item.liveUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {item.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        asChild
                      >
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Diskusi Project Baru</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
