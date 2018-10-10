import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { switchLocale } from '../actions/Actions';
import { getSelectedLanguage } from '../utils/Common';

class LocaleDropdown extends Component {
    state = {
        selectedLanguage: getSelectedLanguage()
    }
    onDropdownChange = (e, { value }) => {
        if (this.state.selectedLanguage !== value) {
            sessionStorage.setItem("selectedLanguage", value);
            this.setState({ selectedLanguage: value })
            // this.props.switchLocale(value)
        }
    };
    options = [
        { text: 'English', value: 'en' },
        { text: 'Deutsch', value: 'de' },
        { text: 'Italien', value: 'it' },
        { text: 'French', value: 'fn' }
    ]
    render() {
        return (
            <Dropdown item text={this.state.selectedLanguage}
                value={this.state.selectedLanguage}
                onChange={this.onDropdownChange}
                options={this.options} >
            </Dropdown>
        )
    }
}

export const mapDispatchToProps = () => ({
    // switchLocale: locale => { dispatchEvent(switchLocale(locale)) }
})
export default connect(state => state, mapDispatchToProps)(LocaleDropdown);
