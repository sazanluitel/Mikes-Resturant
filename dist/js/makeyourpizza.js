"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener("DOMContentLoaded", function (event) {
  // pizza draw
  var pizzaLeftSelect = document.getElementById("firsthalf");
  var pizzaLeft = document.getElementById("pizza--left");
  var pizzaRightSelect = document.getElementById("secondhalf");
  var pizzaRight = document.getElementById("pizza--right");
  pizzaLeftSelect.addEventListener("change", function (e) {
    var src = e.currentTarget.selectedOptions[0].getAttribute("data-src"); // console.log(src);

    pizzaLeft.setAttribute("src", src);
  });
  pizzaRightSelect.addEventListener("change", function (e) {
    var src = e.currentTarget.selectedOptions[0].getAttribute("data-src"); // console.log(src);

    pizzaRight.setAttribute("src", src);
  }); // everything for the shake of prize
  // init all input

  var pizzaSize = document.getElementById("size");
  var primaryDip = document.getElementById("primarydip");
  var itemCount = document.getElementById("itemCount"); // init price variable

  var priceSize = parseFloat(parseFloat(pizzaSize.selectedOptions[0].getAttribute("data-price")).toFixed(2)),
      pricePrimaryDip = 0,
      priceExtraDip = 0,
      priceTotal = 0,
      count = 1; // setting price size;

  pizzaSize.addEventListener("change", function (e) {
    priceSize = e.currentTarget.selectedOptions[0].getAttribute("data-price");
    priceSize = parseFloat(priceSize);
    getTotalPrice();
  }); // setting pricePrimaryDip;

  primaryDip.addEventListener("change", function (e) {
    pricePrimaryDip = e.currentTarget.selectedOptions[0].getAttribute("data-price");
    pricePrimaryDip = parseFloat(pricePrimaryDip).toFixed(2);
    pricePrimaryDip = parseFloat(pricePrimaryDip);
    getTotalPrice();
  }); //setting  total cart number

  itemCount.addEventListener("change", function (e) {
    count = parseInt(e.currentTarget.value);
    getTotalPrice();
  }); //   addind dipboxes

  var extraTop = document.getElementById("extraTopping");
  var myModal = new bootstrap.Modal(extraTop);
  extraTop.addEventListener("submit", function (e) {
    var elem = document.querySelector(".dips .item").cloneNode(true);
    elem.classList.remove("d-none");

    _toConsumableArray(document.querySelectorAll(".dips .item")).forEach(function (elem) {
      elem.remove();
    });

    e.preventDefault();
    var listTop = extraTop.querySelectorAll("input[name='extra']:checked");
    listTop = _toConsumableArray(listTop);
    myModal.hide();
    priceExtraDip = 0;
    listTop.forEach(function (item) {
      document.querySelector(".dips").innerHTML += elem.outerHTML;
      priceExtraDip += parseFloat(item.nextElementSibling.getAttribute("price"));
    });
    priceExtraDip = parseFloat(priceExtraDip.toFixed(2));
    getTotalPrice();
  });

  var getTotalPrice = function getTotalPrice() {
    debugger;
    priceTotal = (priceSize + pricePrimaryDip + priceExtraDip) * count;
    priceTotal = parseFloat(priceTotal.toFixed(2));
    console.log("priceSize", priceSize);
    console.log("pricePrimaryDip", pricePrimaryDip);
    console.log("count ", count);
    console.log("priceExtraDip ", priceExtraDip);
    console.log("priceTotal", priceTotal);
    document.getElementById("totalPrice").innerText = priceTotal;
  };
});