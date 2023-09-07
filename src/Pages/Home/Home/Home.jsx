import CallToAction from "../CallToAction/CallToAction";
import FaceToFace from "../FaceToFace/FaceToFace";
import Features from "../Features/Features";
import GetInTouch from "../GetInTouch/GetInTouch";
import HeroSection from "../HeroSection";
import Services from "../Services/Services";
import Vision from "../Vision/Vision";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<Vision />
			<FaceToFace />
			<Features />
			<CallToAction />
			<Services />
			<GetInTouch />
		</div>
	);
};

export default Home;
