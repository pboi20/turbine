class ModuleTemplate {
  load() {
    this.el = document.querySelector("[data-module='base-module']");

    if (this.el) {
      this.initTargets();
    }
  }

  initTargets() {
    this.mainTarget = this.el.querySelector("[data-target='base-module-main']");

    // ...
  }

  beforeCache() {
    // ...
  }
}

export default ModuleTemplate;
