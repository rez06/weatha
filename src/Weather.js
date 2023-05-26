import React from 'react';
import './WeatherStyle.css'



function Weather() {
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
                <h1 className='display-3'>Manila</h1>
              </div>    
          </div>
          
          <div className="row">
              <div className="col-6 border">
                  <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="rain-light" />
                  <span className='display-4'>18℃</span> 
              </div>
              <div className="col-6 border">
                  <ul className='list-unstyled mt-3'>
                      <li>Monday, 12:00 AM</li>
                      <li>Partly Cloudy</li>
                  </ul>
              </div>
          </div>
          <div className="row justify-content-between border">
              <h2 className='text-start mt-5 mb-5'>Today's Highlight</h2>
              <div className="col-2  border">
                  <p>Precipitation</p>
                  <p>2%</p>
              </div>
              <div className="col-2 border">
                  <p>Humidity</p>
                  <p>87%</p>
              </div>
              <div className="col-2 border">
                  <p>Wind</p>
                  <p>0km/h</p>
              </div>
              <div className="col-3 border">
                  <p>Sunrise and Sunset</p>
                  <p>6:18am</p>
                  <p>7:27pm</p>
              </div>
          </div>
    </div>
  );
}

export default Weather;
