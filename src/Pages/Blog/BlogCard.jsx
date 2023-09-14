import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog-1.png";

const BlogCard = () => {
  return (
    <div className="w-full lg:max-w-[450px]  hover:-translate-y-3 duration-500 shadow-lg p-5 border border-gray-100 2xl:p-4 pb-6 rounded-xl">
      <img className="w-full" src={blog1} alt="Blog 1 Image" />
      <p className="flex gap-2 items-center mt-5 mb-2">
        <img
          className="w-10 h-10 rounded-full object-cover object-top"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Author Image"
        />
        <Link className="font-semibold text-sm">Luke Matthews</Link> |
        <span className="text-sm">November 8, 2021</span>
      </p>
      <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3">
        Believing neglected so so allowance existence departure.
      </h2>
      <p className="text-gray-400">
        Blessing welcomed ladyship she met humoured sir breeding her. Six
        curiosity day assurance bed necessary.
      </p>
    </div>
  );
};

export default BlogCard;
