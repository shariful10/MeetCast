import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog-1.png";

const BlogCard = ({ blog }) => {
  const date = new Date(blog.date); // Convert the string to a Date object

  // Extract the date part as a string in "YYYY-MM-DD" format
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className="w-full lg:max-w-[450px] shadow-lg p-5 border border-gray-100 2xl:p-4 pb-6 rounded-xl">
      <Link to={`/blog/${blog._id}`}>
        <img
          className="w-full rounded-xl h-[200px]"
          src={blog?.image}
          alt="Blog 1 Image"
        />
      </Link>
      <p className="flex gap-2 items-center mt-5 mb-2">
        <img
          className="w-10 h-10 rounded-full object-cover object-top"
          src={blog.author_image}
          alt="Author Image"
        />
        <Link className="font-semibold text-sm">{blog.author_name}</Link> |
        <span className="text-sm">{formattedDate}</span>
      </p>
      <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3 group">
        <Link to={`/blog/${blog._id}`}>{blog?.title}</Link>
        <div className="h-1 bg-secondary w-0 mt-3 group-hover:w-1/2 duration-500"></div>
      </h2>
      <p className="text-gray-400">{blog?.subTitle}</p>
      <div className="mt-4">
        <Link to={`/blog/${blog?._id}`} className="group">
          <button className="text-secondary">
            Read More{" "}
            <div className="h-0.5 w-0 bg-secondary group-hover:w-full duration-500"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
