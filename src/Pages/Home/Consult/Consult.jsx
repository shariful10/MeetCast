import React from "react";
import Container from "../../../Components/Shared/Container/Container";
import { LiaCertificateSolid, LiaStarSolid } from "react-icons/lia";
import { HiOutlineLightBulb } from "react-icons/hi";

const Consult = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 bg-white">
      <Container>
        <div className="md:flex items-center justify-between flex-wrap space-y-7 lg:space-y-0 border-2 border-gray-200 rounded-2xl p-10">
          <h2
            className="font-manrope text-4xl font-extrabold text-center md:text-left"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            Among leave law <br /> built now.
          </h2>
          <div
            className="flex items-center gap-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-200">
              <LiaStarSolid size={25} />
            </div>
            <p className="text-neutral-500 font-semibold">
              Reviewed by <br /> Thousands Users
            </p>
          </div>
          <div
            className="flex items-center gap-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-200">
              <LiaCertificateSolid size={25} />
            </div>
            <p className="text-neutral-500 font-semibold">
              Trusted by <br /> Millions Users
            </p>
          </div>
          <div
            className="flex items-center gap-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1200"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-200">
              <HiOutlineLightBulb size={25} />
            </div>
            <p className="text-neutral-500 font-semibold">
              Most Innovative <br /> Ideas
            </p>
          </div>
        </div>

        {/* Second div */}
        <div className="mt-16 lg:flex items-center justify-center gap-10 text-center space-y-10 lg:space-y-0">
          <div
            className="bg-[#F8F9FD] rounded-xl p-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <h2 className="font-manrope font-extrabold text-2xl md:text-4xl mb-5">
              Offend belong promote provision
            </h2>
            <p className="text-gray-500 mb-10">
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income.
            </p>
            <button className="bg-secondary w-[150px] py-3 md:py-4 rounded-md font-medium md:font-semibold font-NotoSans primary_button text-white">
              Read More
            </button>
          </div>
          <div
            className="bg-[#F8F9FD] rounded-xl p-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <h2 className="font-manrope font-extrabold text-2xl md:text-4xl mb-5">
              Consulted ourselves it blessing welcome
            </h2>
            <p className="text-gray-500 mb-10">
              The expense windows adapted sir. Wrong widen drawn ample eat off
              doors money.
            </p>
            <button className="bg-secondary w-[150px] py-3 md:py-4 rounded-md font-medium md:font-semibold font-NotoSans primary_button text-white">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Consult;
