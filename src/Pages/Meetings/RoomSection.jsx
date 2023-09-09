import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "./../../Providers/AuthProvider";
import RoomModal from "./RoomModal";

const RoomSection = ({ gettingRoomNumber }) => {
	const { user } = useContext(AuthContext);
	const [roomNumber, setRoomNumber] = useState(0);
	const [rooms, setRooms] = useState([]);
	const [selectedRoom, setSelectedRoom] = useState(null);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/rooms/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setRooms(data));
	}, [user?.email]);

	const createRoom = () => {
		const number = roomNumber + 1;
		gettingRoomNumber(number);
		setRoomNumber(number);
		const owner_name = user.displayName;
		const owner_img = user.photoURL;
		const owner_email = user.email;
		const myRoom = { owner_name, owner_email, owner_img, roomName: number };

		fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(myRoom),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Successfully Created Room");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleRoomClick = (room) => {
		setSelectedRoom(room);
	};

	// Inside your RoomSection component

	const handleRenameRoom = (roomId, newName) => {
		fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newName }),
		})
			.then((res) => {
				if (res.status === 200) {
					toast.success("Room renamed successfully");
				} else {
					toast.error("Failed to rename room");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("An error occurred while renaming the room");
			});
	};


	return (
		<div className="p-2 m-2 border">
			<button className="w-[120px] border btn m-1" onClick={createRoom}>
				Create a Room
			</button>
			<div className="divider"></div>
			{rooms.map(({ roomName, _id }) => (
				<div
					key={_id}
					className="py-3 px-4 bg-neutral-200 my-2 rounded-md cursor-pointer"
					onClick={() => handleRoomClick({ _id, roomName })}
				>
					Room #{roomName}
				</div>
			))}
			{selectedRoom && (
				<RoomModal
					show={true}
					onHide={() => setSelectedRoom(null)}
					room={selectedRoom}
					onRename={handleRenameRoom}
				/>
			)}
		</div>
	);
};

export default RoomSection;
