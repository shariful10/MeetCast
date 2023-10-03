import React from "react";
import useAuth from "../../Components/Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
	const blog = useLoaderData();
	const { loading } = useAuth();
	const navigate = useNavigate();

	const { _id, title, subTitle, description } = blog;

	const handleUpdate = (event) => {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const subTitle = form.subTitle.value;
		const description = form.description.value;

		const updatedBlog = {
			title,
			subTitle,
			description,
		};

		// Fetch start
		fetch(`${import.meta.env.VITE_API_URL}/update/${_id}`, {
			method: "PATCH",
			headers: { "content-Type": "application/json" },
			body: JSON.stringify(updatedBlog),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Request failed with status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire("Modification Successful", `${title}`, "success");
					navigate("/dashboard/my-blog");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle the error here, e.g., show an error message to the user
			});
		// Fetch end
	};

	return (
		<div>
			<h2 className="text-center text-5xl font-semibold border-b-2 border-black w-[300px] pb-4 md:mx-auto">
				Update Blog
			</h2>
			<div className="w-full md:max-w-3xl mx-auto bg-gray-100 p-5 md:p-20 rounded-xl mt-5">
				<form onSubmit={handleUpdate}>
					<div className="mb-6">
						<label
							htmlFor="title"
							className="block mb-2  font-medium text-gray-900 text-lg"
						>
							Blog Title <span className="text-red-600">*</span>
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-5"
							defaultValue={title}
							required
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="subTitle"
							className="block mb-2  font-medium text-gray-900 text-lg"
						>
							Blog Sub-Title <span className="text-red-600">*</span>
						</label>
						<input
							type="text"
							id="subTitle"
							name="subTitle"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-5"
							defaultValue={subTitle}
							required
						/>
					</div>

					<div className="mb-6 w-full">
						<label
							htmlFor="description"
							className="block mb-2  font-medium text-gray-900 text-lg"
						>
							Blog Description <span className="text-red-600">*</span>
						</label>
						<textarea
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-5"
							name="description"
							id="description"
							defaultValue={description}
							cols="30"
							rows="5"
						></textarea>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="py-3 font-semibold bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 mt-5 w-full"
						>
							{loading ? (
								<div className="flex justify-center items-center gap-2">
									<p className="font-semibold text-[18px]">Publishing</p>
									<TbFidgetSpinner className="animate-spin" size={24} />
								</div>
							) : (
								"Update Blog"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateBlog;
