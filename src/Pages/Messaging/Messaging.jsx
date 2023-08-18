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
    console.log(newMessage);
    setMessageInput("");
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
    setRoom(roomNum)

    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  console.log(room);

  return (
    <div className="">
      <div className="bg-slate-400 mt-36">
        {/* ------------room section--------------- */}
        <form onSubmit={getRoom} className="border p-6 flex">
          <input
            className="p-1 m-3 rounded-lg"
            type="text"
            name="roomNumber"
            placeholder="write here"
          />
          <button className="border p-4" type="submit">
            Submit
          </button>
        </form>
        {/* ------------room section--------------- */}
        <div
          className="bg-gray-200 h-[200px] p-6 overflow-y-auto"
          ref={chatHistoryRef}
        >
          {chatHistory.map((messageData, index) => (
            <p key={index}>
              <span className="font-bold text-black">
                {`${index}: `}
                {messageData.sender === user?.email
                  ? "You"
                  : messageData.sender}
              </span>
              :{messageData.message}
            </p>
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
