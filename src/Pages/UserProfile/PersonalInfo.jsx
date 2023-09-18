import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PersonalInfo = () => {
  const [showPhone, setShowPhone] = useState(false);
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
  };
  return (
    <div className="flex flex-col m-auto w-full bg-slate-300 rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Personal Information</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Language:</p>
          <p className="ms-1">Bangla</p>
          <input
            type="text"
            className="ms-1 w-full h-[30px] bg-slate-300 p-3 border shadow-lg text-white"
            defaultValue={"Bangla, English"}
            {...register("language", { required: true })}
          />
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Location:</p>
          <p className="ms-1">Bangla, English</p>
          <input
            type="text"
            className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            {...register("language", { required: true })}
          />
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Website/Protfolio:</p>
          <p className="ms-1">Bangla, English</p>
          <input
            type="text"
            className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            {...register("language", { required: true })}
          />
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <p className="ms-1 font-bold">Work/Education:</p>
          <p className="ms-1">Bangla, English</p>
          <input
            type="text"
            className=" m-1 h-[30px] bg-slate-300 p-3 border shadow-lg"
            {...register("language", { required: true })}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
