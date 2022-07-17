p1 = 0; p2 = 0; level = 5;
let Asteroides = []; numaste = 20;

function setup() {
  createCanvas(600, 400);
  jugador1 = new Nave1();
  jugador2 = new Nave2();
  for(i=0; i < numaste; i++){
    aste = new Asteroide();
    Asteroides.push(aste);
  }
}

function draw() {
  background(0);
  // linea del medio
  stroke(0,255,0);
  strokeWeight(2);
  line(300,0,300,400);
  // la puntuación
  fill(255);
  textSize(35); text(p1,150,40);
  textSize(35); text(p2,450,40);
  // pone los jugadores
  jugador1.display();jugador1.move();
  fill(0,255,0);
  jugador2.display();jugador2.move();

  //dibujar asteroide
  for(i=0; i < numaste; i++){
    Asteroides[i].display();
    Asteroides[i].move();
  }
  //choque de naves
  for(i=0; i < numaste; i++){
    if(Asteroides[i].x<jugador1.x+10 && Asteroides[i].x >jugador1.x &&
       Asteroides[i].y<jugador1.y+20 && Asteroides[i].y >jugador1.y){
       jugador1.init();
    }
    if(Asteroides[i].x<jugador2.x+10 && Asteroides[i].x >jugador2.x &&
       Asteroides[i].y<jugador2.y+20 && Asteroides[i].y >jugador2.y){
       jugador2.init();
    }
  }
}

// construir asteroides
class Asteroide{
  constructor() {
    this.x = random(width);
    this.y = random(height-40);
    this.speed = random(1,level);
  }
  move(){
    this.x = this.x - this.speed;
    if(this.x < 0){
      this.x = width;
    }
  }
  display(){
     circle(this.x, this.y, 5,5);
  }
}

//
class Nave2 {
  constructor() {
    this.x = width*3/4;
    this.y = height - 20;
  }
  init(){
    this.x = width*3/4;
    this.y = height - 20;
  }
  move() {
    if(keyIsDown(38)){
      this.y = this.y - 4;
    }
    if(keyIsDown(40)){
      this.y = this.y + 4;
    }
    if(keyIsDown(37)){
      if(this.x > width/2 + 5)
        this.x = this.x - 4;
    }
    if(keyIsDown(39)){
      if(this.x < width-10)
        this.x = this.x + 4;
    }
    if(this.y < - 20){
      this.y = height - 20;
      p2++;
    }
  }
  display() {
    rect(this.x, this.y, 10, 20);
  }
}

//
class Nave1 {
  constructor() {
    this.x = width/4;
    this.y = height - 20;
  }
  init(){
    this.x = width/4;
    this.y = height - 20;
  }
  move() {
    if(keyIsDown(87)){
      this.y = this.y - 4;
    }
    if(keyIsDown(83)){
      this.y = this.y + 4;
    }
    if(keyIsDown(65)){
      if(this.x > 0)
        this.x = this.x - 4;
    }
    if(keyIsDown(68)){
      if(this.x < width/2 -10)
        this.x = this.x + 4;
    }
    if(this.y < - 20){
      this.y = height - 20;
      p1++;
    }
  }
  display() {
    rect(this.x, this.y, 10, 20);
  }
}