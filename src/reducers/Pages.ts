import { Page, ClientId } from '../commonTypes';

export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';

export type Action =
  FetchPagesSuccess;

export interface FetchPagesSuccess {
  type: typeof FETCH_PAGES_SUCCESS;
  pages: Page[];
}

// Actions

export const fetchPagesSuccess = (pages): FetchPagesSuccess => {
  return {
    type: FETCH_PAGES_SUCCESS,
    pages
  };
};

export function fetchPages(clientId: ClientId) {
  return function(dispatch) {
    return fetch(`/clients/${clientId}/pages`)
      .then(response => response.json())
      .then(pages => dispatch(fetchPagesSuccess(pages)));
  };
}

// Reducer

const init: Page[] = [];
export default (state = init, action: Action) => {
  switch (action.type) {
    case FETCH_PAGES_SUCCESS:
      return action.pages;
    default:
      return state;
  }
};
