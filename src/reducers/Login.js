export const LOGIN = 'LOGIN'
export const login = (user) => {
  return {
    type: LOGIN,
    user
  };
}

export default(state = { id: 0 }, action) => {
  switch(action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
}
