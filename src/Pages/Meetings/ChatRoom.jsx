import React, { useEffect, useState } from "react";
import Chats from "./Chats";
import Messaging from "./Messaging";
import Users from "./Users";
import Conversations from "./Conversations";

const ChatRoom = () => {
  const [userInfo, setUserInfo] = useState(null);
  const friends = userInfo?.filter((friend) => friend.friendShip === "friends");
  const [selectedConversation, setSelectedConversation] = useState(null);

  console.log("chatroom", selectedConversation);

  useEffect(() => {
    fetch("/userProfile.json")
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleConversationClick = (conversationInfo) => {
    setSelectedConversation(conversationInfo);
  };

  return (
    <div className="mt-28 w-1080 pb-3 m-2 h-screen">
      {/* <div className="flex h-screen">
        <Chats userInfo={userInfo}></Chats>
        <Messaging></Messaging>
        <Users userInfo={userInfo}></Users>
      </div> */}
      {/* ----------------------- */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          {
            <div className="flex flex-col">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
              {
                selectedConversation && (
                  <Messaging conversation={selectedConversation} />
                ) // Pass the selected conversation
              }
            </div>
          }
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div>
              {friends?.map((info) => (
                <Conversations
                  key={info.id}
                  info={info}
                  onClick={handleConversationClick}
                ></Conversations>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
