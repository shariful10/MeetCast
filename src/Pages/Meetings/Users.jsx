import React from "react";

const Users = () => {
  return (
    <div className="w-[300px] border p-2">
      <div>
        <p>Online User</p>
        <div className="border p-2 w-full text-left bg-slate-500 rounded-lg">
          <p className="m-auto text-white h-full text-sm">Ahmed Nashif</p>
        </div>
      </div>
      <div>
        <p>Offline User</p>
        <div className="border p-2 w-full text-left bg-slate-500 rounded-lg">
          <p className="m-auto text-white h-full text-sm">Ahmed Nashif</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
