import React, { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { AuthContext } from "../../Providers/AuthProvider";

const socket = io.connect("http://localhost:5001");

const Messaging = (roomNumber) => {
  const [room, setRoom] = useState("");
  const [chatHistory, setChathistory] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const { user } = useContext(AuthContext);

  console.log(roomNumber.room)

  const chatHistoryRef = useRef(null);
  useEffect(() => {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const sendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const newMessage = {
      sender: user?.email,
      message: message,
      room: room
    };
    setChathistory((prevHistory) => [...prevHistory, newMessage]);
    console.log(newMessage)
    socket.emit("messege to server", newMessage);
    setMessageInput("");
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  useEffect(() => {
    const recievedMessage = (data) => {
      console.log("messege from server", data);
      setChathistory((prevHistory) => [...prevHistory, data]);
    };
    socket.on("recieve_message", recievedMessage);
    return () => {
      socket.off("recieve_message", recievedMessage);
    };
  }, []);

  const getRoom = (event) => {
    event.preventDefault();
    const roomNum = event.target.roomNumber.value;
    setRoom(roomNum);
  };

  useEffect(()=>{
    if (room !== "") {
      socket.emit("join_room", room);
    }
  },[room])

  return (
    <div className="w-full border">
      <div className="w-full">
        <div className="m-auto text-center bg-orange-400">{room? (`Room #${room}`):"#"}</div>
        {/* ------------room section--------------- */}
        <form onSubmit={getRoom} className="border p-1 flex">
          <input
            className="rounded-lg py-1 px-2 mx-3 w-2/3"
            type="text"
            name="roomNumber"
            placeholder="Room Number"
          />
          <button className="border rounded-lg px-3 w-1/3" type="submit">
            Join
          </button>
        </form>
        {/* ------------room section--------------- */}
        <div
          className="bg-white h-[350px] p-1 overflow-y-auto m-auto my-1 rounded"
          ref={chatHistoryRef}
        >
          {chatHistory.map((messageData, index) => (
            <div
              className={`${
                messageData.sender === user?.email
                  ? "bg-slate-200  mt-2"
                  : "bg-green-200 mt-2"
              } flex rounded-lg flex-col` }
              key={index}
            >
              <p className="font-bold text-black bg-blue-300 p-1 text-left m-1 rounded">
                {messageData.sender === user?.email
                  ? "You"
                  : messageData.sender}
              </p>
              <span className="p-1">{messageData.message}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="border p-1 flex justify-center">
          <input
            className="rounded-lg py-1 px-2 mx-3 w-2/3"
            type="text"
            name="message"
            placeholder="write here"
            value={messageInput}
            onChange={handleInputChange}
          />
          <button className="border rounded-lg px-3 w-1/3" type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messaging;
