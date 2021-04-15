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
})();
