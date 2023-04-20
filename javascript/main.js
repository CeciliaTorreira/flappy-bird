// * GLOBAL VARIABLES
const splashScreenDOM = document.querySelector("#splash-screen")     //! Seleccionamos por ID lo que sería la pantalla inicial.  
const gameOverScreenDOM = document.querySelector("#gameover-screen") //! Eventualmente necesitaremos la pantalla de Game Over.
const canvas = document.querySelector("#my-canvas") //! Lienzo del juego. 
const startButtonDOM = document.querySelector("#start-btn") //! El botón de Start tendrá su funcionalidad así que lo necesitamos como variable
const replayButtonDOM = document.querySelector("#restart-btn") // ! Botón para reiniciar el juego tras game over

const ctx = canvas.getContext("2d")

let gameObj;  //! De esta manera tenemos acceso a esta variable en cualquier lugar de mi código ya que podemos inicializarla después
              //! VARIABLE VACÍA


// * STATE MANAGEMENT FUNCTIONS //? Sección de funciones

const startGame = () => {
console.log("Intentando iniciar el juego")

//1. Cambiar las pantallas del juego.
splashScreenDOM.style.display = "none";  //! Block, inline, flex, none 
canvas.style.display = "block"; //? Con block lo mostraremos como elemento de bloque

//2. Crear los elementos del juego.
//? Vamos a crear una clase específica para nuestro juego. //! Archivo Game.js 
gameObj = new Game()  //! Usamos la clase creada en Game.js y creamos una variable con ella. //! INICIALIZAMOS la variable gameObj aquí
console.log(gameObj)

//3. Iniciar el bucle del juego (recursión.)
gameObj.gameLoop()
}


const restartGame = () => {
    gameOverScreenDOM.style.display = "none"; //! Ocultamos la pantalla de Game Over
    canvas.style.display = "block";  //! Mostramos el canvas
    gameObj = new Game();  //! Creamos una nueva instancia de juego
    gameObj.gameLoop();  //! Iniciarmos la recursión

}




// * ADD EVENT LISTENERS // En Main.js tenemos los AddEventListeners organizados

startButtonDOM.addEventListener("click", startGame)  //! --> EJECUTA STARTGAME
replayButtonDOM.addEventListener("click", restartGame); 

window.addEventListener("keydown", (event)=>{       //! Esto sucederá al pulsar cualquier tecla ya que no especificamos cuál   
    if (event.code === "Space"){        //! EVENT.CODE
    gameObj.birdObj.jump()  
    }  
}) 

// todo Cambiarlo para que solo suceda cuando pulsamos barra espaciadora // Hecho


