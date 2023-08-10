import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-20  ${
        scrolling ? "bg-white z-10 shadow-sm" : "bg-transparent"
      } duration-500`}
    >
      <div className="navbar max-w-[1520px] mx-auto p-3 md:p-5 2xl:p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setOpen(!open)}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Menu */}
            <div
              className={`${
                open
                  ? "top-12 -left-2 lg:hidden text-black"
                  : "top-10 -left-[500px] lg:hidden"
              } bg-white rounded px-8 py-10 shadow-2xl border text-lg absolute z-10 transition-all duration-500`}
            >
              <ul className="w-48 h-52 flex flex-col justify-between">
                <li>
                  <Link className="text-lg font-NotoSans  group " to="/">
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link className="text-lg font-NotoSans  group " to="/about">
                    About
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg font-NotoSans  group "
                    to="/services"
                  >
                    Pricing
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link className="hidden md:block">
            <img className="w-40" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 py-4">
            <li>
              <Link className="text-lg font-NotoSans  group " to="/">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/about">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
            <li>
              <Link className="text-lg font-NotoSans  group " to="/services">
                Pricing
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="bg-secondary px-10 py-2 md:py-3 rounded-full font-medium md:font-semibold font-NotoSans primary_button text-white"
          >
            Join a Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
