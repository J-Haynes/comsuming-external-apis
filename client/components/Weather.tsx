import { useState } from 'react'

import { WeatherModel, Condition } from '../../models/WeatherModel'

import { getWeather } from '../api/weatherapi'

function Weather() {
  const [weather, setWeather] = useState(null as WeatherModel | null)
  const [city, setCity] = useState('')
  const [latitude, setLatitude] = useState(190)
  const [longitude, setLongitude] = useState(20)

  const clickHandler = () => {
    // evt.preventDefault()
    return getWeather(city)
      .then((obj) => {
        setWeather(obj)
        setLatitude(latitude - 2 * obj.location.lat + 60)
        setLongitude(longitude + 2 * obj.location.lon - 40)
        console.log(obj.location.lat)
      })
      .catch((err) => console.log(err.message))
  }

  const changeHandler = (evt: Event) => {
    // const text = [ ...city ]
    setCity(evt.target.value)
  }
  return (
    <div>
      <p>THE WEATHER</p>
      <input
        type="text"
        value={city}
        name="city"
        id="city"
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>GET WEATHER</button>

      {weather && (
        <div>
          <p>City: {weather.location.name}</p>
          <p>Temperature: {weather.current.temp_c}</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="" />
        </div>
      )}
      <div className="map-div">
        <img
          id="circle"
          src="https://i.imgur.com/6mwy4Fn.png"
          alt="circle"
          style={{ top: latitude, left: longitude }}
        />
        <img src="https://i.imgur.com/5IoMDBO.png" alt="map" />
      </div>
    </div>
  )
}

export default Weather
