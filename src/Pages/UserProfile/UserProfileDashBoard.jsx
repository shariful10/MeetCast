import React from "react";
import { NavLink } from "react-router-dom";

const UserProfileDashBoard = () => {

  return (
    <div className="menu p-4 max-w-[720px] bg-[#ebeeff] md:w-80 text-base-content rounded-3xl">
      {/* Sidebar content here */}
      <NavLink className={"p-1"} to={"/dashboard/userProfile/editPhoto"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Profile Photo and Avatar</h3>
        </div>
      </NavLink>
      <NavLink className={"p-1"} to={"/dashboard/userProfile/"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Display Information</h3>
        </div>
      </NavLink>
      <NavLink className={"p-1"} to={"/dashboard/userProfile/personalInfo"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Personal Information</h3>
        </div>
      </NavLink>
      <NavLink className={"p-1"} to={"/dashboard/userProfile/meetingInfo"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Meeting Settings</h3>
        </div>
      </NavLink>
      <NavLink className={"p-1"} to={"/dashboard/userProfile/privacy"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Privacy Settings</h3>
        </div>
      </NavLink>
      <NavLink className={"p-1"} to={"/dashboard/userProfile/billing"}>
        <div className={`bg-white p-4 h-[60px] hover:bg-[#6b7cff] hover:text-white rounded-lg shadow-xl mt-2 w-full`}>
          <h3 className="mt-1 mx-auto">Billing and Subscription</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default UserProfileDashBoard;
