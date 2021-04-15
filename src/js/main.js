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
      checkchecked2(a);
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
})();
