import { User } from '../commonTypes';

export const LOGIN = 'LOGIN';

export type Action =
  Login;

export interface Login {
  type: typeof LOGIN;
  user: User;
}

// Actions

export const login = (user): Login => {
  return {
    type: LOGIN,
    user
  };
};

// Reducer

const init: User = {
  id: 0,
  name: '',
  clientId: []
};
export default (state = init, action: Action) => {
  switch (action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
};
