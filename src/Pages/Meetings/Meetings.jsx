import React, { useEffect, useState } from "react";
import Messaging from "./Messaging";
import Users from "./Users";
import Chats from "./Chats";

const Meetings = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("userProfile.json")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div className="mt-28 pb-3 m-2 h-screen">
      <div className="flex h-screen">
        <Chats userInfo={userInfo}></Chats>
        <Messaging></Messaging>
        <Users userInfo={userInfo}></Users>
      </div>
    </div>
  );
};

export default Meetings;
