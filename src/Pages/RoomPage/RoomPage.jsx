import React, { useContext } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useParams } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProvider";

const RoomPage = () => {
	// const { roomID } = useParams();
	const { user } = useContext(AuthContext);

	const interviewConference = async (element) => {
		const roomID = "123456";
		// generate Kit Token
		const appID = 1281063325;
		const serverSecret = "012c5ab5c910ebebd7b55310b534709f";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			roomID,
			Date.now().toString(),
			user.displayName
		);

		// Create instance object from Kit Token.
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		// start the call
		zp.joinRoom({
			container: element,
			scenario: {
				mode: ZegoUIKitPrebuilt.LiveStreaming,
			},
			showRequestToCohostButton: true,
			showScreenSharingButton: true,
			showRoomDetailsButton: true,
			// turnOnCameraWhenJoining:false,

			sharedLinks: [
				{
					name: "Invitation link",
					url:
						window.location.protocol +
						"//" +
						window.location.host +
						window.location.pathname +
						"?roomID=" +
						roomID,
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
