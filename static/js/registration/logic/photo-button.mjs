import {
    REGISTRATION_PHOTO_INPUT_SELECTOR,
    REGISTRATION_PHOTO_INPUT_BUTTON_SELECTOR
} from "../constants/form-constants.mjs";

export const mapPhotoButtonClick = () => {
    const photoInputButtonElement = $(REGISTRATION_PHOTO_INPUT_BUTTON_SELECTOR);
    const photoInputElement = $(REGISTRATION_PHOTO_INPUT_SELECTOR);
    photoInputButtonElement.click(() => photoInputElement.click());
}