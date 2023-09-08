import React from 'react';

const GoogleCalendar = () => {
    // Static meeting data
    const meetingData = [
        {
            title: 'Project Kickoff',
            date: '2023-09-10',
            time: '10:00 AM',
            location: 'Conference Room 1',
        },
        {
            title: 'Marketing Strategy Meeting',
            date: '2023-09-15',
            time: '2:30 PM',
            location: 'Virtual',
        },
        {
            title: 'Sales Team Weekly Review',
            date: '2023-09-20',
            time: '11:00 AM',
            location: 'Room B',
        },
        {
            title: 'Product Development Sprint Planning',
            date: '2023-09-25',
            time: '3:00 PM',
            location: 'Virtual',
        },
        {
            title: 'Customer Support Training',
            date: '2023-09-30',
            time: '9:30 AM',
            location: 'Room C',
        },
        {
            title: 'Executive Board Meeting',
            date: '2023-10-05',
            time: '1:00 PM',
            location: 'Virtual',
        },
        {
            title: 'Team Building Workshop',
            date: '2023-10-10',
            time: '4:45 PM',
            location: 'Outdoors',
        },
        {
            title: 'Financial Quarterly Review',
            date: '2023-10-15',
            time: '10:30 AM',
            location: 'Boardroom',
        },
    ];

  

    return (
        <div className="mx-auto p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Google Calendar</h2>
            <a
                href="https://calendar.google.com" // Replace with the actual Google Calendar URL
                target="_blank" // Opens the link in a new tab or window
                rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4"
            >
                Create a Meeting
            </a>
            <h2 className="text-xl font-semibold mb-4 mt-24">My Meeting Data:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meetingData.map((meeting, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-4"
                    >
                        <h3 className="text-lg font-semibold mb-2">{meeting.title}</h3>
                        <p className="text-sm text-gray-600">Date: {meeting.date}</p>
                        <p className="text-sm text-gray-600">Time: {meeting.time}</p>
                        <p className="text-sm text-gray-600">Location: {meeting.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
    
};

export default GoogleCalendar;
