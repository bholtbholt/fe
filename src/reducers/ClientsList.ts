import { UserId, Client } from '../commonTypes';
export type Action =
  FetchClientsSuccess;

export interface FetchClientsSuccess {
  type: typeof FETCH_CLIENTS_SUCCESS;
  clients: Client[];
}

// Actions

export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const fetchClientsSuccess = (clients): FetchClientsSuccess => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    clients,
  };
};

export function fetchClients(userId: UserId) {
  return function(dispatch) {
    return fetch(`/clients?userId_like=${userId}`)
      .then(response => response.json())
      .then(clients => dispatch(fetchClientsSuccess(clients)));
  };
}

// Reducer

const init: Client[] = [];
export default (state = init, action: Action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.clients;
    default:
      return state;
  }
};
