import {
    REGISTRATION_GENDER_MALE_SELECTOR,
    REGISTRATION_GENDER_SWITCH_SELECTOR,
    REGISTRATION_GENDER_FEMALE_VALUE,
    REGISTRATION_GENDER_MALE_VALUE,
} from "../constants/form-constants.mjs";
import {markGenderAsFemale, markGenderAsMale} from "../styling/registration-styling.mjs";

export const switchGender = (element) => {
    if ($(element.target).attr('id') === $(REGISTRATION_GENDER_MALE_SELECTOR).attr('id')) {
        $(REGISTRATION_GENDER_SWITCH_SELECTOR).val(REGISTRATION_GENDER_MALE_VALUE);
        markGenderAsMale();
    } else {
        $(REGISTRATION_GENDER_SWITCH_SELECTOR).val(REGISTRATION_GENDER_FEMALE_VALUE);
        markGenderAsFemale();
    }
}

export const setupInitialGenderValueToFemale = () => {
    $(REGISTRATION_GENDER_SWITCH_SELECTOR).val(REGISTRATION_GENDER_FEMALE_VALUE);
}