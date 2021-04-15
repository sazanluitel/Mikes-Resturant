"use strict";

(function () {
  console.log("Have a good day 🎈");

  //Checkbox style toggle on check
  const checkchecked = (a) => {
    if (a.checked === true) {
      a.classList.add("check");
    } else {
      a.classList.remove("check");
    }
  };

  let allcheckbox = document.querySelectorAll(".filter");
  allcheckbox.forEach((a) => {
    a.addEventListener("click", () => {
      checkchecked(a);
    });
  });

  // cart check tag
  const dec = document.querySelectorAll(".cart__wrapper .dec");
  const inc = document.querySelectorAll(".cart__wrapper .inc");

  [...dec].map((dec) => {
    dec.addEventListener("click", (e) => {
      e.preventDefault();
      let value = dec.nextElementSibling.value;
      if (value > 1) dec.nextElementSibling.value = --value;
    });
  });

  [...inc].map((inc) => {
    inc.addEventListener("click", (e) => {
      e.preventDefault();
      let elem = inc.previousElementSibling;
      let max = elem.getAttribute("max");
      max = parseInt(max);
      let value = elem.value;
      if (value < max) {
        elem.value = ++value;
      }
    });
  });
})();
