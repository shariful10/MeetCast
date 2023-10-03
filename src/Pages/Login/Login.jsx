import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import loginImg from "../../assets/images/login-bg.png";
import { saveUser } from "../../Components/APIs/auth";

const Login = () => {
	const { loading, setLoading, signIn, resetPassword } = useContext(AuthContext);
	const navigate = useNavigate();
	const [showPass, setShowPass] = useState(false);
	const emailRef = useRef();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signIn(email, password)
			.then((res) => {
				console.log(res.user);
				toast.success("Successfully Login");
				saveUser(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
	};

	const handleReset = () => {
		const email = emailRef.current.value;
		resetPassword(email)
			.then(() => {
				toast.success("Please Check Your Email For Reset Password");
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
	};

	return (
		<>
			<div className="login">
				<img src={loginImg} alt="image" className="login__bg" />
				<form onSubmit={handleSubmit} className="login__form">
					<h1 className="login__title">Login</h1>

					<div className="login__inputs">
						<div className="login__box">
							<input
								ref={emailRef}
								name="email"
								type="email"
								placeholder="Email ID"
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
							{/* <i className="ri-lock-2-fill"></i> */}
							<span onClick={() => setShowPass(!showPass)}>
								{!showPass ? (
									<i className="ri-eye-fill"></i>
								) : (
									<i className="ri-eye-off-fill"></i>
								)}
							</span>
						</div>
					</div>
					<div className="login__check">
						<div className="login__check-box">
							<input type="checkbox" className="login__check-input" id="user-check" />
							<label htmlFor="user-check" className="login__check-label">
								Remember me
							</label>
						</div>

						<a onClick={handleReset} className="login__forgot">
							Forgot Password?
						</a>
					</div>

					<button type="submit" className="login__button">
						{loading ? (
							<TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
						) : (
							"Continue"
						)}
					</button>

					<div className="login__register">
						Don't have an account? <Link to="/signup">Register</Link>
					</div>
					<SocialLogin />
				</form>
			</div>
		</>
	);
};

export default Login;
