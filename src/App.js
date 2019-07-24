import React, { useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => setData(res.data.hdurl))
  }, []);

  return (
    <div className="App">
      <img src={data} alt={`nasa pic of the day`}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
