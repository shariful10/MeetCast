import React from "react";
// import photo from "https://ibb.co/rw1r7Zd"

const Chats = () => {
  return (
    <div className="w-3/6 p-2">
      <div>
        <input
          type="text"
          value={"Search Friends..."}
          className="w-full h-[30px] p-1 border"
        />
      </div>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-200 font-bold p-2">
        <img src="https://i.ibb.co/HHk8Frh/Jashim.jpg" alt="" className="h-[50px] w-[50px] border rounded-full" />
        <div className="m-3">
          <p className="m-auto">Md. Shariful Islam</p>
        </div>
      </div>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-200 font-bold p-2">
        <img src="https://i.ibb.co/HHk8Frh/Jashim.jpg" alt="" className="h-[50px] w-[50px] border rounded-full" />
        <div className="m-3">
          <p className="m-auto">Ahemd Nashif</p>
        </div>
      </div>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-200 font-bold p-2">
        <img src="https://i.ibb.co/HHk8Frh/Jashim.jpg" alt="" className="h-[50px] w-[50px] border rounded-full" />
        <div className="m-3">
          <p className="m-auto">Akhtar Hossain</p>
        </div>
      </div>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-200 font-bold p-2">
        <img src="https://i.ibb.co/HHk8Frh/Jashim.jpg" alt="" className="h-[50px] w-[50px] border rounded-full" />
        <div className="m-3">
          <p className="m-auto">Pranto Sheikh</p>
        </div>
      </div>
      <div className="flex flex-row border m-1 shadow-md rounded-lg hover:bg-slate-200 font-bold p-2">
        <img src="https://i.ibb.co/HHk8Frh/Jashim.jpg" alt="" className="h-[50px] w-[50px] border rounded-full" />
        <div className="m-3">
          <p className="m-auto">Sultan Mahmud Shuvo</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
