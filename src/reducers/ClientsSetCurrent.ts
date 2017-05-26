import { Client } from '../commonTypes';
export type Action =
  SetCurrentClient;

export interface SetCurrentClient {
  type: typeof SET_CURRENT_CLIENT;
  client: Client;
}

// Actions

export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const setCurrentClient = (client): SetCurrentClient => {
  return {
    type: SET_CURRENT_CLIENT,
    client
  };
};

// Reducer

const init: Client = {
  id: 0,
  name: '',
  userId: []
};
export default (state = init, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_CLIENT:
      return action.client;
    default:
      return state;
  }
};
