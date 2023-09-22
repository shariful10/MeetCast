import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import Buttons from "../../Components/Buttons/Buttons";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import blog_3 from "../../assets/images/blog-3.png";
import Loader from "../../Components/Shared/Loader/Loader";

const BlogPost = () => {
	const [axiosSecure] = useAxiosSecure();
	const { id: blogID } = useParams();

	const { data: allBlogs = [], isLoading } = useQuery(["allBlogs"], async () => {
		const res = await axiosSecure.get(`/blogs`);
		return res.data;
	});

	// make the text short:
	function truncateText(text, maxLength) {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + " ..."; // Truncate and add an ellipsis
	}
	// make the text short:

	const { data: blogs = [] } = useQuery(["approved-blogs"], async () => {
		const res = await axiosSecure.get("/approved-blogs");
		return res.data;
	});

	// Find the specific blog that matches the blogID
	const blog = blogs.find((blog) => blog._id === blogID);

	const date = new Date(blog.date); // Convert the string to a Date object

	// Extract the date part as a string in "YYYY-MM-DD" format
	const formattedDate = date.toISOString().split("T")[0];

	{
		if (isLoading) {
			return <Loader />;
		}
	}

	return (
		<Container>
			<div className="my-20 max-w-7xl mx-auto">
				<div className="lg:flex gap-8 ">
					{/* blog details Start */}

					<div className="w-full p-5 lg:p-10 bg-gray-100 rounded-2xl">
						<div>
							<img
								className="w-full max-h-[520px] rounded-3xl mb-8"
								src={blog?.image}
								alt="Blog Image"
							/>
						</div>
						<h1 className="text-2xl lg:text-3xl font-extrabold">{blog.title}</h1>
						<p className="flex gap-2 items-center my-8 ">
							<img
								className="w-10 h-10 rounded-full object-cover object-top"
								src={blog?.author_image}
								alt="Author Image"
							/>
							<div className="flex flex-col">
								<Link className="font-semibold text-sm">{blog?.author_name}</Link>
								<span className="text-xs">Editor</span>
							</div>
							|<span className="text-sm">{formattedDate}</span>
						</p>
						<div className="max-w-3xl">
							<h4 className=" lg:text-xl font-extrabold mb-4">{blog?.subTitle}</h4>
							<p>{blog?.description}</p>
						</div>
					</div>

					{/* blog details End */}

					{/* Recent Blogs Start */}
					<div className="space-y-8 max-w-sm">
						<h4 className="text-xl font-extrabold">Recent Blogs</h4>

						{/* recent blogs map */}
						{allBlogs.slice(0, 5).map((allBlog) => (
							<div
								className="flex items-center gap-3 hover:-translate-y-2 duration-500 border-b-2 border-b-secondary pb-3"
								key={allBlog._id}
							>
								<div>
									<h2 className="font-extrabold font-manrope ">
										<Link to={`/blog/${allBlog._id}`}>{allBlog.title}</Link>
									</h2>
									<p className="text-gray-400">
										{truncateText(allBlog?.subTitle, 80)}
									</p>
								</div>
							</div>
						))}
						{/* recent blogs map */}
					</div>
					{/* Recent Blogs End */}
				</div>
				<div className="mt-16 text-center md:mt-24 relative md:text-center">
					<div className="absolute Pricing_Blur_Gradient rounded-full bg-gradient-to-r from-primary to-secondary left-1/4 lg:w-[520px] lg:h-[520px]"></div>
					<div className="relative">
						<h2 className="text-2xl md:text-4xl font-bold font-manrope">
							Are you ready to grow your <br className="hidden md:inline" /> business
							with us?
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
