import React, { useState } from "react";
import Messaging from "./Messaging";
import { NavLink, Outlet } from "react-router-dom";
import Users from "./Users";
import RoomSection from "./RoomSection";
import VideoMeet from "./VideoMeet";

const Meetings = () => {
  const [roomNumber, setRoomNumber] = useState()

  const gettingRoomNumber =(rooming)=>{
    const room = rooming
    setRoomNumber(room)
  }

  console.log("room from roomsection", roomNumber)


  return (
    <div className="mt-28 border m-2 p-2">
      <div className="flex">
        <RoomSection gettingRoomNumber={gettingRoomNumber}></RoomSection>
        <VideoMeet></VideoMeet>
        <Messaging room={roomNumber}></Messaging>
        <Users></Users>
      </div>
    </div>
  );
};

export default Meetings;
