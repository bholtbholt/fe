export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const setCurrentClient = (client) => {
  return {
    type: SET_CURRENT_CLIENT,
    client
  }
}

const init = {
  id: 1,
  name: "Client A",
  userId: 1
}
export default(state = init, action) => {
  switch (action.type) {
    case SET_CURRENT_CLIENT:
      return action.client;
    default:
      return state
  }
}
