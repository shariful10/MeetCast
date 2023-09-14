import React from "react";
import Container from "../../Components/Shared/Container/Container";
import blogTrending from "../../assets/images/Blog/blog-trending.png";
import BlogCard from "./BlogCard";
import Buttons from "../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";

const BlogPage = () => {
	return (
		<div>
			<Container>
				{/* Header Section */}
				<div className="mt-24 mb-12 text-center">
					<h1 className="text-3xl md:text-5xl font-extrabold font-manrope mb-3 md:mb-6">
						Read our latest blogs
					</h1>
					<p className="max-w-3xl mx-auto text-sm md:text-base">
						Uncover Our Most Recent Thoughts and Discoveries. Immerse Yourself in a
						World of Knowledge, Inspiration, and Insights with Our Newest Blog Posts
					</p>
				</div>

				{/* Trending Blog Post */}
				<div className="border rounded-3xl border-gray-400 p-5 md:p-10 lg:p-16 ">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:justify-items-end">
						<div className="order-2 lg:order-1">
							<span className="md:text-2xl font-extrabold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
								Trending Post
							</span>
							<h1 className="text-3xl xl:text-5xl font-extrabold my-4">
								New invoicing features to help you get paid faster
							</h1>
							<p>
								Over the past few months, we've added several new features to SaaS
								Invoicing to help any business get paid faster and streamline their
								collection workflows.
							</p>
							<p className="flex gap-2 items-center mt-8">
								<img
									className="w-10 h-10 rounded-full object-cover object-top"
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt="Author Image"
								/>
								<span className="font-semibold">Luke Matthews</span> |
								<span className="text-sm">November 8, 2021</span>
							</p>
						</div>
						<div className="order-1 lg:order-2">
							<img
								className="rounded-3xl w-full lg:w-[550px] h-full max-h-[320px] lg:h-full object-cover object-center"
								src={blogTrending}
								alt="Trending Blog Image"
							/>
						</div>
					</div>
				</div>

				{/* All Post */}
				<div className="my-28">
					<h1 className="text-5xl font-bold font-sans text-center">All Post</h1>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center space-y-8 lg:space-y-0 mt-16">
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
						<BlogCard />
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
		</div>
	);
};

export default BlogPage;
