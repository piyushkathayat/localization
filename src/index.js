import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import IntlWrapper from '../src/containers/IntlWrapper';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

ReactDom.render(
    <Provider store={store}>
        <IntlWrapper>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlWrapper>
    </Provider >,
    document.getElementById('root')
);
