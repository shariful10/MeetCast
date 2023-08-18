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
    const newMessage = {
      sender: user?.email,
      message: event.target.message.value,
    };
    console.log(newMessage);
    socket.emit("the message", newMessage);
    setMessageInput("");
  };

  useEffect(() => {
    const dataReceived = (data) => {
      console.log("message from server", data);
      setChathistory((prevHistory) => [...prevHistory, data]);
    };
    socket.on("recieve_message", dataReceived);
      
    return () => {
      socket.off("recieve_message", dataReceived);
    };
  }, []);

  return (
    <div className="">
      <div className="bg-slate-400 mt-36">
        {/* ------------room section--------------- */}
        <form className="border p-6 flex">
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
              <span className="font-bold">
                {messageData.sender === user?.email
                  ? "You"
                  : messageData.sender}
                :{" "}
              </span>
              {messageData.message}
            </p>
          ))}
        </div>
        <form onSubmit={sendMessage} className="p-6">
          <input
            className="p-6 m-3 rounded-lg border"
            type="text"
            name="message"
            placeholder="write here"
            // value={messageInput}
            // onChange={(e) => setMessageInput(e.target.value)}
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
