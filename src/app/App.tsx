import { AnimatedBackground } from "./components/AnimatedBackground";
import { HeroSection } from "./components/HeroSection";
import { PodcastSection } from "./components/PodcastSection";
import { ImpactSection } from "./components/ImpactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <HeroSection />
        <PodcastSection />
        <ImpactSection />
        <Footer />
      </div>
    </div>
  );
}