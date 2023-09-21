import React from "react";
import { FaPerbyte } from "react-icons/fa";
import { FaCreativeCommonsNcEu } from "react-icons/fa6";
import {
  LuCalendarRange,
  LuMail,
  LuMegaphone,
  LuThumbsUp,
} from "react-icons/lu";
import Container from "../../Components/Shared/Container/Container";
import OurTeam from "./OurTeam";
import Pricing from "./Pricing";

const About = () => {
  return (
    <div>
      <Container>
        <div className="my-12 mt-28 lg:bg-fixed lg:bg-left lg:relative">
          <div className="lg:absolute rounded-full  Blur_Gradient  left-0 lg:w-[520px] lg:h-[520px]"></div>
          <div className="z-20">
            <div data-aos="fade-down" data-aos-duration="1500">
              <h2 className="text-5xl font-manrope font-extrabold md:text-center my-8">
                We are proud of our products
              </h2>
              <p className="md:text-center lg:w-1/2 mx-auto text-[#1D2130] ">
                {" "}
                Make meaningful connections with meetings, team chat,
                whiteboard, phone, and more in one offering.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex justify-center gap-2 lg:gap-6 my-8"
            >
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
      </Container>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
        className="md:text-center mx-auto my-16"
      >
        <span className="md:text-2xl  font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
          Our Goals
        </span>
        <p className="text-5xl mb-6 font-manrope font-bold md:text-center my-8">
          {" "}
          We're a team of data analysts
        </p>
        <p className="text-gray-400 lg:w-1/2 mx-auto">
          Meetcast does not use any of your audio, video, chat, screen sharing,
          attachments, or other communications like customer content such as
          poll results, whiteboard, and reactions to train Meetcast's or
          third-party artificial intelligence models.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-20 rounded-xl py-12 md:py-24 px-6 md:px-16 bg-[#e7e9ff]">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="text-left"
        >
          <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
            Out Goals
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
            To upscale your business to the next level
          </h2>
          <p className="text-gray-400 mt-4">
            To take your business to the next level, you must embrace
            innovation, expansion, and adaptation. Innovation leads to
            differentiation, expansion opens new markets, and adaptation ensures
            relevance in a changing world. Upscaling isn't just about growth;
            it's about securing long-term success.
          </p>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="1000"
          className="text-left mt-8 md:mt-0"
        >
          <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
            Out Goals
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
            To provide solutions for growing companies
          </h2>
          <p className="text-gray-400 mt-4">
            {" "}
            At Meetcast, we understand the unique challenges and opportunities
            that growing companies face. Our mission is to provide tailored
            solutions that empower your business to thrive. From scalable
            technology solutions to strategic consultancy, we are dedicated to
            helping you navigate the path to success. With our expertise and
            commitment, you can focus on what you do best while we handle the
            rest. Let's grow together.
          </p>
        </div>
      </div>
      <Container>
        <div>
          <div className="my-10 md:text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-6 font-bold">
              Our corporate values
            </h2>
            <p className="text-gray-400 mt-4">
              Our Corporate Values: Excellence, Integrity, Innovation.
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
                Our Zoom classes provide exceptional learning experiences.
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
                Authenticity is our core value. We foster genuine connections
                and trust in everything we do.
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
                Swift and reliable. We're here to assist you promptly and
                effectively via email. Your inquiries are our priority.
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
                Don't miss out! Explore our current offers and save on your
                favorite products/services today.
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
                Amplify your brand's reach and impact with our expert marketing
                solutions.
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
                Streamline your operations, optimize stock levels, and boost
                efficiency with our comprehensive solutions.
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
