import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveUser } from "../../Components/APIs/auth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProvider";
<<<<<<< HEAD
import { saveUser } from "../../Components/APIs/auth";
=======
import img from "../../assets/images/signup.svg";
>>>>>>> 7706112eb2571a98086691d8bf35032ce9658c20

const SignUp = () => {
  const { loading, setLoading, createUser, updateUserProfile } =
    useContext(AuthContext);
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
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API
    }`;
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
    return;
  };

  return (
    <div className="max-w-7xl mx-auto py-20 md:py-0">
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-0 items-center min-h-screen md:py-10">
        <div data-aos="fade-right" data-aos-duration="1200">
          <img
            className="w-[80%] mx-auto md:mx-0 bg-contain"
            src={img}
            alt=""
          />
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to AirCNC</p>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Image:
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900"
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
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-secondary w-full rounded-md py-3 text-white sign_up"
                >
                  {loading ? (
                    <TbFidgetSpinner className="m-auto animate-spin h-6 w-6" />
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400 w-full">
                Signup with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <SocialLogin />
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:underline hover:text-secondary text-gray-800"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
