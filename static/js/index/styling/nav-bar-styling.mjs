import {
    NAV_ELEMENT_ACTIVE_BOOTSTRAP_CLASS,
    NAV_LINK_SELECTOR
} from "../constants/index-constants.mjs";

export const markAsActive = (element) => {
    markAllAsNotActive();
    markSingleElementAsActive(element);
}

const markAllAsNotActive = () => {
    $(NAV_LINK_SELECTOR).removeClass(NAV_ELEMENT_ACTIVE_BOOTSTRAP_CLASS);
}

const markSingleElementAsActive = (element) => {
    element.addClass(NAV_ELEMENT_ACTIVE_BOOTSTRAP_CLASS);
}