import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserManagement = () => {
	const [axiosSecure] = useAxiosSecure();

	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await axiosSecure.get("/users");
		return res.data;
	});

	const handleMakeEditor = (user) => {
		axiosSecure.patch(`/users/editor/${user._id}`, { role: "editor" }).then((data) => {
			console.log(data.data);
			if (data.data.modifiedCount) {
				toast.success("User Role Changed To Editor");
				refetch();
			}
		});
	};

	const handledelete = (id) => {
		console.log("delete");
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
										User Image
									</th>
									<th
										scope="col"
										className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-blue-500"
									>
										Name
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Email
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Role
									</th>
									<th
										scope="col"
										className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
									>
										Make Editor
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
								{users &&
									users.map((user) => (
										<tr key={user._id}>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<div className="flex items-center">
													<div className="flex-shrink-0">
														<div className="block relative">
															<img
																alt="profile"
																src={user.image}
																className="mx-auto object-cover rounded h-14 w-16"
															/>
														</div>
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{user.name ? user.name : ""}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-black whitespace-no-wrap">
													{user.email}
												</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												{user?.role === "admin" ? (
													<p className="text-blue-500 font-medium">
														Admin
													</p>
												) : user.role === "editor" ? (
													<p className="text-green-600 font-medium">
														Editor
													</p>
												) : (
													<p className="text-gray-700 font-medium">
														User
													</p>
												)}
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												{user?.role === "admin" ? (
													<div className="flex gap-2">
														<MdAdminPanelSettings className="h-6 w-6 text-blue-500" />
														<p className="text-blue-500 font-medium">
															(Not Changeable)
														</p>
													</div>
												) : user?.role === "editor" ? (
													<p title="Already Editor" className="text-green-600 font-medium">
														<BsPersonFillCheck className="h-6 w-6" />
													</p>
												) : (
													<RiAdminFill
														onClick={() => handleMakeEditor(user)}
														title="Make Editor"
														className="h-6 w-6 text-blue-500"
													/>
												)}
											</td>
											<td
												onClick={() => handledelete(user._id)}
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

export default UserManagement;
