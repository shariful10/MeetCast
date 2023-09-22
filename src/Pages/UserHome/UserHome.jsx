import { default as React, useEffect, useState } from "react";
import { FaRegShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import useAdmin from "../../Components/Hooks/useAdmin";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import useEditor from "../../Components/Hooks/useEditor";
import PendingMeeting from "../../Pages/UserHome/PendingMeeting/PendingMeeting";
import TotalMeeting from "../../Pages/UserHome/TotalMeeting/TotalMeeting";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const UserProfile = () => {
	const { user } = useAuth();
	const [axiosSecure] = useAxiosSecure();
	console.log(user);
	const [isAdmin] = useAdmin();
	const [isEditor] = useEditor();
	const [totalMeeting, setTotalMeeting] = useState([]);
	console.log(totalMeeting.length);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Make a network request to fetch data from the provided URL.
				const response = await axiosSecure.get(
					`${import.meta.env.VITE_API_URL}/meetings/${user?.email}`
				);
				console.log(response.data);

				const totalMeeting = response.data;
				setTotalMeeting(totalMeeting);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [axiosSecure, user?.email]);

	return (
		<div className="lg:flex justify-around bg-gray-50 gap-6 mt-[80px]">
			{/* user profile  */}
			<div className="lg:w-1/3 mb-20 lg:mb-0">
				<div className="px-6 py-2 shadow-xl rounded-xl">
					<div className="">
						<div className="flex justify-center rounded-full my-2">
							<img
								className="object-cover w-24 h-24 mx-2 rounded-full"
								src={user?.photoURL}
								alt=""
							/>
						</div>
						<h2 className="text-2xl font-semibold text-center">{user?.displayName}</h2>
						<p className="bg-green-100 text-sm text-green-500 rounded-2xl w-1/3 mx-auto my-2 text-center">
							New Client
						</p>
						<div className="text-center">
							<button className="bg-[#5fb5ee] py-2 px-4 rounded-2xl my-2 text-white lg:w-2/3 font-semibold">
								<Link to="/dashboard/myMeetings">My Meeting</Link>
							</button>
						</div>
						<div>
							<div className="my-4 px-2 py-4 border-2 rounded-2xl bg-slate-100">
								<p className="text-start ms-10 text-gray-600">Email</p>
								<p className="text-start text-gray-600 ms-10">{user?.email}</p>
							</div>

							<div className="my-4 px-2 py-4 border-2 rounded-2xl bg-slate-100">
								{isAdmin === true ? (
									<>
										<p className="text-start ms-10 text-gray-600">Role</p>
										<p className="text-start text-gray-600 ms-10">Admin</p>
									</>
								) : isEditor === true ? (
									<>
										<p className="text-start ms-10 text-gray-600">Role</p>
										<p className="text-start text-gray-600 ms-10">Editor</p>
									</>
								) : (
									<div>
										<p className="text-start ms-10 text-gray-600">Role</p>
										<p className="text-start text-gray-600 ms-10">User</p>
									</div>
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

			<div className="lg:w-2/3 px-6 py-2 shadow-xl rounded-xl">
				{/* user cart  */}
				<div className="grid lg:grid-cols-3 gap-2 mb-10">
					<div className="mb-5 shadow-md rounded-xl py-2 px-4 h-full">
						<div className="flex justify-around items-center px-4 py-2">
							<div className="lg:w-1/3">
								<p className="text-4xl text-[#5fb5ee]">{totalMeeting.length}</p>
								<p className="text-base">Meeting </p>
								<div className="mt-2">
									<Link to="/dashboard/myMeetings">
										<FaRegShareSquare className="text-gray-600"></FaRegShareSquare>
									</Link>
								</div>
							</div>

							<div className="w-full">
								<Link to="/dashboard/myMeetings">
									<TotalMeeting />
								</Link>
							</div>
						</div>
					</div>
					<div className="shadow-lg rounded-xl py-2 px-4">
						<PieChart width={170} height={130}>
							<Pie
								data={data}
								cx={80}
								cy={70}
								innerRadius={30}
								outerRadius={50}
								fill="#8884d8"
								paddingAngle={15}
								dataKey="value"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
						</PieChart>
					</div>
					<div className="shadow-lg rounded-xl py-2 px-4">
						<div className="flex justify-around items-center px-4 py-2">
							<div className="w-1/3">
								<p className="text-4xl text-[#ff8042]">5</p>

								<p className="text-base">Cancelled </p>
								<div className="mt-2">
									<FaRegShareSquare className="text-gray-600"></FaRegShareSquare>
								</div>
							</div>

							<div className="w-full">
								<PendingMeeting></PendingMeeting>
							</div>
						</div>
					</div>
				</div>
				{/* user appointemnts */}
				<div className="rounded-xl lg:h-2/4 py-2">
					<img
						className="rounded-2xl h-[150px] w-full lg:h-[300px]"
						src="https://i.ibb.co/Jk4JH30/service-3-jpg.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};


export default UserProfile;



