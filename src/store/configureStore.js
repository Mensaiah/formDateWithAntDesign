import { createStore } from 'redux';

import dataReducers from '../reducers/data';

const store = createStore(
  dataReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
