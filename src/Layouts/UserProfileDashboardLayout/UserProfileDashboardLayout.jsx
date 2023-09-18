import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserProfileDashBoard from "../../Pages/UserProfile/UserProfileDashBoard";

const UserProfileDashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
        <UserProfileDashBoard></UserProfileDashBoard>
        <div className="">
            <div className="w-full ms-5">
                <Outlet />
            </div>
        </div>
    </div>
    );
};

export default UserProfileDashboardLayout;