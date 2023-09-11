import React from "react";
import { Link } from "react-router-dom";

const Conversations = ({ info }) => {
  return (
    <Link to={"./"}>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-300 font-bold p-2">
        <img
          src={info?.photoURL}
          alt=""
          className="h-[50px] w-[50px] border rounded-full"
        />
        <div className="m-3">
          <p className="m-auto">{info?.displayName}</p>
        </div>
      </div>
    </Link>
  );
};

export default Conversations;
