window.addEventListener("DOMContentLoaded", (event) => {
  // pizza draw
  const pizzaLeftSelect = document.getElementById("firsthalf");
  const pizzaLeft = document.getElementById("pizza--left");
  const pizzaRightSelect = document.getElementById("secondhalf");
  const pizzaRight = document.getElementById("pizza--right");

  pizzaLeftSelect.addEventListener("change", (e) => {
    let src = e.currentTarget.selectedOptions[0].getAttribute("data-src");
    console.log(src);
    pizzaLeft.setAttribute("src", src);
  });
  pizzaRightSelect.addEventListener("change", (e) => {
    let src = e.currentTarget.selectedOptions[0].getAttribute("data-src");
    console.log(src);
    pizzaRight.setAttribute("src", src);
  });

  //   addind dipboxes
  const extraTop = document.getElementById("extraTopping");
  let myModal = new bootstrap.Modal(extraTop);
  extraTop.addEventListener("submit", (e) => {
    let elem = document.querySelector(".dips .item").cloneNode(true);
    elem.classList.remove("d-none");
    [...document.querySelectorAll(".dips .item")].forEach((elem) => {
      elem.remove();
    });

    e.preventDefault();
    let listTop = extraTop.querySelectorAll("input[name='extra']:checked");
    listTop = [...listTop];
    myModal.hide();
    listTop.forEach((item) => {
      document.querySelector(".dips").innerHTML += elem.outerHTML;
    });
  });
});
