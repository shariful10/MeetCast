import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';

const MeetingSchedule = () => {
    const [meetingId, setMeetingId] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState({ value: 'Etc/UTC', label: 'UTC' }); // Initial value
    const [convertedTime, setConvertedTime] = useState('');

    const generateRandomMeetingId = () => {
        const newMeetingId = new Date().getTime().toString() + Math.floor(Math.random() * 1000);
        setMeetingId(newMeetingId);
    };

    const handleTimezoneChange = (timezone) => {
        setSelectedTimezone(timezone);

        if (timezone) {
            const now = new Date();
            const offset = timezone.offset;
            const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
            const convertedTime = new Date(utcTime + offset * 3600000).toLocaleTimeString();

            setConvertedTime(convertedTime);
        }
    };

    const defaultTopic = "Let's Discuss";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
                <form className="space-y-4">
                <div>
                        <label className="block text-sm font-semibold mb-1">Topic</label>
                        <input type="text" defaultValue={defaultTopic} className="w-full border rounded p-2" />
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold mb-1">Date</label>
                            <input type="date" className="w-full border rounded p-2" />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-semibold mb-1">Time</label>
                            <input type="time" className="w-full border rounded p-2" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Time Zone</label>
                        <TimezoneSelect
                            value={selectedTimezone}
                            onChange={handleTimezoneChange}
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Meeting ID</label>
                        <div className="flex space-x-2">
                            <input type="text" value={meetingId} readOnly className="flex-grow border rounded p-2" />
                            <button
                                type="button"
                                onClick={generateRandomMeetingId}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
                            >
                                Generate
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Converted Time</label>
                        <input
                            type="text"
                            value={convertedTime}
                            readOnly
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Passcode</label>
                        <input type="password" className="w-full border rounded p-2" />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 font-semibold"
                    >
                        Schedule Meeting
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MeetingSchedule;
