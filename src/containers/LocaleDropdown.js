import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { locales } from '../utils/enums/locale';
import { switchLocale } from '../actions/Actions';
import { getSelectedLanguage } from '../utils/common';

class LocaleDropdown extends Component {
    state = {
        selectedLanguage: getSelectedLanguage()
    }
    onDropdownChange = (e, { value }) => {
        const { switchLanguage } = this.props;
        if (this.state.selectedLanguage !== value) {
            sessionStorage.setItem("selectedLanguage", value);
            this.setState({ selectedLanguage: value })
            switchLanguage(value)
            window.location.reload();
        }
    };

    render() {
        return (
            <Dropdown item text={this.state.selectedLanguage}
                value={this.state.selectedLanguage}
                onChange={this.onDropdownChange}
                options={locales} >
            </Dropdown>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    switchLanguage: (locale) => {
        dispatch(switchLocale(locale))
    }
})

export default connect(state => state, mapDispatchToProps)(LocaleDropdown);
