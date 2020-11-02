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
export const arashDispatch = dispatchedAction => dispatchedAction
