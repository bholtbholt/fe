import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import feApp from './reducers';

const loggerMiddleware = createLogger()

export default() => {
  return createStore(
    feApp,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
