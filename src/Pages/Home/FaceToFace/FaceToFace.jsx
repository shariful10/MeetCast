import React from "react";
import Container from "../../../Components/Shared/Container/Container";
import Buttons from "../../../Components/Buttons/Buttons";

const FaceToFace = () => {
	return (
		<div>
			<Container>
				<div className="">
					<div>
						<span className="md:text-2xl font-bold bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-transparent bg-clip-text">
							Face to face
						</span>
						<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
							No Matter where you are
						</h2>
						<p className="text-gray-400 my-10">
							Elevate your conversations with our face-to-face video conferencing.
							Experience lifelike interactions, seamless sharing, and secure
							connections, all from wherever you are. Join us and redefine your video
							conferencing experience today.
						</p>
						<div className="grid md:grid-cols-2 gap-4">
							<div className="border p-10 rounded-lg shadow-md">
								<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
									12
								</h2>
								<h5>Years of Exp</h5>
							</div>
							<div className="border p-10 rounded-lg shadow-md">
								<h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
									20.5M
								</h2>
								<h5>Active Users</h5>
							</div>
						</div>
						<Buttons title={"Join a Meeting"} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default FaceToFace;
