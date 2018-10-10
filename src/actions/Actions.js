import ActionTypes from './ActionTypes';

export const setLocale = (locale) => {
    return {
        type: ActionTypes.SWITCH_LOCALE,
        locale
    }
}

export const switchLocale = locale => dispatch => {
    dispatch(setLocale(locale));
}
