import "./Search.css";
import { useState } from "react";
function SearchBar({fetchWeatherData}) {

    const [city,setCity] = useState("");

    return (
        <div className="d-flex justify-content-center align-items-center" id="SearchBar">
            <input type="text" placeholder="Search for a city..." value={city} onChange={(e) => setCity(e.target.value)} />
            <button className="btn" id="Search-button" onClick={() => fetchWeatherData(city)}>Search</button>
        </div>
    );
}

export default SearchBar;