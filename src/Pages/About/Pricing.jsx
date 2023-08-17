import React from "react";

const Pricing = () => {
  return (
    <div className="mt-16 md:mt-24 relative text-center">
      <div className="absolute Pricing_Blur_Gradient rounded-full bg-gradient-to-r from-primary to-secondary left-1/4 lg:w-[520px] lg:h-[520px]"></div>
      <div className="relative">
        <h2 className="text-2xl md:text-4xl font-bold font-manrope">
          Are you ready to grow your <br className="hidden md:inline" />{" "}
          business with us?
        </h2>
        <p className="text-gray-400 mt-3 md:mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <button className="bg-secondary primary_button w-[150px] mt-8 py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]">
          View pricing
        </button>
      </div>
    </div>
  );
};

export default Pricing;
