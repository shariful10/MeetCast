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
        <p>Personal Information</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Language:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"Bangla"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="Bangla"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">Bangla</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Location:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"Bangladesh"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="Bangladesh"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">Bangladesh</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Website/Protfolio:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"www.abcd@gmail.com"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="www.abcd@gmail.com"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">www.abcd@gmail.com</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Work/Education:</p>
          {isEditingName ? (
            <input
              type="text"
              defaultValue={"United Statue of Brick and Bolters"}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder="United Statue of Brick and Bolters"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("language")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleNameClick}>
              <p className="ms-1">United Statue of Brick and Bolters</p>
            </h2>
          )}
        </div>
      </div>
      <button className="btn btn-primary m-auto my-2 w-1/3" onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
};

export default PersonalInfo;
