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
      .get("/userProfile")
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

    const updateProfile = {
      ...data,
    };

    console.log(" updating ", updateProfile);

    axiosSecure.post("/userProfile", updateProfile).then((res) => {
      console.log(res);
    });
    // axiosSecure
    //   .put(`/userProfile/${user.email}`, updateProfile)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error updating profile:", error);
    //   });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col bg-white p-6">
        <div className="divider text-2xl w-4/6 p-6 rounded-lg mt-3">
          <p>Display Information</p>
        </div>
        <div className="flex justify-center w-4/6 font-bold bg-slate-200 p-6 rounded-lg">
            <p className="m-1 w-1/2 text-start ms-6">Information</p>
            <p className="m-1 w-1/2 text-center">Change</p>
        </div>
        <div className="flex w-4/6 bg-slate-200 p-6 rounded-lg mt-3">
          <div className="w-2/6 p-6">
            <p className="m-3">Photo URL</p>
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
              placeholder={userProfileData?.Photo}
              className="m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("Photo", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.Name}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("Name", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.occupation}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("occupation", { required: true })}
            />
          </div>
        </div>
        <div className="divider text-2xl w-4/6 p-6 rounded-lg mt-3">
          <p>Personal</p>
        </div>
        <div className="flex w-4/6 bg-slate-200 p-6 rounded-lg mt-3">
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
              placeholder={userProfileData?.phone}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("phone", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.language}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("language", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.tzone}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("tzone", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.dateFormat}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("dateFormat", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.timeFormat}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("timeFormat", { required: true })}
            />
          </div>
        </div>
        <div className="divider text-2xl w-4/6 p-6 rounded-lg mt-3">
          <p>Meeting</p>
        </div>
        <div className="flex w-4/6 bg-slate-200 p-6 rounded-lg mt-3">
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
              placeholder={userProfileData?.Name}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("meetingUrl", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.hostKey}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("hostKey", { required: true })}
            />
          </div>
        </div>
        <div className="divider text-2xl w-4/6 p-6 rounded-lg mt-3">
          <p>Sign In</p>
        </div>
        <div className="flex w-4/6 bg-slate-200 p-6 rounded-lg mt-3">
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
              placeholder={userProfileData?.signInEmail}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("signInEmail", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.changePass}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("changePass", { required: true })}
            />
            <input
              type="text"
              placeholder={userProfileData?.moreAccounts}
              className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
              {...register("moreAccounts", { required: true })}
            />
          </div>
        </div>
        <div className="flex justify-center w-4/6 rounded-lg mt-3">
          <button className="btn mt-3 w-96 btn-primary text-white">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default EditUserProfile;