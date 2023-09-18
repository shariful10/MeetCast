import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const DisplayInfo = () => {
  const { user } = useContext(AuthContext);
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
    <>
      <div className="flex flex-col m-auto w-full bg-slate-300 rounded-lg">
        <div className="divider text-2xl p-3">
          <p>Display Information</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 w-full p-6 bg-slate-300 rounded-lg">
          <div className="ps-6 flex">
            <img
              src={user?.photoURL}
              className="h-[150px] ms-0 rounded-3xl"
              alt=""
            />
            <div className="grid ms-6">
              <p className="m-1">My Bio</p>
              <p className="m-1 w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                laudantium eius ad aut officiis, nam non nemo quae laboriosam
                quisquam dolorem. Sapiente quas minima totam, iure iste
                consequatur aspernatur voluptatem.
              </p>
              <input
                type="text"
                className=" m-1 h-[30px] bg-white p-3 border shadow-lg"
                {...register("language", { required: true })}
              />
            </div>
          </div>
          <div className="w-full mt-6 ms-6 grid grid-cols-3">
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <input
              type="text"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg"
              {...register("language", { required: true })}
            />
          </div>
          <div className="w-full ms-6 grid grid-cols-3">
            <p className="my-1">Web Developer</p>
            <input
              type="text"
              className=" m-1 h-[30px] bg-white p-3 border shadow-lg"
              {...register("language", { required: true })}
            />
          </div>
        </div>

        <div className="grid ms-6 grid-cols-3">
          <p className="m-3">Website/Protfolio</p>
          <p className="m-3">Bangla, English</p>
          <input
            type="text"
            className=" m-1 h-[30px] bg-white p-3 border shadow-lg"
            {...register("language", { required: true })}
          />
        </div>
        <div className="grid grid-cols-3">
          <p className="m-3">Work/Education</p>
          <p className="m-3">Bangla, English</p>
          <input
            type="text"
            className=" m-1 h-[30px] bg-white p-3 border shadow-lg"
            {...register("language", { required: true })}
          />
        </div>
      </div>
    </>
  );
};

export default DisplayInfo;
