import "./App.css";
import CardEvent from "./components/feature/cardEvent";
import Hero from "./components/feature/hero";
import HeroSecond from "./components/feature/heroSecond";
import Marque from "./components/feature/marque";
import OurPartners from "./components/feature/ourPartners";
import OurPraEvent from "./components/feature/ourPraEvent";
import VideoSection from "./components/feature/videoSection";
import Layout from "./components/layout";

function App() {
  return (
    <Layout className="bg-[#F2F4F7]">
      <Hero />
      <VideoSection />
      <Marque />
      <OurPraEvent />
      <HeroSecond />
      <CardEvent />
      <OurPartners />
    </Layout>
  );
}

export default App;
