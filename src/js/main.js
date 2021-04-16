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

  //Set Price
  const setprice = (a, b) => {
    let tar = "target-" + a;
    document.getElementById(tar).innerHTML = b;
  };
  let alloptionsize = document.querySelectorAll(".size-item label");
  alloptionsize.forEach((a) => {
    a.addEventListener("mouseover", () => {
      setprice(a.getAttribute("data-name"), a.getAttribute("data-price"));
    });
  });

  //Select Size and Change Price
  // let alloptionsize = document.querySelectorAll(".size-item input");
  // let currentactiveprice = alloptionsize[0];
  // currentactiveprice.classList.add("checked-price");
  // alloptionsize.forEach((a) => {
  //   //Handling CLick
  //   a.addEventListener("click", () => {
  //     currentactiveprice.classList.remove("checked-price");
  //     currentactiveprice = a;
  //     currentactiveprice.classList.add("checked-price");
  //   });
  // });
  // //FOr Price switch
  // var activecont = document.querySelector(".selected-price");
  // alloptionsize.forEach((tab) => {
  //   tab.addEventListener("click", () => {
  //     activecont.classList.remove("selected-price");
  //     var find = "target-" + tab.id;
  //     activecont = document.getElementById(find);
  //     activecont.classList.add("selected-price");
  //     console.log(activecont);
  //   });
  // });

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
