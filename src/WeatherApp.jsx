import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            feelsLike: 39.28,
            humidity: 8,
            temp: 42.84,
            tempMax: 43.05,
            tempMin: 42.84,
            weather: "haze"
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
    <div style={{textAlign: "center"}}>
        <h2 style={{color:"white"}}>Weather Application</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        );
}