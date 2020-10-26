import { MODAL_SELECTOR } from "../constants/index-constants.mjs"

export const showSpinner = () => $(MODAL_SELECTOR).modal('show');

export const hideSpinner = () => $(MODAL_SELECTOR).modal('hide');