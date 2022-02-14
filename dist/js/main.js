"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  console.log("Have a good day :balloon:"); //Checkbox style toggle on check

  var checkchecked = function checkchecked(a) {
    if (a.checked === true) {
      a.classList.add("check");
    } else {
      a.classList.remove("check");
    }
  };

  var allcheckbox = document.querySelectorAll(".filter");

  if (allcheckbox !== null) {
    allcheckbox.forEach(function (a) {
      a.addEventListener("click", function () {
        checkchecked(a);
      });
    });
  } //Set Price


  var checkchecked2 = function checkchecked2(a) {
    // let thisone = document.getElementById(a.getAttribute("for"));
    var thisone = a.previousElementSibling;

    if (thisone.checked === true) {
      console.log("checked");
      thisone.classList.add("check");
    } else {
      thisone.classList.remove("check");
    }
  };

  var setprice = function setprice(a, b) {
    var tar = "target-" + a;
    document.getElementById(tar).innerHTML = b;
  };

  var alloptionsize = document.querySelectorAll(".size-item label");

  if (alloptionsize !== null) {
    alloptionsize.forEach(function (a) {
      a.addEventListener("mouseover", function () {
        setprice(a.getAttribute("data-name"), a.getAttribute("data-price"));
      });
      a.addEventListener("click", function () {
        checkchecked2(a);
      });
    });
  } //Toggle The Text SeeAll


  var seall = document.getElementById("seeall");
  var seaclick = 0;

  if (seall !== null) {
    seall.addEventListener("click", function () {
      if (seaclick % 2 === 0) {
        seall.innerHTML = "Close";
      } else {
        seall.innerHTML = "See All";
      }

      seaclick++;
    });
  } // cart check tag


  var dec = document.querySelectorAll(".cart__wrapper .dec");
  var inc = document.querySelectorAll(".cart__wrapper .inc");

  _toConsumableArray(dec).map(function (dec) {
    dec.addEventListener("click", function (e) {
      e.preventDefault();
      var value = dec.nextElementSibling.value;
      if (value > 1) dec.nextElementSibling.value = --value;
      var event = new Event("change");
      dec.nextElementSibling.dispatchEvent(event);
      priceInc(e, value);
    });
  });

  _toConsumableArray(inc).map(function (inc) {
    inc.addEventListener("click", function (e) {
      e.preventDefault();
      var elem = inc.previousElementSibling;
      var max = elem.getAttribute("max");
      max = parseInt(max);
      var value = elem.value;

      if (value < max) {
        elem.value = ++value;
        priceInc(e, value);
        var event = new Event("change");
        elem.dispatchEvent(event);
      }
    });
  }); // increse price


  var priceInc = function priceInc(e, value) {
    var priceElem = e.currentTarget.parentNode.nextElementSibling.querySelector("b");

    if (priceElem) {
      var price = priceElem.getAttribute("price");
      price = (parseFloat(price) * value).toFixed(2);
      priceElem.innerText = price;
    }
  }; //Veg Check


  var raditems = document.querySelectorAll(".radio-item label");

  if (raditems !== null) {
    raditems.forEach(function (a) {
      a.addEventListener("click", function () {
        a.classList.toggle("check");
      });
    });
  } //Click event for the branches


  var maindroppe = document.querySelector(".droppe");

  if (maindroppe !== null) {
    maindroppe.addEventListener("mouseover", function () {
      maindroppe.classList.add("show");
    });
    maindroppe.addEventListener("mouseleave", function () {
      maindroppe.classList.remove("show");
    });
  }

  var allsub = document.querySelectorAll(".subdroppe");

  if (allsub !== null) {
    allsub.forEach(function (a) {
      a.addEventListener("mouseover", function () {
        a.classList.add("show");
      });
      a.addEventListener("mouseleave", function () {
        a.classList.remove("show");
      });
    });
  } //Signup Login toging


  var logmod = document.querySelector(".login");
  var signmod = document.querySelector(".signup");
  var tologin = document.querySelector("#loginbtn");
  var tosign = document.querySelector("#signbtn");

  if (tosign !== null) {
    tosign.addEventListener("click", function () {
      logmod.classList.remove("active");
      signmod.classList.add("active");
    });
  }

  if (tologin !== null) {
    tologin.addEventListener("click", function () {
      signmod.classList.remove("active");
      logmod.classList.add("active");
    });
  } //Hamburger actions


  var hamburger = document.getElementById("ham");
  var sidebar = document.querySelector(".nav--left");
  hamburger.addEventListener("click", function () {
    sidebar.classList.add("show");
  });
  document.addEventListener("click", function (e) {
    var checkit = sidebar.contains(e.target);
    var checkit2 = hamburger.contains(e.target);

    if (!checkit && !checkit2) {
      sidebar.classList.remove("show");
    }
  });
})();