const Turbolinks = require("turbolinks");
Turbolinks.start();

/**
 * Import and configure modules
 */

import ModuleTemplate from "./modules/ModuleTemplate";
const myModule = new ModuleTemplate();

/**
 * Initialize app
 */

const MODULES = [ myModule ];

document.addEventListener("turbolinks:load", function() {
  MODULES.forEach(module => module.load && module.load());
});

document.addEventListener("turbolinks:before-cache", function() {
  MODULES.forEach(module => module.beforeCache && module.beforeCache());
});
