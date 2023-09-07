import React from "react";
import { GiVideoConference } from "react-icons/gi";
import { GoDeviceCameraVideo, GoGear } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsChatLeftDots } from "react-icons/bs";
import Container from "../../../Components/Shared/Container/Container";

const Features = () => {
	return (
		<div className="bg-[#F0F2FE] py-16">
			<Container>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div>
						<div className="bg-blue-400 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<GiVideoConference size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Video Webinar
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
					<div className="pt-[50px] md:pt-0">
						<div className="bg-yellow-500 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<GoDeviceCameraVideo size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Meetings
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
					<div className="pt-[50px] md:pt-0">
						<div className="bg-blue-700 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<HiOutlineUserGroup size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Video Group
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px] md:mt-16">
					<div>
						<div className="bg-red-600 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<HiOutlineUserGroup size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Conference
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
					<div className="pt-[50px] md:pt-0">
						<div className="bg-fuchsia-500 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<BsChatLeftDots size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Chat
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
					<div className="pt-[50px] md:pt-0">
						<div className="bg-green-400 w-14 h-14 rounded-2xl flex justify-center items-center text-white">
							<GoGear size={25} />
						</div>
						<h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold my-5">
							Online Webinar
						</h3>
						<p>
							Enhance your website with video webinars. Connect globally, interact in
							real-time, share engaging content, and build your brand. Perfect for
							presentations, training, and knowledge sharing. Elevate your online
							presence with video webinars.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Features;
