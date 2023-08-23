import React, { useState } from "react";

const RoomSection = ({ gettingRoomNumber }) => {
  const [roomNumber, setRoomNumber] = useState('')
  const createRoom = () => {
    const number = Math.floor(Math.random() * 10)
    // console.log(number)
    gettingRoomNumber(number)
    setRoomNumber(number)
  };

  return (
    <div className="p-2 m-2 border">
      <button className="w-[100px] border btn m-1" onClick={createRoom}>Create a Room</button>
      <div className="divider"></div> 
      <div className="w-[100px] border btn m-1">
        Room{`# ${roomNumber}`}
      </div>
    </div>
  );
};

export default RoomSection;
