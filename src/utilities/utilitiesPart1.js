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
