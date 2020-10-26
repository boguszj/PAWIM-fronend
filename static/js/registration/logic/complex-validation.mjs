import {
    REGISTRATION_FIRST_NAME_INPUT_SELECTOR,
    REGISTRATION_LAST_NAME_INPUT_SELECTOR,
} from "../constants/form-constants.mjs";
import {
    disableSubmitButton,
    enableSubmitButton
} from "../styling/registration-styling.mjs";
import {
    validateFilename,
    validateFirstNameOrLastName,
    validatePassword,
    validatePasswordRepeat,
    validateUsername,
} from "./static-validations.mjs";
import {
    validateUsernameAvailability
} from "./dynamic-validations.mjs";

export const validateAllOnChange = () => {
    const syncValid = validateOnKeyUp();
    const onChangeValid = validateOnChangeOnly();
    const asyncValidPromise = validateAsyncOnChangeOnly();
    asyncValidPromise.then(asyncValid => handleValidity(asyncValid && syncValid && onChangeValid));
}

export const validateOnKeyUp = () => {
    const usernameValid = validateUsername();
    const firstNameValid = validateFirstNameOrLastName($(REGISTRATION_FIRST_NAME_INPUT_SELECTOR));
    const lastNameValid = validateFirstNameOrLastName($(REGISTRATION_LAST_NAME_INPUT_SELECTOR));
    const passwordValid = validatePassword();
    const repeatPasswordValid = validatePasswordRepeat();
    return usernameValid && firstNameValid && lastNameValid && passwordValid && repeatPasswordValid;
};

export const validateOnChangeOnly = () => validateFilename();

const validateAsyncOnChangeOnly = async () => validateUsernameAvailability();

const handleValidity = (valid) => {
    if (valid) enableSubmitButton();
    else disableSubmitButton();
}