import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const UserPrivacySettings = () => {
  const options = ["Enabled", "Disabled"];
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [allUsers, setAllUsers] = useState();
  const [selectedOption, setSelectedOption] = useState(options[0]);

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
  const mainUser = allUsers?.find((userFind) => userFind.email === user.email);
  console.log("main User", mainUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // You can save the updated displayName here, e.g., by making an API request.
  };

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const onSubmit = (data) => {
    const privacySettings = {
      ...data,
    };
    console.log(" updating ", privacySettings);

    axiosSecure
      .put(`/users/${user.email}`, privacySettings)
      .then((response) => {
        console.log("Updating", response.data);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="flex flex-col m-auto w-full shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Privecy Settings</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Profile Visibility:</p>
          {isEditing ? (
            <select
            defaultValue={mainUser?.profileVisibility}
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("profileVisibility")}
              onBlur={handleBlur}
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{mainUser?.profileVisibility}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Email Address:</p>
          <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
            <p className="ms-1">{mainUser?.email}</p>
          </h2>
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Email Notification:</p>
          {isEditing ? (
            <div className="m-1">
            {options.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={option}
                  name="emailOption"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleRadioChange(option)}
                  className="mr-2 cursor-pointer"
                  {...register("emailNotification")}
                />
                <label htmlFor={option} className="cursor-pointer">
                  {option}
                </label>
              </div>
            ))}
          </div>
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{"Enabled"}</p>
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

export default UserPrivacySettings;
