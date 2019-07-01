import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const WeatherData = () => ( <
    div >
    <
    WeatherExtraInfo humidity = { 80 }
    wind = { "10 m/s" } > < /WeatherExtraInfo> <
    WeatherTemperature temperature = { 20 }
    weatherState = { CLOUDY } >
    <
    /WeatherTemperature> < /
    div >
)

export default WeatherData;