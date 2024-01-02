let viewMore = document.getElementsByClassName("view-more");
let imagenes = document.getElementsByClassName("img");
let contador = 0;

document.addEventListener("DOMContentLoaded", function () {
  const btnViewMore = document.getElementById("view-more");
  const overlay = document.getElementById("overlay");
  const imgSliderShow = document.getElementById("img_slidershow");
  const btnAtras = document.getElementById("atras");
  const btnAdelante = document.getElementById("adelante");
  const btnCerrar = document.getElementById("cerrar");

  console.log(imgSliderShow, btnAdelante, btnAtras, btnCerrar);
  function clickEnImagen(event) {
    imgSliderShow.src = event.src;
    console.log(event.getAttribute("data-numero"));
    contador = event.getAttribute("data-numero");
    console.log(event.getAttribute(`${contador.toString()}`));
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
  }
  Array.from(imagenes).forEach(function (imagen) {
    imagen.addEventListener("click", function () {
      clickEnImagen(imagen);
    });
  });

//movimiento entre las imagenes con el teclado
  document.addEventListener("keydown", function (event) {
      if(btnViewMore.textContent === "Ver menos"){
          if ((event.key === "Escape" || event.key === "Esc") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")) {
              overlay.style.opacity = 0;
              overlay.style.visibility = "hidden";
              contador = 0;
            }
            if((event.key === "ArrowLeft") && (contador === "0" || contador === 0) && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                contador = 5;
                imgSliderShow.src = imagenes[`${contador.toString()}`].src;
            }else if ((event.key === "ArrowLeft") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                contador--;
                imgSliderShow.src = imagenes[`${contador.toString()}`].src;
            }
            
            if((event.key === "ArrowRight") && (contador === "5" || contador === 5) && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                contador = 0;
                imgSliderShow.src = imagenes[`${contador.toString()}`].src;
            }else if((event.key === "ArrowRight") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")) {
                contador++;
                imgSliderShow.src = imagenes[`${contador.toString()}`].src;
            }
        }else if(btnViewMore.textContent != "Ver menos"){
            if ((event.key === "Escape" || event.key === "Esc") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")) {
                overlay.style.opacity = 0;
                overlay.style.visibility = "hidden";
                contador = 0;
              }
              if((event.key === "ArrowLeft") && (contador === "0" || contador === 0) && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                  contador = 2;
                  imgSliderShow.src = imagenes[`${contador.toString()}`].src;
              }else if ((event.key === "ArrowLeft") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                  contador--;
                  imgSliderShow.src = imagenes[`${contador.toString()}`].src;
              }
              
              if((event.key === "ArrowRight") && (contador === "2" || contador === 2) && (overlay.opacity != 0 && overlay.style.visibility != "hidden")){
                  contador = 0;
                  imgSliderShow.src = imagenes[`${contador.toString()}`].src;
              }else if((event.key === "ArrowRight") && (overlay.opacity != 0 && overlay.style.visibility != "hidden")) {
                  contador++;
                  imgSliderShow.src = imagenes[`${contador.toString()}`].src;
              }
          }
     });

        
//eventos al clickear en los botones del overlay
//boton para cerrar el overlay clickeando en el boton de cerrar
  btnCerrar.addEventListener("click", function () {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
    contador = 0;
  });
//boton que va hacia atras en el overlay
  btnAtras.addEventListener("click", function () {
    if(btnViewMore.textContent === "Ver menos"){
        if (contador === "0" || contador === 0) {
          contador = 5;
        } else {
          contador--;
        }
        imgSliderShow.src = imagenes[`${contador.toString()}`].src;
    }
    else if(btnViewMore.textContent != "Ver menos"){
        if (contador === "0" || contador === 0) {
            contador = 2;
          }else {
            contador--;
          }
          imgSliderShow.src = imagenes[`${contador.toString()}`].src;
    }
  });
//boton que avanza en el overlay
  btnAdelante.addEventListener("click", function () {
    if(btnViewMore.textContent === "Ver menos"){
        if (contador === "5" || contador === 5) {
          contador = 0;
        } else {
          contador++;
        }
        imgSliderShow.src = imagenes[`${contador.toString()}`].src;
    } else if(btnViewMore.textContent != "Ver menos"){
        if (contador === "52" || contador === 2) {
          contador = 0;
        } else {
          contador++;
        }
        imgSliderShow.src = imagenes[`${contador.toString()}`].src;
    }
  });
});

for (i = 0; i < imagenes.length; i++) {
  let numero = imagenes[i].getAttribute("data-numero");
  let imagen = imagenes[i].getAttribute("src");
  console.log(imagen);
}

function mostrarMas() {
  let btnViewMore = document.getElementById("view-more");
  for (i = 0; i < viewMore.length; i++) {
    if (window.getComputedStyle(viewMore[i]).display === "none") {
      viewMore[i].style.display = "block";
      btnViewMore.textContent = "Ver menos";
    } else if (window.getComputedStyle(viewMore[i]).display === "block") {
      viewMore[i].style.display = "none";
      btnViewMore.textContent = "Ver más";
    }
  }
}
