import React from "react";
import Container from "../../../Components/Shared/Container/Container";
import VerticalLine from "../../../Components/VerticalLine/VerticalLine";

const Vision = () => {
  return (
    <div className="bg-[#F0F2FE]">
      <Container>
        <div className="md:flex justify-between items-center py-10">
          <div
            className="max-w-[660px] space-y-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Our Goals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Providing High-Quality Video and Audio
            </h2>
            <p className="text-gray-400">
              Ensuring that the video and audio quality of calls is excellent is
              a critical goal. A reliable and high-quality service contributes
              to effective communication and reduces frustration caused by
              technical glitches.
            </p>
          </div>
          <VerticalLine
            color="bg-secondary"
            height="h-1"
            width="w-full"
            marginY="my-8"
            className="block md:hidden"
          />
          <div
            className="max-w-[660px] space-y-3"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
          >
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Our Vision
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              Innovation and Feature Development
            </h2>
            <p className="text-gray-400">
              An international presence and multilingual support can help the
              company cater to a diverse user base from around the world.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
