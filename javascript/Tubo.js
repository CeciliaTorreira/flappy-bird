//! CREAMOS NUEVA CLASE 

class Tubo {
  constructor (positionY, isImageUp){ //! ISIMAGEUP TRUE O FALSE SEGÚN QUE TUBO SEA
    //* Propiedades de cada tubo
   this.img = new Image()
   if (isImageUp === true){
   this.img.src="../images/obstacle_top.png"} // ?Es la de arriba o la de abajo? 

  else {
    this.img.src="../images/obstacle_bottom.png"   
  }

    this.x = canvas.width;
    this.y = positionY  //! Posición inicial en el eje Y
              //? La posición vertical debería ser aleatoria
    this.w = 60;
    this.h = 240;
    this.speed = 2;
  }


    //* Métodos (acciones) de los tubos.
    //* Método de dibujo del tubo
    draw = () =>{
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h) 
    }
    
    //* Los tubos se mueven hacia la izquierda
 move = ()=>{
  this.x -= this.speed 
}

    

} 


//!TODA ESTA LÓGICA QUE ESTAMOS HACIENDO ES ESPECÍFICA PARA ESTE JUEGO, SERÁN DIFERENTES SEGÚN QUÉ PROYECTO