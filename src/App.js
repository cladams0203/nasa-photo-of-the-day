import React, { useState, useEffect} from "react";
import { Api } from './Api-call';
import { Refresh } from './Refresh';
import { Date } from './Date';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    Api(setData);
  }, []);

  return (
    <div className="App">
    <h1>Nasa Photo of the Day</h1>
      <img src={data} alt={`nasa pic of the day`}></img>
      <Refresh setData={setData}/>
      <Date setData={setData} />
      
    </div>
  );
}

export default App;
