window.addEventListener("DOMContentLoaded", (event) => {
  let food = document.querySelectorAll(".menu-row .menu-item");
  food = [...food];
  const addFood = document.getElementById("addFood");

  food.map((elem, index) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      let active = event.currentTarget;
      // form card
      let img = active.querySelector("img").getAttribute("src");
      let title = active.querySelector(".menu-infos h3").innerText;
      let price = active.querySelector(".price h2 strong").innerText;
      // assigning
      addFood.querySelector(".image img").setAttribute("src", img);
      addFood.querySelector("form .section--title.white").innerText = title;
      addFood.querySelector("form .totalPrice b").innerText = price;
      addFood.querySelector("form .totalPrice b").setAttribute("price", price);

      addFood.classList.add("show");
    });
  });

  addFood.querySelector("button.btn-close").addEventListener("click", (e) => {
    addFood.classList.remove("show");
  });

  // extra dripping
});