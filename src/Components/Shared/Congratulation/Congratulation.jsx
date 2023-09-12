import React from "react";
import { Link } from "react-router-dom";

const Congratulation = () => {
	return (
		<div className="text-center py-12 md:py-[128px]">
			<h2 className="text-3xl md:text-5xl font-bold md:w-2/4 mx-auto">
				Are you ready to grow your business with us
			</h2>
			<p className="mt-6 mb-8">
				With one of our MeetCast services, you'll get high-level audio and video
				conferencing system
			</p>
			<Link to="/pricing">
				<button className="bg-secondary primary_button w-[150px] py-3 md:py-4 rounded-full font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]">
					View pricing
				</button>
			</Link>
		</div>
	);
};

export default Congratulation;
