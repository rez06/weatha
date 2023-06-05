import React from 'react'
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';
import TemperatureConversion from './TemperatureConversion';

function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
              <div className="col-6 text-start city">
                <p>Current location</p>
                <h1 className='display-3'>{props.data.city}</h1>
              </div>    
          </div>
          
          <div className="row">
            <div className="col-2 icon my-auto">
                  <WeatherIcon code={props.data.icon} size ={52} alt={props.data.description} />    
                  
            </div>
            <div className="col-2 my-auto">
              <TemperatureConversion celsius={props.data.temperature} />
            </div>
            <div className="col-6 border">
                <ul className='list-unstyled mt-3'>
                    <li><FormattedDate date={props.data.date} /></li>
                    <li className='text-capitalize'>{props.data.description}</li>
                </ul>
            </div>
          </div>
          <div className="row justify-content-between border">
              <h2 className='text-start mt-5 mb-5'>Today's Highlight</h2>
              <div className="col-2 border">
                  <p>Humidity</p>
                  <p>{props.data.humidity}</p>
              </div>
              <div className="col-2 border">
                  <p>Wind</p>
                  <p>{props.data.wind}</p>
              </div>
              <div className="col-2 border">
                  <p>Pressure</p>
                  <p>{props.data.pressure}</p>
              </div>
              <div className="col-2 border">
                  <p>Clouds</p>
                  <p>{props.data.clouds}</p>
              </div>
          </div>
    </div>
  )
}

export default WeatherInfo
