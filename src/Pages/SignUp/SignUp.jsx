import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../Components/APIs/auth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import loginImg from "../../assets/images/login-bg.png";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { BiRename } from "react-icons/bi";

const SignUp = () => {
	const [axiosSecure] = useAxiosSecure();
	const { loading, setLoading, createUser, updateUserProfile } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		// const img = form.image.value;
		// // console.log(img);

		// Image Upload
		const image = form.image.files[0];
		const formData = new FormData();

		console.log(image);

		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`;
		console.log(url);
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				console.log(imageData);
				const imageUrl = imageData.data.display_url;
				createUser(email, password)
					.then((res) => {
						const loggedUser = res.user;
						console.log(loggedUser);
						updateUserProfile(name, imageUrl)
							.then(() => {
								toast.success("Successfully Sign Up");
								saveUser(res.user);
								navigate(from, { replace: true });
							})
							.catch((err) => {
								setLoading(false);
								console.log(err.message);
								toast(err.message);
							});
					})
					.catch((err) => {
						setLoading(false);
						console.log(err.message);
						toast.error(err.message);
					});
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});

		fetch(`${import.meta.env.VITE_IMGBB_API}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				image: url,
			}),
		});

		axiosSecure
			.post("/userProfile", {
				name: name,
				email: email,
			})
			.then((res) => {
				console.log(res);
			});

		return;
	};

	return (
		<div className="login">
			<img src={loginImg} alt="image" className="login__bg" />

			<div className="login__form">
				<form onSubmit={handleSubmit}>
					<h1 className="login__title">Sign Up</h1>

					<div className="login__inputs">
						<div className="login__box">
							<input
								name="name"
								type="text"
								placeholder="Enter Your Name"
								required
								className="login__input"
							/>
							<i className="ri-user-fill"></i>
						</div>
						<div className="login__box">
							<input
								name="email"
								type="email"
								placeholder="Email Address"
								required
								className="login__input"
							/>
							<i className="ri-mail-fill"></i>
						</div>

						<div className="login__box">
							<input
								name="password"
								type={!showPass ? "password" : "text"}
								placeholder="Password"
								required
								className="login__input"
							/>
							<span onClick={() => setShowPass(!showPass)}>
								{!showPass ? (
									<i className="ri-eye-fill"></i>
								) : (
									<i className="ri-eye-off-fill"></i>
								)}
							</span>
						</div>
						<div className="login__box">
							<input
								required
								type="file"
								id="image"
								name="image"
								accept="image/*"
								className="login__input"
							/>
						</div>
					</div>

					<button type="submit" className="login__button">
						{loading ? (
							<TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
						) : (
							"Continue"
						)}
					</button>

					<div className="login__register">
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm w-full text-center">Signup with social accounts</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<SocialLogin />
			</div>
		</div>
	);
};

export default SignUp;
