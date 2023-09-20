import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const UserPrivacySettings = () => {
  const { user } = useContext(AuthContext);
  const [showPhone, setShowPhone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName); // Replace with user?.displayName

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
    const privacySettings = {
      ...data,
    };
  };

  return (
    <div className="flex flex-col m-auto w-full bg-slate-300 rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Privecy Settings</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Language:</p>
          {isEditing ? (
            <input
              type="text"
              defaultValue={"Bangla"}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Bangla"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">Bangla</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Profile Visibility:</p>
          {isEditing ? (
            <select
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("profileVisibility")}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              {/* Display the user's current visibility setting */}
              <p className="ms-1">{"Public"}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Email Address:</p>
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{"user.email"}</p>
            </h2>
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Email Notification:</p>
          {isEditing ? (
            <select
              defaultValuevalue={"Enabled"}
              onChange={handleChange}
              onBlur={handleBlur}
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("emailNotification")}
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
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
