import { MAIN_SELECTOR } from "../../index/constants/index-constants.mjs";
import {
    REGISTRATION_SUCCESS_HTML_RELATIVE_PATH,
    REGISTRATION_SERVER_ERROR_HTML_RELATIVE_PATH,
    REGISTRATION_CLIENT_ERROR_HTML_RELATIVE_PATH,
    REGISTRATION_ENDPOINT,
    REGISTRATION_USERNAME_INPUT_SELECTOR,
    REGISTRATION_PASSWORD_INPUT_SELECTOR,
    REGISTRATION_FIRST_NAME_INPUT_SELECTOR,
    REGISTRATION_LAST_NAME_INPUT_SELECTOR,
    REGISTRATION_GENDER_SWITCH_SELECTOR,
    REGISTRATION_PHOTO_INPUT_SELECTOR,
    REGISTRATION_GO_TO_HOMEPAGE_BUTTON_SELECTOR,
    REGISTRATION_RETRY_BUTTON_SELECTOR,
} from "../constants/form-constants.mjs";
import { loadHomePage, loadRegistrationPage } from "../../index/logic/nav.mjs";
import { hideSpinner, showSpinner } from "../../index/logic/spinner.mjs";

export const register = (e) => {
    showSpinner();
    e.preventDefault();
    sendRegistrationRequest()
        .then(response => {
            if (wasSuccessful(response)) loadRegistrationSuccessMessage();
            else if (wasServerError(response)) loadRegistrationServerErrorMessage();
            else loadRegistrationClientErrorMessage();
            hideSpinner();
        });
}

const sendRegistrationRequest = async () => fetch(REGISTRATION_ENDPOINT, {
    method: 'POST',
    body: getRegistrationRequestBody(),
})

const getRegistrationRequestBody = () => {
    const fromData = new FormData();
    fromData.append('login', $(REGISTRATION_USERNAME_INPUT_SELECTOR).val());
    fromData.append('firstname', $(REGISTRATION_FIRST_NAME_INPUT_SELECTOR).val());
    fromData.append('lastname', $(REGISTRATION_LAST_NAME_INPUT_SELECTOR).val());
    fromData.append('password', $(REGISTRATION_PASSWORD_INPUT_SELECTOR).val());
    fromData.append('sex', $(REGISTRATION_GENDER_SWITCH_SELECTOR).val());
    fromData.append('photo', $(REGISTRATION_PHOTO_INPUT_SELECTOR).prop('files')[0]);
    return fromData;
}

const wasSuccessful = (response) => response.status === 200;

const wasServerError = (response) => response.status % 500 < 100;

const loadRegistrationSuccessMessage = () => loadRegistrationResultMessage(REGISTRATION_SUCCESS_HTML_RELATIVE_PATH, REGISTRATION_GO_TO_HOMEPAGE_BUTTON_SELECTOR, loadHomePage);

const loadRegistrationServerErrorMessage = () => loadRegistrationResultMessage(REGISTRATION_SERVER_ERROR_HTML_RELATIVE_PATH, REGISTRATION_RETRY_BUTTON_SELECTOR, loadRegistrationPage);

const loadRegistrationClientErrorMessage = () => loadRegistrationResultMessage(REGISTRATION_CLIENT_ERROR_HTML_RELATIVE_PATH, REGISTRATION_RETRY_BUTTON_SELECTOR, loadRegistrationPage);

const loadRegistrationResultMessage = (htmlRelativePath, elementForCallback, callback) => {
    showSpinner();
    const contentElement = $(MAIN_SELECTOR);
    contentElement.load(
        htmlRelativePath,
        () => $(elementForCallback).click(callback),
    );
    hideSpinner();
}