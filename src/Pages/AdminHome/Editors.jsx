import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Editors = () => {
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

  console.log(allUsers);

  const editorUsers = allUsers?.filter((user) => user.role === "editor");

  return (
    <div className="w-full mt-3 m-auto rounded-lg shadow-lg grid grid-cols-1">
      {editorUsers?.map((editors, i) => (
        <tbody
          key={i}
          className="p-2 flex flex-row rounded-lg m-1 bg-slate-200 hover:bg-slate-300"
        >
          <tr>
            <th>
              <img
                className="w-[80px] p-2 ms-4 h-[80px] rounded-full"
                src={editors.image}
                alt=""
              />
            </th>
            <td className="w-[300px]">
              <h3 className="p-2 m-auto text-2xl">{editors.name}</h3>
            </td>
            <td className="w-[300px]">
              {/* <h3 className="p-2 m-auto text-center btn h-[60px] text-black font-bold w-1/2">
                {editors.role}
              </h3> */}
            </td>
            <td className="w-30">
              <h3 className="p-2 m-auto ">{editors.email}</h3>
            </td>
          </tr>
        </tbody>
      ))}
    </div>
  );
};

export default Editors;
