import { Client } from '../commonTypes';

// Actions

export const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
export const setCurrentClient = (client): SetCurrentClient => {
  return {
    type: SET_CURRENT_CLIENT,
    client
  };
};

// Types

export type Action =
  SetCurrentClient;

export interface SetCurrentClient {
  type: typeof SET_CURRENT_CLIENT;
  client: Client;
}

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
