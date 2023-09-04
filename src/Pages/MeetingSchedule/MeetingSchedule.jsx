import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const MeetingSchedule = () => {
    const [meetingId, setMeetingId] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState({ value: 'Etc/UTC', label: 'UTC' });
    const [convertedTime, setConvertedTime] = useState('');
    const [showPasscode, setShowPasscode] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('12:00');
    const [selectedAmPm, setSelectedAmPm] = useState('AM');
    const [meetingDurationHours, setMeetingDurationHours] = useState('1');
    const [meetingDurationMinutes, setMeetingDurationMinutes] = useState('0');

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

    const timeOptions = [];
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const formattedHour = hour.toString().padStart(2, '0');
            const formattedMinute = minute.toString().padStart(2, '0');
            const time = `${formattedHour}:${formattedMinute}`;
            timeOptions.push(time);
        }
    }

    const defaultTopic = "Let's Discuss";

    const hoursOptions = Array.from({ length: 24 }, (_, i) => i.toString());
    const minutesOptions = Array.from({ length: 60 }, (_, i) => i.toString());


    const resetForm = () => {
        setMeetingId('');
        setSelectedTimezone({ value: 'Etc/UTC', label: 'UTC' });
        setConvertedTime('');
        setShowPasscode(false);
        setSelectedDate(new Date());
        setSelectedTime('12:00');
        setSelectedAmPm('AM');
        setMeetingDurationHours('1');
        setMeetingDurationMinutes('0');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalDurationMinutes =
            parseInt(meetingDurationHours) * 60 + parseInt(meetingDurationMinutes);

        // Gather the form data to be sent to the backend
        const formData = {
            topic: defaultTopic,
            date: e.target.date.value,
            time: e.target.time.value,
            timezone: selectedTimezone.value,
            duration: totalDurationMinutes,
            passcode: e.target.passcode.value,
        };

        console.log(formData);

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
            <div className="bg-white p-8 rounded">
                <h2 className="text-2xl font-semibold mb-4">Schedule a Meeting</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Topic</label>
                        <input
                            type="text"
                            defaultValue={defaultTopic}
                            className="w-1/2 border font-serif rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <label className="block text-base  w-1/4">When</label>
                        <div className="w-1/5">
                            <input
                                type="date"
                                name="date"
                                value={selectedDate.toISOString().split('T')[0]}
                                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            />
                        </div>
                        <div className="w-1/6">
                            <select
                                name="time"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            >
                                {timeOptions.map((timeOption, index) => (
                                    <option key={index} value={timeOption}>
                                        {timeOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-1/8">
                            <select
                                name="amPm"
                                value={selectedAmPm}
                                onChange={(e) => setSelectedAmPm(e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Time Zone</label>
                        <TimezoneSelect
                            value={selectedTimezone}
                            onChange={handleTimezoneChange}
                            className="w-1/2 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                        />
                    </div>
                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Meeting Duration</label>
                        <div className="flex space-x-2">
                            <select
                                value={meetingDurationHours}
                                onChange={(e) => setMeetingDurationHours(e.target.value)}
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            >
                                {hoursOptions.map((hour) => (
                                    <option key={hour} value={hour}>
                                        {hour} hours
                                    </option>
                                ))}
                            </select>
                            <select
                                value={meetingDurationMinutes}
                                onChange={(e) => setMeetingDurationMinutes(e.target.value)}
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            >
                                {minutesOptions.map((minute) => (
                                    <option key={minute} value={minute}>
                                        {minute} minutes
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>


                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Meeting ID</label>
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={meetingId}
                                readOnly
                                className="w-full border  rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            />
                            <button
                                type="button"
                                onClick={generateRandomMeetingId}
                                className="bg-secondary text-white px-4 py-3 rounded hover:bg-blue-600 font-semibold"
                            >
                                Generate
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Current Time</label>
                        <input
                            type="text"
                            value={convertedTime}
                            readOnly
                            className="w-1/4 border  rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                        />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <label className="block text-base  w-1/4">Passcode</label>
                        <div className="relative">
                            <input
                                type={showPasscode ? 'text' : 'password'}
                                name="passcode"
                                className="w-full border  rounded-lg px-3 py-2 pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-800"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasscode(!showPasscode)}
                                className="absolute top-4 right-2 text-gray-600"
                            >
                                {showPasscode ? <RiEyeLine /> : <RiEyeOffLine />}
                            </button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className=""></div>

                        <button
                            type="submit"
                            className="bg-secondary hover:bg-transparent border-2 hover:border-[#1d2130] duration-500 spacing-2 w-2/12 md:w-1/12 py-2 md:py-3 rounded-md me-2 hover:rounded-md font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={resetForm} // Call the resetForm function
                            className="bg-secondary hover:bg-transparent border-2 hover:border-[#1d2130] duration-500  spacing-2 w-2/12 md:w-1/12 py-2 md:py-3 rounded-md hover:rounded-md font-medium md:font-semibold font-NotoSans text-white hover:text-[#1d2130]"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MeetingSchedule;
