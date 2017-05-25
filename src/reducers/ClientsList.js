export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const fetchClientsSuccess = (clients) => {
  return {
    type: FETCH_CLIENTS_SUCCESS,
    clients,
  };
}

export function fetchClients(userId) {
  return function(dispatch) {
    return fetch(`/clients?userId_like=${userId}`)
      .then(response => response.json())
      .then(clients => dispatch(fetchClientsSuccess(clients)))
  }
}

export default(state = [], action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return action.clients;
    default:
      return state
  }
}
