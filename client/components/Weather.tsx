import { useState } from 'react'

import { WeatherModel, Condition } from '../../models/WeatherModel'

import { getWeather } from '../api/weatherapi'

function Weather() {
  const [weather, setWeather] = useState(null as WeatherModel | null)

  const clickHandler = () => {
    return getWeather()
      .then((obj) => {
        setWeather(obj)
        console.log(obj)
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <div>
      <p>THE WEATHER</p>
      <button onClick={clickHandler}>GET WELLINGTON WEATHER</button>

      {weather && (
        <div>
          <p>City: {weather.location.name}</p>
          <p>Temperature: {weather.current.temp_c}</p>
          <img src={weather.current.condition.icon} alt="" />
        </div>
      )}
    </div>
  )
}

export default Weather
