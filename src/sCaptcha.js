document.currentScript =
  document.currentScript ||
  (function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();

var sCaptchaClones = {};

function sCaptchaGenNewID() {
  var newID = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 20; i++) {
    newID += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  if (newID in sCaptchaClones) {
    return sCaptchaGenNewID();
  }

  return newID;
}

function sCaptcha() {
  this.sCaptcha__ID = sCaptchaGenNewID();
  sCaptchaClones[this.sCaptcha__ID] = this;
}

sCaptcha.prototype.id = "sCaptcha";

sCaptcha.prototype.icon_check =
  '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
sCaptcha.prototype.icon_loading =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#000000" stroke-width="10" r="34" stroke-dasharray="160.22122533307947 55.40707511102649"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.2048192771084336s" values="0 50 50;360 50 50" keyTimes="0;1"/></circle>';
sCaptcha.prototype.icon_exclamation =
  '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"></path></svg>';

sCaptcha.prototype.sCaptcha__icon_1 = function () {
  return `<div class="sCaptcha__icon">${this.icon_exclamation}</div>`;
};
sCaptcha.prototype.sCaptcha__icon_2 = function () {
  return `<div class="sCaptcha__icon">${this.icon_loading}</div>`;
};
sCaptcha.prototype.sCaptcha__icon_3 = function () {
  return `<div class="sCaptcha__icon">${this.icon_check}</div>`;
};

sCaptcha.prototype.sCaptcha__button = function () {
  return `<div onClick="new ${this.id}().captchaAction('${this.sCaptcha__ID}')" class="sCaptcha__button">verify my identity</div>`;
};
sCaptcha.prototype.sCaptcha__text = function () {
  return `<div class="sCaptcha__text">Verify I am not a robot</div>`;
};
sCaptcha.prototype.sCaptcha__loading = function (per) {
  return `<div class="sCaptcha__loading"><div style="width: ${per}%;" class="sCaptcha__progress"></div></div>`;
};

sCaptcha.prototype.verify = function (captcha, elem) {
  let verified = false;

  // TODO: do actual verification
  elem.innerHTML = this.captchaElementLoading(captcha, 25);

  for(let i=parseInt("aaaa", 36);i++<=parseInt("zzzzzz", 36); i++) {
    console.log(i.toString(36))
  }

  // Clean
  elem.innerHTML = this.captchaElementLoading(captcha, 100)
  
  // TODO: show end result
};

sCaptcha.prototype.captchaAction = function (id) {
  let captcha = sCaptchaClones[id];
  let elem = document.getElementsByClassName(`${captcha.id}_${id}`)[0];
  this.verify(captcha, elem);
};

sCaptcha.prototype.captchaElementLoading = function (captcha, per) {
  return `
      <div class="${captcha.id} ${captcha.id}_${captcha.sCaptcha__ID}">
        ${captcha.sCaptcha__icon_2()}
        <div class="sCaptcha__wrapper">
          ${captcha.sCaptcha__text()}
          ${captcha.sCaptcha__loading(per)}
        </div>
      </div>`;
};

sCaptcha.prototype.captchaElement = function () {
  return `
    <div class="${this.id} ${this.id}_${this.sCaptcha__ID}">
        ${this.sCaptcha__icon_1()}
        <div class="sCaptcha__wrapper">
          ${this.sCaptcha__text()}
          ${this.sCaptcha__button()}
        </div>
      </div>`;
};

sCaptcha.prototype.generateCaptcha = function () {
  document.write(this.captchaElement());
};

new sCaptcha().generateCaptcha();
