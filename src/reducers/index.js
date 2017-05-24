import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';

const feApp = combineReducers({
  user,
  pages
});

export default feApp;
