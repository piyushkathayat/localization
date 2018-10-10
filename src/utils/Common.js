export const getSelectedLanguage = () => {
    return sessionStorage.getItem("selectedLanguage") || "en-US";
}
