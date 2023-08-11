import CallToAction from "../CallToAction/CallToAction";
import GetInTouch from "../GetInTouch/GetInTouch";
import HeroSection from "../HeroSection";
import Services from "../Services/Services";
import Vision from "../Vision/Vision";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Vision />
      <CallToAction />
      <Services />
      <GetInTouch />
    </div>
  );
};

export default Home;
