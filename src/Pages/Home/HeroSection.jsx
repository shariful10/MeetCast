import { Link } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import VerticalLine from "../../Components/VerticalLine/VerticalLine";
import heroBg from "../../assets/banner.png";
import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div
      className="bg-white md:h-[800px] bg-contain bg-no-repeat w-full md:flex justify-center items-center py-32 md:py-20 font-manrope"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-5 items-center">
          <div>
            <div className="md:max-w-[545px] lg:max-w-[600px] xl:max-w-[700px] order-1">
              <p
                className="text-sm md:text-xl my-3 font-semibold capitalize"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                More connected. more collaborative, more intelligent
              </p>
              <VerticalLine
                color="bg-secondary"
                height="h-1"
                width="w-16"
                marginY="my-3"
              />
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-manrope"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                Powering organizations across industries and geographies
              </h1>
              <p
                className="text-gray-400 my-5 text-xs md:text-lg"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="800"
              >
                Securely connect and collaborate so you can work better
                together. Simple to manage and delightful to use, MeetCast
                powers the modern workforce.
              </p>
              <div className="py-8 flex items-center gap-8">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1100"
                >
                  <Link to="/signup">
                    <button className="bg-secondary w-[150px] py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans primary_button text-white">
                      SignUp Now
                    </button>
                  </Link>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1400"
                >
                  <Link to="/pricing">
                    <button className="bg-primary w-[150px] py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans primary_button text-white">
                      View Pricing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="order-first md:order-last"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
