var tiempo = 5000;
const timepoInicial = 5000;

document.addEventListener('DOMContentLoaded', function() {
    // Obtén una referencia al botón con la clase "carousel-control-next"
    const nextButton = document.querySelector('.carousel-control-next');
  
    // Define la función que simulará el clic
    function simularClic() {
      nextButton.click();
      tiempo = timepoInicial;
    }
  
    // Usa setInterval para ejecutar la función simularClic cada 5 segundos (5000 milisegundos)
    setInterval(simularClic, tiempo);
  });

function tocado(){
    tiempo += 5000;
}