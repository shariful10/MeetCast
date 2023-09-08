import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
import img from "../../assets/images/signup.svg";

const Login = () => {
  const { loading, setLoading, signIn, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
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
    <div className="max-w-7xl mx-auto py-20 md:py-0">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-0 items-center min-h-screen">
        <div data-aos="fade-right" data-aos-duration="1200">
          <img className="w-[80%] mx-auto md:mx-0" src={img} alt="" />
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Log In</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-secondary w-full rounded-md py-3 text-white"
                >
                  {loading ? (
                    <TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
            <div className="space-y-1">
              <button
                onClick={handleReset}
                className="text-xs hover:underline hover:text-secondary text-gray-400"
              >
                Forgot password?
              </button>
            </div>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-secondary"></div>
              <p className="px-3 text-sm dark:text-secondary font-semibold">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-secondary"></div>
            </div>
            <SocialLogin />
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="hover:underline hover:text-secondary text-gray-700"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
