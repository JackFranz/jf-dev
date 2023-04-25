const links = document.querySelectorAll(".link-redi-nav");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Eliminar la clase "activy" de todos los enlaces
    links.forEach((link) => {
      link.classList.remove("activy");
    });

    // Agregar la clase "activy" al enlace que se hizo clic
    this.classList.add("activy");
  });
});

class Follower {
  constructor({ delay = 0.2, count = 5 }) {
    this.count = count;
    this.delay = delay / 10;
    this.init();
  }

  init() {
    this.followers = [];
    this._creatCursor();
    this._creatFollowers();
    this._setSize();
    this._setInitialPos();
    this._addEventListeners();
  }

  _creatElem(className) {
    const elem = document.createElement("div");
    elem.className = className;
    document.body.appendChild(elem);
    return elem;
  }
  _creatCursor() {
    this.cursor = this._creatElem("cursor");
  }
  _creatFollowers() {
    for (let i = 0; i < this.count; i++) {
      const f = this._creatElem("follower");
      this.followers.push(f);
    }
  }
  _setSize() {
    let prev;

    this.followers.forEach((follower) => {
      !prev ? (prev = this.cursor) : null;

      const rect = prev.getBoundingClientRect();
      gsap.set(follower, {
        width: rect.width * 0.75,
        height: rect.height * 0.75,
      });
      prev = follower;
    });
  }
  _setInitialPos() {
    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
    gsap.set([this.cursor, this.followers], {
      x: this.x,
      y: this.y,
    });
  }
  _addEventListeners() {
    document.addEventListener("mousemove", (event) => {
      const e = event.touches ? event.touches[0] : event;
      this.x = e.clientX;
      this.y = e.clientY;

      gsap.to(this.cursor, { duration: 0, x: this.x, y: this.y });
      gsap.to(this.followers, {
        duration: 0.2,
        x: this.x,
        y: this.y,
        stagger: this.delay,
      });
    });
  }
}

new Follower({ delay: 0.2, count: 5 });

//

const CursorPointer = document.querySelector('.cursor');
const FollowerPointer = document.querySelectorAll('.follower');
const NvabarBottom = document.querySelector('.bottom-nav-ic');

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  CursorPointer.remove();
  NvabarBottom.style.display="flex";
  FollowerPointer.forEach((follower) => {
    follower.remove();
  });
}

//

const iconosNav = document.querySelectorAll(".iicony-nabboto");

iconosNav.forEach((icono) => {
  icono.addEventListener("click", function () {
// Eliminar la clase "activy" de todos los enlaces
iconosNav.forEach((icono) => {
icono.classList.remove("actived");
});

// Agregar la clase "activy" al enlace que se hizo clic
this.classList.add("actived");
});
});

//

function validar() {
  var nombre = document.getElementById("name-053c").value.trim();
  var email = document.getElementById("email-5450").value.trim();
  var mensaje = document.getElementById("message-5a14").value.trim();

  if (nombre === "" || email === "" || mensaje === "") {
    var errorMessages = document.querySelectorAll("#error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].style.display = "inline";
    }
    document.getElementById("success-message").style.display = "none";
    return false;
  } else {
    var errorMessages = document.querySelectorAll("#error-message");
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].style.display = "none";
    }
    document.getElementById("success-message").style.display = "inline";
    setTimeout(function() {
      document.getElementById("success-message").style.display = "none";
    }, 5000);
    return true;
  }
}

//

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader_global").style.display = "flex";
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader_global");
    loader.addEventListener("transitionend", function (event) {
      if (
        event.propertyName === "opacity" &&
        loader.classList.contains("hide")
      ) {
        loader.parentNode.removeChild(loader);
      }
    });
    setTimeout(function () {
      loader.classList.add("hide");
    }, 500);
  });
});

