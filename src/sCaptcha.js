var sCaptcha = {
  id: "sCaptcha",

  sCaptcha__icon: `<div class="sCaptcha__icon"></div>`,
  sCaptcha__button: `<div class="sCaptcha__button"></div>`,
  sCaptcha__text: `<div class="sCaptcha__text"></div>`,

  captchaAction() {},

  captchaElement() {
    return `
      <div id="${this.id}">
        ${this.sCaptcha__icon}
        <div class="sCaptcha__wrapper">
          ${this.sCaptcha__text}
          ${this.sCaptcha__button}
        </div>
      </div>`;
  },

  generateCaptcha() {
    document.write(this.captchaElement());
  }
};

sCaptcha.generateCaptcha();
