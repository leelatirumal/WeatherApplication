import './App.css';
import InfoBox1 from './Componenets/InfoBox1';
import InfoBox2 from './Componenets/InfoBox2';
import SearchBar from './Componenets/SearchBar';
import { useState } from 'react';
import {useEffect} from 'react'
function App() {

  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState({});
  const [cityId, setCityId] = useState("");

  const weatherData =(cityName) => {
    // Fetch weather data from API and update state
    setCity(cityName);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e3104dea7916805d41f4f98ac4aec632&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log("location id ",data.id);
        setCityId(data.id);
        setCityData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

  }

  useEffect(()=>{
    console.log("Loaded")
    fetch('http://ip-api.com/json/')
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
      })
      .then(data => {
          // All this data is already inside the 'data' object!
          console.log("Your IP is: " + data.ip);
          console.log("Your City is: " + data.city);
          console.log("Your Country is: " + data.country);
          weatherData(data.city)
      })
      .catch(error => console.error("Error fetching data:", error));
  },[])
  
  return (
    <>
    
      <SearchBar fetchWeatherData={weatherData} />
      <div className="d-flex justify-content-around">
      <InfoBox1 data={cityData} />
      <InfoBox2 cityId={cityId} />
      </div>
      
       </>
  );
}

export default App;
