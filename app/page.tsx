import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Media from "./components/Media";
import Brands from "./components/Brands";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Media />
      <Brands />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
