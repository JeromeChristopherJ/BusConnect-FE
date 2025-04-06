import React from 'react';
import './App.css';

const busData = {
  "47": ["2 mins (crowded)", "4 mins (crowded)", "10 mins (crowded)"],
  "147": ["1 min (crowd free)", "2 mins (crowd free)", "6 mins (crowd free)", "10 mins (crowd free)"],
  "29C": ["4 mins (crowded)", "9 mins (crowded)", "10 mins (crowded)"]
};

function App() {
  return (
    <div className="App">
      <h1>Live Bus Arrivals</h1>
      <div className="bus-container">
        {Object.entries(busData).map(([busNo, times]) => (
          <div className="bus-card" key={busNo}>
            <h2>Bus {busNo}</h2>
            <ul>
              {times.map((time, idx) => (
                <li key={idx}>{time}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
