import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Apod from './Apod';

function App() {
  const [ data, setData ] = useState(`${BASE_URL}/?api_key=${API_KEY}`);

  useEffect(() => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(response => {
      setData(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <div className="App">
      <div className="header">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <Apod data={data}/>
    </div>
  );
}

export default App;
