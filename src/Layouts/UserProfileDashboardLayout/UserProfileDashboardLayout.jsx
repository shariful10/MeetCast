import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import UserProfileDashBoard from "../../Pages/UserProfile/UserProfileDashBoard";

const UserProfileDashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex m-auto">
        <UserProfileDashBoard></UserProfileDashBoard>
        <div className="">
            <div className="max-w-[1280px] w-full sm:mt-3 md:mt-0 md:ms-3">
                <Outlet />
            </div>
        </div>
    </div>
    );
};

export default UserProfileDashboardLayout;