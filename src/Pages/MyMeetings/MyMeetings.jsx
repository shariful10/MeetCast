import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Axios from 'axios';

const MyMeetings = () => {
    const { user } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        // Fetch user meetings from the API
        Axios.get(`http://localhost:5000/user-meetings/${user.email}`)
            .then((response) => {
                // Set the meetings state with the received data
                setMeetings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user meetings:', error);
            });
    }, [user.email]);

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">My Meetings</h2>
            {meetings.length === 0 ? (
                <p className="text-gray-600">No meetings found.</p>
            ) : (
                <ul>
                    {meetings.map((meeting) => (
                        <li key={meeting._id} className="mb-4 p-4 border rounded-lg hover:bg-gray-100 transition duration-300">
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Topic:</strong>
                                <span className="ml-2 text-gray-700">{meeting.topic}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Date:</strong>
                                <span className="ml-2 text-gray-700">{meeting.date}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Time:</strong>
                                <span className="ml-2 text-gray-700">{meeting.time}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Timezone:</strong>
                                <span className="ml-2 text-gray-700">{meeting.timezone}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Meeting Duration:</strong>
                                <span className="ml-2 text-gray-700">{meeting.duration} minutes</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Meeting ID:</strong>
                                <span className="ml-2 text-gray-700">{meeting.meetingId}</span>
                            </div>
                            <div className="mb-4">
                                <strong className="text-lg font-semibold text-blue-600">Current Time:</strong>
                                <span className="ml-2 text-gray-700">{meeting.currentTime}</span>
                            </div>
                            <div>
                                <strong className="text-lg font-semibold text-blue-600">Passcode:</strong>
                                <span className="ml-2 text-gray-700">{meeting.passcode}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyMeetings;
