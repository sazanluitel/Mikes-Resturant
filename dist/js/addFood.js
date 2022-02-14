"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener("DOMContentLoaded", function (event) {
  var food = document.querySelectorAll(".menu-row .menu-item");
  food = _toConsumableArray(food);
  var addFood = document.getElementById("addFood");
  food.map(function (elem, index) {
    elem.addEventListener("click", function (event) {
      event.preventDefault();
      var active = event.currentTarget; // form card

      var img = active.querySelector("img").getAttribute("src");
      var title = active.querySelector(".menu-infos h3").innerText;
      var price = active.querySelector(".price h2 strong").innerText; // assigning

      addFood.querySelector(".image img").setAttribute("src", img);
      addFood.querySelector("form .section--title.white").innerText = title;
      addFood.querySelector("form .totalPrice b").innerText = price;
      addFood.querySelector("form .totalPrice b").setAttribute("price", price);
      addFood.classList.add("show");
    });
  });
  addFood.querySelector("button.btn-close").addEventListener("click", function (e) {
    addFood.classList.remove("show");
  }); // extra dripping

  var extraTop = document.getElementById("extraTopping");
  var extraTopForm = extraTop.querySelector("form");
  extraTop.addEventListener("shown.bs.modal", function () {// extraTopForm.reset();
  });
  extraTopForm.querySelector(".buttons .btn.btn-secondary").addEventListener("click", function (e) {
    extraTopForm.reset();
  });
  extraTopForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var listTop = extraTopForm.querySelectorAll("input[name='extra']:checked");
    listTop = _toConsumableArray(listTop);
    var price = [];
    var totalPrice = parseFloat(document.querySelector("#addFood .totalPrice b").getAttribute("price"));
    var value = parseInt(document.querySelector("#addFood .cart__wrapper input").value);
    listTop.map(function (elem, index) {
      var tempP = elem.nextElementSibling.getAttribute("price");
      price.push(tempP);
      document.querySelector("#addFood .totalPrice b").innerText = ((totalPrice + tempP) * value).toFixed(2);
    });
    var myModal = new bootstrap.Modal(extraTop, {
      keyboard: true
    });
  });
});