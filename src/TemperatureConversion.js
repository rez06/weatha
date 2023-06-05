import {useState} from 'react'

function TemperatureConversion(props) {
    const [unit, setUnit] = useState('celsius')

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit('fahrenheit');
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit('celsius');
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    } 
    if (unit === 'celsius') {
        return (
            <div>
                <span className='temp'>{Math.round(props.celsius)}</span>
                <span className='unit'>
                    ℃ |{' '}
                    <a href='/' onClick={showFahrenheit}>℉</a>
                </span>
            </div>
        )
    } else {
        
        return (
            <div>
                <span className='temp'>{Math.round(fahrenheit())}</span>
                <span className='unit'>
                    <a href='/' onClick={showCelsius}>
                        
                        ℃ </a>
                    {' '} | ℉
                </span>
            </div>
        )
    }
}

export default TemperatureConversion
