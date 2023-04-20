//! CREAMOS UNA NUEVA CLASE

class Game {            //? Es buena práctica que el nombre de la clase empieza con mayúscula
 
constructor (){  // Propiedades de Game => Todos los elementos y valores iniciales que existen el juego.
//*El fondo.
this.background = new Image() 
this.background.src = "../images/bg.png"

//*Pájaro. //! Blueprint creada en Bird.js
this.birdObj = new Bird()  //! Objeto del pájaro 
 console.log(this.birdObj)

//*Tubos. 
//Prueba con uno solo
// this.tubo = new Tubo() //! Nuevo elemento de la clase creada en Tubo.js
//? Cómo controlamos muchos elementos de tubo? //! ARRAYS, CONJUNTO DE VARIOS ELEMENTOS
//? Cómo controlamos cuándo aparecen más tubos en el juego?
this.tubosArr = []; // Array vacío al que se agregarán tubos a medida que se crean.
this.tuboSeparation = 345; 

//* Game Over
this.isGameOn = true;


//*Contador.
//*Botón de pause


}


 clearCanvas = () =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
 }

 removeTubesOut = () =>{
    //Quitar los tubos del array cuando se salgan del canvas //! Importante limpiar del juego los elementos que salen del canvas.
    // Así se mejora la optimizacióm
    if (this.tubosArr[0].x - this.tubosArr[0].w < 0)
    {this.tubosArr.shift}
 }

// Métodos de Game => Todas las acciones que se realizan en el juego

//* Los tubos deben aparecer en diferentes alturas. (Math.random)
tubosSpawn = () => {
   //*Método que determina cuándo debería aparecer un tubo.
   if (this.tubosArr.length === 0 || 
    this.tubosArr[this.tubosArr.length-1].x < 400){  //? Cuando empieza el juego y el array está vacío o cuando el último tubo pase la mitad del canvas, entonces aparecerá un tubo.
   
   let randomSpawnY = Math.random() * -150  //! Queremos un resultado entre 5 y -150 aprox.
   let newTubo = new Tubo(randomSpawnY, true)   //! Nuevo elemento de la clase Tubo 
   this.tubosArr.push(newTubo);   //! De esta manera agregamos elementos al array de tubos, que deben aparecer constantemente durante el juego.
                                    //todo BONUS Los elementos deberían aparecer al final del canvas // HECHO

   //Que con cada tubo superior que aparece venga otro igual pero abajo
   let newTuboAbajo = new Tubo(randomSpawnY + this.tuboSeparation, false) //! FALSE PORQUE QUEREMOS QUE SEA LA IAMGEN DE TUBOS QUE VAN ABAJO // randomSpawnY + 300 para igualar la aparición
   this.tubosArr.push(newTuboAbajo)
   console.log(this.tubosArr.length)
}                             
}


//* Dibujar los elementos.
drawBackground = ()=> {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height) //? Con esto aparecerá nuestro fondo en el canvas.
}

//* Colisiones del pájaro contra los tubos

checkBirdCollission = () => {
    //birdObj
    //this.tubosArr

    this.tubosArr.forEach((eachTubo) =>{
    //eachTubo vs this.birdObj
    if (
        eachTubo.x < this.birdObj.x + this.birdObj.w &&
        eachTubo.x + eachTubo.w > this.birdObj.x &&
        eachTubo.y < this.birdObj.y + this.birdObj.h &&
        eachTubo.h + eachTubo.y > this.birdObj.y
      ) {
        // Collision detected!
       console.log("Te chocaste")  //! Queremos que el juego termine.
       this.gameOver()
      } 
    })
}

//* Game Over

gameOver = () =>{     //! No debe olvidarse esa funcionalidad
  // 1. Detener el juego
  this.isGameOn = false;
  // 2. Ocultar el canvas
canvas.style.display = "none";
  // 3. Mostrar la pantalla final.
  gameOverScreenDOM.style.display = "flex";
}


// todo BONUS Aumento del contador
// todo BONUS EL juego puede pausarse.





 gameLoop = () => {
    console.log("Ejecutando recursión del juego")

   //1. Limpieza del canvas //! Si tenemos un fondo no afecta pero sí en caso de que lo tuviésemos
   //todo 
   this.clearCanvas()

   //2. Acciones y movimientos de los elementos

   this.birdObj.gravity()  //? Invocamos la caída del pájaro que sucederá constantemente (archivo Bird.js)
   // this.tubo.move()  //? Invocamos el movimiento de los tubos que también sucederá constantemente (archivo Tube.js)

   this.checkBirdCollission()


   this.tubosArr.forEach((eachTubo) => {  //! Queremos mover TODOS los tubos del array
    eachTubo.move()  //! Invocamos la función que creamos para mover los tubos en Tubo.js
   });
   this.tubosSpawn() //? Invocamos la función que hace que los tubos aparezcan.
   this.removeTubesOut()


  //* BONUS

  this.birdObj.jumpFlow()


   //3. Dibujado de los elementos. //! Si disponemos de fondo es lo primero que debería ponerse.
   this.drawBackground()  // ? Con esto invocamos la función de dibujar el fondo. //! Recordatorio de usar THIS.
   this.birdObj.draw() //? Invocamos el objeto bird (creado con la plantilla de clase en su respectivo documento js) y la función de dibujar el objeto en Bird.js
   // this.tubo.draw() //? Invocamos el objeto tubo (creado con la plantilla de clase en su respectivo documento js) y la función de dibujar el objeto en Tubo.js

   this.tubosArr.forEach ((eachTubo) =>{  //! Queremos dibujar TODOS los tubos del array
    eachTubo.draw()   //!Invocamos la función que creamos para mover los tubos en Tubo.js
   })
   

   //4. Recursión (requestAnimationFrame)
  if (this.isGameOn === true){
    requestAnimationFrame(this.gameLoop) //* Invoca gameLoop()
  }
   


 }



}  //!---> Fin de la clase GAME donde se incluye todo lo sucedido en el juego