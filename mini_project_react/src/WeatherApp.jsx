import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherInfo() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 35.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by Ahsan </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
