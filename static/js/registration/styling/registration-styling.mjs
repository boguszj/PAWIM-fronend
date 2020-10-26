import {
    REGISTRATION_FILENAME_LABEL_SELECTOR,
    REGISTRATION_SUBMIT_BUTTON_SELECTOR,
    REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS,
    REGISTRATION_GENDER_MALE_SELECTOR,
    REGISTRATION_GENDER_FEMALE_SELECTOR,
} from "../constants/form-constants.mjs";

export const showFileName = (filename) => {
    $(REGISTRATION_FILENAME_LABEL_SELECTOR).text(filename);
}

export const hideFileName = () => {
    $(REGISTRATION_FILENAME_LABEL_SELECTOR).text('');
}

export const markAsInvalid = (element, message) => {
    $(element).next().text(message);
}

export const markAsValid = (element, message) => {
    const errorElement = element.next();
    if (errorElement.text() === message) errorElement.text('');
}

export const enableSubmitButton = () => {
    $(REGISTRATION_SUBMIT_BUTTON_SELECTOR).attr('disabled', false);
}

export const disableSubmitButton = () => {
    $(REGISTRATION_SUBMIT_BUTTON_SELECTOR).attr('disabled', true);
}

export const markGenderAsMale = () => {
    $(REGISTRATION_GENDER_MALE_SELECTOR).addClass(REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS);
    $(REGISTRATION_GENDER_FEMALE_SELECTOR).removeClass(REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS);
}

export const markGenderAsFemale = () => {
    $(REGISTRATION_GENDER_FEMALE_SELECTOR).addClass(REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS);
    $(REGISTRATION_GENDER_MALE_SELECTOR).removeClass(REGISTRATION_ACTIVE_GENDER_BOOTSTRAP_CLASS);
}
