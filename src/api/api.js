import axios from 'axios'

import { getUserCurrentPosition, fakeDispatch, getUrl, getStoredData, getFreshWeatherData, roundCoords } from '../utilities/utilitiesPart1'
import { someCityCoords } from '../utilities/constants.js'
import { KEYS } from '../utilities/constants'

export const fetchMapData = async ({ coords, locationName }) => {
  const storedLocationData = coords && JSON.parse(window.localStorage.getItem('storedLocationData' + roundCoords(coords)))

  const axiosTypeMapData = storedLocationData && storedLocationData.data
    ? storedLocationData
    : await axios.get(getUrl({
      name: coords ? 'coordsQuery' : 'locationNameQuery',
      token: process.env.VUE_APP_TOKEN,
      locationName,
      coords
    }))

  if (coords) {
    window.localStorage.setItem('storedLocationData' + roundCoords(coords), JSON.stringify(axiosTypeMapData))
  }

  return Promise.resolve(axiosTypeMapData)
}

export const fetchWeather = (weatherQueryKey, storeKey, latitude, longitude) => {

  const weatherData = getStoredData(storeKey, latitude, longitude)
    ? getStoredData(storeKey, latitude, longitude)
    : getFreshWeatherData(weatherQueryKey, storeKey, latitude, longitude)

  return Promise.resolve(weatherData)
}

export const getUsersLocation = async (setCoords, setMapData, setCurrentWeatherData) => {

  let latitude, longitude
  try {
    ({ coords: { latitude, longitude } } = await getUserCurrentPosition())
  } catch (error) {
    ([longitude, latitude] = someCityCoords.NewYork.split(','))
    console.log('User denied to let us have access their location:', error)
  } finally {
    fakeDispatch(setCoords(`${longitude},${latitude}`))
    const mapData = await fetchMapData({coords: `${longitude},${latitude}`})
    fakeDispatch(setMapData(mapData.data))
    const currentWeatherData = await fetchWeather(KEYS.weatherQueryCurrent, KEYS.storedCurrentWeatherData, latitude, longitude)
    fakeDispatch(setCurrentWeatherData(currentWeatherData))
  }
}
