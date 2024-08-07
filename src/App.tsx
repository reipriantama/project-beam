import { useEffect, useState } from "react";
import "./App.css";
import CardEvent from "./components/feature/cardEvent";
import Hero from "./components/feature/hero";
import HeroSecond from "./components/feature/heroSecond";
import Marque from "./components/feature/marque";
import OurPartners from "./components/feature/ourPartners";
import OurPraEvent from "./components/feature/ourPraEvent";
import VideoSection from "./components/feature/videoSection";
import Layout from "./components/layout";
import Loader from "./components/loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    fakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Layout className="bg-[#F2F4F7]">
      <Hero className="fade-in-from-bottom" />
      <VideoSection />
      <Marque />
      <OurPraEvent />
      <HeroSecond />
      <CardEvent />
      <OurPartners />
    </Layout>
  );

  // return <Loader />;
}

export default App;
