import "./App.css";
import HeroSecond from "./components/feature/heroSecond";
import OurPartners from "./components/feature/ourPartners";
import OurPraEvent from "./components/feature/ourPraEvent";
import Layout from "./components/layout";

function App() {
  return (
    <Layout className="bg-[#F2F4F7] px-12">
      <div>asdasd</div>
      <OurPraEvent />
      <HeroSecond />
      <OurPartners />
    </Layout>
  );
}

export default App;
