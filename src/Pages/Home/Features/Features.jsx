import React from "react";
import { GiVideoConference } from "react-icons/gi";

const Features = () => {
	return (
		<div>
			<div className="">
				<div className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center text-white">
					<GiVideoConference className="h-6 w-6 p-5" />
				</div>
				<h3>Video Webinar</h3>
				<p>
					Enhance your website with video webinars. Connect globally, interact in
					real-time, share engaging content, and build your brand. Perfect for
					presentations, training, and knowledge sharing. Elevate your online presence
					with video webinars.
				</p>
			</div>
		</div>
	);
};

export default Features;
