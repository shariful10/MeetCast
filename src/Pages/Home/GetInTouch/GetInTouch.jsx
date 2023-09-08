import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../Components/Shared/Container/Container";

const GetInTouch = () => {
	return (
		<div className="bg-darkBg min-h-[450px] text-white flex justify-center items-center py-20 md:py-8">
			<Container>
				<div className="md:flex justify-around md:gap-20 items-center py-5 space-y-20 md:space-y-0">
					<div className="max-w-[490px]">
						<p className="text-sm font-bold uppercase">Why Choose Us ?</p>
						<h1 className="text-3xl md:text-5xl font-extrabold font-manrope capitalize mt-4 mb-8">
							Bridging Gaps Through Cutting-Edge Conferencing
						</h1>
						<p className="md:text-lg  font-medium">
							Experience crystal-clear communication and content sharing on our
							innovative video conferencing platform.
						</p>
					</div>
					<div className="max-w-[400px] w-full">
						<input
							type="text"
							placeholder="Email Address"
							className="bg-[#F2F3F4] bg-opacity-20 p-4 rounded-md w-full mb-10"
						/>
						<input
							type="password"
							placeholder="Password"
							className="bg-[#F2F3F4] bg-opacity-20 p-4 rounded-md w-full mb-10"
						/>
						<button className="bg-secondary px-5 md:px-10 py-4 rounded md:font-semibold font-NotoSans get_started_button text-white hover:rounded-md w-full">
							<Link to="/login">GET STARTED</Link>
						</button>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default GetInTouch;
