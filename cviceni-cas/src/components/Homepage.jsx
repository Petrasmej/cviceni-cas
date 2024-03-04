import React from 'react';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch(
        'https://worldtimeapi.org/api/timezone/Europe/Prague',
      );
      const data = await response.json();

      setDateTime(data.dateTime.slice(0, 16));
    };

    fetchDate();
  }, []);

  return (
    <div>
      <h1>Vítejte</h1>
      <p>Aktuální datum a čas: {dateTime}</p>
    </div>
  );
};

export default Homepage;
