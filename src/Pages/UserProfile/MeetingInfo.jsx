import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const MeetingInfo = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  const mainUser = allUsers?.find(userFind=>userFind.email === user.email)
  console.log("main User", mainUser)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // You can save the updated displayName here, e.g., by making an API request.
  };

  const onSubmit = (data) => {
    const updateMeetingInfo = {
      ...data,
    };

    console.log(" updating ", updateMeetingInfo);

    axiosSecure
      .put(`/users/${user.email}`, updateMeetingInfo)
      .then((response) => {
        console.log("Updating",response.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
      setIsEditing(false)
  };

  return (
    <div className="flex flex-col m-auto w-full md:w-[720px] shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Meeting Information</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Personal Link:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={"www.abcd.com"}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="www.abcd.com"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("personalLink")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.personalLink}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Host Key:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={"usdhf2340213jk123"}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="usdhf2340213jk123"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("hostkey")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.hostkey}</p>
            </h2>
          )}
        </div>
      </div>
      <button
        className="btn btn-primary m-auto my-2 w-1/3"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </div>
  );
};

export default MeetingInfo;
