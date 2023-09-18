import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

import { Link } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import DisplayInfo from "./DisplayInfo";
import PersonalInfo from "./PersonalInfo";
import MeetingInfo from "./MeetingInfo";

const UserProfileOriginal = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const [axiosSecure] = useAxiosSecure();

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
      <div className="w-full m-auto rounded-lg flex flex-col p-6">
        <DisplayInfo></DisplayInfo>
        <PersonalInfo></PersonalInfo>
        <MeetingInfo></MeetingInfo>
        <div className="flex justify-center mt-6">
          <Link to={"/dashboard/editUserProfile"}>
            <button className="btn btn-primary text-white">Edit Profile</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default UserProfileOriginal;
