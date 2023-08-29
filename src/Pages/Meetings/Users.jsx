import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Users = ({gettingRoomNumber}) => {
  const {user} = useContext(AuthContext)
  
  gettingRoomNumber(user.displayName)

  return (
    <div className="w-[400px] border p-2">
      <div>
        <p>Online User</p>
        <div className="border p-2 w-full text-left bg-slate-500 rounded-lg">
          <p className="m-auto text-white h-full text-sm">Ahmed Nashif</p>
        </div>
      </div>
    </div>
  );
};

export default Users;
