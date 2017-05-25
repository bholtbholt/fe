import { FETCH_CLIENTS_SUCCESS } from '../actions/clients';

export default(state = [], action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.clients;
    default:
      return state
  }
}
