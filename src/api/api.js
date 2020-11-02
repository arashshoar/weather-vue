import { getUserCurrentPosition, arashDispatch } from '../utilities/utilitiesPart1'

export const getUsersLocation = async (getUsersCoords) => {

  const { coords: { latitude, longitude } } = await getUserCurrentPosition()
  arashDispatch(getUsersCoords(`${longitude},${latitude}`))
}
