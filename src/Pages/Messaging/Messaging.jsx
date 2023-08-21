import React, { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { AuthContext } from "../../Providers/AuthProvider";

const socket = io.connect("http://localhost:5001");

const Messaging = () => {
  const [room, setRoom] = useState("");
  const [chatHistory, setChathistory] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const { user } = useContext(AuthContext);

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
    };
    setChathistory((prevHistory) => [...prevHistory, newMessage]);
    socket.emit("the message", newMessage);
    setMessageInput("");
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  console.log(chatHistory);

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

    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  console.log(room);

  return (
    <div className="w-1/2 m-auto">
      <div className="bg-slate-400 mt-32">
        <div className="m-auto text-center">{room? (`Room #${room}`):"#"}</div>
        {/* ------------room section--------------- */}
        <form onSubmit={getRoom} className="border p-6 flex justify-center">
          <input
            className="rounded-lg py-3 px-2 mx-3"
            type="text"
            name="roomNumber"
            placeholder="Room Number"
          />
          <button className="border rounded-lg px-3" type="submit">
            Submit
          </button>
        </form>
        {/* ------------room section--------------- */}
        <div
          className="bg-white h-[300px] p-6 overflow-y-auto"
          ref={chatHistoryRef}
        >
          {chatHistory.map((messageData, index) => (
            <p
              className={`${
                messageData.sender === user?.email
                  ? "bg-gray-100 mt-2"
                  : "bg-blue-100 mt-2"
              }`}
              key={index}
            >
              <p className="font-bold text-black btn btn-primary w-56 p-2 text-left">
                {messageData.sender === user?.email
                  ? "You"
                  : messageData.sender}
              </p>
              <span className="mx-3">{messageData.message}</span>
            </p>
          ))}
        </div>
        <form onSubmit={sendMessage} className="border p-6 flex justify-center">
          <input
            className="rounded-lg py-3 px-2 mx-3"
            type="text"
            name="message"
            placeholder="write here"
            value={messageInput}
            onChange={handleInputChange}
          />
          <button className="border rounded-lg px-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messaging;
