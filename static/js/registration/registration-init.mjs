import {
    REGISTRATION_FORM_SELECTOR,
    REGISTRATION_SUBMIT_BUTTON_SELECTOR,
    REGISTRATION_GENDER_MALE_SELECTOR,
    REGISTRATION_GENDER_FEMALE_SELECTOR,
} from "./constants/form-constants.mjs";
import { mapPhotoButtonClick } from "./logic/photo-button.mjs";
import { validateAllOnChange } from "./logic/complex-validation.mjs";
import { register } from "./logic/register-button.mjs"
import { switchGender, setupInitialGenderValueToFemale } from "./logic/gender-switch.mjs";
import { validateOnKeyUp } from "./logic/complex-validation.mjs";

export const registrationInit = () => {
    setupValidationsListeners();
    mapPhotoButtonClick();
    setupInitialGenderValueToFemale();
}

const setupValidationsListeners = () => {
    $(REGISTRATION_FORM_SELECTOR).change(validateAllOnChange);
    $(REGISTRATION_FORM_SELECTOR).keyup(validateOnKeyUp);
    $(REGISTRATION_GENDER_MALE_SELECTOR).click(switchGender);
    $(REGISTRATION_GENDER_FEMALE_SELECTOR).click(switchGender);
    $(REGISTRATION_SUBMIT_BUTTON_SELECTOR).click(register);
}