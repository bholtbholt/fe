import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import feApp from './reducers';

const loggerMiddleware = createLogger();

export default () => {
  return createStore(
    feApp,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
