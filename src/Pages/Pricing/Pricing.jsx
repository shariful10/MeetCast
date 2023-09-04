
import React, { useState } from "react";
import { VscCheck } from "react-icons/vsc";
import Container from "../../Components/Shared/Container/Container";
import Plantinum from "../../assets/icons/Plantinum.svg";
import Regular from "../../assets/icons/Regular.svg";
import Standard from "../../assets/icons/Standard.svg";
import FaqSection from "./FaqSection";
import Price from "./Price";

function PricingToggle() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
 
     <Container>
       <div className="mt-[100px]">
      <div className="relative">
        <div className="lg:absolute rounded-full  Blur_Gradient top-32 left-0  lg:w-[520px] lg:h-[520px]"></div>

        <div className="text-center px-10 mb-8">
          <h2 className="text-5xl mb-4 font-semibold">
            Pricing plans that suit you
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor.
          </p>
        </div>
        <div className="flex justify-center w-10/12 lg:w-1/5 mx-auto rounded-xl lg:gap-4 py-4  bg-[#E0E4FC]">
          <button
            className={`${
              isMonthly ? "bg-[#6B7CFF] text-white" : ""
            } px-4 py-2 rounded-lg`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`${
              !isMonthly ? "bg-[#6B7CFF] text-white" : ""
            } px-4 py-2 rounded-lg`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>
        <div className="w-full mt-6">
          {/* Render pricing content based on the selected option */}
          {isMonthly ? (
            <div className="lg:flex lg:justify-around w-full gap-6">
              <div className="w-[380px] h-[714px] mx-auto mx-autoborder hover:bg-gradient-to-b hover:from-[#D7E7F9] hover:to-[#D5F4EC]  py-12 px-12 bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4 ">
                  <img src={Regular} alt="" />
                  <span>
                    <h2 className="text-2xl font-extrabold">Regular</h2>
                    <p>Starter Plan</p>
                  </span>
                </div>
                <div className="divider w-full"></div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Limited Projects</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Regular Support Business</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">1 month Free Trial</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">3GB storage</p>
                </div>
                <div className="flex items-center gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Ads Preview</p>
                </div>
                <div className="text-center text-[16px] mt-[33px] ">
                  <p className="text-[#3b3e4b]">
                    Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr.
                  </p>
                </div>
                <div className="text-center my-[48px]">
                  <p className="text-2xl font-bold">Free</p>
                  <p>For Limited Period</p>
                  <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[380px] h-[714px] mx-auto mx-autoborder-2 border-[#6B7CFF]  py-12 px-12 bg-gradient-to-b from-[#D7E7F9] to-[#D5F4EC] rounded-3xl shadow-xl p-6 my-8">
                <div className="flex items-center gap-4 mb-4">
                  <img src={Plantinum} alt="" />
                  <span>
                    <h2 className="text-2xl font-extrabold">Plantinum</h2>
                    <p>For the best results</p>
                  </span>
                </div>
                <div className="divider w-full"></div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Limited Projects</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Regular Support Business</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">1 month Free Trial</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">3GB storage</p>
                </div>
                <div className="flex items-center gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Ads Preview</p>
                </div>
                <div className="text-center text-[16px] mt-[33px] ">
                  <p className="text-[#3b3e4b]">
                    Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr.
                  </p>
                </div>
                <div className="text-center my-[48px]">
                  <p className="text-2xl font-bold">$342 </p>
                  <p>For Limited Period</p>
                  <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                    Get started
                  </button>
                </div>
              </div>

              <div className="w-[380px] h-[714px] mx-auto hover:bg-gradient-to-b hover:from-[#D7E7F9] hover:to-[#D5F4EC]  py-12 px-12 bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4 ">
                  <img src={Standard} alt="" />
                  <span>
                    <h2 className="text-2xl font-extrabold">Standard</h2>
                    <p>Starter Plan</p>
                  </span>
                </div>
                <div className="divider w-full"></div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Limited Projects</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Regular Support Business</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">1 month Free Trial</p>
                </div>
                <div className="flex items-center mb-[24px] gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">3GB storage</p>
                </div>
                <div className="flex items-center gap-4">
                  <VscCheck className="text-2xl text-green-600 font-bold" />
                  <p className="font-bold">Ads Preview</p>
                </div>
                <div className="text-center text-[16px] mt-[33px] ">
                  <p className="text-[#3b3e4b]">
                    Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr.
                  </p>
                </div>
                <div className="text-center my-[48px]">
                  <p className="text-2xl font-bold">$234</p>
                  <p>For Limited Period</p>
                  <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white p-6">
              <div className="flex justify-around w-full gap-6">
                <div className="w-[380px] h-[714px]  mx-auto hover:bg-gradient-to-b hover:from-[#D7E7F9] hover:to-[#D5F4EC] py-12 px-12 bg-white rounded-3xl shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-4 ">
                    <img src={Regular} alt="" />
                    <span>
                      <h2 className="text-2xl font-extrabold">Regular</h2>
                      <p>Starter Plan</p>
                    </span>
                  </div>
                  <div className="divider w-full"></div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Limited Projects</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Regular Support Business</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">1 month Free Trial</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">3GB storage</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Ads Preview</p>
                  </div>
                  <div className="text-center text-[16px] mt-[33px] ">
                    <p className="text-[#3b3e4b]">
                      Lorem ipsum dolor sit amet, consetetur <br />
                      sadipscing elitr.
                    </p>
                  </div>
                  <div className="text-center my-[48px]">
                    <p className="text-2xl font-bold">Free</p>
                    <p>For Limited Period</p>
                    <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="w-[380px] h-[714px] mx-auto border-2 border-[#6B7CFF]  py-12 px-12 bg-gradient-to-b from-[#D7E7F9] to-[#D5F4EC] rounded-3xl shadow-sm p-6 my-8">
                  <div className="flex items-center gap-4 mb-4 ">
                    <img src={Plantinum} alt="" />
                    <span>
                      <h2 className="text-2xl font-extrabold">Plantinum</h2>
                      <p>For the best results</p>
                    </span>
                  </div>
                  <div className="divider w-full"></div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Limited Projects</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Regular Support Business</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">1 month Free Trial</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">3GB storage</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Ads Preview</p>
                  </div>
                  <div className="text-center text-[16px] mt-[33px] ">
                    <p className="text-[#3b3e4b]">
                      Lorem ipsum dolor sit amet, consetetur <br />
                      sadipscing elitr.
                    </p>
                  </div>
                  <div className="text-center my-[48px]">
                    <p className="text-2xl font-bold">$342 </p>
                    <p>For Limited Period</p>
                    <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                      Get started
                    </button>
                  </div>
                </div>
                <div className="w-[380px] h-[714px] mx-auto hover:bg-gradient-to-b hover:from-[#D7E7F9] hover:to-[#D5F4EC]  py-12 px-12 bg-white rounded-3xl shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-4 ">
                    <img src={Standard} alt="" />
                    <span>
                      <h2 className="text-2xl font-extrabold">Standard</h2>
                      <p>Starter Plan</p>
                    </span>
                  </div>
                  <div className="divider w-full"></div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Limited Projects</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Regular Support Business</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">1 month Free Trial</p>
                  </div>
                  <div className="flex items-center mb-[24px] gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">3GB storage</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <VscCheck className="text-2xl text-green-600 font-bold" />
                    <p className="font-bold">Ads Preview</p>
                  </div>
                  <div className="text-center text-[16px] mt-[33px] ">
                    <p className="text-[#3b3e4b]">
                      Lorem ipsum dolor sit amet, consetetur <br />
                      sadipscing elitr.
                    </p>
                  </div>
                  <div className="text-center my-[48px]">
                    <p className="text-2xl font-bold">$234</p>
                    <p>For Limited Period</p>
                    <button className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <FaqSection></FaqSection>
      </div>
      <div>
        <Price></Price>
      </div>
    </div>
     </Container>
 
  );
}

export default PricingToggle;
