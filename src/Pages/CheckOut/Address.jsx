import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";

const Address = () => {
  const auth = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { email } = user;

  const [userAddresss, setUserAddresss] = useState([]);

  const [userAddress, setUserAddress] = useState({
    city: "",
    country: "",
    state: "",
    streetAddress: "",
    zip: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Send the addressData to the backend when the form is submitted
    const addressData = { ...data, email };
    console.log(addressData);
    axiosSecure
      .post("http://localhost:5000/userAddress", addressData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error posting user address:", error);
      });
  };

  useEffect(() => {
    axiosSecure
      .get("http://localhost:5000/userAddress")
      .then((response) => {
        setUserAddresss(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user address:", error);
      });
  }, []);

  const foundAddress = userAddresss.find(
    (address) => address?.email == user?.email
  );
  console.log(foundAddress);

  return (
    <div>
      {!foundAddress && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
          }}
          className="w-full py-12 px-12 my-6  rounded-xl"
        >
          <div className="my-6">
            <div className="flex justify-between">
              <h2 className="text-xl ms-12 font-semibold">Address</h2>
            </div>
          </div>
          <div className="flex justify-center gap-6 my-4">
            <input
              required
              type="text"
              className="border border-gray-400 w-[668px] h-10 px-4 py-2 rounded-md"
              placeholder="Street Address"
              {...register("streetAddress", { required: true })}
            />
          </div>
          <div className="flex justify-center gap-6 my-4">
            <input
              required
              type="number"
              className="border border-gray-400 w-[313px] h-10 px-4 py-2 rounded-md"
              placeholder="Zip Code"
              {...register("zip", { required: true })}
            />
            <input
              required
              className="border border-gray-400 w-1/5 h-10 px-4 py-2 rounded-md"
              placeholder="City"
              {...register("city", { required: true })}
            />
            <input
              required
              className="border border-gray-400 w-1/5 h-10 px-4 py-2 rounded-md"
              placeholder="State Province"
              {...register("state", { required: true })}
            />
          </div>
          <div className="flex justify-center gap-6 my-4">
            <input
              required
              className="border border-gray-400 w-[668px]  h-10 px-4 py-2 rounded-md"
              placeholder="County Region"
              {...register("country", { required: true })}
            />
            {errors.city && <p className="text-red-500">City is required</p>}
          </div>
          <input
            className="bg-secondary pb-5 md:px-10 py-2 md:py-3 ms-12 cursor-pointer rounded-full md:font-semibold font-NotoSans primary_button text-white"
            type="submit"
          />
        </form>
      )}
    </div>
  );
};

export default Address;
