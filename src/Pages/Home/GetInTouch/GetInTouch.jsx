import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Components/Shared/Container/Container";
import VerticalLine from "../../../Components/VerticalLine/VerticalLine";

const GetInTouch = () => {
  return (
    <div
      className="relative  min-h-[450px] bg-cover bg-center text-white bg-fixed scroll-smooth"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1573166364839-1bfe9196c23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
      }}
    >
      <div className="flex justify-center items-center py-20 md:py-8 bg-darkBg bg-opacity-40">
        <Container>
          <div className="md:flex justify-around md:gap-20 items-center py-5 space-y-20 md:space-y-0">
            <div className="max-w-[490px]">
              <p
                className="text-sm font-bold uppercase"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Why Choose Us ?
              </p>
              <VerticalLine
                color="bg-darkBg"
                height="h-1"
                width="w-16"
                marginY="my-3"
              />
              <h1
                className="text-3xl md:text-5xl font-extrabold font-manrope capitalize mt-4 mb-8"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                Bridging Gaps Through Cutting-Edge Conferencing
              </h1>
              <p
                className="md:text-lg  font-medium"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1000"
              >
                Experience crystal-clear communication and content sharing on
                our innovative video conferencing platform.
              </p>
            </div>
            <div className="max-w-[400px] w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#F2F3F4] p-4 rounded-md w-full mb-10"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#F2F3F4] p-4 rounded-md w-full mb-10"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1000"
              />
              <button
                className="bg-secondary px-5 md:px-10 py-4 rounded-full md:font-semibold font-NotoSans text-white w-full hover:outline hover:bg-transparent outline-white duration-500 -outline-offset-2"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1400"
              >
                <Link to="/login">GET STARTED</Link>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GetInTouch;
