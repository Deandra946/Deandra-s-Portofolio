import { useState } from "react";
import { Award, X, ZoomIn } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import sertifikat1 from "../assets/certificates/1000140533.jpg";
import sertifikat2 from "../assets/certificates/1000140531.jpg";
import sertifikat3 from "../assets/certificates/1000140529.jpg";
import sertifikatblkng2 from "../assets/certificates/1000140529.jpg";
import sertifikat1blkg3 from "../assets/certificates/1000140529.jpg";

// lalu tambahkan import dan data di array ini.
const certifications: Array<{
  title: string;
  issuer: string;
  year: string;
  image?: string;
}> = [
  {
    title: "MENTARI MUDA (Sertifikasi Microsoft Office",
    issuer: "SMK MUHAMMADIYAH 1 WONOSOBO",
    year: "2025",
    image: sertifikat1,
  },
  {
    title: "CERTIFICATE OF COMPETENCY PENGEMBANGAN PERANGKAT LUNAK",
    issuer: "SMK MUHAMMADIYAH 1 WONOSOBO",
    year: "2025",
    image: sertifikat2,
  },
  {
    title: "SERTIFIKAT MAGANG PT. DIENG CYBER INDONESIA",
    issuer: "PT. DIENG CYBER INDONESIA",
    year: "2025",
    image: sertifikat3,
  },
];

export function Certifications() {
  const [selected, setSelected] = useState<
    (typeof certifications)[number] | null
  >(null);

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Award className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sertifikasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sertifikat dan pencapaian yang mendukung kompetensi saya.
          </p>
        </div>

        {certifications.length === 0 ? (
          <Card className="max-w-xl mx-auto border-dashed">
            <CardContent className="py-10 text-center">
              <Award className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
              <p className="font-medium text-foreground">
                Belum ada sertifikat yang ditambahkan.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Masukkan gambar sertifikat ke folder{" "}
                <code>src/assets/certificates</code> untuk menampilkannya di
                sini.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card
                key={`${cert.title}-${cert.issuer}`}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                onClick={() => setSelected(cert)}
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`Sertifikat ${cert.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <Award className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary mt-4">
                    <ZoomIn className="h-4 w-4" />
                    Klik untuk melihat sertifikat
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {selected?.image && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            aria-label="Tutup sertifikat"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setSelected(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selected.image}
            alt={`Sertifikat ${selected.title}`}
            className="max-h-[92vh] max-w-[92vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
