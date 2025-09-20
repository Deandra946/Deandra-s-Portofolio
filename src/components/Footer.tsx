import { 
  Code, 
  Instagram, 
  Github, 
  MessageCircle, 
  Mail, 
  MapPin,
  Heart,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Kontak", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "UI/UX Design", 
    "Fotografi & Dokumentasi",
    "Copywriting & Content",
    "Administrasi Data"
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/deandramaulidinnn?igsh=enRmb21sZDkwOWlz",
      label: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/Deandra946",
      label: "GitHub",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/+6288215125536",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:deandramaulidin511@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Deandra Maulidin</h3>
                <p className="text-muted-foreground text-sm">Creative Developer & Visual Storyteller</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
              Siswa SMK jurusan PPLG yang passionate dalam menciptakan solusi digital kreatif. 
              Mengkhususkan diri pada pengembangan web, desain UI/UX, dan fotografi profesional.
            </p>
            
            <div className="flex items-start gap-3 text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Bomerto, kec. Wonosobo, kab. Wonosobo, Jawa Tengah</p>
               
              </div>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} Deandra Maulidin. All Rights Reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border/50 text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Dibuat dengan <Heart className="w-3 h-3 text-red-500 fill-current" /> menggunakan React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}