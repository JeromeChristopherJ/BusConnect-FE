import React from 'react';
import BusDisplay from './BusDisplay'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <BusDisplay />
    </div>
  );
}

export default App;


// 🔁 Later Integration with API:
// When you're ready to integrate with your backend, just replace the placeholderData with your API call. For example:
// const response = await axios.get("http://your-api.com/busdata");
// setBusData(response.data);

// Ensure your API returns data in the structure like this:
// {
//   "47": {
//     "english": ["2 mins (crowded)", "4 mins (crowded)", "10 mins (crowded)"],
//     "tamil": ["2 நிமிடம் (நெரிசல்)", "4 நிமிடம் (நெரிசல்)", "10 நிமிடம் (நெரிசல்)"]
//   }
// }