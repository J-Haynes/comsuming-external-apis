import request from 'superagent'

export function getWeather(city: string) {
  // console.log(city)
  return request
    .get(
      `http://api.weatherapi.com/v1/current.json?key=81330ec1a098488b822222704232103&q=${city}&aqi=no`
    )
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message))
}
