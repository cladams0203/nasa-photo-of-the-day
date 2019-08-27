import React, { useState, useEffect} from "react";
import { Api } from './Api-call';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    Api(setData);
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
