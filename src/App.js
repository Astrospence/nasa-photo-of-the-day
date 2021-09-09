import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import { BASE_URL, API_KEY } from './constants';
import Apod from './Apod';
import Header from './Header';
import theme from './theme';
import { ThemeProvider } from "styled-components";

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
      <ThemeProvider theme={theme} >
        <Header date={data.date}/>
        <Apod data={data} />
      </ThemeProvider>
  );
}

export default App;
