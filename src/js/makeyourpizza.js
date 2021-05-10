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
  extraTop.addEventListener("submit", (e) => {
    e.preventDefault();
    let listTop = extraTopForm.querySelectorAll("input[name='extra']:checked");
    listTop = [...listTop];
  });
});
