import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../Components/Buttons/Buttons";

const Pricing = () => {
	return (
		<>
			<div className="mt-16 md:mt-24 relative md:text-center">
				<div className="absolute Pricing_Blur_Gradient rounded-full bg-gradient-to-r from-primary to-secondary left-1/4 lg:w-[520px] lg:h-[520px]"></div>
				<div className="relative">
					<h2 className="text-2xl md:text-4xl font-bold font-manrope">
						Are you ready to grow your <br className="hidden md:inline" /> business with
						us?
					</h2>
					<p className="text-gray-400 mt-3 md:mt-4">
						Ready to Grow Your Business with Us?
					</p>
					<div className="text-center mt-10">
						<Link to="/pricing">
							{" "}
							<Buttons title={"View pricing"} />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pricing;
