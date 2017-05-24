export function fetchPages(userId) {
  return function(dispatch) {
    return fetch(`/pages?author=${userId}`)
      .then(response => response.json())
      .then(pages => dispatch(fetchPagesSuccess(pages)))
  }
}

export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const fetchPagesSuccess = (pages) => {
  return {
    type: FETCH_PAGES_SUCCESS,
    pages,
    posts: pages,
    recievedAt: Date.now()
  };
}
