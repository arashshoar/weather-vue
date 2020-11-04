import axios from 'axios'

export const getUserCurrentPosition = options => (
  new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
)

/*
 * This is a dummy function just for self documentation
 * The "dispatchedAction" parameter it is already mapped to dispatch with in the related Component
 * So arashDispatch is just a reminder that we are dispatching an action
*/
export const fakeDispatch = dispatchedAction => dispatchedAction

export const roundCoords = coords => coords.split(',').map(elem => Math.round(elem * 100)/100).join(',')

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

export const getLocationName = mapData => {
  const { features: places } = mapData
  let cityName
  let countryName

  for (let place of places) {
    if (place['place_type'][0] === 'place') {
      cityName = place.text
    }
    if (place['place_type'][0] === 'country') {
      countryName = place.text
    }
  }

  if (!cityName) {
    for (let place of places) {
      if (place['place_type'][0] === 'postcode') {
        cityName = place['place_name'].split(',')[0]
      }
    }
  }

  if (!countryName) {
    countryName = places[places.length - 1].text
    if (!cityName) {
      cityName = countryName
    }
  }

  return {
    cityName,
    countryName
  }
}

const getRoundLatLng = (latitude, longitude) => {
  const roundLat = Math.round(latitude * 100) / 100
  const roundLng = Math.round(longitude * 100) / 100

  return ({ roundLat, roundLng })
}

export const isStoredDataFresh = storageTime => {
  const date = new Date()
  const sDate = new Date(Number(storageTime))

  return date.getTime() - sDate.getTime() < 3600000
}

export const getStoredData = (storeKey, latitude, longitude) => {
  const { roundLat, roundLng } = getRoundLatLng(latitude, longitude)
  const storedCurrentWeatherData = JSON.parse(window.localStorage.getItem(storeKey + roundLat + roundLng))
  const storageTime = JSON.parse(window.localStorage.getItem(storeKey + 'Time' + roundLat + roundLng))

  return storedCurrentWeatherData && isStoredDataFresh(storageTime) ? storedCurrentWeatherData.data : false
}

export const getFreshWeatherData = async (weatherQueryKey, storeKey, latitude, longitude) => {
  const { roundLat, roundLng } = getRoundLatLng(latitude, longitude)

  const data = await axios.get(getUrl({
    name: weatherQueryKey,
    accessKey: process.env.VUE_APP_WEATHER,
    latitude: roundLat,
    longitude: roundLng,
  }))
  window.localStorage.setItem(storeKey + 'Time' + roundLat + roundLng, JSON.stringify(new Date().getTime()))
  window.localStorage.setItem(storeKey + roundLat + roundLng, JSON.stringify(data))

  return data.data
}

export const getDateFromMilSeconds = (milli, timeZone) => {
  if (!milli) {
    return 'loading'
  }

  const date = new Date(Number(milli + '000') + Number(timeZone + '000'))
  const [ , month, day] = date.toISOString().split('T')[0].split('-')
  return `${month[0] === '0' ? month.substr(1) : month}/${day[0] === '0' ? day.substr(1) : day }`
}

export const getTimeFromMilliSeconds = (milli, timeZone) => {
  if (!milli) {
    return 'loading'
  }

  const date = new Date(Number(milli + '000') + Number(timeZone + '000'))
  const time = date.toISOString().split('T')[1].split(':')
  return `${time[0][0] === '0' ? time[0].substr(1) : time[0]}:${time[1]}`
}

export const joinDesOfWeather = weather => weather.reduce(
  (wholeDesc, weather) => (`${wholeDesc} ${weather.description}`), ''
)

export const firstLetterUp = str => str[1].toUpperCase() + str.substr(2).toLocaleLowerCase()

export const getDesOfWeather = weather => firstLetterUp(joinDesOfWeather(weather))
