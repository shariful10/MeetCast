import React, { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { AuthContext } from "../../Providers/AuthProvider";
import Container from "../../Components/Shared/Container/Container";
import { BsFillSendFill } from "react-icons/bs";

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
      sender: user?.displayName,
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
    setRoom(roomNum);

    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  console.log(room);

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-10">
        {/* ------------room section--------------- */}
        <form onSubmit={getRoom} className="border p-6 hidden">
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
        <div className="bg-slate-400 flex flex-col justify-between  relative">
          <div
            className="bg-gray-200 overflow-y-auto p-10 h-[80vh]"
            ref={chatHistoryRef}
          >
            {chatHistory.map((messageData, index) => (
              <p key={index}>
                <span className="font-bold text-black">
                  {messageData.sender === user?.displayName
                    ? "You"
                    : messageData.sender}
                </span>
                :{messageData.message}
              </p>
            ))}
          </div>
          <form onSubmit={sendMessage} className="absolute bottom-0 w-full">
            <div className="flex items-center">
              <input
                className="p-6 m-3 rounded-lg border w-full focus:outline-0"
                type="text"
                name="message"
                placeholder="write here"
              />
              <button
                className="border p-4 hover:rotate-45 duration-300 flex justify-center items-center"
                type="submit"
              >
                <BsFillSendFill size={30} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Messaging;
