
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { LogoGraphic } from "@/components/LogoGraphic";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Experience />
        <LogoGraphic />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
