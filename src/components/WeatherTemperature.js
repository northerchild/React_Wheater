import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: 'day-sunny',
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name = { icon }
    size = "2x" > < /WeatherIcons>
    else
        return <WeatherIcons name = { "day-sunny" }
    size = "2x" > < /WeatherIcons>
}

const WeatherTemperature = ({ temperature, weatherState }) => ( <
    div >
    <
    span > `${temperature}C°` < /span> < /
    div >
)

export default WeatherTemperature;