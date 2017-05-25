import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';
import clients from './clients';

const feApp = combineReducers({
  user,
  pages,
  clients
});

export default feApp;
