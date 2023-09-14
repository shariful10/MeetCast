import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../../assets/images/Blog/blog-image.png";
import Container from "../../Components/Shared/Container/Container";
import blog1 from "../../assets/images/Blog/blog-post-1.png";
import blog2 from "../../assets/images/Blog/blog-post-2.png";
import blog3 from "../../assets/images/Blog/blog-post-3.png";
import Buttons from "../../Components/Buttons/Buttons";

const BlogPost = () => {
  return (
    <Container>
      <div className="my-16 max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center max-w-3xl mx-auto">
          New invoicing features to help you get paid faster
        </h1>
        <p className="flex gap-2 items-center my-8 justify-center">
          <img
            className="w-10 h-10 rounded-full object-cover object-top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Author Image"
          />
          <Link className="font-semibold text-sm">Luke Matthews</Link> |
          <span className="text-sm">November 8, 2021</span>
        </p>
        <div>
          <img
            className="w-full max-h-[520px] rounded-3xl mb-8"
            src={blogImage}
            alt="Blog Image"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <h4 className="text-lg lg:text-3xl font-extrabold mb-4">
            This is a small blog post headline
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repudiandae ducimus facilis odit vel nesciunt maiores harum quia
            laboriosam, dignissimos libero veniam iusto fuga impedit?
            Repudiandae temporibus in fugit, odio velit reprehenderit asperiores
            consequuntur dolorum aperiam voluptatem quo beatae esse alias quam
            itaque explicabo hic pariatur vero quod necessitatibus veritatis,
            nostrum rerum suscipit sapiente? Dignissimos quam eligendi similique
            doloremque facere?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            sapiente? Ad quibusdam, earum enim quasi animi impedit! Debitis,
            mollitia. Delectus dolores ducimus facere quaerat aliquam ab
            aspernatur consequatur animi in ratione ea voluptates, cupiditate a
            quod eum ut officiis, sint quasi natus quam excepturi veritatis!
            Nulla eos vitae, at tempora voluptatibus aperiam corrupti accusamus
            beatae neque ullam ab cupiditate, modi quisquam dolores dolorum,
            architecto molestiae.
          </p>
          <h4 className="text-lg lg:text-3xl font-extrabold my-4">
            This is a small blog post headline
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repudiandae ducimus facilis odit vel nesciunt maiores harum quia
            laboriosam, dignissimos libero veniam iusto fuga impedit?
            Repudiandae temporibus in fugit, odio velit reprehenderit asperiores
            consequuntur dolorum aperiam voluptatem quo beatae esse alias quam
            itaque explicabo hic pariatur vero quod necessitatibus veritatis,
            nostrum rerum suscipit sapiente? Dignissimos quam eligendi similique
            doloremque facere?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            sapiente? Ad quibusdam, earum enim quasi animi impedit! Debitis,
            mollitia. Delectus dolores ducimus facere quaerat aliquam ab
            aspernatur consequatur animi in ratione ea voluptates, cupiditate a
            quod eum ut officiis, sint quasi natus quam excepturi veritatis!
            Nulla eos vitae, at tempora voluptatibus aperiam corrupti accusamus
            beatae neque ullam ab cupiditate, modi quisquam dolores dolorum,
            architecto molestiae.
          </p>
        </div>
        <div className="my-10">
          <h3 className="text-3xl font-extrabold text-center">Releted Post</h3>
          {/* related blogs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:grid-cols-3 space-y-8 lg:space-y-0 mt-10">
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
                Blessing welcomed ladyship she met humoured sir breeding her.
                Six curiosity day assurance bed necessary.
              </p>
            </div>
            <div className="w-full lg:max-w-[380px] hover:-translate-y-3 duration-500">
              <img className="w-full" src={blog2} alt="Blog 1 Image" />
              <div className="flex items-center gap-4 mt-3 font-bold text-gray-500">
                <p>08-09-2023</p>
                <p>Category</p>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3">
                In design active temper be uneasy. Thirty for remove plenty
                regard you.
              </h2>
              <p className="text-gray-400">
                Yet preference connection unpleasant yet melancholy but end
                appearance. And excellence partiality estimating terminated day
                everything.
              </p>
            </div>
            <div className="w-full lg:max-w-[380px] hover:-translate-y-3 duration-500">
              <img className="w-full" src={blog3} alt="Blog 1 Image" />
              <div className="flex items-center gap-4 mt-3 font-bold text-gray-500">
                <p>08-09-2023</p>
                <p>Category</p>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-lg font-extrabold font-manrope my-3">
                In design active temper be uneasy. Thirty for remove plenty
                regard you.
              </h2>
              <p className="text-gray-400">
                Yet preference connection unpleasant yet melancholy but end
                appearance. And excellence partiality estimating terminated day
                everything.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center md:mt-24 relative md:text-center">
          <div className="absolute Pricing_Blur_Gradient rounded-full bg-gradient-to-r from-primary to-secondary left-1/4 lg:w-[520px] lg:h-[520px]"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold font-manrope">
              Are you ready to grow your <br className="hidden md:inline" />{" "}
              business with us?
            </h2>
            <p className="text-gray-400 mt-3 md:mt-4">
              Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.
            </p>
            <div className="text-center mt-10">
              <Link to="/pricing">
                <Buttons title={"View pricing"} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPost;
