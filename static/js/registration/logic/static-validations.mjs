import {
    REGISTRATION_INVALID_NAME_OR_LAST_NAME_MESSAGE,
    REGISTRATION_INVALID_PASSWORD_MESSAGE,
    REGISTRATION_PASSWORD_INPUT_SELECTOR,
    REGISTRATION_INVALID_REPEAT_PASSWORD_MESSAGE,
    REGISTRATION_INVALID_USERNAME_MESSAGE,
    REGISTRATION_INVALID_FILENAME_MESSAGE,
    REGISTRATION_PHOTO_INPUT_SELECTOR,
    REGISTRATION_USERNAME_INPUT_SELECTOR,
    REGISTRATION_REPEAT_PASSWORD_INPUT_SELECTOR,
} from "../constants/form-constants.mjs";
import { markAsInvalid, markAsValid } from "../styling/registration-styling.mjs";
import { showFileName, hideFileName } from "../styling/registration-styling.mjs";

export const validateFirstNameOrLastName = (element) => {
    const textValue = element.val();
    if (isFirstNameOrLastNameValid(textValue)) {
        markAsValid(element, REGISTRATION_INVALID_NAME_OR_LAST_NAME_MESSAGE);
        return true;
    }
    else {
        if (!!textValue) markAsInvalid(element, REGISTRATION_INVALID_NAME_OR_LAST_NAME_MESSAGE);
        return false;
    }
}

const isFirstNameOrLastNameValid = (text) => /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/.test(text);



export const validatePassword = () => {
    const element = $(REGISTRATION_PASSWORD_INPUT_SELECTOR);
    const textValue = element.val();
    if (isPasswordValid(textValue)) {
        markAsValid(element, REGISTRATION_INVALID_PASSWORD_MESSAGE);
        return true;
    } else {
        if (!!textValue) markAsInvalid(element, REGISTRATION_INVALID_PASSWORD_MESSAGE);
        return false;
    }
}

const isPasswordValid = (text) => {
    const hasCapital = /[A-Z]/.test(text);
    const hasNumber = /[0-9]/.test(text);
    const isLongEnough = !!text && text.length >= 8;
    return hasNumber && hasCapital && isLongEnough;
}



export const validatePasswordRepeat = () => {
    const element = $(REGISTRATION_REPEAT_PASSWORD_INPUT_SELECTOR);
    const textValue = element.val();
    if (isPasswordRepeatValid(textValue)) {
        markAsValid(element, REGISTRATION_INVALID_REPEAT_PASSWORD_MESSAGE);
        return true;
    } else {
        if (!!textValue) markAsInvalid(element, REGISTRATION_INVALID_REPEAT_PASSWORD_MESSAGE);
        return false;
    }
}

const isPasswordRepeatValid = (text) => $(REGISTRATION_PASSWORD_INPUT_SELECTOR).val() === text;



export const validateUsername = () => {
    const element = $(REGISTRATION_USERNAME_INPUT_SELECTOR);
    const textValue = element.val();
    if (isUsernameValid(textValue)) {
        markAsValid(element, REGISTRATION_INVALID_USERNAME_MESSAGE);
        return true;
    }
    else {
        if (!!textValue) markAsInvalid(element, REGISTRATION_INVALID_USERNAME_MESSAGE);
        return false;
    }
}

const isUsernameValid = (text) => !!text && /^[a-z]+$/.test(text) && text.length >= 4;



export const validateFilename = () => {
    const element = $(REGISTRATION_PHOTO_INPUT_SELECTOR);
    if (isFilenameValid()) {
        markAsValid(element, REGISTRATION_INVALID_FILENAME_MESSAGE);
        showFileName(getFilename());
        return true;
    } else {
        hideFileName();
        if (!!getFilename()) markAsInvalid(element, REGISTRATION_INVALID_FILENAME_MESSAGE);
        return false;
    }
}

const isFilenameValid = () => {
    const filename = getFilename();
    return !!filename && (filename.endsWith('.jpg') || filename.endsWith('png'));
}

const getFilename = () => {
    const fileInputElement = $(REGISTRATION_PHOTO_INPUT_SELECTOR);
    return !!fileInputElement.prop('files').length ? fileInputElement.prop('files')[0].name : null;
}





