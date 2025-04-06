import React, { useState, useEffect } from 'react';
import './App.css';

const BusDisplay = () => {
  const [language, setLanguage] = useState("english");
  const [busData, setBusData] = useState({}); // Placeholder for API data

  // Simulating fetch from API (you'll replace this later with actual API call)
  useEffect(() => {
    // Simulated placeholder response
    const fetchData = async () => {
      const placeholderData = {
        "47": {
          english: ["...loading", "...loading", "...loading"],
          tamil: ["...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது"]
        },
        "147": {
          english: ["...loading", "...loading", "...loading"],
          tamil: ["...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது"]
        },
        "29C": {
          english: ["...loading", "...loading", "...loading"],
          tamil: ["...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது", "...தகவல் பெறப்படுகிறது"]
        }
      };

      setBusData(placeholderData);

      // Later, replace with your actual API call like this:
      // const response = await axios.get("http://your-api-endpoint.com/bus-arrivals");
      // setBusData(response.data);
    };

    fetchData();
  }, []);

  // Language switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setLanguage((prevLang) => (prevLang === "english" ? "tamil" : "english"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bus-display">
      <h1>{language === "english" ? "Bus Arrival Times" : "பேருந்து வருகை நேரங்கள்"}</h1>

      {Object.entries(busData).map(([busNo, details]) => (
        <div key={busNo} className="bus-card">
          <h2>{busNo}</h2>
          <ul>
            {details[language].map((time, idx) => (
              <li key={idx}>{time}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BusDisplay;
