import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const Editors = () => {
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

  console.log(allUsers);

  const editorUsers = allUsers?.filter((user) => user.role === "editor");

  return (
    <div className="w-full mt-3 m-auto rounded-lg shadow-lg grid grid-cols-1">
      {editorUsers?.map((editors) => (
          <tbody className="p-2 flex flex-row rounded-lg m-1 bg-slate-200 hover:bg-slate-300">
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
                <h3 className="p-2 m-auto btn h-[60px] bg-blue-800 text-white hover:text-black hover:bg-blue-600 font-bold w-1/2">{editors.role}</h3>
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
