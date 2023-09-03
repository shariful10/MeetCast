import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Components/Shared/Container/Container";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();

  const filteredUser = userInfo?.find(
    (profile) => profile.userProfile.user.email === user.email
  );

  useEffect(() => {
    fetch("userProfile.json")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  console.log(filteredUser?.userProfile);

  return (
    <Container>
      <div className="w-full bg-white p-6">
        <div className="flex justify-between md:flex-row mt-24">
          <div className="w-2/6 ps-6">
            <img
              src={filteredUser?.userProfile.user.photoURL}
              className="h-[150px] ms-0 rounded-3xl"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="">
              <h2 className="text-2xl font-bold">
                {filteredUser?.userProfile.user.displayName}
              </h2>
              <p className="my-3">Web Developer</p>
            </div>
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
          <div className="w-full p-6">
            <p className="m-3">
              {filteredUser?.userProfile.personalInfo.phone}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.personalInfo.language}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.personalInfo.timeZone}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.personalInfo.dateFormat}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.personalInfo.timeFormat}
              <span className="text-slate-400 ">(Example: 02:00 PM)</span>
            </p>
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
          <div className="w-full p-6">
            <p className="m-3">
              {filteredUser?.userProfile.meetingInfo.personalMeeting}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.meetingInfo.hostKey}
            </p>
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
          <div className="w-full p-6">
            <p className="m-3">{user.email}?</p>
            <p className="m-3">
              {filteredUser?.userProfile.signInInfo.signInPassword}
            </p>
            <p className="m-3">
              {filteredUser?.userProfile.signInInfo.linkedAccounts}
            </p>
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Edit Profile</p>
        </div>
        <div className="flex justify-center m-3">
          <Link to={"/editUserProfile"}>
            <button className="btn mt-3 w-96 btn-primary text-white">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
