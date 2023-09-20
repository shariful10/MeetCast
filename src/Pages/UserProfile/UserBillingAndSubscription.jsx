import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const UserBillingAndSubscription = () => {
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
    const paymentAndBilling = {
      ...data,
    };
  };

  return (
    <div className="flex flex-col m-auto w-full shadow-lg rounded-lg">
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
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="public">Paypal</option>
              <option value="friends">Bkash</option>
              <option value="private">Rocket</option>
              <option value="private">Xoom</option>
              <option value="private">Nagad</option>
            </select>
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              {/* Display the user's current visibility setting */}
              <p className="ms-1">{"Nagad"}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Promo Codes:</p>
          {isEditing ? (
            <input
              type="email"
              defaultValue={"Promo Codes:" || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("promoCodes")}
            />
          ) : (
            <h2 className="ms-0 cursor-pointer" onClick={handleClick}>
              <p className="ms-1">{"Promo Codes:"}</p>
            </h2>
          )}
        </div>
        <div className="grid grid-cols-3 h-[80px] bg-slate-100 p-6 hover:bg-slate-200 rounded-lg shadow-lg mt-2 w-full">
          <p className="ms-1 font-bold">Auto-Renewal:</p>
          {isEditing ? (
            <select
              defaultValue={"Enabled"}
              onChange={handleChange}
              onBlur={handleBlur}
              className="m-1 h-[30px] bg-white p-3 border shadow-lg w-full"
              {...register("Auto-Renewal")}
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

export default UserBillingAndSubscription;
