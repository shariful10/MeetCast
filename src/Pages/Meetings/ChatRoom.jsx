import React, { useEffect, useState } from "react";
import Chats from "./Chats";
import Messaging from "./Messaging";
import Users from "./Users";
import Conversations from "./Conversations";

const ChatRoom = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  console.log("chatroom", selectedConversation);

  const friends = userInfo?.filter((friend) => {
    return friend.friendShip.some(
      (friend) => friend.friendEmail === "a.nashif7@gmail.com"
    );
  });
  const onlineUsers = userInfo?.filter(
    (onlineUser) => onlineUser.userStatus === "online"
  );
  const offlineUsers = userInfo?.filter(
    (offlineUser) => offlineUser.userStatus === "offline"
  );

  console.log("User", friends);

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
    <div className="mt-28 m-auto flex w-5/6 h-[500px]">
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
        <div className="drawer-side h-[500px]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="">
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
      {/* <Users userInfo={userInfo}></Users> */}
      <div
        className="w-80 h-[500px] border p-1"
        style={{ overflowY: "scroll" }}
      >
        <div className="p-1 divider">
          <p className="font-bold">Online Users</p>
        </div>
        <div>
          {onlineUsers?.map((info) => (
            <Conversations
              key={info.id}
              info={info}
              onClick={handleConversationClick}
            ></Conversations>
          ))}
        </div>
        <div className="p-1 divider">
          <p className="font-bold">Offline Users</p>
        </div>
        <div className="bg-slate-200 p-1 rounded-lg">
          {offlineUsers?.map((info) => (
            <Conversations
              key={info.id}
              info={info}
              onClick={handleConversationClick}
            ></Conversations>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
