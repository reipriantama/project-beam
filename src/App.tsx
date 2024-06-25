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
      }, 11000);
    };

    fakeDataFetch();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <Layout className="fade-in-from-bottom bg-[#F2F4F7]">
      <Hero />
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
