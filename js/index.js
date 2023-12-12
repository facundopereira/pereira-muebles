let viewMore = document.getElementsByClassName("view-more")


function mostrarMas(){
    let btnViewMore = document.getElementById("view-more")
    for(i=0; i<viewMore.length; i++){
        if(window.getComputedStyle(viewMore[i]).display === "none"){
            viewMore[i].style.display = "block"
            btnViewMore.textContent = "Ver menos"
        }

        else if(window.getComputedStyle(viewMore[i]).display === "block"){
            viewMore[i].style.display = "none"
            btnViewMore.textContent = "Ver más"
        }
    }
}


function fullScreen(event) {
    let imagenClickeada = event.target
    imagenClickeada.classList.toggle('imagen-fullscreen');
    console.log(imagenClickeada)
}