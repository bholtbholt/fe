export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const fetchPagesSuccess = (pages) => {
  return {
    type: FETCH_PAGES_SUCCESS,
    pages
  };
}

export function fetchPages(clientId) {
  return function(dispatch) {
    return fetch(`/clients/${clientId}/pages`)
      .then(response => response.json())
      .then(pages => dispatch(fetchPagesSuccess(pages)))
  }
}

