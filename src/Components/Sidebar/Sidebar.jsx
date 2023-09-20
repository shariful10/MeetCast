import React, { useState } from "react";
import { AiFillSchedule, AiOutlineBars } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { FaGear, FaUserGroup } from "react-icons/fa6";
import { HiMiniHomeModern } from "react-icons/hi2";
import { ImBlog, ImHome } from "react-icons/im";
import { IoLogOut } from "react-icons/io5";
import { SiBloglovin } from "react-icons/si";
import { MdClose, MdManageAccounts, MdMeetingRoom } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import useEditor from "../Hooks/useEditor";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isActive, setActive] = useState("false");
  const [isAdmin] = useAdmin();
  const [isEditor] = useEditor();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-200 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img className="w-40" src={Logo} alt="Logo" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {!isActive ? (
            <MdClose className="h-5 w-5" />
          ) : (
            <AiOutlineBars className="h-5 w-5" />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full md:flex py-2 justify-center items-center mx-auto">
              <img className="w-40" src={Logo} alt="Logo" />
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <ul>
              {isAdmin ? (
                <li>
                  <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <HiMiniHomeModern className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">Admin Home</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/UserProfile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaGear className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">Admin Profile</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/UserManagement"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaUserGroup className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">User Management</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/schedule"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <AiFillSchedule className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Meeting Schedule</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myMeetings"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <MdMeetingRoom className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">My Meetings</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manage-blogs"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <MdManageAccounts className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Manage Blogs</span>
                  </NavLink>
                </li>
              ) : isEditor ? (
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <HiMiniHomeModern className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">Editor Home</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/UserProfile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaGear className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">Editor Profile</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/schedule"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <AiFillSchedule className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Meeting Schedule</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myMeetings"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <MdMeetingRoom className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">My Meetings</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/add-blog"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <ImBlog className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Add a Blog</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/my-blog"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <SiBloglovin className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">My Blogs</span>
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaGear className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">User Home</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/userProfile"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaGear className="w-5 h-5 hover:text-white" />
                    <span className="mx-4 font-medium">User Profile</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/schedule"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <AiFillSchedule className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Meeting Schedule</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/myMeetings"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <MdMeetingRoom className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">My Meetings</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/googleCalendar"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                        isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                      }`
                    }
                  >
                    <FaCalendar className="w-5 h-5 hover:text-white" />

                    <span className="mx-4 font-medium">Calendar</span>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]  hover:text-white ${
                isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
              }`
            }
          >
            <ImHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#6b7cff] hover:text-white transition-colors duration-300 transform"
          >
            <IoLogOut className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
