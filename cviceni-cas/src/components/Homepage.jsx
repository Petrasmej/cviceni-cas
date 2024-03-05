import React from 'react';
import { useState, useEffect } from 'react';

/* ukol Pražský čas a Výběr zony */
const Homepage = () => {
  const [dateTime, setDateTime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${timezone}`,
      );
      const data = await response.json();
      console.log(data);
      setDateTime(data.datetime.slice(0, 16));
    };

    fetchDate();
  }, [timezone]);

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  return (
    <div>
      <h1>Vítejte</h1>
      <p>Aktuální datum a čas: {dateTime}</p>
      <form>
        <label>Vyberte časovou zonu:</label>
        <select value={timezone} onChange={handleTimezoneChange}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </form>
    </div>
  );
};

export default Homepage;
