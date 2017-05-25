export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const setCurrentClient = (client) => {
  return {
    type: SET_CURRENT_CLIENT,
    client
  }
}

export default(state = { id: 0 }, action) => {
  switch (action.type) {
    case SET_CURRENT_CLIENT:
      return action.client;
    default:
      return state
  }
}
