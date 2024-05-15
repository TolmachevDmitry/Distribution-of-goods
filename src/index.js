import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style-main.css';
import { Provider } from 'react-redux';

import App from './containers/app.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { logger } from './logger.js';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
)
