import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import locale from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(locale);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
