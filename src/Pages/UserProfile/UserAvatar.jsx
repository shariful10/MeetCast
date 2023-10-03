import React, { useContext, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import { AuthContext } from "../../Providers/AuthProvider";

const UserAvatar = () => {
	const { user } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const [allUsers, setAllUsers] = useState();
	const [avatarName, setAvatarName] = useState("");
	const [avatar, setAvatar] = useState(allUsers?.avatar);
	const [avatarToAPI, setAvatarToAPI] = useState();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	console.log(avatarName);

	// const createAvatar = useMemo(() => {
	//   console.log("stack", avatarName);
	//   return createAvatar(lorelei, {
	//     size: 128 /* other options */,
	//     seed: avatarName,
	//   }).toDataUriSync();
	// }, []);

	// console.log("Gekki", svg)

	const onSubmit = (data) => {
		const inputAvatarName = data.avatar;
		const avatarDataUri = createAvatar(lorelei, {
			size: 128,
			seed: inputAvatarName,
		}).toDataUriSync();
		const svg = avatarDataUri.toString();
		console.log(svg);
		const avatarToApi = {
			avatar: data.avatar,
			avatarSvg: svg,
		};
		setAvatar(avatarDataUri);
		setAvatarName(inputAvatarName);

		axiosSecure
			.put(`/users/${user.email}`, avatarToApi)
			.then((response) => {
				console.log("Updating", response.data);
			})
			.catch((error) => {
				console.error("Error updating profile:", error);
			});
	};

	return (
		<div className="flex h-screen flex-col m-auto w-full md:w-[720px] shadow-lg rounded-lg">
			<div className="divider text-2xl p-3">
				<p>Create an Avatar</p>
			</div>
			<div className="grid grid-cols-1">
				{!avatar ? (
					<img
						src={"https://i.ibb.co/G07ZkQ0/Blank-Image.jpg"}
						className="h-[450px] object-contain m-auto"
						alt=""
					/>
				) : (
					<img src={avatar} alt="Avatar" className="h-[450px] w-full m-auto" />
				)}
				<input
					type="text"
					placeholder={"Type anything"}
					className="mt-2 h-[30px] w-1/2 border p-3 m-auto"
					{...register("avatar")}
				/>
				<input
					type="submit"
					className="btn btn-primary mt-2 m-auto w-1/5"
					value="Submit"
					onClick={handleSubmit(onSubmit)}
				/>
			</div>
		</div>
	);
};

export default UserAvatar;
