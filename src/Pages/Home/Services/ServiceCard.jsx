import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCard = ({ Icon, title, subTitle, animation }) => {
  return (
    <div data-aos={animation} data-aos-duration="1200">
      <div className="flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl duration-500 min-h-[330px] shadow-md rounded-lg px-8 py-10 max-w-sm border">
        <div>
          <Icon size={50} />
          <h4 className="text-xl font-bold mt-4">{title}</h4>
        </div>
        <div>
          <p className="text-gray-500 mt-5 mb-3">{subTitle}</p>
          <Link to="/pricing">
            <button className="flex items-center text-secondary group">
              View Pricing{" "}
              <HiOutlineArrowNarrowRight className="ml-2 group-hover:ml-4 duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
