import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Certifications } from "./components/Certifications";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}