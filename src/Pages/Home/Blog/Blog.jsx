import React from "react";
import Container from "../../../Components/Shared/Container/Container";
import blog1 from "../../../assets/images/blog-1.png";
import blog2 from "../../../assets/images/blog-2.png";
import blog3 from "../../../assets/images/blog-3.png";
import blog4 from "../../../assets/images/blog-4.png";
import blog5 from "../../../assets/images/blog-5.png";
import blog6 from "../../../assets/images/blog-6.png";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Container>
        <h2 className="text-5xl font-extrabold font-manrope mb-16">
          Our Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:grid-cols-3 space-y-8 lg:space-y-0">
          <div className="w-full lg:max-w-[380px]  hover:-translate-y-3 duration-500">
            <img className="w-full" src={blog1} alt="Blog 1 Image" />
            <div className="flex items-center gap-4 mt-3 font-bold text-gray-500">
              <p>08-09-2023</p>
              <p>Category</p>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3">
              Believing neglected so so allowance existence departure.
            </h2>
            <p className="text-gray-400">
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day assurance bed necessary.
            </p>
          </div>
          <div className="w-full lg:max-w-[380px] hover:-translate-y-3 duration-500">
            <img className="w-full" src={blog2} alt="Blog 1 Image" />
            <div className="flex items-center gap-4 mt-3 font-bold text-gray-500">
              <p>08-09-2023</p>
              <p>Category</p>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3">
              In design active temper be uneasy. Thirty for remove plenty regard
              you.
            </h2>
            <p className="text-gray-400">
              Yet preference connection unpleasant yet melancholy but end
              appearance. And excellence partiality estimating terminated day
              everything.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3 hover:-translate-y-2 duration-500">
              <div>
                <img className="w-[140px] h-[80px]" src={blog3} alt="" />
              </div>
              <div>
                <div className="flex items-center gap-4 font-bold text-gray-500">
                  <p>08-09-2023</p>
                  <p>Category</p>
                </div>
                <h2 className="font-extrabold font-manrope ">
                  Believing neglected so so allowance existence departure.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:-translate-y-2 duration-500">
              <div>
                <img className="w-[140px] h-[80px]" src={blog4} alt="" />
              </div>
              <div>
                <div className="flex items-center gap-4 font-bold text-gray-500">
                  <p>08-09-2023</p>
                  <p>Category</p>
                </div>
                <h2 className=" font-extrabold font-manrope ">
                  Believing neglected so so allowance existence departure.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:-translate-y-2 duration-500">
              <div>
                <img className="w-[140px] h-[80px]" src={blog5} alt="" />
              </div>
              <div>
                <div className="flex items-center gap-4 font-bold text-gray-500">
                  <p>08-09-2023</p>
                  <p>Category</p>
                </div>
                <h2 className="font-extrabold font-manrope ">
                  Believing neglected so so allowance existence departure.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3 hover:-translate-y-2 duration-500">
              <div>
                <img className="w-[140px] h-[80px]" src={blog6} alt="" />
              </div>
              <div>
                <div className="flex items-center gap-4 font-bold text-gray-500">
                  <p>08-09-2023</p>
                  <p>Category</p>
                </div>
                <h2 className="font-extrabold font-manrope ">
                  Believing neglected so so allowance existence departure.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
