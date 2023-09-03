import React from "react";
import Container from "../../Components/Shared/Container/Container";

const EditUserProfile = () => {
  return (
    <Container>
      <div className="w-full bg-white p-6">
      <div className="divider text-2xl">
          <p>Display Information</p>
        </div>
        <div className="flex">
          <div className="w-2/6 p-6">
            <p className="m-3">Photo</p>
            <p className="m-3">Display Name</p>
            <p className="m-3">Occupation</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Photo URL"}
              className="m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Enter Dsiplay Name"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Enter Occupation"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Personal</p>
        </div>
        <div className="flex">
          <div className="w-2/6 p-6">
            <p className="m-3">Phone</p>
            <p className="m-3">Language</p>
            <p className="m-3">Time Zone</p>
            <p className="m-3">Date Format</p>
            <p className="m-3">Time Format</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Phone"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Prefered Language"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Time Zone"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Date Format"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Time Format"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Meeting</p>
        </div>
        <div className="flex">
          <div className="w-2/6 p-6">
            <p className="m-3">Personal Meeting</p>
            <p className="m-3">Host Key</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Personal Meeting URL"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Change Host Key"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Sign In</p>
        </div>
        <div className="flex">
          <div className="w-2/6 p-6">
            <p className="m-3">Sign-in Email</p>
            <p className="m-3">Sign-in Password</p>
            <p className="m-3">Linked Accounts</p>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <input
              type="text"
              placeholder={"Change Sign-in Email"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Change Password"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
            <input
              type="text"
              placeholder={"Linked More Accounts"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-center m-3">
          <button className="btn mt-3 w-96 btn-primary text-white">
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default EditUserProfile;
