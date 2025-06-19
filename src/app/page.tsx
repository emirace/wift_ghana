import FloatingHeader from "./_components/floatingHeader";
import Hero from "./_components/hero";
import PresidentStatement from "./_components/presidentStatement";
import About from "./_components/about";
import Pillars from "./_components/pillars";
import Footer from "./_components/footer";
import ExecutiveTeam from "./_components/excutiveTeams";
import VisionMission from "./_components/vision";
import WhyUs from "./_components/whyUs";
import OurObjectives from "./_components/ourObjectives";
import ActionBanner from "./_components/actionBanner";
import Partners from "./_components/partiners";
import Events from "./_components/event";

export default function Home() {
  return (
    <div className="font-berthold overflow-x-hidden">
      <Hero />
      <FloatingHeader />
      <About />
      <PresidentStatement />
      <VisionMission />
      <Pillars />
      <WhyUs />
      <OurObjectives />
      <Events />
      <ExecutiveTeam />
      <Partners />
      <ActionBanner />
      <Footer />
    </div>
  );
}
