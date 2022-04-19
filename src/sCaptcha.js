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
        newID += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
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

sCaptcha.prototype.check =
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
sCaptcha.prototype.rightArrow =
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
sCaptcha.prototype.cubes_iamge =
    '<svg width="943" height="429" viewBox="0 0 943 429" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="943" height="429" fill="white"/><path d="M653 289L698 314L653 339L608 314L653 289Z" fill="#C4C4C4"/><path d="M653 239L698 264L653 289L608 264L653 239Z" fill="#F1F3F4"/><path d="M698 264V314L653 339V289L698 264Z" fill="#D1D7E0"/><path d="M608 264V314L653 339V289L608 264Z" fill="#E1E5EA"/><path d="M743 289L788 314L743 339L698 314L743 289Z" fill="#C4C4C4"/><path d="M743 239L788 264L743 289L698 264L743 239Z" fill="#CACFF6"/><path d="M788 264V314L743 339V289L788 264Z" fill="#D1D7E0"/><path d="M698 264V314L743 339V289L698 264Z" fill="#E1E5EA"/><path d="M833 289L878 314L833 339L788 314L833 289Z" fill="#C4C4C4"/><path d="M833 239L878 264L833 289L788 264L833 239Z" fill="#F1F3F4"/><path d="M878 264V314L833 339V289L878 264Z" fill="#D1D7E0"/><path d="M788 264V314L833 339V289L788 264Z" fill="#E1E5EA"/><path d="M698 214L743 239L698 264L653 239L698 214Z" fill="#C4C4C4"/><path d="M698 164L743 189L698 214L653 189L698 164Z" fill="#F1F3F4"/><path d="M743 189V239L698 264V214L743 189Z" fill="#B1BAE7"/><path d="M653 189V239L698 264V214L653 189Z" fill="#E1E5EA"/><path d="M788 214L833 239L788 264L743 239L788 214Z" fill="#C4C4C4"/><path d="M788 164L833 189L788 214L743 189L788 164Z" fill="#F1F3F4"/><path d="M833 189V239L788 264V214L833 189Z" fill="#D1D7E0"/><path d="M743 189V239L788 264V214L743 189Z" fill="#BFC6EF"/><path d="M743 139L788 164L743 189L698 164L743 139Z" fill="#C4C4C4"/><path d="M743 89.0001L788 114L743 139L698 114L743 89.0001Z" fill="#F1F3F4"/><path d="M788 114V164L743 189V139L788 114Z" fill="#D1D7E0"/><path d="M698 114V164L743 189V139L698 114Z" fill="#E1E5EA"/><path d="M743 289L698 264" stroke="#4656E1" stroke-width="2" stroke-miterlimit="4.81765" stroke-dasharray="11 11"/><path d="M743 289L788 264V214L743 189L698 214.5V264" stroke="#4656E1" stroke-width="2" stroke-miterlimit="4.81765" stroke-dasharray="11 11"/><rect x="170" y="189" width="573" height="100" fill="url(#paint0_linear_2_2)" fill-opacity="0.6"/><path d="M170 239L215 264L170 289L125 264L170 239Z" fill="#394AED"/><path d="M170 189L215 214L170 239L125 214L170 189Z" fill="#6171FF"/><path d="M215 214V264L170 289V239L215 214Z" fill="#2B39C2"/><path d="M125 214V264L170 289V239L125 214Z" fill="#394AED"/><defs><linearGradient id="paint0_linear_2_2" x1="170" y1="239" x2="717.477" y2="238.949" gradientUnits="userSpaceOnUse"><stop stop-color="#D9DDFE"/><stop offset="1" stop-color="#394AED" stop-opacity="0"/></linearGradient></defs></svg>';
sCaptcha.prototype.icon_exclamation =
    '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>';

sCaptcha.prototype.id = "sCaptcha";

sCaptcha.prototype.sCaptcha__icon_secure = function () {
    return `<div class="secureIcon">${this.icon_exclamation}</div>`;
};

sCaptcha.prototype.sCaptcha__cubes_image = function () {
    return `<div class="cubesImage">${this.cubes_iamge}</div>`;
};

sCaptcha.prototype.sCaptcha__right_arrow = function () {
    return `<div class="rightArrow" onClick="event.stopPropagation();" >${this.rightArrow}</div>`;
};

sCaptcha.prototype.sCaptcha__check = function () {
    return `<div class="check" onClick="event.stopPropagation();" >${this.check}</div>`;
};

sCaptcha.prototype.captchaPuzzle = function () {
    return `
    <div class="dCube">
      ${this.sCaptcha__right_arrow()}
      ${this.sCaptcha__check()}
    </div>
  `;
};

sCaptcha.prototype.captchaElement = function () {
    return `
    <div class="${this.id} ${this.id}_${this.sCaptcha__ID}">
      ${this.sCaptcha__icon_secure()}
      <h1>Security verification</h1>
      <p>
        Drag the block inside the marked area in order to continue
      </p>
      ${this.sCaptcha__cubes_image()}
      <div class="captchaPuzzleWrapper">
        <div style="width: 100%; position: relative;">
          ${this.captchaPuzzle()}
        </div>
        <p>Drag till the end</p>
      </div>
    </div>`;
};

sCaptcha.prototype.defaultOptions = {
  cb: () => {}
}

sCaptcha.prototype.generateCaptcha = function (options = {}) {

    'cb' in options || (options.cb = this.defaultOptions.cb);

    document.write(this.captchaElement());
    let selectParentQuery = `div[class="${this.id} ${this.id}_${this.sCaptcha__ID}"] > div[class="captchaPuzzleWrapper"]`;
    let done = false;
    let final_pos;

    $(`${selectParentQuery} > div > div.dCube`).draggable({
        axis: "x",
        containment: "parent",
        revert: false,

        drag: (event, ui) => {
            if (done) {
                ui.position = final_pos;
                return;
            }

            if ($(selectParentQuery).width() - 40 == ui.position.left) {
                done = true;
                final_pos = ui.position;

                $(`${selectParentQuery} > div > div.dCube`).addClass("done");
                options.cb();
            }
        },
    });
};
