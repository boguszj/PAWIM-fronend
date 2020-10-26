import { loadHomePage } from "./index/logic/nav.mjs";
import { setupNavListeners } from "./index/logic/nav.mjs";


$(document).ready(() => {
    loadHomePage();
    setupNavListeners();
})