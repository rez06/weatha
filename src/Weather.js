import { useState } from 'react';
import './WeatherStyle.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import DailyForecast from './DailyForecast';



function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            rain: response.data.rain,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            clouds: response.data.clouds.all,
            pressure: response.data.main.pressure,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon
        })
    }

    function search() {
         const apiKey = 'a710bd8bd76400c9658ef649d9e81728';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    if (weatherData.ready) {
        return (
      <div className="container border mt-5">
            <form onSubmit={handleSubmit} className='row border justify-content-center'>
              <div className="col-6">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City"
                        aria-label="Enter City"
                        aria-describedby="button-addon2"
                        autoFocus='on'
                        onChange={handleCityChange}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>    
                </div>
              </div>
          </form>
            <WeatherInfo data={weatherData} />  
            <DailyForecast />    
    </div>
  );
    } else {
        search();
        return 'Loading....';
    }
    
}

export default Weather;
