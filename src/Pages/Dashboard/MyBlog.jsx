import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaTrashCan } from "react-icons/fa6";

const MyBlog = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user, loading } = useContext(AuthContext);

	const { data: blogs = [], isLoading } = useQuery({
		queryKey: ["my-blogs"],
		enabled: !!user && !loading,
		queryFn: async () => {
			const res = await axiosSecure(`/my-blogs?email=${user?.email}`);
			return res.data;
		},
	});

	console.log(blogs);

	const handledelete = (id) => {
		console.log("delete", id);
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
										Title
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
										Status
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Edit
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
													{blog.title ? blog.title : ""}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{blog.author_name}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												{blog?.status === "approved" ? (
													<p className="text-blue-500 font-medium">
														Approved
													</p>
												) : (
													blog.status === "pending" && (
														<p className="text-green-600 font-medium">
															Pending
														</p>
													)
												)}
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<FaEdit className="h-6 w-6 text-green-500 cursor-pointer" />
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<button
													onClick={() => handledelete(blog._id)}
													className="bg-red-700 hover:bg-red-500 p-3 rounded-[100%]"
												>
													<FaTrashCan className="h-5 w-5 text-white" />
												</button>
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

export default MyBlog;
