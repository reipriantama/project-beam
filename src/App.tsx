import "./App.css";
import HeroSecond from "./components/feature/heroSecond";
import Marque from "./components/feature/marque";
import OurPartners from "./components/feature/ourPartners";
import OurPraEvent from "./components/feature/ourPraEvent";
import VideoSection from "./components/feature/videoSection";
import Layout from "./components/layout";

function App() {
  return (
    <Layout className="bg-[#F2F4F7]">
      <div>asdasd</div>
      <VideoSection />
      <Marque />
      <OurPraEvent />
      <HeroSecond />
      <OurPartners />
    </Layout>
  );
}

export default App;
