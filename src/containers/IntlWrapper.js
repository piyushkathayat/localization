import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IntlProvider, addLocaleData } from 'react-intl';

import deLocaleData from 'react-intl/locale-data/de';
import itLocaleData from 'react-intl/locale-data/it';
import frLocaleData from 'react-intl/locale-data/fr';
import enLocaleData from 'react-intl/locale-data/en';

import { getTranslatedMessage } from '../utils/common';

addLocaleData([
    ...deLocaleData,
    ...itLocaleData,
    ...frLocaleData,
    ...enLocaleData
]);

class IntlWrapper extends Component {
    render() {
        const { children, locale } = this.props;
        const messages = getTranslatedMessage(locale);
        return (
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        );
    }
}

const mapConnectToProps = (state) => ({
    locale: state.locale.lang
})

export default connect(mapConnectToProps)(IntlWrapper);
