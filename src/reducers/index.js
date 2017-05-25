import { combineReducers } from 'redux';
import currentUser from './Login';
import pages from './Pages';
import clients from './ClientsList';
import currentClient from './ClientsSetCurrent';

const feApp = combineReducers({
  currentUser,
  currentClient,
  pages,
  clients
});

export default feApp;
