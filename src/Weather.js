import { useState } from 'react';
import './WeatherStyle.css';
import axios from 'axios';
import FormattedDate from './FormattedDate';



function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        
        setWeatherData({
            ready:true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            rain: response.data.rain,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
        })
    }

    if (weatherData.ready) {
        return (
      <div className="container border mt-5">
          <form className='row border justify-content-center'>
              <div className="col-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter City" aria-label="Enter City" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>    
                </div>
              </div>
          </form>
          <div className="row">
              <div className="col-6 text-start city">
                <p>Current location</p>
                        <h1 className='display-3'>{weatherData.city}</h1>
              </div>    
          </div>
          
          <div className="row">
              <div className="col-6 border">
                  <img src={weatherData.iconUrl} alt="rain-light" />
                  <span className='display-4'>{Math.round(weatherData.temperature)}℃</span> 
              </div>
              <div className="col-6 border">
                  <ul className='list-unstyled mt-3'>
                            <li><FormattedDate date={weatherData.date} /></li>
                      <li className='text-capitalize'>{weatherData.description}</li>
                  </ul>
              </div>
          </div>
          <div className="row justify-content-between border">
              <h2 className='text-start mt-5 mb-5'>Today's Highlight</h2>
              <div className="col-2 border">
                  <p>Humidity</p>
                  <p>{weatherData.humidity}</p>
              </div>
              <div className="col-2 border">
                  <p>Wind</p>
                  <p>{weatherData.wind}</p>
              </div>
              <div className="col-3 border">
                  <p>Sunrise and Sunset</p>
                  <p>{weatherData.sunrise}</p>
                  <p>{weatherData.sunset}</p>
              </div>
          </div>
    </div>
  );
    } else {
        const apiKey = 'a710bd8bd76400c9658ef649d9e81728';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);
        
        return 'Loading....';
    }
    
}

export default Weather;
