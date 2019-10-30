// import 'regenerator-runtime/runtime';s
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import dataReducers from '../reducers/data';
import rootSaga from '../sagas/index';

export default () => {
  const sagaMiddleware = createSagaMiddleWare();
  const store = createStore(
    dataReducers,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
