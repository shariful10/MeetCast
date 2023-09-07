import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Components/Shared/Container/Container";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
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
      <div className="w-full bg-white p-6">
        <div className="flex justify-between md:flex-row mt-24">
          <div className="w-2/6 ps-6">
            <img
              src={user?.photoURL}
              className="h-[150px] ms-0 rounded-3xl"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="">
              <h2 className="text-2xl font-bold">{user.displayName}</h2>
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
            <p className="m-3 flex items-center gap-3">
              {showPhone ? "01845395213" : "018.....213"}
              <span onClick={() => setShowPhone(!showPhone)}>
                {showPhone ? <FaEyeSlash /> : <FaEye />}
              </span>
            </p>
            <p className="m-3">Bangla, English</p>
            <p className="m-3">(GMT+6:00) Astana, Dhaka</p>
            <p className="m-3">mm/dd/yyyy</p>
            <p className="m-3">
              Use 12-hour time{" "}
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
            <p className="m-3">https://us04web.zoom.us/profile</p>
            <p className="m-3 flex items-center gap-3">
              {showHost ? "abc23dr" : "ab...dr"}
              <span onClick={() => setShowHost(!showHost)}>
                {showHost ? <FaEyeSlash /> : <FaEye />}
              </span>
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
            <p className="m-3">{user.email}</p>
            <p className="m-3 flex items-center gap-3">
              {showPass ? "abc23dr" : "ab...dr"}
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </p>
            <p className="m-3">https://us04web.zoom.us/profile</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={"/dashboard/editUserProfile"}>
            <button className="btn btn-primary text-white">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
