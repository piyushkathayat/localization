import ActionTypes from './ActionTypes';

export const switchLocale = (locale) => {
    return {
        type: ActionTypes.SWITCH_LOCALE,
        locale
    }
}
