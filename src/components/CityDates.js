import React from "react";
import "../styles/city.css";
import InfoCard from "./InfoCard";
function CityDates({ city, vreme }) {
  const getTime = () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let today = new Date();
    return [
      today.getHours(),
      today.getMinutes(),
      days[today.getDay()],
      months[today.getMonth()],
    ];
  };

  const getPic = () => {
    const i = vreme.weather[0].main;
    switch (i) {
      case "Clouds":
        return "/icons/Orion_clouds.svg";
      case "Rain":
        return "/icons/Orion_rain.svg";
      case "Fog":
        return "/icons/Orion_fog.svg";
      case "Thunder":
        return "/icons/Orion_lightning-frizzle.svg";
      case "Snow":
        return "/icons/Orion_snowflake.svg";

      default:
        return "/icons/Orion_sunny.svg";
    }
  };

  const [hour, minute, day, month] = getTime();
  return (
    <div className="container">
      <span className="date">
        {day}, {month}
      </span>
      <span className="time">
        {hour}:{minute}
      </span>
      <span className="cityName">{city}</span>
      <img src={getPic()} alt="pic" />
      <span className="description">{vreme.weather[0].main}</span>
      <div className="vector"></div>
      <span className="degrees">{vreme.main.temp} &deg;C</span>

      <div className="infoContainer">
        <InfoCard info={vreme.wind.speed} img={"/icons/Orion_wind.svg"} />
        <InfoCard info={vreme.main.humidity} img={"/icons/Orion_water.svg"} />
        <InfoCard
          info={vreme.main.pressure}
          img={"/icons/Orion_arrow-down-circle.svg"}
        />
      </div>
    </div>
  );
}

export default CityDates;
