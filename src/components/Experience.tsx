import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Briefcase,
  Code,
  Camera,
  FileSpreadsheet,
  Calendar,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    title: "Magang - UI/UX Designer & Web Developer",
    company: "Dieng Cyber Indonesia",
    location: "Semagung, Wonosobo",
    period: "Juli 2024 - Oktober 2024",
    duration: "3 bulan",
    type: "Internship",
    icon: Briefcase,
    description:
      "Melakukan magang sebagai UI/UX Designer dan Web Developer dengan fokus pada pembuatan desain website yang user-friendly dan implementasi landing page.",
    responsibilities: [
      "Membuat desain website UI/UX yang menarik dan fungsional",
      "Mengembangkan landing page website yang responsif",
      "Berkolaborasi dengan tim untuk mengoptimalkan user experience",
      "Melakukan testing dan debugging pada website",
    ],
    skills: [
      "UI/UX Design",
      "HTML",
      "CSS",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Klien Pribadi",
    location: "Remote",
    period: "2023 - 2024",
    duration: "1 tahun",
    type: "Freelance",
    icon: Code,
    description:
      "Mengerjakan project pengembangan website sederhana menggunakan framework Laravel untuk berbagai klien dengan kebutuhan yang beragam.",
    responsibilities: [
      "Membangun website custom menggunakan Laravel framework",
    ],
    skills: ["Laravel", "PHP", "MySQL", "Bootstrap", "Git"],
  },
  {
    title: "Fotografer & Dokumentasi",
    company: "Organisasi & Event Lokal",
    location: "Wonosobo & sekitarnya",
    period: "Jika dibutuhkan",
    duration: "1 tahun",
    type: "Organisasi",
    icon: Camera,
    description:
      "Membantu dokumentasi untuk berbagai acara seperti wisuda, acara desa, dan event khusus lainnya.",
    responsibilities: [
      "Dokumentasi acara desa dan event komunitas",
      "Fotografi wisuda dan moment penting lainnya",
    ],
    skills: [
      "Photography",
      "Event Documentation",
      "Client Relations",
    ],
  },
  {
    title: "Administrasi TPQ",
    company: "TPQ Lokal",
    location: "Wonosobo",
    period: "2022 - Sekarang",
    duration: "1 tahun",
    type: "Organisasi",
    icon: FileSpreadsheet,
    description:
      "Bertanggung jawab dalam pengelolaan data administrasi TPQ termasuk data siswa, jadwal, dan laporan kegiatan menggunakan sistem digital.",
    responsibilities: [
      "Mengelola database siswa dan guru TPQ",
      "Membuat laporan kegiatan dan presensi",
      "Digitalisasi sistem administrasi manual",
      "Koordinasi dengan pengurus untuk kebutuhan data",
    ],
    skills: [
      "Data Management",
      "Microsoft Office",
      "Database Entry",
      "Administration",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pengalaman
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman saya dalam bidang teknologi,
            desain, dan fotografi melalui berbagai project dan
            pengalaman kerja.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                  <exp.icon className="w-3 h-3 text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >
                  <Card className="bg-background border-border hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <Badge
                            variant={
                              exp.type === "Internship"
                                ? "default"
                                : "secondary"
                            }
                            className="mb-2"
                          >
                            {exp.type}
                          </Badge>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mb-2">
                            {exp.company}
                          </p>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">
                          Tanggung Jawab:
                        </h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map(
                            (resp, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-muted-foreground"
                              >
                                • {resp}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pendidikan
            </h3>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                    <FileSpreadsheet className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    SMK Muhammadiyah 1 Wonosobo
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    Pengembangan Perangkat Lunak dan Gim (PPLG)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    2022 - 2025
                  </p>
                </div>

                <div className="space-y-3 text-left max-w-md mx-auto">
                  <h5 className="font-semibold text-foreground text-center mb-3">
                    Mata Pelajaran Unggulan:
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Pemrograman Web
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Database
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        UI/UX Design
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Game Development
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}