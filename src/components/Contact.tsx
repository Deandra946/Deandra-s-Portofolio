import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Github, 
  MessageCircle,
  Send,
  User,
  FileText
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "deandramaulidin511@gmail.com",
    href: "mailto:deandramaulidin511@gmail.com"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 882-1512-5536",
    href: "https://wa.me/6288215125536",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Wonosobo, Jawa Tengah",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/deandramaulidinnn?igsh=enRmb21sZDkwOWlz",
    label: "Instagram",
    username: "@deandraamaulidinnn",
  },
  {
    icon: Github,
    href: "https://github.com/Deandra946",
    label: "GitHub",
    username: "deandraamaulidin",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/+6288215125536",
    label: "WhatsApp",
    username: "Chat WhatsApp",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk bekerja sama atau punya project menarik? Jangan ragu
            untuk menghubungi saya. Mari wujudkan ide kreatif Anda!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background border-border shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Send className="w-5 h-5" />
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-foreground flex items-center gap-2 mb-2"
                    >
                      <User className="w-4 h-4" />
                      Nama Depan
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Masukkan nama depan"
                      className="bg-muted/50 border-border"
                      disabled={true}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-foreground mb-2 block"
                    >
                      Nama Belakang
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Masukkan nama belakang"
                      className="bg-muted/50 border-border"
                      disabled={true}
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-foreground flex items-center gap-2 mb-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    className="bg-muted/50 border-border"
                    disabled={true}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="text-foreground mb-2 block"
                  >
                    Subjek
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Tentang apa yang ingin Anda diskusikan?"
                    className="bg-muted/50 border-border"
                    disabled={true}
                  />
                </div>

                <div>
                  <Label
                    htmlFor="project"
                    className="text-foreground mb-2 block"
                  >
                    Jenis Project
                  </Label>
                  <select
                    id="project"
                    className="w-full p-3 bg-muted/50 border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled={true}
                  >
                    <option value="">Pilih jenis project</option>
                    <option value="web">Website Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="photo">Fotografi & Dokumentasi</option>
                    <option value="content">Copywriting & Content</option>
                    <option value="admin">Administrasi & Data</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-foreground flex items-center gap-2 mb-2"
                  >
                    <FileText className="w-4 h-4" />
                    Pesan
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Ceritakan lebih detail tentang project atau ide Anda..."
                    rows={5}
                    className="bg-muted/50 border-border"
                    disabled={true}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Media Sosial
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <social.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {social.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-4 h-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Status Ketersediaan
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Saat ini saya sedang{" "}
                <span className="text-green-600 font-medium">tersedia</span>{" "}
                untuk project baru dan kolaborasi. Response time biasanya dalam
                1-2 jam.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Web Development
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  UI/UX Design
                </span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Photography
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Siap Memulai Project Bersama?
            </h3>
            <p className="text-muted-foreground mb-6">
              Mari diskusikan ide Anda dan wujudkan solusi kreatif yang tepat
              sasaran.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/+6288215125536"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:deandramaulidin511@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Kirim Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}