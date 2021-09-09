import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Apod from './Apod';

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(response => {
      setData(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  console.log(data);

  return (
    <div className="App">
      <div className="header">
        <div className="left">
          <img src="./imgs/nasa.png" alt="NASA logo"></img>
        </div>
        <h1>NASA's Astronomy Picture of the Day</h1>
        <div className="right">
          <img src="./imgs/hubble.png" alt="Hubble Space Telescope"></img>
        </div>
      </div>
      <Apod data={data}/>
    </div>
  );
}

export default App;
