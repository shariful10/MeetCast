import React, { useState } from "react";
import { useActionData } from "react-router";

const Users = ({messageOnOff}) => {
  const [buttonStat, setButtonStat] = useState()
  
  messageOnOff(buttonStat)

  const toggleButton =()=>{
    setButtonStat(prevButtonStat => !prevButtonStat);
  }


  return (
    <div className="w-[400px] border p-2">
      <div className="">
        <button className="btn btn-primary btn-sm" onClick={toggleButton}>Open chat</button>
      </div>
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
