const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');

const audio = new Audio('/Audios/ambiente.mp3');
audio.preload = "auto";
document.body.appendChild(audio); 
audio.play()

var linea = [];
var direccion = " ";


let camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    follow(target) {
       
        this.x = target.x + target.w / 10 - this.width / 10;
        this.y = target.y + target.h / 10 - this.height / 10;

        this.x = Math.max(0, this.x); 
        this.y = Math.max(0, this.y); 
    }
};

class lineas{
    constructor(x,y,h,w,img){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.img = img
    }
}

class jugador{
    constructor(x,y,h,w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }


    siTocar(otro){
        if(this.x < otro.x + otro.w &&
           this.x + this.w > otro.x   &&    
           this.y < otro.y + otro.h &&    
           this.y + this.h > otro.y)
        {
            switch(direccion){
                case "up":
                    this.y += 10
                break;
                case "down":
                    this.y -= 10
                break;
                case "left":
                    this.x += 10
                break;
                case "right":
                    this.x -= 10
                break;
            }
            return true;
        }
        return false;
    }
}
 
var imgBul = new Image()
imgBul.src = "/Img/bul.png"

var imgDrag = new Image()
imgDrag.src = "/Img/drag.png"

var imgGato = new Image()
imgGato.src = "/Img/gato.png"

var imgPik = new Image()
imgPik.src = "/Img/pik.png"

var imgPin = new Image()
imgPin.src = "/Img/pin.png"

var imgPurp = new Image()
imgPurp.src = "/Img/purp.png"

var imgTort = new Image()
imgTort.src = "/Img/tort.png"

var imgTrue = new Image()
imgTrue.src = "/Img/true.png"

//PLAYER
var player = new jugador(45,40,20,20)
let spri = new jugador(0,0,32,32)

var mono = new Image()
mono.src = "/Img/ash.png"

//SALIDA
var pared1 = new jugador(394 * 2.32,414 * 2.32,1 * 2.32,21 * 2.32)
var pared2 = new jugador(414 * 2.32,394 * 2.32,21 * 2.32,1 * 2.32)
//paredes finales
var pared3 = new jugador(394 * 2.32,414 * 2.32,1 * 2.32,21 * 2.32)
var pared4 = new jugador(414 * 2.32,394 * 2.32,21 * 2.32,1 * 2.32)

//POKEMONES
let bul = new jugador(98,101,10,10)
let drag = new jugador(53,185,10,10)
let gato = new jugador(844,201,10,10)
let pik = new jugador(565,368,10,10)
let pin = new jugador(551,858,10,10)
let purp = new jugador(850,471,10,10)
let tort = new jugador(286,664,10,10)
let trueno = new jugador(196,844,10,10)

var banderaBul = false;
var banderaDrag = false;
var banderaGato = false;
var banderaPik = false;
var banderaPin = false;
var banderaPurp = false;
var banderaTort = false;
var banderaTrue = false;

//MARCO
ctx.strokeStyle = 'black';
linea.push(new lineas(35.88, 34.8, 2.32, 926.92));
linea.push(new lineas(34.8, 960.48, 2.32, 881.6));
linea.push(new lineas(34.8, 34.8, 928, 2.32));
linea.push(new lineas(960.48, 34.8, 881.6, 2.32));

//Fondo
const imagen = new Image();
imagen.src = '/Img/fondo.png';

// LINEAS HORIZONTALES (X,Y,ALTO,ANCHO)

