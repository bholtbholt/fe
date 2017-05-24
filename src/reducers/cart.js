import { ADD } from '../actions/cart';

export default(state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.item];
    default:
      return state;
  }
}
