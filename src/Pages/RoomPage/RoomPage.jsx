import React, { useContext } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../../Providers/AuthProvider";

const RoomPage = () => {
	const { roomID } = useParams();
	const { user } = useContext(AuthContext);

	const interviewConference = async (element) => {
		// generate Kit Token
		const appID = 841852671;
		const serverSecret = "3c49b68cd447ef33197394a037f3db27";
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
