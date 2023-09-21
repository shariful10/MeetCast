import React from "react";
import { NavLink } from "react-router-dom";

const UserProfileDashBoard = () => {

  return (
    <div className="menu p-4 max-w-[720px] md:w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/editPhoto"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Profile Photo and Avatar</h3>
        </div>
      </NavLink>
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Display Information</h3>
        </div>
      </NavLink>
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/personalInfo"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Personal Information</h3>
        </div>
      </NavLink>
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/meetingInfo"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Meeting Settings</h3>
        </div>
      </NavLink>
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/privacy"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Privacy Settings</h3>
        </div>
      </NavLink>
      <NavLink activeclassname="bg-[#6b7cff] text-white" to={"/dashboard/userProfile/billing"}>
        <div className={`bg-slate-100 p-4 h-[60px] hover:bg-slate-300 rounded-lg shadow-lg mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Billing and Subscription</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default UserProfileDashBoard;
