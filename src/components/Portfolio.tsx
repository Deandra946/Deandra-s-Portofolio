import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Eye, Code, Camera, PenTool, Database } from "lucide-react";

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
    title: "E-Learning Platform UI",
    category: "uiux",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc1ODI4NjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desain UI/UX untuk platform e-learning sekolah dengan fokus pada kemudahan navigasi dan pengalaman belajar yang optimal.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
    liveUrl: "#",
    type: "UI/UX Design"
  },
  {
    id: 2,
    title: "Website Sekolah",
    category: "uiux",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU4MjcyMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Landing page website sekolah yang responsif dengan design modern dan informasi yang lengkap untuk calon siswa dan orangtua.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    type: "Web Development"
  },
  {
    id: 3,
    title: "Laravel Blog System",
    category: "uiux",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJhdmVsJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzU4MzIyNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sistem blog sederhana menggunakan Laravel dengan fitur CRUD, authentication, dan admin panel untuk manajemen konten.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade"],
    githubUrl: "#",
    type: "Web Development"
  },
  {
    id: 4,
    title: "Dokumentasi Wisuda",
    category: "photography",
    image: "https://images.unsplash.com/photo-1743446770828-180040aba491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTgzMDYxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Dokumentasi profesional acara wisuda dengan pengambilan angle yang tepat dan editing yang natural untuk mengabadikan momen berharga.",
    tech: ["Photography", "Photo Editing", "Lightroom", "Photoshop"],
    liveUrl: "#",
    type: "Photography"
  },
  {
    id: 5,
    title: "Acara Desa Annual",
    category: "photography",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODMyMzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Fotografi event tahunan desa dengan dokumentasi lengkap mulai dari persiapan hingga penutupan acara.",
    tech: ["Event Photography", "Photo Editing", "Documentation"],
    liveUrl: "#",
    type: "Photography"
  },
  {
    id: 6,
    title: "Artikel Tech Review",
    category: "copywriting",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTgzMjMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Artikel review teknologi terbaru dengan bahasa yang mudah dipahami dan informasi yang akurat untuk pembaca awam.",
    tech: ["Content Writing", "SEO Writing", "Research", "Tech Review"],
    liveUrl: "#",
    type: "Copywriting"
  },
  {
    id: 7,
    title: "Content Social Media",
    category: "copywriting",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTgzMjEzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Pembuatan konten social media yang engaging untuk berbagai platform dengan strategi copywriting yang efektif.",
    tech: ["Social Media", "Copywriting", "Content Strategy", "Canva"],
    liveUrl: "#",
    type: "Copywriting"
  },
  {
    id: 8,
    title: "Sistem Data TPQ",
    category: "administration",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTgzMjMyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Digitalisasi sistem administrasi TPQ dari manual ke digital dengan database yang terstruktur dan laporan otomatis.",
    tech: ["Excel", "Data Entry", "Database Design", "Administration"],
    type: "Data Management"
  }
];

const categories = [
  { name: "Semua", value: "all", icon: Eye },
  { name: "UI/UX & Web", value: "uiux", icon: Code },
  { name: "Photography", value: "photography", icon: Camera },
  { name: "Copywriting", value: "copywriting", icon: PenTool },
  { name: "Administrasi", value: "administration", icon: Database }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portofolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kumpulan karya dan project yang telah saya kerjakan dalam berbagai bidang
            mulai dari pengembangan web, desain UI/UX, fotografi, hingga copywriting.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
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
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {item.githubUrl && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild>
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
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
            <a href="#contact">
              Diskusi Project Baru
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}