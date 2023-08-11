import React from "react";
import Container from "../../Components/Shared/Container/Container";
import { FaThumbsUp, FaPerbyte } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {
  LuCalendarRange,
  LuMail,
  LuMegaphone,
  LuThumbsUp,
} from "react-icons/lu";
import { FaCreativeCommonsNcEu } from "react-icons/fa6";
import Blur_Gradient from "../../assets/Blur_Gradient.svg";

const About = () => {
  return (
    <div>
      <Container>
        <div className="my-12 bg-fixed bg-left relative">
          <div className="absolute rounded-full  Blur_Gradient  left-0 w-[520px] h-[520px]">
            {/* <img className="w-full h-full" src={Blur_Gradient} alt="" /> */}

          </div>
          <div className="z-20">
            <h2 className="text-5xl font-manrope font-bold text-center my-8">
              We are proud of our products
            </h2>
            <p className="text-center w-1/2 mx-auto text-[#1D2130] ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo
              blanditiis necessitatibus vitae magni eos dolores recusandae
              dignissimos delectus fugit esse.
            </p>
            <div className="flex justify-center gap-6 my-8">
              <img
                className="rounded-xl"
                width={300}
                src="https://i.ibb.co/GcPNYcW/1.jpg"
                alt=""
              />
              <img
                className="rounded-xl"
                width={300}
                src="https://i.ibb.co/JCsDtrL/4.jpg"
                alt=""
              />
              <img
                className="rounded-xl"
                width={300}
                src="https://i.ibb.co/P6RrWRR/7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="text-center  mx-auto my-16">
          <span className="md:text-2xl  font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
            Our Goals
          </span>
          <p className="text-5xl mb-6 font-manrope font-bold text-center my-8">
            {" "}
            We're a team of data analysts
          </p>
          <p className="text-gray-400 w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <div className="flex justify-around items-center gap-20 rounded-xl py-24 px-16 bg-[#e7e9ff]">
          <div>
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Out Goals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
              To upscale your business to the next level
            </h2>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div>
            <span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
              Out Goals
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
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
          <div className="my-10 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-6 font-bold">
              Our corporate values
            </h2>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-16 py-20 px-10 rounded-xl bg-[#F9F0FB]">
            <div>
              <span>
                <LuThumbsUp />
              </span>
              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Best in Class
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div>
              <span>
                <FaPerbyte />
              </span>
              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Authenticity
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div>
              <span>
                <LuMail />
              </span>

              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Email Support
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div>
              <span>
                <FaCreativeCommonsNcEu />
              </span>
              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Discounts Available{" "}
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div>
              <span>
                <LuMegaphone />
              </span>

              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Powerful Marketing
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div>
              <span>
                <LuCalendarRange />
              </span>
              <h2 className="text-2xl mb-2 font-manrope font-bold">
                Inventory management
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
