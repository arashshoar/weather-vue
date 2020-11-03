import axios from 'axios'

import { getUserCurrentPosition, fakeDispatch } from '@/utilities/utilitiesPart1'
import { someCityCoords } from '@/utilities/constants.js'

export const getUrl = ({ name, accessKey, locationName, token, coords, latitude, longitude }) => {

  switch (name) {
    case 'coordsQuery':
      return `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords}.json?access_token=${token}`
    case 'locationNameQuery':
      return `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${token}`
    case 'weatherQueryCurrent':
      return `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${latitude}&lon=${longitude}&appid=${accessKey}`
    case 'weatherQueryForecast':
      return `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${accessKey}`
    case 'googleMap':
      return `https://maps.googleapis.com/maps/api/js?key=${accessKey}&callback=initMap`
    default:
      return `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${token}`
  }
}

export const roundCoords = coords => coords.split(',').map(elem => Math.round(elem * 100)/100).join(',')

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

export const getUsersLocation = async (setCoords, setMapData) => {

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
  }
}
