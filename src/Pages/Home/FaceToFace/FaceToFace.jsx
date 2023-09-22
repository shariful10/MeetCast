import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import Container from "../../../Components/Shared/Container/Container";
import Buttons from "../../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";

const FaceToFace = () => {
	return (
		<div className="py-16 bg-white">
			<Container>
				<div className="grid lg:grid-cols-2 justify-between gap-10">
					<div className="order-last md:order-first">
						<span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
							Face to face
						</span>
						<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-5">
							No Matter where you are
						</h2>
						<p className="text-gray-400 my-10">
							Elevate your conversations with our face-to-face video conferencing.
							Experience lifelike interactions, seamless sharing, and secure
							connections, all from wherever you are. Join us and redefine your video
							conferencing experience today.
						</p>
						<div className="grid grid-cols-2 justify-between gap-4 md:gap-8 mb-10 md:w-[80%]">
							<div className="border p-5 md:p-10 rounded-lg shadow-md">
								<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3">
									12
								</h2>
								<h5 className="text-center">Years of Exp</h5>
							</div>
							<div className="border p-5 md:p-10 rounded-lg shadow-md">
								<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-3">
									20.5M
								</h2>
								<h5 className="text-center">Active Users</h5>
							</div>
						</div>
						<div className="text-center md:text-left">
							<Link to={"/dashboard/myMeetings"}>
								<Buttons title={"Join a Meeting"} />
							</Link>
						</div>
					</div>
					<div className="md:flex order-first md:order-last gap-10 space-y-10 items-center">
						<img
							className="md:w-[70%] rounded-3xl"
							src="https://i.ibb.co/0MhZMFM/conference.png"
							alt=""
						/>
						<div className="custom-shadow p-5 md:p-10 rounded-2xl h-fit mx-auto hidden md:block">
							<img
								className="w-40 h-[150px] rounded-[100%] mx-auto md:mx-0"
								src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
								alt=""
							/>
							<h3 className="text-center font-bold my-5">Willians Banes</h3>
							<div className="flex justify-between items-center">
								<div className="bg-green-500 w-10 h-10 rounded-full flex justify-center items-center text-white">
									<BiSolidPhoneCall size={20} />
								</div>
								<div className="bg-red-500 w-10 h-10 rounded-full flex justify-center items-center text-white">
									<HiPhoneMissedCall size={20} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default FaceToFace;
