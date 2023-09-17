import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faUsers } from "@fortawesome/free-solid-svg-icons";

const PendingOrders = () => {
  const [allUsers, setAllUsers] = useState();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/users`)
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user address:", error);
      });
  }, [axiosSecure]);

  return (
    <div className="w-[300px] m-auto bg-slate-100 hover:bg-slate-200 rounded-lg shadow-lg p-6 text-center flex flex-grow">
      <div className="w-5/6">
        <h3 className="text-start text-2xl font-bold">Pending Orders</h3>
        <h2 className="text-start text-4xl">{allUsers?.length || "00"}</h2>
        <h2 className="text-start text-sm mt-6">
          <span className="text-green-600 me-3">
            <FontAwesomeIcon icon={faArrowUp} /> 10%
          </span>
          Increse this month
        </h2>
      </div>
      <div className="flex justify-center text-2xl">
        <FontAwesomeIcon icon={faUsers} className="" />
      </div>
    </div>
  );
};

export default PendingOrders;
