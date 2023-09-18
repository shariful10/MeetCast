import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);
  const [showPhone, setShowPhone] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName); // Replace with user?.displayName

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleNameClick = () => {
    setIsEditingName(true);
  };

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
    // You can save the updated displayName here, e.g., by making an API request.
  };

  const onSubmit = (data) => {
    console.log("this data", data);
    const updateProfile = {
      ...data,
    };
  };
  return (
    <div className="flex flex-col m-auto w-full bg-slate-300 rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Meeting Information</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Personal Link:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"www.abcd.com"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="www.abcd.com"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("personalLink")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">www.abcd.com</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Host Key:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"usdhf2340213jk123"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="usdhf2340213jk123"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("hostkey")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">usdhf2340213jk123</p>
            </h2>
          )}
        </div>
      </div>
      <button className="btn btn-primary m-auto my-2 w-1/3" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
};

export default PersonalInfo;
