import React from "react";
import UserNumberCard from "./userNumberCard";
import Totalincome from "./Totalincome";
import TotalLogIn from "./TotalLogIn";
import Editors from "./Editors";
import ChartInfo from "./ChartInfo";
import TotalBlogs from "./TotalBlogs";
import PendingOrders from "./PendingOrders";

const AdminHome = () => {
  return (
    <div className="max-w-[1080px]">
      <div className="bg-slate-300 p-6 rounded-lg shadow-lg hover:bg-slate-400">
        <h1 className="text-4xl text-center">Admin Homepage</h1>
        <div className="bg-slate-300 mt-2 rounded-lg shadow-lg p-3 grid grid-cols-3 gap-3">
            <UserNumberCard></UserNumberCard>
            <Totalincome></Totalincome>
            <TotalLogIn></TotalLogIn>
            <TotalBlogs></TotalBlogs>
            <PendingOrders></PendingOrders>
          <div
            className="h-[300px] mt-3 mx-3 m-auto rounded-lg shadow-lg  bg-slate-200 p-3"
            style={{ gridColumn: "1 / 4" }}
          >
            <ChartInfo></ChartInfo>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 mt-3 p-6 rounded-lg shadow-lg hover:bg-slate-400">
        <h1 className="text-4xl text-center">Editors</h1>
        <Editors></Editors>
      </div>
    </div>
  );
};

export default AdminHome;
