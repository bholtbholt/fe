import { LOGIN } from '../actions/user';

export default(state = { id: 0 }, action) => {
  switch(action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
}
