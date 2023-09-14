import React, { useContext } from "react";
import Conversations from "./Conversations";
import { AuthContext } from "../../Providers/AuthProvider";

const Chats = ({ userInfo }) => {
  const { user } = useContext(AuthContext);

  const friends = userInfo?.filter(friend=>friend.friendShip === "friends")

  return (
    <div className="p-2 h-screen" style={{ overflowY: "scroll" }}>
      <div>
        <input
          type="text"
          value={"Search Friends..."}
          className="w-full h-[30px] p-1 border"
        />
      </div>
      <div>
        {friends?.map((info) => (
          <Conversations key={info.id} info={info}></Conversations>
        ))}
      </div>
    </div>
  );
};

export default Chats;
