//SCRIPT PARA EL SLIDER SHOW

let slider = document.querySelector(".containerSlide");
let sliderIndividual = document.querySelectorAll(".slide");
let contador = 1;
let width = sliderIndividual[0].clientWidth; //es para calcular el ancho del primer slider
let next = document.querySelector(".next");
let previus = document.querySelector(".prev");

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth; //esta funcion es para que cada vez que el usuario gire la pantalla se actualice el width
});

setInterval(function () {
  slides();
}, 5000);

next.addEventListener("click", function (event) {
  event.preventDefault();
  slider.style.transform = "translate(" + (-width * contador) + "px)";
  slider.style.transition = "transform 2s";
  contador++;
    if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s ease-in-out";
      contador = 1;
    }, 1500)
  }
})


function slides() {
  slider.style.transform = "translate(" + (-width * contador) + "px)"; //hace un barrido total del width actual
  slider.style.transition = "transform 2s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s ease-in-out";
      contador = 1;
    }, 1500)
  }
}
