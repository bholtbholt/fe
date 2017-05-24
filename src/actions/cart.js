export const ADD = 'ADD'
export const addToCart = (item) => {
  return {
    type: ADD,
    item
  };
}
