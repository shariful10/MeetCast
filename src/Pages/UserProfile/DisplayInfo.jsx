import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const DisplayInfo = () => {
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
    <div className="flex flex-col m-auto w-full shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Display Information</p>
      </div>
      <div className="w-full p-6 bg-slate-300 rounded-lg">
        <div className="flex sm:flex-col md:flex-row bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2"  onBlur={()=>isEditingName(false)}>
          <img
            src={user?.photoURL}
            className="h-[150px] rounded-3xl w-2/6 object-contain"
            alt=""
          />
          <div className="px-3">
            <div>
              <div className="w-full grid grid-cols-2">
                {isEditingName ? (
                  <input
                    type="text"
                    defaultValue={displayName}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    placeholder="Name"
                    className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
                    {...register("displayName")}
                  />
                ) : (
                  <h2
                    className="text-2xl font-bold w-full cursor-pointer"
                    onClick={handleNameClick}
                  >
                    {displayName}
                  </h2>
                )}
              </div>
              <div className="text-2xl font-bold w-full">
                {isEditingName ? (
                  <input
                    type="text"
                    defaultValue={"Web Developer"}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    placeholder="Desgination"
                    className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
                    {...register("designation")}
                  />
                ) : (
                  <h2
                    className="text-2xl font-bold w-full cursor-pointer"
                    onClick={handleNameClick}
                  >
                    {"Web Developer"}
                  </h2>
                )}
              </div>
            </div>
            <div>
              <div className="flex">
                <p className="m-1">My Bio</p>
              </div>

              {isEditingName ? (
                <textarea
                  type="text"
                  defaultValue={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque laudantium eius ad aut officiis, nam non nemo quae laboriosam quisquam dolorem. Sapiente quas minima totam, iure iste consequatur aspernatur oluptatem`}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  placeholder="Hi! I am Dude."
                  rows={5}
                  cols={30}
                  className="m-1 bg-white p-3 border shadow-lg w-full"
                  {...register("bio")}
                ></textarea>
              ) : (
                <p className="m-1 w-[400px]">
                  Hi! I am Dude.
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary my-2 w-1/3"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DisplayInfo;
