import React, { useState } from "react";
import Messaging from "./Messaging";
import Users from "./Users";
import RoomSection from "./RoomSection";
import VideoMeet from "./VideoMeet";

const Meetings = () => {
  const [roomNumber, setRoomNumber] = useState()
  const gettingRoomNumber =(getRoomId)=>{
    const room = getRoomId
    setRoomNumber(room)
  }

  console.log("room from roomsection", roomNumber)


  return (
    <div className="mt-28 border m-2 p-2">
      <div className="flex">
        <Users gettingRoomNumber={gettingRoomNumber}></Users> 
        <Messaging room={roomNumber}></Messaging>
      </div>
    </div>
  );
};

export default Meetings;
