import Landing from "./components/Landing";
import "./styles/basic.css";
import React, { useState } from "react";
import Axios from "axios";
import CityDates from "./components/CityDates";

const api_key = "03ed7966e6c64d8ac111943615cd683a";

function App() {
  const [city, setCity] = useState();
  const [vreme, updateVreme] = useState();

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await Axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    );
    console.log(response);

    updateVreme(response.data);
  };

  return (
    <div className="App">
      {/* <Landing setCity={setCity} fetchData={fetchData} /> */}
      {city && vreme ? (
        <CityDates vreme={vreme} city={city} />
      ) : (
        <Landing setCity={setCity} fetchData={fetchData} />
      )}
    </div>
  );
}

export default App;
