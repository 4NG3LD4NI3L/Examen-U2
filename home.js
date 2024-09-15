const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');

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
    constructor(x,y,h,w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
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
                    this.y += 5
                break;
                case "down":
                    this.y -= 5
                break;
                case "left":
                    this.x += 5
                break;
                case "right":
                    this.x -= 5
                break;
            }
            return true;
        }
        return false;
    }
}
 
var imgBul = new Image()
imgBul.src = "bul.png"

var imgDrag = new Image()
imgDrag.src = "drag.png"

var imgGato = new Image()
imgGato.src = "gato.png"

var imgPik = new Image()
imgPik.src = "pik.png"

var imgPin = new Image()
imgPin.src = "pin.png"

var imgPurp = new Image()
imgPurp.src = "purp.png"

var imgTort = new Image()
imgTort.src = "tort.png"

var imgTrue = new Image()
imgTrue.src = "true.png"

//PLAYER
var player = new jugador(0,0,20,20)
let spri = new jugador(0,0,32,32)

//POKEMONES
var bul = new jugador(280,148,10,10)
var drag = new jugador(2800,1165,10,10)
var gato = new jugador(1831,1398,10,10)
var pik = new jugador(1819,2372,10,10)
var pin = new jugador(1705,2519,10,10)
var purp = new jugador(1399,1805,10,10)
var tort = new jugador(560,2518,10,10)
var trueno = new jugador(2517,568,10,10)


//MARCO
ctx.strokeStyle = 'black';
linea.push(new lineas(34 * 2.32 ,15* 2.32 ,1* 2.32, 381* 2.32))
linea.push(new lineas(15* 2.32 ,414* 2.32 ,1* 2.32, 380* 2.32))
linea.push(new lineas(15* 2.32 ,15* 2.32 ,400* 2.32, 1* 2.32))
linea.push(new lineas(414* 2.32,15* 2.32 ,380* 2.32, 1* 2.32))

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
            player.y -= 5
            spri.y = 2
        break;
        case "down":
            player.y += 5
            spri.y = 0
        break;
        case "left":
            player.x -= 5
            spri.y = 1
        break;
        case "right":
            player.x += 5
            spri.y = 3
        break;
    }
    camera.follow(player);
    
}

let zoomFactor = 3;
ctx.scale(zoomFactor, zoomFactor);

var mono = new Image()
mono.src = "ash.png"

let lastTime = 0; // Último tiempo registrado
let fps = 30;     // Número de frames por segundo deseado (ajusta este valor)
let frameDuration = 1000 / fps; 

var banderaBul = false;
var banderaDrag = false;
var banderaGato = false;
var banderaPik = false;
var banderaPin = false;
var banderaPurp = false;
var banderaTort = false;
var banderaTrue = false;
  


function pintar(time){
    let deltaTime = time - lastTime;

    if (deltaTime > frameDuration) {
        lastTime = time;
        ctx.fillStyle = "lightgray";
        ctx.fillRect(0,0,canvas.width,canvas.height)
        
        update()
       
        
        ctx.fillStyle = "black";
        linea.forEach(function(lin,i,array){
            ctx.fillRect(lin.x - camera.x, lin.y - camera.y, lin.w, lin.h);
            player.siTocar(lin);
        })

        ctx.fillStyle = "white";

        if (player.siTocar(bul)) {
            banderaBul = true;
            mostrarVentanaEmergente("¡Has Capturado a");
        } else if (!banderaBul) {
            ctx.drawImage(imgBul, bul.x - camera.x, bul.y - camera.y, bul.h, bul.w);
        }

        if (player.siTocar(drag)) {
            banderaDrag = true;
            mostrarVentanaEmergente("¡Has tocado el objeto Bul!");
        } else if (!banderaDrag) {
            ctx.drawImage(imgDrag, drag.x - camera.x, drag.y - camera.y, drag.h, drag.w);
        }

        if (player.siTocar(gato)) {
            banderaGato = true;
        } else if (!banderaGato) {
            ctx.drawImage(imgGato, gato.x - camera.x, gato.y - camera.y, gato.h, gato.w);
        }

        if (player.siTocar(pik)) {
            banderaPik = true;
        } else if (!banderaPik) {
            ctx.drawImage(imgPik, pik.x - camera.x, pik.y - camera.y, pik.h, pik.w);
        }

        if (player.siTocar(pin)) {
            banderaPin = true;
        } else if (!banderaPin) {
            ctx.drawImage(imgPin, pin.x - camera.x, pin.y - camera.y, pin.h, pin.w);
        }

        if (player.siTocar(purp)) {
            banderaPurp = true;
        } else if (!banderaPurp) {
            ctx.drawImage(imgPurp, purp.x - camera.x, purp.y - camera.y, purp.h, purp.w);
        }

        if (player.siTocar(tort)) {
            banderaTort = true;
        } else if (!banderaTort) {
            ctx.drawImage(imgTort, tort.x - camera.x, tort.y - camera.y, tort.h, tort.w);
        }

        if (player.siTocar(trueno)) {
            banderaTrue = true;
        } else if (!banderaTrue) {
            ctx.drawImage(imgTrue, trueno.x - camera.x, trueno.y - camera.y, trueno.h, trueno.w);
        }
        
        ctx.drawImage(mono ,spri.x *30 , spri.y*32 , spri.w , spri.h ,player.x - camera.x,player.y - camera.y, player.h , player.w )


        spri.x += 1
        
        if(spri.x >= 4){
            spri.x = 0
        }

        
    }
    requestAnimationFrame(pintar)
    
}
requestAnimationFrame(pintar)


function mostrarVentanaEmergente(mensaje) {
    // Crear un elemento de div para la ventana emergente
    let ventana = document.createElement("div");
    
    // Asignar la clase CSS a la ventana emergente
    ventana.className = "ventana-emergente";
    
    // Agregar el mensaje a la ventana emergente
    ventana.innerText = mensaje;

    // Añadir la ventana emergente al cuerpo del documento
    document.body.appendChild(ventana);

    // Quitar la ventana después de 5 segundos
    setTimeout(function() {
        document.body.removeChild(ventana);
    }, 5000); // 5000 ms = 5 segundos
}