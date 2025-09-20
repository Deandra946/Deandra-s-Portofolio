import { Card } from "./ui/card";
import { 
  Palette, 
  FileSpreadsheet, 
  Code, 
  PenTool, 
  Camera,
  Figma,
  FileText
} from "lucide-react";

const skills = [
  {
    category: "Desain",
    items: [
      { name: "Canva", icon: Palette, level: 90 },
      { name: "Figma", icon: Figma, level: 85 }
    ]
  },
  {
    category: "Office",
    items: [
      { name: "Microsoft Office", icon: FileSpreadsheet, level: 95 },
      { name: "Google Spreadsheet", icon: FileText, level: 90 }
    ]
  },
  {
    category: "Pemrograman",
    items: [
      { name: "HTML", icon: Code, level: 90 },
      { name: "CSS", icon: Code, level: 85 },
      { name: "Laravel", icon: Code, level: 80 }
    ]
  },
  {
    category: "Kreatif",
    items: [
      { name: "Copywriting", icon: PenTool, level: 85 },
      { name: "Photography", icon: Camera, level: 90 }
    ]
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tentang Saya
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Saya adalah lulusan SMK Muhammadiyah 1 Wonosobo jurusan Pengembangan
            Perangkat Lunak dan Gim yang memiliki passion di bidang teknologi,
            desain, dan fotografi. Dengan kombinasi keterampilan teknis dan
            kreativitas, saya berkomitmen untuk menghadirkan solusi inovatif dan
            bernilai dalam setiap pekerjaan maupun proyek yang saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Profil Singkat
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Nama:</strong> Deandra
                Maulidin
              </p>
              <p>
                <strong className="text-foreground">Jurusan:</strong>{" "}
                Pengembangan Perangkat Lunak dan Gim (PPLG)
              </p>
              <p>
                <strong className="text-foreground">Focus Area:</strong> Web
                Development, UI/UX Design, Photography, Administration
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Passion & Minat
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mengembangkan aplikasi web yang user-friendly</li>
                <li>• Menciptakan desain yang menarik dan fungsional</li>
                <li>• Mengabadikan momen berharga melalui fotografi</li>
                <li>• Belajar teknologi baru dan tren industri terkini</li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Keahlian & Tools
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((category) => (
                <Card
                  key={category.category}
                  className="p-6 bg-background border-border hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-foreground mb-4 text-center">
                    {category.category}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "2+", label: "Tahun Belajar" },
            { number: "10+", label: "Project Selesai" },
            { number: "5+", label: "Skill Dikuasai" },
            { number: "100%", label: "Dedikasi" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}