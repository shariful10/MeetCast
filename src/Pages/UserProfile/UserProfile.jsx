import React from "react";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const UserProfile = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  console.log(user);

  return (
    <div className="flex justify-around bg-gray-50 gap-6 font-manrope">
      {/* user profile  */}
      <div className="w-1/3">
        <div className="px-6 py-2 shadow-xl rounded-xl">
          <div className="text-center">
            <div className="flex justify-center my-2">
              <img className="rounded-full " src={user?.photoURL} alt="" />
            </div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <p className="bg-green-100 text-sm text-green-500 rounded-2xl w-1/3 mx-auto my-2">
              New Client
            </p>
            <button className=" bg-[#5fb5ee] py-2 px-4 rounded-2xl my-2 text-white w-2/3 font-semibold">
              Appointemnts
            </button>
            <div>
              <div className="my-4 px-2 py-4 border-2 rounded-2xl  bg-slate-100">
                {" "}
                <p className="text-start text-gray-600 ms-12">Email</p>
                <p className="text-black text-sm">{user?.email}</p>
              </div>

              <div className="my-4 px-2 py-4 border-2 rounded-2xl  bg-slate-100">
                {user?.emailVerified == true ? (
                  <p className="text-start text-gray-600 ms-9">Admin</p>
                ) : (
                  <p className="text-start text-gray-600 mx-9">User</p>
                )}
              </div>
              <div className="my-4 px-2 py-4 border-2 rounded-2xl  bg-slate-100">
                {" "}
                <p className="text-start text-gray-600 mx-9">Goals</p>
                <p className="text-black text-start ms-9 text-sm ">
                  More Collaborative, More Intelligent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user Information  */}
      <div className="w-2/3 px-6 py-2 shadow-xl border border-sky-400 rounded-xl">
        {/* user cart  */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          <div className="border-2 border-sky-500 rounded-xl h-14 py-2 px-4"></div>
          <div className="border-2 border-sky-500 rounded-xl h-14 py-2 px-4"></div>
          <div className="border-2 border-sky-500 rounded-xl h-14 py-2 px-4"></div>
        </div>
        {/* user appointemnts */}
        <div className="border-2 border-sky-500 rounded-xl h-2/4 py-2 px-4"></div>
      </div>
    </div>
  );
};

export default UserProfile;
