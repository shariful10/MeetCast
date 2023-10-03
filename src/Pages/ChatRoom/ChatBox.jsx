import React, { useContext, useEffect, useState } from "react";
import { ZIMKitManager, Common, Chat } from "@zegocloud/zimkit-react";
import "@zegocloud/zimkit-react/index.css";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const id = Math.floor(Math.random() * 1000);

const ChatBox = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const userInformation = `user${id}`;

  const [state, setState] = useState({
    appConfig: {
      appID: 985319090, // Corrected: Use process.env.REACT_APP_APP_ID
      serverSecret: "071924d01385305ef2b902e17a324ee8", // Corrected: Use process.env.REACT_APP_APP_SECRET
    },
    // The userID and userName is a strings of 1 to 32 characters.
    // Only digits, letters, and the following special characters are supported: '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '`', ';', '’', ',', '.', '<', '>', '/', '\'
    userInfo: {
      // Your ID as a user.
      userID: userInformation,
      // Your name as a user.
      userName: `${user.displayName}`,
      // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
      userAvatarUrl: "",
    },
  });

  useEffect(() => {
    const init = async () => {
      const zimKit = new ZIMKitManager();
      const token = zimKit.generateKitTokenForTest(
        state.appConfig.appID,
        state.appConfig.serverSecret,
        state.userInfo.userID
      );
      await zimKit.init(state.appConfig.appID);
      await zimKit.connectUser(state.userInfo, token);
    };
    init();
  }, []);
  return (
    <div className="mb-3">
      <h2 className="text-center">
        <Link to={"/"}> 
          <button className="btn btn-sm m-3">Back Home</button>
        </Link>
        {userInformation}
      </h2>
      <div className="m-auto">
      <Common></Common>
      </div>
    </div>
  );
};

export default ChatBox;
