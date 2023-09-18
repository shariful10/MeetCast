import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MeetingInfo = () => {
    const [showHost, setShowHost] = useState(false);
  return (
    <div className="flex flex-col m-auto w-full bg-slate-300 rounded-lg">
      <div className="divider text-2xl">
        <p>Meeting</p>
      </div>
      <div className="w-full p-1">
        <div className="grid grid-cols-2">
          <p className="m-3">Personal Meeting</p>
          <p className="m-3">https://us04web.zoom.us/profile</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="m-3">Host Key</p>
          <p className="m-3 flex items-center gap-3">
            {showHost ? "abc23dr" : "ab...dr"}
            <span onClick={() => setShowHost(!showHost)}>
              {showHost ? <FaEyeSlash /> : <FaEye />}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetingInfo;
