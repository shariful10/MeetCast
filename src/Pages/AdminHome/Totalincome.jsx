import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMoneyBill  } from "@fortawesome/free-solid-svg-icons";

const Totalincome = () => {
  const [allUsers, setAllUsers] = useState();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/users`)
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user address:", error);
      });
  }, []);

  return (
    <div className="h-[180px] w-[300px] m-auto bg-white rounded-lg shadow-lg p-6 text-center flex flex-grow">
      <div className="w-5/6">
        <h3 className="text-start text-2xl font-bold">Income</h3>
        <h2 className="text-start text-4xl">{allUsers?.length || "00"}</h2>
        <h2 className="text-start text-sm mt-6">
          <span className="text-green-600 me-3">
            <FontAwesomeIcon icon={faArrowUp} /> 10%
          </span>
          Increse this month
        </h2>
      </div>
      <div className="flex justify-center text-2xl">
      <FontAwesomeIcon icon={faMoneyBill} />
      </div>
    </div>
  );
};

export default Totalincome;