linea.push(new lineas(34 * 2.32, 54 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(94 * 2.32, 34 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(134 * 2.32, 34 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(215 * 2.32, 34 * 2.32, 2 * 2.32, 20 * 2.32));

linea.push(new lineas(254 * 2.32, 34 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(314 * 2.32, 34 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(374 * 2.32, 34 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(54 * 2.32, 74 * 2.32, 2 * 2.32, 61 * 2.32));

linea.push(new lineas(154 * 2.32, 54 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(154 * 2.32, 74 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(275 * 2.32, 54 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(334 * 2.32, 54 * 2.32, 2 * 2.32, 42 * 2.32));

linea.push(new lineas(234 * 2.32, 74 * 2.32, 2 * 2.32, 81 * 2.32));
linea.push(new lineas(334 * 2.32, 74 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(374 * 2.32, 74 * 2.32, 2 * 2.32, 40 * 2.32));
linea.push(new lineas(354 * 2.32, 94 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(314 * 2.32, 94 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(135 * 2.32, 94 * 2.32, 2 * 2.32, 20 * 2.32));
linea.push(new lineas(34 * 2.32, 94 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(16 * 2.32, 74 * 2.32, 2 * 2.32, 20 * 2.32));

linea.push(new lineas(16 * 2.32, 114 * 2.32, 2 * 2.32, 19 * 2.32));
linea.push(new lineas(214 * 2.32, 114 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(295 * 2.32, 114 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(334 * 2.32, 114 * 2.32, 2 * 2.32, 62 * 2.32));

linea.push(new lineas(34 * 2.32, 134 * 2.32, 2 * 2.32, 42 * 2.32));
linea.push(new lineas(114 * 2.32, 134 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(134 * 2.32, 114 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(195 * 2.32, 134 * 2.32, 2 * 2.32, 101 * 2.32));

linea.push(new lineas(314 * 2.32, 134 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(374 * 2.32, 134 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(34 * 2.32, 154 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(94 * 2.32, 154 * 2.32, 2 * 2.32, 121 * 2.32));

linea.push(new lineas(234 * 2.32, 154 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(294 * 2.32, 154 * 2.32, 2 * 2.32, 81 * 2.32));
linea.push(new lineas(394 * 2.32, 154 * 2.32, 2 * 2.32, 20 * 2.32));
linea.push(new lineas(74 * 2.32, 174 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(134 * 2.32, 174 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(194 * 2.32, 174 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(254 * 2.32, 174 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(315 * 2.32, 174 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(355 * 2.32, 174 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(54 * 2.32, 194 * 2.32, 2 * 2.32, 162 * 2.32));
linea.push(new lineas(254 * 2.32, 194 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(335 * 2.32, 194 * 2.32, 2 * 2.32, 61 * 2.32));

linea.push(new lineas(35 * 2.32, 214 * 2.32, 2 * 2.32, 101 * 2.32));
linea.push(new lineas(214 * 2.32, 214 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(254 * 2.32, 214 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(355 * 2.32, 214 * 2.32, 2 * 2.32, 20 * 2.32));

linea.push(new lineas(34 * 2.32, 234 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(74 * 2.32, 234 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(134 * 2.32, 234 * 2.32, 2 * 2.32, 61 * 2.32));
linea.push(new lineas(235 * 2.32, 234 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(295 * 2.32, 234 * 2.32, 2 * 2.32, 20 * 2.32));
linea.push(new lineas(16 * 2.32, 254 * 2.32, 2 * 2.32, 19 * 2.32));
linea.push(new lineas(95 * 2.32, 254 * 2.32, 2 * 2.32, 80 * 2.32));
linea.push(new lineas(275 * 2.32, 254 * 2.32, 2 * 2.32, 20 * 2.32));

linea.push(new lineas(354 * 2.32, 254 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(16 * 2.32, 314 * 2.32, 2 * 2.32, 60 * 2.32));
linea.push(new lineas(95 * 2.32, 314 * 2.32, 2 * 2.32, 40 * 2.32));
linea.push(new lineas(175 * 2.32, 314 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(215 * 2.32, 314 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(295 * 2.32, 314 * 2.32, 2 * 2.32, 60 * 2.32));
linea.push(new lineas(74 * 2.32, 354 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(114 * 2.32, 354 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(154 * 2.32, 354 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(254 * 2.32, 354 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(294 * 2.32, 354 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(374 * 2.32, 354 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(54 * 2.32, 374 * 2.32, 2 * 2.32, 62 * 2.32));
linea.push(new lineas(135 * 2.32, 374 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(194 * 2.32, 374 * 2.32, 2 * 2.32, 102 * 2.32));
linea.push(new lineas(314 * 2.32, 374 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(354 * 2.32, 374 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(395 * 2.32, 374 * 2.32, 2 * 2.32, 19 * 2.32));
linea.push(new lineas(34 * 2.32, 394 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(95 * 2.32, 394 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(154 * 2.32, 394 * 2.32, 2 * 2.32, 42 * 2.32));
linea.push(new lineas(214 * 2.32, 394 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(294 * 2.32, 394 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(334 * 2.32, 394 * 2.32, 2 * 2.32, 21 * 2.32));

linea.push(new lineas(374 * 2.32, 394 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(135 * 2.32, 334 * 2.32, 2 * 2.32, 20 * 2.32));
linea.push(new lineas(274 * 2.32, 334 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(354 * 2.32, 334 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(34 * 2.32, 294 * 2.32, 2 * 2.32, 41 * 2.32));
linea.push(new lineas(114 * 2.32, 294 * 2.32, 2 * 2.32, 42 * 2.32));
linea.push(new lineas(214 * 2.32, 294 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(254 * 2.32, 294 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(314 * 2.32, 294 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(354 * 2.32, 294 * 2.32, 2 * 2.32, 21 * 2.32));
linea.push(new lineas(395 * 2.32, 294 * 2.32, 2 * 2.32, 19 * 2.32));
linea.push(new lineas(34 * 2.32, 274 * 2.32, 2 * 2.32, 22 * 2.32));

linea.push(new lineas(74 * 2.32, 274 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(174 * 2.32, 274 * 2.32, 2 * 2.32, 42 * 2.32));
linea.push(new lineas(254 * 2.32, 274 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(334 * 2.32, 274 * 2.32, 2 * 2.32, 22 * 2.32));
linea.push(new lineas(374 * 2.32, 274 * 2.32, 2 * 2.32, 22 * 2.32));


// LINEAS VERTICALES
linea.push(new lineas(34 * 2.32, 15 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(74 * 2.32, 16 * 2.32, 39 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 35 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(94 * 2.32, 34 * 2.32, 21 * 2.32, 2 * 2.32))

linea.push(new lineas(114 * 2.32, 34 * 2.32, 102 * 2.32, 2 * 2.32))
linea.push(new lineas(134 * 2.32, 34 * 2.32, 82 * 2.32, 2 * 2.32))
linea.push(new lineas(174 * 2.32, 16 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(194 * 2.32, 35 * 2.32, 20 * 2.32, 2 * 2.32))

linea.push(new lineas(234 * 2.32, 16 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 34 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 16 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(314 * 2.32, 34 * 2.32, 62 * 2.32, 2 * 2.32))

linea.push(new lineas(374 * 2.32, 34 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(394 * 2.32, 34 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(34 * 2.32, 274 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 115 * 2.32, 20 * 2.32, 2 * 2.32))

linea.push(new lineas(34 * 2.32, 134 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(34 * 2.32, 174 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(34 * 2.32, 274 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 315 * 2.32, 40 * 2.32, 2 * 2.32))

linea.push(new lineas(34 * 2.32, 335 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 374 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(74 * 2.32, 395 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 234 * 2.32, 42 * 2.32, 2 * 2.32))

linea.push(new lineas(74 * 2.32, 234 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(94 * 2.32, 274 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(74 * 2.32, 315 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(94 * 2.32, 354 * 2.32, 21 * 2.32, 2 * 2.32))

linea.push(new lineas(34 * 2.32, 74 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(94 * 2.32, 95 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(74 * 2.32, 135 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(54 * 2.32, 155 * 2.32, 41 * 2.32, 2 * 2.32))

linea.push(new lineas(94 * 2.32, 215 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(114 * 2.32, 235 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(134 * 2.32, 275 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(154 * 2.32, 295 * 2.32, 61 * 2.32, 2 * 2.32))

linea.push(new lineas(114 * 2.32, 315 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(114 * 2.32, 375 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(134 * 2.32, 355 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(154 * 2.32, 375 * 2.32, 21 * 2.32, 2 * 2.32))

linea.push(new lineas(194 * 2.32, 374 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(174 * 2.32, 355 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(194 * 2.32, 335 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(214 * 2.32, 55 * 2.32, 61 * 2.32, 2 * 2.32))

linea.push(new lineas(174 * 2.32, 75 * 2.32, 60 * 2.32, 2 * 2.32))
linea.push(new lineas(154 * 2.32, 115 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(134 * 2.32, 155 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(194 * 2.32, 75 * 2.32, 80 * 2.32, 2 * 2.32))

linea.push(new lineas(234 * 2.32, 74 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(274 * 2.32, 75 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 95 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 95 * 2.32, 41 * 2.32, 2 * 2.32))

linea.push(new lineas(354 * 2.32, 74 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(374 * 2.32, 74 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(334 * 2.32, 94 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(354 * 2.32, 115 * 2.32, 20 * 2.32, 2 * 2.32))

linea.push(new lineas(154 * 2.32, 215 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(194 * 2.32, 215 * 2.32, 60 * 2.32, 2 * 2.32))
linea.push(new lineas(174 * 2.32, 195 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(174 * 2.32, 274 * 2.32, 61 * 2.32, 2 * 2.32))

linea.push(new lineas(214 * 2.32, 394 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(274 * 2.32, 375 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(334 * 2.32, 54 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(314 * 2.32, 114 * 2.32, 22 * 2.32, 2 * 2.32))

linea.push(new lineas(374 * 2.32, 134 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(394 * 2.32, 154 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(374 * 2.32, 195 * 2.32, 40 * 2.32, 2 * 2.32))

linea.push(new lineas(394 * 2.32, 215 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(354 * 2.32, 235 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(374 * 2.32, 274 * 2.32, 62 * 2.32, 2 * 2.32))
linea.push(new lineas(394 * 2.32, 315 * 2.32, 41 * 2.32, 2 * 2.32))

linea.push(new lineas(374 * 2.32, 354 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 394 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(314 * 2.32, 374 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(334 * 2.32, 374 * 2.32, 22 * 2.32, 2 * 2.32))

linea.push(new lineas(354 * 2.32, 334 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(234 * 2.32, 335 * 2.32, 40 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 354 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(314 * 2.32, 335 * 2.32, 20 * 2.32, 2 * 2.32))

linea.push(new lineas(334 * 2.32, 294 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(394 * 2.32, 95 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(334 * 2.32, 174 * 2.32, 102 * 2.32, 2 * 2.32))
linea.push(new lineas(354 * 2.32, 274 * 2.32, 22 * 2.32, 2 * 2.32))

linea.push(new lineas(194 * 2.32, 295 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(214 * 2.32, 294 * 2.32, 62 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 314 * 2.32, 42 * 2.32, 2 * 2.32))
linea.push(new lineas(274 * 2.32, 334 * 2.32, 22 * 2.32, 2 * 2.32))

linea.push(new lineas(214 * 2.32, 235 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(214 * 2.32, 194 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(194 * 2.32, 174 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(234 * 2.32, 154 * 2.32, 41 * 2.32, 2 * 2.32))

linea.push(new lineas(274 * 2.32, 135 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 154 * 2.32, 41 * 2.32, 2 * 2.32))
linea.push(new lineas(234 * 2.32, 214 * 2.32, 82 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 234 * 2.32, 21 * 2.32, 2 * 2.32))

linea.push(new lineas(254 * 2.32, 194 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(274 * 2.32, 215 * 2.32, 61 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 274 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(294 * 2.32, 275 * 2.32, 61 * 2.32, 2 * 2.32))

linea.push(new lineas(274 * 2.32, 294 * 2.32, 21 * 2.32, 2 * 2.32))
linea.push(new lineas(314 * 2.32, 194 * 2.32, 102 * 2.32, 2 * 2.32))
linea.push(new lineas(254 * 2.32, 154 * 2.32, 22 * 2.32, 2 * 2.32))
linea.push(new lineas(74 * 2.32, 95 * 2.32, 20 * 2.32, 2 * 2.32))
linea.push(new lineas(154 * 2.32, 255 * 2.32, 20 * 2.32, 2 * 2.32))


document.addEventListener("keydown",function(e){
    switch(e.keyCode){
        case 65:
            direccion = "left";
        break;
        case 68:
            direccion = "right"
        break;
        case 83:
            direccion = "down"
        break;
        case 87:
            direccion = "up"
        break;
        case 32:
            pause = !pause;
        break;
    }
    
})

document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 65: // Tecla 'A'
        case 68: // Tecla 'D'
        case 83: // Tecla 'S'
        case 87: // Tecla 'W'
            direccion = "";
            break;
    }
});


function update(){
    switch(direccion){
        case "up":
            player.y -= 10
            spri.y = 2
        break;
        case "down":
            player.y += 10
            spri.y = 0
        break;
        case "left":
            player.x -= 10
            spri.y = 1
        break;
        case "right":
            player.x += 10
            spri.y = 3
        break;
    }
    camera.follow(player);
    
}

let zoomFactor = 2.5;
ctx.scale(zoomFactor, zoomFactor);

let lastTime = 3; 
let fps = 30;     
let frameDuration = 1000 / fps; 

function pintar(time){
    let deltaTime = time - lastTime;

    if (deltaTime > frameDuration) {
        lastTime = time;
        ctx.fillStyle = "lightgray";
        ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
        update()
       
        ctx.fillStyle = "black";
        linea.forEach(function(lin,i,array){
            ctx.fillRect(lin.x - camera.x, lin.y - camera.y,lin.w,lin.h);
            player.siTocar(lin);
        })

        ctx.drawImage(mono ,spri.x *30 , spri.y*32 , spri.w , spri.h ,player.x - camera.x,player.y - camera.y, player.h , player.w )

        spri.x += 1
        
        if(spri.x >= 4){
            spri.x = 0
        }

        if (player.siTocar(bul)) {
            bul = new jugador(-10,0,10,10)
            banderaBul = true;
            mostrarVentanaEmergente("¡Has Capturado a Bulbasaur");
        }else if (!banderaBul) {
            ctx.drawImage(imgBul, bul.x - camera.x, bul.y - camera.y, bul.h, bul.w);
    
        }
    
        if (player.siTocar(drag)) {
            banderaDrag = true;
            mostrarVentanaEmergente("¡Has capturado a Charizard");
            drag = new jugador(-10,0,10,10)
        } else if (!banderaDrag) {
            ctx.drawImage(imgDrag, drag.x - camera.x, drag.y - camera.y, drag.h, drag.w);
        }
    
        if (player.siTocar(gato)) {
            banderaGato = true;
            mostrarVentanaEmergente("¡Has capturado a Meowth");
            gato = new jugador(-10,0,10,10)
        } else if (!banderaGato) {
            ctx.drawImage(imgGato, gato.x - camera.x, gato.y - camera.y, gato.h, gato.w);
        }
    
        if (player.siTocar(pik)) {
            banderaPik = true;
            mostrarVentanaEmergente("¡Has capturado a Pikachu");
            pik = new jugador(-10,0,10,10)
        } else if (!banderaPik) {
            ctx.drawImage(imgPik, pik.x - camera.x, pik.y - camera.y, pik.h, pik.w);
        }
    
        if (player.siTocar(pin)) {
            banderaPin = true;
            mostrarVentanaEmergente("¡Has capturado a Piplup");
            pin = new jugador(-10,0,10,10)
        } else if (!banderaPin) {
            ctx.drawImage(imgPin, pin.x - camera.x, pin.y - camera.y, pin.h, pin.w);
        }
    
        if (player.siTocar(purp)) {
            banderaPurp = true;
            mostrarVentanaEmergente("¡Has capturado a Spheal");
            purp = new jugador(-10,0,10,10)
        } else if (!banderaPurp) {
            ctx.drawImage(imgPurp, purp.x - camera.x, purp.y - camera.y, purp.h, purp.w);
        }
    
        if (player.siTocar(tort)) {
            banderaTort = true;
            mostrarVentanaEmergente("¡Has capturado a Squirtle");
            tort = new jugador(-10,0,10,10)
        } else if (!banderaTort) {
            ctx.drawImage(imgTort, tort.x - camera.x, tort.y - camera.y, tort.h, tort.w);
        }
    
        if (player.siTocar(trueno)) {
            banderaTrue = true;
            mostrarVentanaEmergente("¡Has capturado a Blastoise");
            trueno = new jugador(-10,0,10,10)
        } else if (!banderaTrue) {
            ctx.drawImage(imgTrue, trueno.x - camera.x, trueno.y - camera.y, trueno.h, trueno.w);
        }

        if(player.siTocar(pared1)){
            mostrarVentanaEmergente("Debes recoger todos los pokemons");
        }
        if(player.siTocar(pared2)){
            mostrarVentanaEmergente("Debes recoger todos los pokemons");
        }

        if(banderaBul == true && banderaDrag == true  && banderaGato == true  && banderaPik == true  && banderaPin == true  && banderaPurp == true  && banderaTort == true  && banderaTrue == true ){
           pared1 = new jugador(0,0,0,0);
           pared2 = new jugador(0,0,0,0)
            if(player.siTocar(pared3)){
            window.location.href = '/html/pantallaFinal.html';
           }
           if(player.siTocar(pared4)){
            window.location.href = '/html/pantallaFinal.html';
           }
        }else{
            ctx.fillStyle="red"
            ctx.fillRect(pared1.x - camera.x,pared1.y - camera.y,pared1.w,pared1.h)
            ctx.fillRect(pared2.x - camera.x,pared2.y - camera.y,pared2.w,pared2.h)
        }

        
    }

    drawMinimap();
    requestAnimationFrame(pintar)
}
requestAnimationFrame(pintar)


function mostrarVentanaEmergente(mensaje) {
    let ventana = document.createElement("div");
    
    ventana.className = "ventana-emergente";
    
    ventana.innerText = mensaje;

    document.body.appendChild(ventana);

    
    setTimeout(function() {
        document.body.removeChild(ventana);
    }, 3000);
}

const minimapWidth = 729;
const minimapHeight = 990;
const minimapX = canvas.width - minimapWidth - 10; // 10px de margen desde el borde derecho
const minimapY = canvas.height - minimapHeight - 10; // 10px de margen desde el borde inferior

function drawMinimap() {
    const minimapCanvas = document.createElement('canvas');
    minimapCanvas.width = minimapWidth;
    minimapCanvas.height = minimapHeight;
    const minimapCtx = minimapCanvas.getContext('2d');

    //Fondo
    minimapCtx.fillStyle = 'white';
    minimapCtx.fillRect(0, 0, 139, 139);

    // Escala del minimapa
    const scale = 0.14; 

    minimapCtx.strokeStyle = 'black';
    linea.forEach(l => {
        minimapCtx.strokeRect(l.x * scale, l.y * scale, l.w * scale, l.h * scale);
    });

    // Dibuja jugador
    minimapCtx.fillStyle = 'blue';
    minimapCtx.fillRect(player.x * scale, player.y * scale, player.w * scale, player.h * scale);

    //Dibuja pokemones
    minimapCtx.fillStyle = 'red';
    minimapCtx.fillRect(bul.x * scale, bul.y * scale, bul.w * scale, bul.h * scale);
    minimapCtx.fillRect(drag.x * scale, drag.y * scale, drag.w * scale, drag.h * scale);
    minimapCtx.fillRect(gato.x * scale, gato.y * scale, gato.w * scale, gato.h * scale);
    minimapCtx.fillRect(pik.x * scale, pik.y * scale, pik.w * scale, pik.h * scale);
    minimapCtx.fillRect(pin.x * scale, pin.y * scale, pin.w * scale, pin.h * scale);
    minimapCtx.fillRect(purp.x * scale, purp.y * scale, purp.w * scale, purp.h * scale);
    minimapCtx.fillRect(tort.x * scale, tort.y * scale, tort.w * scale, tort.h * scale);
    minimapCtx.fillRect(trueno.x * scale, trueno.y * scale, trueno.w * scale, trueno.h * scale);

    // Dibuja el minimapa
    ctx.drawImage(minimapCanvas, minimapX, minimapY, minimapWidth, minimapHeight);
}

let segundos = 0;
let minutos = 0;
let intervalo;

function actualizarCronometro() {
    segundos++;

    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }

    
    let segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
    let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;

    
    document.getElementById('cronometro').textContent = `Tiempo: ${minutosFormateados}:${segundosFormateados}`;
}

function iniciarCronometro() {
    intervalo = setInterval(actualizarCronometro, 1000); 
}

iniciarCronometro();