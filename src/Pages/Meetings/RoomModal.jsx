import React, { useState } from "react";
import { toast } from "react-hot-toast";

const RoomModal = ({ show, onHide, room, onRename }) => {
  const [newRoomName, setNewRoomName] = useState(room.roomName);

  const handleRename = () => {
    if (newRoomName.trim() === "") {
      toast.error("Room name cannot be empty");
      return;
    }

    onRename(room._id, newRoomName);
    onHide();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Rename Room</h2>
        <input
          type="text"
          className="w-full border p-2 mb-2"
          placeholder="New Room Name"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleRename}
          >
            Rename
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onHide}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
