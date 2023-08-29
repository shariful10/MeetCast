import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const MeetingSchedule = () => {
    const [meetingId, setMeetingId] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState({ value: 'Etc/UTC', label: 'UTC' });
    const [convertedTime, setConvertedTime] = useState('');
    const [meetingDuration, setMeetingDuration] = useState('60');
    const [showPasscode, setShowPasscode] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Gather the form data to be sent to the backend
        const formData = {
            topic: defaultTopic,
            date: e.target.date.value,
            time: e.target.time.value,
            timezone: selectedTimezone.value,
            duration: meetingDuration,
            passcode: e.target.passcode.value,
        };

        // Send the form data to the backend for processing
        fetch('http://localhost:5000/schedule-meeting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend if needed
                console.log('Meeting scheduled:', data);
            })
            .catch((error) => {
                console.error('Error scheduling meeting:', error);
            });
    };

    return (
        <div className="mt-28 items-center justify-center bg-gray-100">
            <div className="bg-white mx-auto p-8 rounded shadow-md w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Topic</label>
                        <input type="text" defaultValue={defaultTopic} className="w-full border rounded p-2" />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Date</label>
                        <input type="date" name='date' className="w-full border rounded p-2" />
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Time</label>
                        <input type="time" name='time' className="w-full border rounded p-2" />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Time Zone</label>
                        <TimezoneSelect
                            value={selectedTimezone}
                            onChange={handleTimezoneChange}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Meeting Duration (minutes)</label>
                        <input
                            type="number"
                            value={meetingDuration}
                            onChange={(e) => setMeetingDuration(e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Meeting ID</label>
                        <div className="flex space-x-2">
                            <input type="text" value={meetingId} readOnly className="w-full border rounded p-2" />
                            <button
                                type="button"
                                onClick={generateRandomMeetingId}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
                            >
                                Generate
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold  w-1/4 ">Current Time</label>
                        <input
                            type="text"
                            value={convertedTime}
                            readOnly
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base font-bold w-1/4">Passcode</label>
                        <div className="relative">
                            <input
                                type={showPasscode ? 'text' : 'password'}
                                name='passcode'
                                className="w-full border rounded p-2 pr-10" // Add some right padding for the icon
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasscode(!showPasscode)}
                                className="absolute top-3 right-2 text-gray-600"
                            >
                                {showPasscode ? <RiEyeLine /> : <RiEyeOffLine />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-600 font-semibold"
                    >
                        Schedule Meeting
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MeetingSchedule;
