import React, { useState } from "react";
import Container from "../../Components/Shared/Container/Container";
import { BsImageFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { addBlog } from "../../Components/APIs/blogs";
import { imageUpload } from "../../Components/APIs/auth";
import useAuth from "./../../Components/Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";

const AddBlog = () => {
	const { user } = useAuth();
	const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
	const [loading, setLoading] = useState(false);

	const handleImageChange = (image) => {
		setUploadButtonText(image.name);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = user.email;
		const desc = form.desc.value;
		const author_image = user.photoURL;
		const author_name = user.displayName;
		const date = new Date();
		const image = form.image.files[0];
		setUploadButtonText("Uploading...");

		// Upload image
		imageUpload(image)
			.then((data) => {
				const blogData = {
					email,
					image: data.data.display_url,
					desc,
					author_image,
					author_name,
					date
				};
				addBlog(blogData)
					.then((data) => {
						console.log(data);
						setUploadButtonText("Uploaded!");
						setLoading(false);
						toast.success("Blog Publish Successfully");
						form.reset();
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => {
				console.log(err.message);
				toast.error("Something went wrong");
			});
	};

	return (
		<Container>
			<h2 className="text-center text-5xl font-semibold mt-[96px] border-b-2 border-black w-[300px] pb-4 md:mx-auto">
				Add A Blog
			</h2>
			<div className="grid md:grid-cols-2 justify-center items-center gap-6">
				<img
					className="mt-5 md:mt-0"
					src="https://i.ibb.co/Gx52YRy/13914817-5396346.jpg"
					alt=""
				/>
				<div>
					<form onSubmit={handleSubmit} className="my-[50px] md:my-[100px]">
						<textarea
							name="desc"
							id=""
							cols=""
							rows="10"
							className="p-5 border-2 border-black rounded-md focus:outline-blue-500 w-full"
							placeholder="Write a blog"
						></textarea>
						<h4 className="my-5">Feature Image:</h4>
						<div className="">
							<div className="file_upload border-gray-300 rounded-lg bg-blue-500 py-4 px-5 max-w-fit">
								<label>
									<input
										onChange={(e) => handleImageChange(e.target.files[0])}
										className="cursor-pointer hidden"
										type="file"
										name="image"
										id="image"
										accept="image/*"
										hidden
									/>
									<div className="text-white text-[18px] font-semibold cursor-pointer flex gap-2 justify-center items-center">
										{uploadButtonText} <BsImageFill />
									</div>
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="py-3 font-semibold bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 mt-5"
						>
							{loading ? (
								<div className="flex justify-center items-center gap-2">
									<p className="font-semibold text-[18px]">Publishing</p>
									<TbFidgetSpinner className="animate-spin" size={24} />
								</div>
							) : (
								"Publish Blog"
							)}
						</button>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default AddBlog;
