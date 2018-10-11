import ActionTypes from '../actions/ActionTypes';
import { getSelectedLanguage } from '../utils/common';

const defaultState = {
    lang: getSelectedLanguage()
}

const locale = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SWITCH_LOCALE: {
            return {
                ...state,
                lang: action.locale,
            }
        }
        default:
            return { ...state };
    }
}

export default locale;
