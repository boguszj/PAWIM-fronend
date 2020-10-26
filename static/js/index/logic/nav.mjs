import {
    MAIN_SELECTOR,
    NAV_HOME_SELECTOR,
    NAV_REGISTRATION_SELECTOR,
    HOME_HTML_RELATIVE_PATH,
    REGISTRATION_HTML_RELATIVE_PATH,
} from '../constants/index-constants.mjs';

import { markAsActive } from "../styling/nav-bar-styling.mjs";
import { registrationInit } from "../../registration/registration-init.mjs";

export const loadHomePage = () => {
    loadPage(HOME_HTML_RELATIVE_PATH, NAV_HOME_SELECTOR);
}

export const loadRegistrationPage = () => {
    loadPage(REGISTRATION_HTML_RELATIVE_PATH, NAV_REGISTRATION_SELECTOR, registrationInit);
}

const loadPage = (htmlRelativePath, navElementSelector, init) => {
    const contentElement = $(MAIN_SELECTOR);
    const navElement = $(navElementSelector);
    markAsActive(navElement);
    contentElement.load(htmlRelativePath, init);
}

export const setupNavListeners = () => {
    $(NAV_HOME_SELECTOR).click(loadHomePage);
    $(NAV_REGISTRATION_SELECTOR).click(loadRegistrationPage);
}