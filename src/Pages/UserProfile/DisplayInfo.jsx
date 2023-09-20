import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const DisplayInfo = () => {
  const { user } = useContext(AuthContext);
  const [showPhone, setShowPhone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName); // Replace with mainUser?.displayName
  const [axiosSecure] = useAxiosSecure();
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
    <div className="flex flex-col m-auto w-full shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Display Information</p>
      </div>
      <div className="w-full p-6 bg-slate-300 rounded-lg">
        <div className="flex sm:flex-col md:flex-row bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2">
          <img
            src={mainUser?.image}
            className="h-[150px] rounded-3xl w-2/6 object-contain"
            alt=""
          />
          <div className="px-3">
            <div>
              <div className="w-full grid grid-cols-2">
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={mainUser?.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
                    {...register("displayName")}
                  />
                ) : (
                  <h2
                    className="text-2xl font-bold w-full cursor-pointer"
                    onClick={handleClick}
                  >
                    {mainUser?.displayName}
                  </h2>
                )}
              </div>
              <div className="w-full">
                {isEditing ? (
                  <input
                    type="text"
                    defaultValue={mainUser?.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Desgination"
                    className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
                    {...register("designation")}
                  />
                ) : (
                  <h2
                    className="w-full cursor-pointer"
                    onClick={handleClick}
                  >
                    {mainUser?.designation}
                  </h2>
                )}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex">
                <p className="m-1">My Bio</p>
              </div>
              {isEditing ? (
                <textarea
                  type="text"
                  defaultValue={user.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  cols={30}
                  className="m-1 bg-white p-3 border shadow-lg w-full"
                  {...register("bio")}
                ></textarea>
              ) : (
                <p className="m-1 w-[400px]">
                  {mainUser?.bio}
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
