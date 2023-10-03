import React, { useEffect, useState } from "react";
import { VscCheck } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Container from "../../Components/Shared/Container/Container";
import FaqSection from "./FaqSection";
import Price from "./Price";

function PricingToggle() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [pricingData, setPricingData] = useState([]);
  // console.log(pricingData);
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  const [axiosSecure] = useAxiosSecure();

  // get monthly data
  // console.log(import.meta.env.VITE_API_URL);
  // get yearly data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(
          isMonthly
            ? `${import.meta.env.VITE_API_URL}/monthly`
            : `${import.meta.env.VITE_API_URL}/yearly`
        );
        const data = response.data;
        setPricingData(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [axiosSecure, isMonthly]);

  return (
    <Container>
      <div className="mt-[100px]">
        <div className="relative">
          <div className="lg:absolute rounded-full  Blur_Gradient top-32 left-0  lg:w-[520px] lg:h-[520px]"></div>

          <div className="text-center px-10 mb-8">
            <h2 className="text-5xl mb-4 font-extrabold">
              Pricing plans that suit you
            </h2>
            <p>
              Our flexible pricing adapts to your unique needs. <br /> Get the
              value you deserve with us.
            </p>
          </div>
          <div className="flex justify-center w-10/12 lg:w-1/5 mx-auto rounded-xl lg:gap-4 py-4  bg-[#E0E4FC]">
            <button
              className={`${
                isMonthly ? "bg-[#6B7CFF] text-white" : ""
              } px-4 py-2 rounded-lg`}
              onClick={() => {
                setIsMonthly(true);
                // handleMonthly(); // Call the handleMonthly function
              }}
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

          <div className="lg:flex lg:justify-around">
            {pricingData.map((pricing) => (
              <div
                key={pricing?._id}
                className="w-[380px] h-[614px] mx-auto mx-autoborder-2 border-[#6B7CFF]  py-12 px-12 bg-gradient-to-b from-[#D7E7F9] to-[#D5F4EC] rounded-3xl shadow-xl p-6 my-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* <img src={Plantinum} alt="" /> */}
                  <span>
                    <h2 className="text-2xl font-extrabold">
                      {pricing?.title}
                    </h2>
                    <p className="font-semibold text-gray-700">
                      {pricing?.description}
                    </p>
                  </span>
                </div>
                <div className="divider w-full"></div>

                <div>
                  {pricing?.features.map((feature, index) => (
                    <div key={index} className="flex gap-6 mb-4">
                      <VscCheck className="text-2xl text-green-600 font-bold" />
                      <p className="">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center my-[48px]">
                  <p className="text-2xl font-bold">{pricing?.pricing}</p>
                  <p className="mb-6">For Limited Period</p>

                  <Link
                    className="py-4 px-10 mt-6 text-white bg-[#1D2130] rounded-md"
                    to={`/checkout/${pricing._id}`}
                  >
                    Get started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <FaqSection></FaqSection>
        </div>
        <div className="mb-10">
          <Price></Price>
        </div>
      </div>
    </Container>
  );
}

export default PricingToggle;
