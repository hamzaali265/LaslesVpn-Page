import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import PlansSection from "./components/plansSection.jsx";
import MapSection from "./components/MapSection.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import FotterSection from "./components/fotterSection.jsx";
function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="">
        <NavBar />
        <HeroSection />
        <FeatureSection />
        <PlansSection />
        <MapSection />
        <TestimonialSection />
        <FotterSection />
      </div>
    </div>
  );
}

export default App;
