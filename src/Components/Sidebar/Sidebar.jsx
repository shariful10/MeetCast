import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { GrLogout } from "react-icons/gr";
// import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
	const navigate = useNavigate();
	// const [toggle, setToggle] = useState(false);
	const { logOut } = useContext(AuthContext);
	const [isActive, setActive] = useState("false");

	// const toggleHandler = (event) => {
	// 	setToggle(event.target.checked);
	// };

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
					{!isActive ? <MdClose className="h-5 w-5" /> : <AiOutlineBars className="h-5 w-5" />}
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
					</div>
				</div>
				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav>
						<ul>
							<li>
								<NavLink
									to="/dashboard/userProfile"
									className={({ isActive }) =>
										`flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-gray-700 ${
											isActive ? "bg-[#6b7cff]  text-white": "text-gray-600"
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
									<MdMeetingRoom className="w-5 h-5 hover:text-white" />

									<span className="mx-4 font-medium">Meetings</span>
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
