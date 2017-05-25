export const LOGIN = 'LOGIN'
export const login = (user) => {
  return {
    type: LOGIN,
    user
  };
}

const init = {
  id: 0,
  name: "",
  clientId: 0
}
export default(state = init, action) => {
  switch(action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
}
