// Button.js
import React from 'react';

const GoogleCalendarButton = () => {
  const handleButtonClick = async () => {
    try {
      // Make a backend API call here to interact with Google Calendar
      const response = await fetch('/api/google-calendar', {
        method: 'POST',
      });

      if (response.ok) {
        console.log('Google Calendar interaction successful');
      } else {
        console.error('Failed to interact with Google Calendar');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={handleButtonClick}>Interact with Google Calendar</button>
  );
};

export default GoogleCalendarButton;
