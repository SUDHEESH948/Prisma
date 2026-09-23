import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OceanSection from "@/components/sections/OceanSection";
import NetworkSection from "@/components/sections/NetworkSection";
import AirSection from "@/components/sections/AirSection";
import RoadSection from "@/components/sections/RoadSection";
import AboutSection from "@/components/sections/AboutSection";
import TechnologySection from "@/components/sections/TechnologySection";
import WhySection from "@/components/sections/WhySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      <HeroSection scrollTo={scrollTo} />
      <IntroSection />
      <ServicesSection />
      <OceanSection />
      <NetworkSection />
      <AirSection />
      <RoadSection />
      <AboutSection />
      <TechnologySection />
      <WhySection />
      <ContactSection />
    </div>
  );
}
