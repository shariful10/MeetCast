import React from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { FaTrash } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlinePending } from "react-icons/md";
import toast from "react-hot-toast";

const ManageBlogs = () => {
	const [axiosSecure] = useAxiosSecure();
	const { id: blogID } = useParams();

	const { data: blogs = [], refetch } = useQuery(["blogs"], async () => {
		const res = await axiosSecure.get(`/blogs`);
		return res.data;
	});

	const handleMakeAppruve = (blog) => {
		axiosSecure.patch(`/blogs/admin/${blog._id}`, { status: "approved" }).then((data) => {
			console.log(data.data);
			if (data.data.modifiedCount) {
				toast.success("Blog Approved!");
				refetch();
			}
		});
	};

	const handledelete = (id) => {
		axiosSecure.delete(`/blogs/${id}`).then((data) => {
			toast.success("Blog Deleted Successfully");
			refetch();
		});
	};

	return (
		<div className="container mx-auto px-4 sm:px-8">
			<div className="py-8">
				<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div className="inline-block min-w-full shadow rounded overflow-hidden">
						<table className="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										scope="col"
										className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-blue-500"
									>
										Blog Image
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-blue-500"
									>
										Blog Title
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Author Name
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Author Email
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Status
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Approve Blog
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{blogs &&
									blogs.map((blog) => (
										<tr key={blog._id}>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<div className="flex items-center">
													<div className="flex-shrink-0">
														<div className="block relative">
															<img
																alt="profile"
																src={blog.image}
																className="mx-auto object-cover rounded h-14 w-16"
															/>
														</div>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{blog.title}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{blog.author_name}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{blog.email}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												{blog?.status === "approved" ? (
													<p className="text-green-500 font-medium">
														Approved
													</p>
												) : (
													<p className="text-blue-700 font-medium">
														Panding
													</p>
												)}
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												{blog?.status === "approved" ? (
													<p
														title="Already Approved"
														className="text-green-400 font-medium"
													>
														<AiFillCheckCircle className="h-6 w-6" />
													</p>
												) : (
													<p
														onClick={() => handleMakeAppruve(blog)}
														className="bg-blue-500 py-3 text-white rounded text-center cursor-pointer"
													>
														Approve Blog
													</p>
												)}
											</td>
											<td
												onClick={() => handledelete(blog._id)}
												className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
											>
												<FaTrash className="h-6 w-6 text-red-500" />
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageBlogs;
