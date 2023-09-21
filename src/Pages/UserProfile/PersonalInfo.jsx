import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);
  const [showPhone, setShowPhone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [allUsers, setAllUsers] = useState();
  const [axiosSecure] = useAxiosSecure();

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
    console.log("this data", data);
    const updateProfile = {
      ...data,
    };
    console.log(" updating ", updateProfile);

    axiosSecure
      .put(`/users/${user.email}`, updateProfile)
      .then((response) => {
        console.log("Updating",response.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };
  return (
    <div className="flex flex-col m-auto md:w-[720px] shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Personal Information</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Language:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={mainUser?.language}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Bangla"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.language}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Country:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={mainUser?.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("country")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.country}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Website:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={mainUser?.Website}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="www.abcd@gmail.com"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("Website")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.Website}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Work/Education:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={mainUser?.work}
              onChange={handleChange}
              onBlur={handleBlur}
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("work")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.work}</p>
            </h2>
          )}
        </div>
        
      </div>
      <button className="btn btn-primary m-auto my-2 w-1/3" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
};

export default PersonalInfo;
