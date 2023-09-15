

import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Container from "../../Components/Shared/Container/Container";

const UserProfile = () => {
  const {user} = useAuth()
  const [userInfo, setUserInfo ] = useState()
  const [axiosSecure] = useAxiosSecure();
  const [showPass, setShowPass] = useState(false);
  const [showHost, setShowHost] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    axiosSecure
      .get("/userProfile")
      .then((response) => {
        const userProfile = response.data.find(
          (data) => data?.signInEmail === user.email
        );
        setUserInfo(userProfile);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log(userInfo);

  return (
    <Container>
      <div className="w-full m-auto bg-white p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
          <div className="ps-6">
            <img
              src={user?.photoURL}
              className="h-[250px] ms-0 rounded-3xl"
              alt=""
            />
          </div>
          <div className="w-full ms-6 mt-2">
              <h2 className="text-2xl font-bold">{user.displayName}</h2>
              <p className="my-3">Web Developer</p>
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Personal</p>
        </div>
        <div className="flex">
          <div className="w-full p-1">
            <div className="grid grid-cols-2">
              <p className="m-3">Phone</p>
              <p className="m-3 flex items-center gap-3">
                {showPhone ? "01845395213" : "018.....213"}
                <span onClick={() => setShowPhone(!showPhone)}>
                  {showPhone ? <FaEyeSlash /> : <FaEye />}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Language</p>
              <p className="m-3">Bangla, English</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Time Zone</p>
              <p className="m-3">(GMT+6:00) Astana, Dhaka</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Date Format</p>
              <p className="m-3">mm/dd/yyyy</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Time Format</p>
              <p className="m-3">
                Use 12-hour time{" "}
                <span className="text-slate-400 ">(Example: 02:00 PM)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="divider text-2xl">
          <p>Meeting</p>
        </div>
        <div className="flex">
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
        <div className="divider text-2xl">
          <p>Sign In</p>
        </div>
        <div className="flex">
          <div className="w-full p-1">
            <div className="grid grid-cols-2">
              <p className="m-3">Sign-in Email</p>
              <p className="m-3">{user.email}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Sign-in Password</p>
              <p className="m-3 flex items-center gap-3">
                {showPass ? "abc23dr" : "ab...dr"}
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="m-3">Linked Accounts</p>
              <p className="m-3">https://us04web.zoom.us/profile</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to={"/dashboard/editUserProfile"}>
            <button className="btn btn-primary text-white">Edit Profile</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
