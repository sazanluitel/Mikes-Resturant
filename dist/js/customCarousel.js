"use strict";

window.addEventListener("DOMContentLoaded", function (event) {
  var parent = document.querySelector(".carousel");
  var prev = parent.querySelector(".prev");
  var next = parent.querySelector(".next");
  next.addEventListener("click", function (e) {
    e.preventDefault();
    var active = parent.querySelector(".active").nextElementSibling;
    parent.querySelector(".active").classList.remove("active");

    if (active) {
      scroll(active);
    } else {
      scroll(parent.querySelector(".image-container").firstElementChild);
    }
  });
  prev.addEventListener("click", function (e) {
    e.preventDefault();
    var active = parent.querySelector(".active").previousElementSibling;
    parent.querySelector(".active").classList.remove("active");

    if (active) {
      scroll(active);
    } else {
      scroll(parent.querySelector(".image-container").lastElementChild);
    }
  });

  var scroll = function scroll(elem) {
    elem.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
    elem.classList.add("active");
  };
});