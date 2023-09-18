import React from "react";
import DisplayInfo from "./DisplayInfo";
import PersonalInfo from "./PersonalInfo";
import MeetingInfo from "./MeetingInfo";
import { Link } from "react-router-dom";

const UserProfileDashBoard = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li>
        <Link to={"/dashboard/userProfile/displayInfo"}>Display Information</Link>
      </li>
      <li>
        <Link to={"/dashboard/userProfile/personalInfo"}>User Profile</Link>
      </li>
      <li>
        <Link to={"/dashboard/userProfile/meetingInfo"}>Meeting Settings</Link>
      </li>
    </ul>
  );
};

export default UserProfileDashBoard;
