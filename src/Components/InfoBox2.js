import "./InfoBox2.css";
import { useEffect,useState } from "react";
function InfoBox2({forecast}) {

    const [listData, setListData] = useState([]);
    useEffect(()=>{
        console.log("forecast ",forecast);
        const list = forecast.list?.slice(0,5)||[];
        setListData(list);
    },[forecast])


    return (
        <>
            <div id="InfoBox2">
                <h3 className="text-center">5 Day Forecast</h3>
                <div className="row justify-content-center">
                    {listData.map((item,index)=>{  
                        return (    
                            <div key={index} className="col-12" id="forecast-card">
                               <div className="d-flex justify-content-around align-items-center">
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Weather Icon" /> 
                                    <p id="forecast-date">{item.dt_txt.substring(0,11)}
                                        <br/>
                                        {item.weather[0]?.description}
                                    </p>
                                    <p id="forecast-temp">{item.main.temp}°C</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );  
        
}

export default InfoBox2;