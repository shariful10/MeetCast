import React from "react";
import DisplayInfo from "./DisplayInfo";
import PersonalInfo from "./PersonalInfo";
import MeetingInfo from "./MeetingInfo";
import { Link } from "react-router-dom";

const UserProfileDashBoard = () => {
  return (
    <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Link to={"/dashboard/userProfile/"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Profile Photo and Avatar
        </div>
      </Link>
      <Link to={"/dashboard/userProfile/"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Display Information
        </div>
      </Link>
      <Link to={"/dashboard/userProfile/personalInfo"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Personal Information
        </div>
      </Link>
      <Link to={"/dashboard/userProfile/meetingInfo"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Meeting Settings
        </div>
      </Link>
      <Link to={"/dashboard/userProfile/meetingInfo"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Privacy Settings
        </div>
      </Link>
      <Link to={"/dashboard/userProfile/meetingInfo"}>
        <div className="text-2xl h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          Billing and Subscription
        </div>
      </Link>
    </div>
  );
};

export default UserProfileDashBoard;
