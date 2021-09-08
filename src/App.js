import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Title from './Title';
import Apod from './Apod';
import Info from './Info';

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

  

  return (
    <div className="App">
      <div className="header">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <Title title={data.title}/>
      <Apod />
      <Info />
    </div>
  );
}

export default App;
