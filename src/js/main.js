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
  if (allcheckbox !== null) {
    allcheckbox.forEach((a) => {
      a.addEventListener("click", () => {
        checkchecked(a);
      });
    });
  }

  //Set Price
  const checkchecked2 = (a) => {
    // let thisone = document.getElementById(a.getAttribute("for"));
    let thisone = a.previousElementSibling;

    console.log(thisone);
    console.log(thisone.checked);
    if (thisone.checked === true) {
      console.log("checked");
      thisone.classList.add("check");
    } else {
      thisone.classList.remove("check");
    }
  };
  const setprice = (a, b) => {
    let tar = "target-" + a;
    document.getElementById(tar).innerHTML = b;
  };
  let alloptionsize = document.querySelectorAll(".size-item label");
  if (alloptionsize !== null) {
    alloptionsize.forEach((a) => {
      a.addEventListener("mouseover", () => {
        setprice(a.getAttribute("data-name"), a.getAttribute("data-price"));
      });
      a.addEventListener("click", () => {
        checkchecked2(a);
      });
    });
  }

  //Toggle The Text SeeAll
  let seall = document.getElementById("seeall");
  var seaclick = 0;
  if (seall !== null) {
    seall.addEventListener("click", () => {
      if (seaclick % 2 === 0) {
        seall.innerHTML = "Close";
      } else {
        seall.innerHTML = "See All";
      }
      seaclick++;
    });
  }

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

  //Veg Check
  let raditems = document.querySelectorAll(".radio-item label");
  if (raditems !== null) {
    raditems.forEach((a) => {
      a.addEventListener("click", () => {
        a.classList.toggle("check");
      });
    });
  }

  //Click event for the branches
  let maindroppe = document.querySelector(".selected-branch");
  if (maindroppe !== null) {
    maindroppe.addEventListener("click", () => {
      maindroppe.parentNode.classList.toggle("show");
    });
  }
  let allsub = document.querySelectorAll(".subdroppe");
  if (allsub !== null) {
    allsub.forEach((a) => {
      a.addEventListener("click", () => {
        a.classList.toggle("show");
      });
    });
  }
})();
