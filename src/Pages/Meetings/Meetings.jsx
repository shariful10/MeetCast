import React from "react";
import Messaging from "./Messaging";
import { NavLink, Outlet } from "react-router-dom";
import Users from "./Users";
import RoomSection from "./RoomSection";
import VideoMeet from "./VideoMeet";

const Meetings = () => {
  return (
    <div className="mt-28 border m-2 p-2">
      <div className="flex">
        <RoomSection></RoomSection>
        <VideoMeet></VideoMeet>
        <Messaging></Messaging>
        <Users></Users>

      </div>
    </div>
  );
};

export default Meetings;
