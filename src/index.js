import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';


import CounterReducer from './reducers';

const store = createStore( CounterReducer );

ReactDOM.render(<StoreProvider store={store}>
 <App />
</StoreProvider>, document.getElementById('root'));
registerServiceWorker();
