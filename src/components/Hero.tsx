import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Halo, saya</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Deandra
                <span className="block text-primary">Maulidin</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Creative and Adaptive
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Individu kreatif dan adaptif, siap berkembang di berbagai bidang
              dengan semangat belajar tinggi.{" "}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group" asChild>
                <a href="#portfolio">
                  Lihat Portofolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href="#contact">
                  Hubungi Saya
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent shadow-2xl">
                <img
                  src="/1.jpg"
                  alt="Deandra Maulidin"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                💻 Developer
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                📸 Photographer
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll ke bawah</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
