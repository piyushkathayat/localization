import { ENGLISH_CODE, GERMAN_CODE, ITALIAN_CODE, FRENCH_CODE } from './enums/locale';

const enMessages = require('../translations/en-US.json');
const deMessages = require('../translations/de-DE.json');
const itMessages = require('../translations/it-IT.json');
const frMessages = require('../translations/fr-FR.json');

export const getSelectedLanguage = () => {
    return sessionStorage.getItem("selectedLanguage") || "en-US";
}

export const getTranslatedMessage = (selectedLanguage) => {
    switch (selectedLanguage) {
        case ENGLISH_CODE:
            return enMessages;
        case GERMAN_CODE:
            return deMessages;
        case ITALIAN_CODE:
            return itMessages;
        case FRENCH_CODE:
            return frMessages;
        default:
            return '';
    }
}
