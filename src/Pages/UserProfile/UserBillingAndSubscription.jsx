import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const UserBillingAndSubscription = () => {
  const options = ["Enabled", "Disabled"];
  const { user } = useContext(AuthContext);
  const [showPhone, setShowPhone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [allUsers, setAllUsers] = useState();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [shouldRefetch]);
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

  // const handleChange = (e) => {
  //   setDisplayName(e.target.value);
  // };

  const handleBlur = () => {
    setIsEditing(false);
    // You can save the updated displayName here, e.g., by making an API request.
  };

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const onSubmit = (data) => {
    console.log("this data", data);
    const paymentAndBilling = {
      ...data,
    };
    console.log(" updating ", paymentAndBilling);

    axiosSecure
      .put(`/users/${user.email}`, paymentAndBilling)
      .then((response) => {
        console.log("Updating", response.data);
        setShouldRefetch(true);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
    setShouldRefetch(false);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col m-auto md:w-[720px] shadow-lg rounded-lg">
      <div className="divider text-2xl p-3">
        <p>Billing & Subscription Settings</p>
      </div>
      <div className="w-full p-6">
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Subscription Status</p>
          <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
            <p className="ms-1">{"Free"}</p>
          </h2>
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Payment Method:</p>
          {isEditing ? (
            <select
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("paymentMethod")}
              // onChange={handleChange}
              onBlur={handleBlur}
              value={mainUser?.paymentMethod || ""}
            >
              <option value="paypal">Paypal</option>
              <option value="bkash">Bkash</option>
              <option value="rocket">Rocket</option>
              <option value="xoom">Xoom</option>
              <option value="nagad">Nagad</option>
            </select>
          ) : (
            <div>
              {mainUser ? (
                <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
                  <p className="ms-1">{mainUser?.paymentMethod}</p>
                </h2>
              ) : (
                <span className="loading loading-dots loading-md"></span>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Promo Codes:</p>
          {isEditing ? (
            <input
              type="email"
              // onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              defaultValue={mainUser.promoCodes}
              {...register("promoCodes")}
            />
          ) : (
            <div>
              {mainUser ? (
                <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
                  <p className="ms-1">{mainUser?.promoCodes}</p>
                </h2>
              ) : (
                <span className="loading loading-dots loading-md"></span>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Auto-Renewal:</p>
          {isEditing ? (
            <div className="m-1">
              {options.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleRadioChange(option)}
                    className="mr-2 cursor-pointer"
                    {...register("autoRenewal")}
                  />
                  <label htmlFor={option} className="cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {mainUser ? (
                <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
                  <p className="ms-1">{mainUser?.autoRenewal}</p>
                </h2>
              ) : (
                <span className="loading loading-dots loading-md"></span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-around">
        <button className="btn btn-primary my-2 w-1/3" onClick={handleClick}>
          Edit
        </button>
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

export default UserBillingAndSubscription;
