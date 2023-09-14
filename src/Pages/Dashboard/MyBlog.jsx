import React from "react";
import { FaTrash } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const MyBlog = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-blue-500"
                  >
                    User Image
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-white  text-left text-sm uppercase font-medium bg-blue-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                  >
                    Make Editor
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3  bg-blue-500 border-b border-gray-200 text-white text-left text-sm uppercase font-medium"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData.map((user) => (
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
                      <td
                        onClick={() => handleMakeAdmin(user)}
                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        {user?.role === "admin" ? (
                          <p className="text-blue-500 font-medium">Admin</p>
                        ) : user?.role === "editor" ? (
                          <p className="text-green-600 font-medium">Editor</p>
                        ) : (
                          <RiAdminFill className="h-6 w-6 text-blue-500" />
                        )}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <FaTrash className="h-6 w-6 text-red-500" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
