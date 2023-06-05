import React from 'react'
import WeatherIcon from './WeatherIcon';
import './Daily-Forecast.css';

function DailyForecast() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <h2>Daily Forecast</h2>
              </div>
        </div>
        <div className="row text-center">
            <div className="col">
                  <h3 className='daily-forecast'>Sun</h3>
                  <WeatherIcon code='01d' size={36} />
                  <div className="temperatures">
                    <span className='temperature-max'>19°</span>
                    <span className='temperature-min'>10°</span>      
                  </div>
            </div>    
        </div>          
    </div>
  )
}

export default DailyForecast
