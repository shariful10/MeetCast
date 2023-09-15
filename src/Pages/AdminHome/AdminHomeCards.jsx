import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AdminHomeCards = ({ allUsers }) => {
  return (
    <div className="w-5/6">
      <h3 className="text-start text-2xl font-bold">USERS</h3>
      <h2 className="text-start text-4xl">{allUsers?.length || "00"}</h2>
      <h2 className="text-start text-sm mt-6">
        <span className="text-green-600 me-3">
          <FontAwesomeIcon icon={faArrowUp} /> 10%
        </span>
        Increse this month
      </h2>
    </div>
  );
};

export default AdminHomeCards;
