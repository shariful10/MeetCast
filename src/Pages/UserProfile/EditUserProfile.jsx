import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container/Container";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

const EditUserProfile = () => {
  const [axiosSecure] = useAxiosSecure();
  const [userProfileData, setUserProfileData] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((response) => {
        const userProfile = response.data.find(
          (data) => data?.signInEmail === user.email
        );
        setUserProfileData(userProfile);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Prepare the updated user profile data
    const updatedUserProfile = {
      ...userProfileData, // Keep the existing data
      ...data, // Update with new form data
    };

    console.log("Updating profile", updatedUserProfile);

    // Send the updated user profile to the server
    axiosSecure
      .put(`/users/${user.email}`, updatedUserProfile)
      .then((res) => {
        console.log("Profile update response:", res);
        // You can perform further actions here if needed
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white p-6">
        <div className="divider text-2xl">
          <p>Display Information</p>
        </div>
        <div className="flex font-bold">
          <div className="w-full p-1">
            <p className="m-1">Information</p>
          </div>
          <div className="w-full p-1">
            <p className="m-1">Current</p>
          </div>
          <div className="w-full p-1">
            <p className="m-1">Change</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/6 p-6">
            <p className="m-3">Photo</p>
            <p className="m-3">Display Name</p>
            <p className="m-3">Occupation</p>
          </div>
          <div className="w-2/6 p-6">
            <p className="m-3">{userProfileData?.Photo}</p>
            <p className="m-3">{userProfileData?.Name}</p>
            <p className="m-3">{userProfileData?.occupation}</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Photo URL"}
              className="m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("Photo", { required: true })}
            />
            <input
              type="text"
              placeholder={"Enter Dsiplay Name"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("Name", { required: true })}
            />
            <input
              type="text"
              placeholder={"Enter Occupation"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("occupation", { required: true })}
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
          <div className="w-2/6 p-6">
            <p className="m-3">{userProfileData?.phone}</p>
            <p className="m-3">{userProfileData?.language}</p>
            <p className="m-3">{userProfileData?.tzone}</p>
            <p className="m-3">{userProfileData?.dateFormat}</p>
            <p className="m-3">{userProfileData?.timeFormat}</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Phone"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("phone", { required: true })}
            />
            <input
              type="text"
              placeholder={"Prefered Language"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("language", { required: true })}
            />
            <input
              type="text"
              placeholder={"Time Zone"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("tzone", { required: true })}
            />
            <input
              type="text"
              placeholder={"Date Format"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("dateFormat", { required: true })}
            />
            <input
              type="text"
              placeholder={"Time Format"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("timeFormat", { required: true })}
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
          <div className="w-2/6 p-6">
            <p className="m-3">{userProfileData?.Name}</p>
            <p className="m-3">{userProfileData?.hostKey}</p>
          </div>
          <div className="flex flex-col w-1/2  p-6">
            <input
              type="text"
              placeholder={"Enter Personal Meeting URL"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("meetingUrl", { required: true })}
            />
            <input
              type="text"
              placeholder={"Change Host Key"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("hostKey", { required: true })}
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
          <div className="w-2/6 p-6">
            <p className="m-3">{userProfileData?.signInEmail}</p>
            <p className="m-3">{userProfileData?.changePass}</p>
            <p className="m-3">{userProfileData?.moreAccounts}</p>
          </div>
          <div className="flex flex-col w-1/2 p-6">
            <input
              type="text"
              placeholder={"Change Sign-in Email"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("signInEmail", { required: true })}
            />
            <input
              type="text"
              placeholder={"Change Password"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("changePass", { required: true })}
            />
            <input
              type="text"
              placeholder={"Linked More Accounts"}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("moreAccounts", { required: true })}
            />
          </div>
        </div>
        <div className="flex justify-center m-3">
          <button className="btn mt-3 w-96 btn-primary text-white">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default EditUserProfile;
