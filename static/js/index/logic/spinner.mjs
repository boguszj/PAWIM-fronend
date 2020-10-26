import { MODAL_SELECTOR } from "../constants/index-constants.mjs"

export const showSpinner = () => $(MODAL_SELECTOR).modal('show');

export const hideSpinner = () => {
    $(MODAL_SELECTOR).on('shown.bs.modal', () => {
        $(MODAL_SELECTOR).modal('hide');
        $(MODAL_SELECTOR).on('shown', () => true);
    })
}