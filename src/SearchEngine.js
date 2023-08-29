import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { Oval } from "react-loader-spinner";
import bootstrap from "bootstrap";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);

    let apiKey = "a4ba73c43b7f0b69291107044ef46ca6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setSubmitted(true);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={changeCity}
          placeholder="Type a city"
          required
          autoFocus={true}
          autocomplete={false}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      {submitted && (
        <div>
          <h2>{message}</h2>
          <ul>
            <li>
              Temperature:<strong>{Math.round(temperature)}°C</strong>
            </li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={description}
              />
            </li>
            <li>
              Description:<strong>{description}</strong>
            </li>
            <li>
              Humidity:<strong>{humidity}%</strong>
            </li>
            <li>
              Wind:<strong>{Math.round(wind)}Km/h</strong>
            </li>
          </ul>
        </div>
      )}

      <Oval
        height={25}
        width={25}
        color="blueviolet"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
