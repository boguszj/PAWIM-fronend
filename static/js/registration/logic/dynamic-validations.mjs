import {
    REGISTRATION_USERNAME_AVAILABILITY_VALIDATION_ENDPOINT,
    REGISTRATION_USERNAME_NOT_AVAILABLE_MESSAGE,
    REGISTRATION_AVAILABLE_USERNAME_RESPONSE_VALUE,
    REGISTRATION_USERNAME_INPUT_SELECTOR
} from '../constants/form-constants.mjs'
import {
    markAsInvalid,
    markAsValid
} from "../styling/registration-styling.mjs";

export const validateUsernameAvailability = async () => {
    const element = $(REGISTRATION_USERNAME_INPUT_SELECTOR);
    const textValue = element.val();
    if (!textValue) return new Promise(() => true);
    return getUsernameAvailabilityResponse(textValue)
        .then(response => response.json())
        .then(json => {
            const isAvailable = checkUsernameValidityResponse(json, textValue);
            return handleUsernameAvailability(element, isAvailable);
        })
}

const getUsernameAvailabilityResponse = (textValue) => fetch(`${ REGISTRATION_USERNAME_AVAILABILITY_VALIDATION_ENDPOINT }/${ textValue }`);

const checkUsernameValidityResponse = (json, textValue) => json && json[textValue] === REGISTRATION_AVAILABLE_USERNAME_RESPONSE_VALUE;

const handleUsernameAvailability = (element, isAvailable) => {
    if (isAvailable) {
        markAsValid(element, REGISTRATION_USERNAME_NOT_AVAILABLE_MESSAGE);
        return true;
    } else {
        markAsInvalid(element, REGISTRATION_USERNAME_NOT_AVAILABLE_MESSAGE);
        return false;
    }
}