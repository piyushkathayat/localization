import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import locale from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import deLocaleData from 'react-intl/locale-data/de';
import itLocaleData from 'react-intl/locale-data/it';
import frLocaleData from 'react-intl/locale-data/fr';
import enLocaleData from 'react-intl/locale-data/en';

addLocaleData([
    ...deLocaleData,
    ...itLocaleData,
    ...frLocaleData,
    ...enLocaleData
]);

const store = createStore(locale);
const selectedLocale = "en";
const messages = "message";
ReactDom.render(
    <Provider store={store}>
        <IntlProvider locale={selectedLocale} messages={messages}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider >,
    document.getElementById('root')
);
