import {
  FETCH_PAGES_SUCCESS
} from '../actions/pages';

export default(state = [], action) => {
  switch (action.type) {
    case FETCH_PAGES_SUCCESS:
      return action.pages;
    default:
      return state
  }
}
