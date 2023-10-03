import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCopy, FaTrash } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const MyMeetings = () => {
	const [axiosSecure] = useAxiosSecure();
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const [meetings, setMeetings] = useState([]);
	const [meetingToDelete, setMeetingToDelete] = useState(null);
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [value, setValue] = useState("");
	const [isCopied, setIsCopied] = useState(false);

	useEffect(() => {
		// Make an HTTP GET request to fetch meeting data
		fetch(`${import.meta.env.VITE_API_URL}/meetings/${user?.email}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMeetings(data);
			})
			.catch((error) => {
				console.error("Error fetching meeting data:", error);
			});
	}, [user.email]);
	console.log(meetings)

	const handleJoin = (roomID) => {
		const selectedMeeting = meetings.find((meeting) => meeting._id === roomID);
		if (selectedMeeting) {
			console.log("Selected Meeting Data:", selectedMeeting);
			// navigate(`/room/${roomID}`);
		} else {
			console.error("Meeting not found");
		}
	};

	const openDeleteDialog = (meetingId) => {
		setMeetingToDelete(meetingId);
		setIsDeleteDialogOpen(true);
	};

	const closeDeleteDialog = () => {
		setIsDeleteDialogOpen(false);
		setMeetingToDelete(null);
	};

	const handleConfirmDelete = () => {
		if (meetingToDelete) {
			// Send an HTTP DELETE request to delete the meeting
			fetch(`${import.meta.env.VITE_API_URL}/meetings/${meetingToDelete}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => {
					if (response.ok) {
						// Remove the deleted meeting from the state
						setMeetings((prevMeetings) =>
							prevMeetings.filter((meeting) => meeting._id !== meetingToDelete)
						);
					} else {
						console.error("Error deleting meeting:", response.statusText);
					}
				})
				.catch((error) => {
					console.error("Error deleting meeting:", error);
				});

			setIsDeleteDialogOpen(false);
			setMeetingToDelete(null);
		}
	};

	const handleCopy = () => {
		toast.success("Successfully copied")
	};

	return (
		<div className="bg-white p-6">
			<div className="overflow-x-auto">
				<table className="w-full table-auto text-left">
					<thead>
						<tr>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg rounded-tl">
								Topic
							</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg">Date</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg">Time</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg">Duration</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg">Join</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg">Copy</th>
							<th className="px-4 py-2 bg-[#6b7cff] text-white text-lg rounded-tr">
								Delete
							</th>
						</tr>
					</thead>
					<tbody>
						{meetings.map(({ _id, topic, date, time, duration, guestUrl, hostUrl }) => (
							<tr key={_id}>
								<td className="border px-4 py-2">{topic}</td>
								<td className="border px-4 py-2">{date}</td>
								<td className="border px-4 py-2">{time}</td>
								<td className="border px-4 py-2">{duration}</td>
								<td className="border px-4 py-2">
									<Link to={hostUrl} target="_blank">
										<button
											onClick={() => handleJoin(_id)}
											className=" bg-[#6b7cff] text-white px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
										>
											Join Room
										</button>
									</Link>
								</td>
								<td className="border px-4 py-2">
									<button className="relative text-black px-4 py-2 rounded-full transition duration-300 ease-in-out">
										<div onClick={handleCopy} title="Copy to clipboard!">
											<input className="hidden" type="text" name="" id="" />
											<CopyToClipboard
												text={guestUrl}
												onCopy={() => setIsCopied(true)}
											>
												<FaCopy className="mr-2 text-[#6b7cff] h-6 w-6" />
											</CopyToClipboard>
										</div>
										<span className="absolute top-0 left-0 bg-blue-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transform translate-x-full transition duration-300 ease-in-out">
											Link Copied
										</span>
									</button>
								</td>
								<td className="border px-4 py-2">
									<div
										onClick={() => openDeleteDialog(_id)}
										className="px-4 py-2 rounded-full transition duration-300 ease-in-out"
									>
										<button className="bg-red-700 hover:bg-red-500 p-3 rounded-[100%]">
											<FaTrashCan className="h-5 w-5 text-white" />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{isDeleteDialogOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<p className="mb-4">Are you sure you want to delete this meeting?</p>
						<div className="flex justify-end">
							<button
								onClick={handleConfirmDelete}
								className="bg-red-500 text-white px-4 py-2 mr-2 rounded hover:bg-red-600"
							>
								Yes
							</button>
							<button
								onClick={closeDeleteDialog}
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
							>
								No
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyMeetings;
