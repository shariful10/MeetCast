import React from "react";
import Container from "../../Components/Shared/Container/Container";
import { FaPerbyte } from "react-icons/fa";
import {
  LuCalendarRange,
  LuMail,
  LuMegaphone,
  LuThumbsUp,
} from "react-icons/lu";
import { FaCreativeCommonsNcEu } from "react-icons/fa6";
import OurTeam from "./OurTeam";
import Pricing from "./Pricing";

const About = () => {
  return (
    <div>
      <Container>
        <div className="my-12 mt-28 lg:bg-fixed lg:bg-left lg:relative">
          <div className="lg:absolute rounded-full  Blur_Gradient  left-0 lg:w-[520px] lg:h-[520px]">
          </div>
          <div className="z-20">
           <div data-aos="fade-down"  data-aos-duration="1500">
           <h2 className="text-5xl font-manrope font-bold md:text-center my-8">
              We are proud of our products
            </h2>
            <p className="md:text-center lg:w-1/2 mx-auto text-[#1D2130] ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo
              blanditiis necessitatibus vitae magni eos dolores recusandae
              dignissimos delectus fugit esse.
            </p>
           </div>
            <div  data-aos="fade-right"  data-aos-duration="1500" className="flex justify-center gap-2 lg:gap-6 my-8">
              <img
                className="rounded-xl w-1/3 md:w-1/4 lg:w-1/5"
                width={280}
                src="https://i.ibb.co/ZJCYh0V/1-min.jpg"
                alt=""
              />
              <img
                className="rounded-xl w-1/3 md:w-1/4 lg:w-1/5"
                width={280}
                src="https://i.ibb.co/V3fGwfC/medium-shot-man-working-desk.jpg"
                alt=""
              />
              <img
                className="rounded-xl w-1/3 md:w-1/4 lg:w-1/5"
                width={280}
                src="https://i.ibb.co/P6RrWRR/7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div  data-aos="fade-up"  data-aos-duration="1500" data-aos-anchor-placement="top-bottom" className="md:text-center mx-auto my-16">
          <span className="md:text-2xl  font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
            Our Goals
          </span>
          <p className="text-5xl mb-6 font-manrope font-bold md:text-center my-8">
            {" "}
            We're a team of data analysts
          </p>
          <p className="text-gray-400 lg:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20 rounded-xl py-12 md:py-24 px-6 md:px-16 bg-[#e7e9ff]">
          <div data-aos="zoom-out-up" data-aos-duration="1000" className="text-left">
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Out Goals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
              To upscale your business to the next level
            </h2>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div data-aos="zoom-out-down" data-aos-duration="1000" className="text-left mt-8 md:mt-0">
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Out Goals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
              To provide solutions for growing companies
            </h2>
            <p className="text-gray-400 mt-4">
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>

        <div>
          <div className="my-10 md:text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-6 font-bold">
              Our corporate values
            </h2>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 py-8 md:py-20 px-6 md:px-10 rounded-xl bg-[#F9F0FB]">
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl pb-6  text-[#6B7CFF]">
                <LuThumbsUp className="mb-6" />
              </span>
              <h2 className="text-2xl my-2 font-manrope font-bold">
                Best in Class
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl text-[#6B7CFF]">
                <FaPerbyte className="mb-6" />
              </span>
              <h2 className="text-2xl my-2 font-manrope font-bold">
                Authenticity
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl text-[#6B7CFF]">
                <LuMail className="mb-6" />
              </span>

              <h2 className="text-2xl my-2 font-manrope font-bold">
                Email Support
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl text-[#6B7CFF]">
                <FaCreativeCommonsNcEu className="mb-6" />
              </span>
              <h2 className="text-2xl my-2 font-manrope font-bold">
                Discounts Available{" "}
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl text-[#6B7CFF]">
                <LuMegaphone className="mb-6" />
              </span>

              <h2 className="text-2xl my-2 font-manrope font-bold">
                Powerful Marketing
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div data-aos="flip-down" data-aos-duration="1000">
              <span className="text-4xl text-[#6B7CFF]">
                <LuCalendarRange className="mb-6" />
              </span>
              <h2 className="text-2xl my-2 font-manrope font-bold">
                Inventory management
              </h2>
              <p className="text-gray-400 mt-2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <OurTeam></OurTeam>
        <Pricing></Pricing>
      </Container>
    </div>
  );
};

export default About;
