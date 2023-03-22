export interface WeatherModel {
  current: Condition
  location: Location
}

export interface Condition {
  name: string
  country: string
  temp_c: number
  condition: Condition
}

export interface Location {
  name: string
  country: string
  lat: number
  long: number
}

export interface Condition {
  text: string
  icon: string
}
