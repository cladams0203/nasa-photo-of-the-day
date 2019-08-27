import React, { useState, useEffect} from "react";
import { Api } from './Api-call';
import { Refresh } from './Refresh';
import { Date } from './Date';
import { Text } from './Text';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    Api(setData, setDescription, setTitle);
  }, []);

  return (
    <div className="App">
    <h1>Nasa Photo of the Day</h1>
      <img src={data} alt={`nasa pic of the day`}></img>
      <Refresh setData={setData}/>
      <Text description={description} title={title} />
      <Date setData={setData} setDescription={setDescription} />
      
    </div>
  );
}

export default App;
