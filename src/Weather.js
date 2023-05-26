import React from 'react';
import './WeatherStyle.css'



function Weather() {
  return (
      <div className="container border mt-5">
          <form className='row border justify-content-center no-gutters'>
              <div className="col-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter City" aria-label="Enter City" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>    
              </div>
              
</div>
                
              
              
          </form>
          <h1>Manila</h1>
          <ul className='list-unstyled'>
              <li>Friday 12:00 AM</li>
              <li>Mostly Cloudy</li>
          </ul>
          <div className="row">
              <div className="col-6 border">
                  18℃ <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" alt="rain-light" />
              </div>
              <div className="col-6 border">
                  <ul className='list-unstyled'>
                      <li>Precipitation: 20%</li>
                      <li>Humidity: 70%</li>
                      <li>Wind: 15%</li>
                  </ul>
              </div>
          </div>
          
    </div>
  );
}

export default Weather;
