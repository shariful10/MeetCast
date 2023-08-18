import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5001");

const Messaging = () => {
	const [room, setRoom] = useState("");
	const [chatHistory, setChathistory] = useState([]);

	const sendMessage = (event) => {
		event.preventDefault();
		const message = event.target.message.value;
		socket.emit("the message", message);
	};

	const changeRoom = (event) => {
		event.preventDefault();
		const roomNum = event.target.roomNumber.value;
		console.log(roomNum);
		setRoom(roomNum);
	};

	const joinRoom = () => {
		if (room !== "") {
			socket.emit("join_room", room);
		}
	};

	useEffect(() => {
		socket.on("recieve_message", (data) => {
			console.log("messege from server", data);
			setChathistory((prevHistory) => [...prevHistory, data]);
		});
	}, []);
	return (
		<div className="">
			<div className="bg-slate-400 mt-36">
				<form onSubmit={changeRoom} className="border p-6 flex">
					<input
						className="p-1 m-3 rounded-lg"
						type="text"
						name="roomNumber"
						placeholder="write here"
						onChange={changeRoom}
					/>
					<button className="border p-4" type="submit">
						Submit
					</button>
				</form>
				<div className="bg-gray-200 h-[200px] p-6">
					{chatHistory.map((history, index) => (
						<p key={index}>{history}</p>
					))}
				</div>
				<form onSubmit={sendMessage} className="p-6">
					<input
						className="p-6 m-3 rounded-lg border"
						type="text"
						name="message"
						placeholder="write here"
					/>
					<button className="border p-4" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Messaging;
