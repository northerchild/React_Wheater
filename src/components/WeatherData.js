import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
const WeatherData = () => ( <
    div >
    <
    WeatherExtraInfo humidity = { 80 }
    wind = { "10 m/s" } > < /WeatherExtraInfo> <
    WeatherTemperature temperature = { 20 } > < /WeatherTemperature> < /
    div >
)

export default WeatherData;