import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Logo from "../../../assets/Logo.svg";
import useAdmin from "../../Hooks/useAdmin";
import useEditor from "../../Hooks/useEditor";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const [open, setOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const [isAdmin] = useAdmin();
	const [isEditor] = useEditor();

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
			className={`fixed top-0 w-full z-20 py-2  ${
				scrolling ? "bg-white z-10 shadow-md" : "bg-transparent"
			} duration-500`}
		>
			<div
				className="navbar max-w-[1520px] mx-auto p-3 md:p-5 2xl:p-0"
				onClick={() => open && setOpen(false)}
			>
				<div className="navbar-start">
					<div className="dropdown">
						<label onClick={() => setOpen(!open)} className="btn btn-ghost lg:hidden">
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
									? "top-12 left-2 lg:hidden text-black"
									: "top-10 -left-[500px] lg:hidden"
							} bg-white rounded px-8 py-10 shadow-2xl border text-lg absolute z-10 transition-all duration-500`}
						>
							<ul className="w-48 h-52 flex flex-col justify-between">
								<li>
									<Link className="text-lg font-NotoSans group " to="/">
										Home
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								<li>
									<Link className="text-lg font-NotoSans group" to="/about">
										About
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								<li>
									<Link className="text-lg font-NotoSans group " to="/pricing">
										Pricing
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								<li>
									<Link className="text-lg font-NotoSans group " to="/blog">
										Blog
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								<li>
									<Link className="text-lg font-NotoSans group " to="/contact">
										Contact
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								<li>
									<Link className="text-lg font-NotoSans group" to="/meetings">
										Chat Room
										<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
									</Link>
								</li>
								{user && (
									<li>
										<Link
											className="text-lg font-NotoSans group"
											to={`${
												isAdmin
													? "/dashboard/admin-home"
													: isEditor
													? "/dashboard/UserHome"
													: "/dashboard/userHome"
											}`}
										>
											Dashboard
											<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
										</Link>
									</li>
								)}
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
							<Link className="text-lg font-NotoSans group" to="/">
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
							<Link className="text-lg font-NotoSans  group " to="/pricing">
								Pricing
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
							</Link>
						</li>
						<li>
							<Link className="text-lg font-NotoSans  group " to="/blog">
								Blog
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
							</Link>
						</li>
						<li>
							<Link className="text-lg font-NotoSans  group " to="/contact">
								Contact
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary   mt-[1px]"></span>
							</Link>
						</li>
						<li>
							<Link className="text-lg font-NotoSans  group " to="/meetings">
								Chat Room
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
							</Link>
						</li>
						{user && (
							<li>
								<Link
									className="text-lg font-NotoSans group"
									to={`${
										isAdmin
											? "/dashboard/admin-home"
											: isEditor
											? "/dashboard/userHome"
											: "/dashboard/userHome"
									}`}
								>
									Dashboard
									<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
								</Link>
							</li>
						)}
					</ul>
				</div>
				<div className="navbar-end">
					{user ? (
						<div className="dropdown dropdown-end">
							<label onClick={() => setProfileOpen(!profileOpen)}>
								<div className="w-10 rounded-full">
									<img className="rounded-full" src={user?.photoURL} />
								</div>
							</label>

							<div
								className={`${
									profileOpen
										? "top-14 right-2 text-black"
										: "-top-[500px] right-2"
								} bg-white rounded px-8 py-10 shadow-2xl border absolute z-10 transition-all duration-500 text-sm`}
							>
								<ul className="w-40 h-40 flex flex-col justify-between">
									<span className="text-sm mb-3">
										Welcome!{" "}
										<span className="text-blue-600 font-semibold">
											{user?.displayName}
										</span>
									</span>
									<li>
										<Link
											className="font-NotoSans group"
											to="/dashboard/userProfile"
										>
											Profile
											<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
										</Link>
									</li>
									<li>
										<Link
											className="font-NotoSans group"
											to="/dashboard/schedule"
										>
											Meeting
											<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
										</Link>
									</li>
									<li>
										<Link
											className="font-NotoSans group "
											onClick={() => logOut()}
										>
											Log Out
											<span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-1 bg-primary mt-[1px]"></span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					) : (
						<Link
							to="/login"
							className="bg-secondary px-5 md:px-10 py-2 md:py-3 rounded-full md:font-semibold font-NotoSans primary_button text-white"
						>
							Join a Meeting
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
