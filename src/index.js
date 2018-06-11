import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'

const counter = (state = 0, action) => {
  //console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
