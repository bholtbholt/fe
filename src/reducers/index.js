import { combineReducers } from 'redux';
import cart from './cart';
import user from './user';
import pages from './pages';

const feApp = combineReducers({
  cart,
  user,
  pages
});

export default feApp;
