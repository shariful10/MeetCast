import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const RoomSection = ({ gettingRoomNumber }) => {
	const { user } = useContext(AuthContext);
	const [roomNumber, setRoomNumber] = useState(0);
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/rooms/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setRooms(data));
	}, [user.email]);

	const createRoom = () => {
		const number = roomNumber + 1;
		console.log(number);
		gettingRoomNumber(number);
		setRoomNumber(number);
		const owner_name = user.displayName;
		const owner_img = user.photoURL;
		const owner_email = user.email;
		const myRoom = { owner_name, owner_email, owner_img, roomName: number };
		console.log(myRoom);
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
				// allert
			});
	};

	return (
		<div className="p-2 m-2 border">
			<button className="w-[100px] border btn m-1" onClick={createRoom}>
				Create a Room
			</button>
			<div className="divider"></div>
			{rooms.map(({ roomName, _id }) => (
				<div key={_id} className="w-[100px] border btn m-1">
					Room #{roomName}
				</div>
			))}
		</div>
	);
};

export default RoomSection;
