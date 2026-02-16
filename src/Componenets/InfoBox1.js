import "./InfoBox1.css";



function InfoBox1({data}){

    const date = new Date(data.dt * 1000);

    // Format to a readable string (India Standard Time)
    const normalFormat = date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short"
    }).replace("at",",");

    console.log(normalFormat)


const sunrise= new Date(data.sys?.sunrise * 1000);

const sunriseTime = sunrise.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata'
});
const sunset= new Date(data.sys?.sunset * 1000);

const sunsetTime = sunset.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
  timeZone: 'Asia/Kolkata'
});



    return(
        <>
        <div  className=""   id="InfoBox1">
            <div id="location">
                <div className="row justify-content-between" id="location-div1">
                    <div className="col-12 col-lg-4">
                        <h6>{data.name}</h6>
                        <p>{data.sys?.country}</p>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h6>{normalFormat.split(",")}</h6>
                    </div>
                </div>
                <div className="row justify-content-between" id="location-div2">
                    <div className="col-4 col-sm-12">
                            <h1>{data.main?.temp}<sup>o</sup><bold><sub>C</sub></bold></h1>
                            <h5>{data.weather?.[0]?.description}</h5>
                    </div>
                    <div className="col-4 col-sm-12">

                    </div>
                </div>
            </div>
        
            <div id="weather-conditions" className="row justify-content-around">

                <div id="Visibility" className="col-12 col-lg-4">
                    <span>Visibility</span>
                    <h6>{data.visibility}<span> Km</span></h6>
                </div>
                <div id="Wind-Speed"   className="col-12 col-lg-4">
                    <span>Wind Speed</span>
                    <h6>{data.wind?.speed}<span> m/s</span></h6>
                </div>
                <div id="Humidity" className="col-12 col-lg-4">
                    <span>Humidity</span>
                    <h6>{data.main?.humidity}<span>%</span></h6>
                </div>
                <div id="Pressure" className="col-12 col-lg-4">
                    <span>Pressure</span>
                    <h6>{data.main?.pressure}<span> hPa</span></h6>
                </div>
                <div id="Feels-Like" className="col-12 col-lg-4">
                    <span>Feels Like</span>
                    <h6>{data.main?.feels_like}<span>C</span></h6>
                </div>
            </div>

            <div id="Sunrise-Sunset" className="row justify-content-around">
                <div id="Sunrise" className="col-12 col-lg-5 ">
                    <span>Sunrise</span>
                    <h6>{sunriseTime}</h6>
                </div>
                <div id="Sunset" className="col-12 col-lg-5">
                    <span>Sunset</span>
                    <h6>{sunsetTime}</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoBox1;