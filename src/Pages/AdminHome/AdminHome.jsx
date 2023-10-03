import React, { useEffect, useState } from "react";
import ChartInfo from "./ChartInfo";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faRightToBracket, faUsers, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FaTrashCan } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AdminHome = () => {
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

  const editorUsers = allUsers?.filter((user) => user.role === "editor");

  const { refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handledelete = (id) => {
    axiosSecure.delete(`/users/${id}`).then((data) => {
      toast.success("User Deleted Successfully");
      refetch();
    });
  };

  return (
    <div className="w-full">
      <div className="bg-blue-100 md:p-6 rounded-lg shadow-lg mt-5">
        <div className="mt-2 rounded-lg p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* --- cards User Number---  */}
          <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:bg-[#6b7cff] hover:text-white flex flex-grow">
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
            <div className="flex justify-center text-2xl">
              <FontAwesomeIcon icon={faUsers} className="" />
            </div>
          </div>
          {/* --- cards User Number---  */}
          {/* --- Total Income Card---  */}
          <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:bg-[#6b7cff] hover:text-white flex flex-grow">
            <div className="w-5/6">
              <h3 className="text-start text-2xl font-bold">Revenue</h3>
              <h2 className="text-start text-4xl">$ {allUsers?.length || "00"}</h2>
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
          {/* --- Total Income Card---  */}
          {/* --- Total Login Card---  */}
          <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:bg-[#6b7cff] hover:text-white flex flex-grow">
            <div className="w-5/6">
              <h3 className="text-start text-2xl font-bold">Daily Traffic</h3>
              <h2 className="text-start text-4xl">{allUsers?.length || "00"}</h2>
              <h2 className="text-start text-sm mt-6">
                <span className="text-green-600 me-3">
                  <FontAwesomeIcon icon={faArrowUp} /> 10%
                </span>
                Increse this month
              </h2>
            </div>
            <div className="flex justify-center text-2xl">
              <FontAwesomeIcon icon={faRightToBracket} />
            </div>
          </div>
          {/* --- Total Login Card---  */}
          {/* --- Total Blogs Card---  */}
          <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:bg-[#6b7cff] hover:text-white flex flex-grow">
            <div className="w-5/6">
              <h3 className="text-start text-2xl font-bold">Blogs</h3>
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
          {/* --- Total Blogs Card---  */}
          {/* --- Pending Orders Card---  */}
          <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:bg-[#6b7cff] hover:text-white flex flex-grow">
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
          {/* --- Pending Orders Card---  */}
        </div>
        <div
          className="h-[300px] mt-3 mx-3 m-auto rounded-lg shadow-lg  bg-slate-100 p-3"
          style={{ gridColumn: "1 / 4" }}
        >
          <ChartInfo></ChartInfo>
        </div>
        <div className="mt-3 p-6 overflow-hidden">
          <h1 className="text-4xl text-center mb-5">Editors</h1>
          {/* --editors-- */}
          <div className="container mx-auto">
            <div className="">
              <div className="-mx-4 sm:-mx-8 sm:px-8 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-[#6b7cff]"
                        >
                          User Image
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-[#6b7cff]"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3  bg-[#6b7cff] border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                        >
                          Email
                        </th>
                        {/* <th
                          scope="col"
                          className="px-5 py-3  bg-[#6b7cff] border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                        >
                          Role
                        </th> */}
                        <th
                          scope="col"
                          className="px-5 py-3  bg-[#6b7cff] border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {editorUsers &&
                        editorUsers.map((user) => (
                          <tr key={user._id}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <div className="block relative">
                                    <img
                                      alt="profile"
                                      src={user.image}
                                      className="mx-auto object-cover rounded h-14 w-16"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-black whitespace-no-wrap">
                                {user.name ? user.name : ""}
                              </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-black whitespace-no-wrap">
                                {user.email}
                              </p>
                            </td>
                            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {user?.role === "admin" ? (
                                <p className="text-[#6b7cff] font-medium">
                                  Admin
                                </p>
                              ) : user.role === "editor" ? (
                                <p className="text-green-600 font-medium">
                                  Editor
                                </p>
                              ) : (
                                <p className="text-gray-700 font-medium">
                                  User
                                </p>
                              )}
                            </td> */}
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button
                                onClick={() => handledelete(user._id)}
                                className="bg-red-700 hover:bg-red-500 p-3 rounded-[100%]"
                              >
                                <FaTrashCan className="h-5 w-5 text-white" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* --editors-- */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
