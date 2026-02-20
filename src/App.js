import './App.css';
import InfoBox1 from './Components/InfoBox1';
import InfoBox2 from './Components/InfoBox2';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import {useEffect} from 'react'
function App() {

 const [cityData, setCityData] = useState({});
  const [foreCastData, setForeCastData] = useState({});

  const weatherData =(cityName) => {
    // Fetch weather data from API and update state
      if(cityName === "") return alert("Please enter a city name.");
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e3104dea7916805d41f4f98ac4aec632&units=metric`)
        .then(async response => {
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();  
          console.log("location id ",data);
          setCityData(data);
          weatherForeCast(data.coord?.lat, data.coord?.lon);
          console.log("city data ",cityName);
        })
        .catch(error => {
          alert("Enter Correct City Name or Try Again ");
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
          weatherData(data.city)
      })
      .catch(error => console.error("Error fetching data:", error));
  },[])

  const weatherForeCast = (lat,lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e3104dea7916805d41f4f98ac4aec632&units=metric`)
      .then(response => response.json())  
      .then(data => {
        console.log("forecast data ",data);
        setForeCastData(data);
      })
      .catch(error => {
        console.error('Error fetching forecast data:', error);
      });
    }

  
  return (
    <>
    
      <SearchBar fetchWeatherData={weatherData} />
      <div className="d-flex justify-content-around">
      <InfoBox1 todayReport={cityData} />
      <InfoBox2 forecast={foreCastData} />
      </div>
      
       </>
  );
}

export default App;
