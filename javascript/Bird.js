//! CREAMOS NUEVA CLASE 

class Bird {
constructor(){
    //* Propiedades iniciales del pájaro
    this.img = new Image()
    this.img.src ="/images/flappy.png"
    this.x = 50; //* Posición en el eje X.
    this.y = 200; //* Posición en el eje Y.
    this.w = 40; //* Ancho del pájaro.
    this.h = 35; //* Alto del pájaro.
    this.gravitySpeed = 2 //? Velocidad de la caída.
    this.jumpSpeed = 60 //? Velocidad a la que salta
    this.canJump = true;
    this.isJumping = false;
}
 

//* Métodos (acciones) del pájaro. 

//* Dibuja el pajaro
draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
}

//* El pájaro debe estar cayendo. Es un movimiento automático que siempre tiene que ocurrir.
gravity = () => {  //* El valor Y va a aumentar.
     //! Recordatorio de usar .THIS. 
  if (this.y + this.h < canvas.height){
    this.y += this.gravitySpeed
  }
    // todo BONUS Cambiar la orientación del pájaro
    // todo BONUS Que no pueda caer más abajo del suelo / Hecho

}
//* Tenemos que hacerle volar/saltar.  //! Este evento debe estar en un addEventListener ya que es una interacción del usuario.
jump = () => { //* El valor Y va a reducirse.
  if (this.y > 0 && this.canJump === true)
  {
    this.y -= this.jumpSpeed 
    this.canJump = false;
  setTimeout(() => {
    this.canJump = true;
  }, 200);
} 


    //Cuando salte desactivare el boolean canJump
   // todo BONUS  Orientación del pájaro
   // todo BONUS  Que no pueda saltar por encima del techo
   // todo BONUS  Que solo pueda saltar una vez cada segundo
   
}
 // todo BONUS  Que el salto sea fluido
 jumpFlow = () => {
  if (this.isJumping === true){
    this.y -= 8
  }
 }
  
 jump2 = () => {
    this.isJumping = true;
    setTimeout(() => {
        this.isJumping = false
    }, 300);
 }
}