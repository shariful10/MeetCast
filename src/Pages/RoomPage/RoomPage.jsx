import React, { useContext } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProvider";

const RoomPage = () => {
	const { roomID } = useParams();
	const { user } = useContext(AuthContext);

	const interviewConference = async (element) => {
		// generate Kit Token
		const appID = 1057129623;
		const serverSecret = "d741ec33e23e1d7c5fa381cbc27315fd";
		const userName = user.displayName;
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			Date.now().toString(),
			userName
		);

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call
		zp.joinRoom({
			container: element,
			scenario: {
				mode: ZegoUIKitPrebuilt.VideoConference,
			},
			showRequestToCohostButton: true,
			showScreenSharingButton: true,
			showRoomDetailsButton: true,
			onUserAvatarSetter: (userList) => {
				userList.forEach((user) => {
					user.setUserAvatar(`https://i.ibb.co/SvqC2KS/Shariful.jpg`);
				});
			},
			sharedLinks: [
				{
					name: "Invitation link",
					url:
						window.location.protocol +
						"//" +
						window.location.host +
						window.location.pathname,
				},
			],
		});
	};

	return (
		<div
			className="myCallContainer"
			ref={interviewConference}
			style={{ width: "100vw", height: "100vh" }}
		></div>
	);
};

export default RoomPage;
