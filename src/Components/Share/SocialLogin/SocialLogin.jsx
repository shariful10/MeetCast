import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
// import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
	const { setLoading, signInWithGoogle } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleGoogleSignIn = () => {
		signInWithGoogle()
			.then((res) => {
				console.log(res.user);
				toast.success("Successfully Login");
				// saveUser(res.user);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				toast.error(err.message);
			});
	};

	return (
		<div
			onClick={handleGoogleSignIn}
			className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 cursor-pointer rounded-md"
		>
			<FcGoogle size={32} />
			<p>Continue with Google</p>
		</div>
	);
};

export default SocialLogin;
