import React, { useState } from "react";
import Messaging from "./Messaging";
import Users from "./Users";
import Chats from "./Chats";
const Meetings = () => {
  const [roomNumber, setRoomNumber] = useState()
  const gettingRoomNumber = (getRoomId) => {
    const room = getRoomId
    setRoomNumber(room)
  }

  console.log("room from roomsection", roomNumber)


  return (
    <div className="mt-28 border m-2 p-2">
      <div className="flex">
        <Chats></Chats>
        <Messaging room={roomNumber}></Messaging>
        <Users gettingRoomNumber={gettingRoomNumber}></Users>
      </div>
    </div>
  );
};

export default Meetings;
