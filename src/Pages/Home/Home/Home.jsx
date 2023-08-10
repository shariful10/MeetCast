import Footer from "../../../components/Shared/Footer/Footer";
import CallToAction from "../CallToAction/CallToAction";
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
      <Footer />
    </div>
  );
};

export default Home;
