import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const DisplayInfo = () => {
	const { user } = useContext(AuthContext);
	const [showPhone, setShowPhone] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [displayName, setDisplayName] = useState(user.displayName); // Replace with mainUser?.displayName
	const [axiosSecure] = useAxiosSecure();
	const [allUsers, setAllUsers] = useState();
	const [changeData, setChangeData] = useState();
	const [shouldRefetch, setShouldRefetch] = useState(false);

	useEffect(() => {
		axiosSecure
			.get("/users")
			.then((res) => {
				setAllUsers(res.data);
			})
			.catch((error) => {
				console.error("Error fetching user data:", error);
			});
	}, [axiosSecure, shouldRefetch]);
	const mainUser = allUsers?.find((userFind) => userFind.email === user.email);
	console.log("main User", mainUser);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleClick = () => {
		setIsEditing(true);
	};

	const handleChange = (e) => {
		setDisplayName(e.target.value);
	};

	const handleBlur = () => {
		setIsEditing(false);
		// You can save the updated displayName here, e.g., by making an API request.
	};

	const onSubmit = (data) => {
		console.log("this data", data);
		const updateProfile = {
			...data,
		};
		console.log(" updating ", updateProfile);

		setChangeData(updateProfile);

		axiosSecure
			.put(`/users/${user.email}`, updateProfile)
			.then((response) => {
				console.log("Updating", response.data);
				setShouldRefetch(true);
			})
			.catch((error) => {
				console.error("Error updating profile:", error);
			});
		setShouldRefetch(false);
		setIsEditing(false);
	};

	console.log("setting change data", changeData);

	return (
		<div className="flex flex-col m-auto w-full md:w-[720px] shadow-lg rounded-lg">
			<div className="divider text-2xl p-3">
				<p>Display Information</p>
			</div>
			<div className="w-full p-6 shadow-lg rounded-lg" onClick={handleClick}>
				<div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
					{!mainUser ? (
						<img
							src={"https://i.ibb.co/G07ZkQ0/Blank-Image.jpg"}
							className="h-[250px] w-[250px] object-contain m-auto"
							alt=""
						/>
					) : (
						<img
							src={mainUser?.avatarSvg}
							className="h-[250px] w-[250px] rounded-3xl object-contain m-auto border shadow-lg bg-white"
							alt=""
							onClick={handleClick}
						/>
					)}

					<div className="px-3">
						<div>
							<div className="w-full ">
								<span className="font-bold">Name:</span>
								{isEditing ? (
									<input
										type="text"
										defaultValue={
											!mainUser
												? changeData?.displayName
												: mainUser?.displayName
										}
										onChange={handleChange}
										onBlur={handleBlur}
										className="m-1 h-[30px] bg-white p-3 border shadow-lg"
										{...register("displayName")}
									/>
								) : (
									<div className="">
										{mainUser ? (
											<h2
												className="ms-0 cursor-pointer"
												onClick={handleClick}
											>
												<p className="ms-0">{mainUser?.displayName}</p>
											</h2>
										) : (
											<span className="loading loading-dots loading-md"></span>
										)}
									</div>
								)}
							</div>
							<div className="w-full flex">
								<span className="font-bold">Designation: </span>
								{isEditing ? (
									<input
										type="text"
										defaultValue={mainUser?.designation}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Desgination"
										className="m-1 h-[30px] bg-white p-3 border shadow-lg"
										{...register("designation")}
									/>
								) : (
									<div>
										{mainUser ? (
											<h2
												className="ms-0 cursor-pointer"
												onClick={handleClick}
											>
												<p className="ms-0">{mainUser?.designation}</p>
											</h2>
										) : (
											<span className="loading loading-dots loading-md"></span>
										)}
									</div>
								)}
							</div>
						</div>
						<div className="mt-6">
							<div className="flex">
								<p className="m-1 font-bold">My Bio</p>
							</div>
							{isEditing ? (
								<textarea
									type="text"
									defaultValue={mainUser?.bio}
									onChange={handleChange}
									onBlur={handleBlur}
									rows={5}
									cols={30}
									className="m-1 bg-white p-3 border shadow-lg w-full"
									{...register("bio")}
								></textarea>
							) : (
								<div>
									{mainUser ? (
										<h2 className="ms-0 cursor-pointer" onClick={handleClick}>
											<p className="ms-1">{mainUser?.bio}</p>
										</h2>
									) : (
										<span className="loading loading-dots loading-md"></span>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<button className="btn btn-primary my-2 w-1/3" onClick={handleSubmit(onSubmit)}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default DisplayInfo;
