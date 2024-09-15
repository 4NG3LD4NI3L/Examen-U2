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
                    this.y += 7
                break;
                case "down":
                    this.y -= 7
                break;
                case "left":
                    this.x += 7
                break;
                case "right":
                    this.x -= 7
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
var player = new jugador(0,0,60,60)
let spri = new jugador(0,0,32,32)

//POKEMONES
var bul = new jugador(280,148,50,50)
var drag = new jugador(2800,1165,50,50)
var gato = new jugador(1831,1398,50,50)
var pik = new jugador(1819,2372,50,50)
var pin = new jugador(1705,2519,50,50)
var purp = new jugador(1399,1805,50,50)
var tort = new jugador(560,2518,50,50)
var trueno = new jugador(2517,568,50,50)


//MARCO
ctx.strokeStyle = 'black';
linea.push(new lineas(34 * 6.97 ,15* 6.97 ,1* 6.97, 381* 6.97))
linea.push(new lineas(15* 6.97 ,414* 6.97 ,1* 6.97, 380* 6.97))
linea.push(new lineas(15* 6.97 ,15* 6.97 ,400* 6.97, 1* 6.97))
linea.push(new lineas(414* 6.97,15* 6.97 ,380* 6.97, 1* 6.97))

// LINEAS HORIZONTALES (X,Y,ALTO,ANCHO)
linea.push(new lineas(34 * 6.97, 54 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(94 * 6.97, 34 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(134 * 6.97, 34 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(215 * 6.97, 34 * 6.97, 2 * 6.97, 20 * 6.97));

linea.push(new lineas(254 * 6.97, 34 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(314 * 6.97, 34 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(374 * 6.97, 34 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(54 * 6.97, 74 * 6.97, 2 * 6.97, 61 * 6.97));

linea.push(new lineas(154 * 6.97, 54 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(154 * 6.97, 74 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(275 * 6.97, 54 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(334 * 6.97, 54 * 6.97, 2 * 6.97, 42 * 6.97));

linea.push(new lineas(234 * 6.97, 74 * 6.97, 2 * 6.97, 81 * 6.97));
linea.push(new lineas(334 * 6.97, 74 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(374 * 6.97, 74 * 6.97, 2 * 6.97, 40 * 6.97));
linea.push(new lineas(354 * 6.97, 94 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(314 * 6.97, 94 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(135 * 6.97, 94 * 6.97, 2 * 6.97, 20 * 6.97));
linea.push(new lineas(34 * 6.97, 94 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(16 * 6.97, 74 * 6.97, 2 * 6.97, 20 * 6.97));

linea.push(new lineas(16 * 6.97, 114 * 6.97, 2 * 6.97, 19 * 6.97));
linea.push(new lineas(214 * 6.97, 114 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(295 * 6.97, 114 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(334 * 6.97, 114 * 6.97, 2 * 6.97, 62 * 6.97));

linea.push(new lineas(34 * 6.97, 134 * 6.97, 2 * 6.97, 42 * 6.97));
linea.push(new lineas(114 * 6.97, 134 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(134 * 6.97, 114 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(195 * 6.97, 134 * 6.97, 2 * 6.97, 101 * 6.97));

linea.push(new lineas(314 * 6.97, 134 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(374 * 6.97, 134 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(34 * 6.97, 154 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(94 * 6.97, 154 * 6.97, 2 * 6.97, 121 * 6.97));

linea.push(new lineas(234 * 6.97, 154 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(294 * 6.97, 154 * 6.97, 2 * 6.97, 81 * 6.97));
linea.push(new lineas(394 * 6.97, 154 * 6.97, 2 * 6.97, 20 * 6.97));
linea.push(new lineas(74 * 6.97, 174 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(134 * 6.97, 174 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(194 * 6.97, 174 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(254 * 6.97, 174 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(315 * 6.97, 174 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(355 * 6.97, 174 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(54 * 6.97, 194 * 6.97, 2 * 6.97, 162 * 6.97));
linea.push(new lineas(254 * 6.97, 194 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(335 * 6.97, 194 * 6.97, 2 * 6.97, 61 * 6.97));

linea.push(new lineas(35 * 6.97, 214 * 6.97, 2 * 6.97, 101 * 6.97));
linea.push(new lineas(214 * 6.97, 214 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(254 * 6.97, 214 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(355 * 6.97, 214 * 6.97, 2 * 6.97, 20 * 6.97));

linea.push(new lineas(34 * 6.97, 234 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(74 * 6.97, 234 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(134 * 6.97, 234 * 6.97, 2 * 6.97, 61 * 6.97));
linea.push(new lineas(235 * 6.97, 234 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(295 * 6.97, 234 * 6.97, 2 * 6.97, 20 * 6.97));
linea.push(new lineas(16 * 6.97, 254 * 6.97, 2 * 6.97, 19 * 6.97));
linea.push(new lineas(95 * 6.97, 254 * 6.97, 2 * 6.97, 80 * 6.97));
linea.push(new lineas(275 * 6.97, 254 * 6.97, 2 * 6.97, 20 * 6.97));

linea.push(new lineas(354 * 6.97, 254 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(16 * 6.97, 314 * 6.97, 2 * 6.97, 60 * 6.97));
linea.push(new lineas(95 * 6.97, 314 * 6.97, 2 * 6.97, 40 * 6.97));
linea.push(new lineas(175 * 6.97, 314 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(215 * 6.97, 314 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(295 * 6.97, 314 * 6.97, 2 * 6.97, 60 * 6.97));
linea.push(new lineas(74 * 6.97, 354 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(114 * 6.97, 354 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(154 * 6.97, 354 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(254 * 6.97, 354 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(294 * 6.97, 354 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(374 * 6.97, 354 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(54 * 6.97, 374 * 6.97, 2 * 6.97, 62 * 6.97));
linea.push(new lineas(135 * 6.97, 374 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(194 * 6.97, 374 * 6.97, 2 * 6.97, 102 * 6.97));
linea.push(new lineas(314 * 6.97, 374 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(354 * 6.97, 374 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(395 * 6.97, 374 * 6.97, 2 * 6.97, 19 * 6.97));
linea.push(new lineas(34 * 6.97, 394 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(95 * 6.97, 394 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(154 * 6.97, 394 * 6.97, 2 * 6.97, 42 * 6.97));
linea.push(new lineas(214 * 6.97, 394 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(294 * 6.97, 394 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(334 * 6.97, 394 * 6.97, 2 * 6.97, 21 * 6.97));

linea.push(new lineas(374 * 6.97, 394 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(135 * 6.97, 334 * 6.97, 2 * 6.97, 20 * 6.97));
linea.push(new lineas(274 * 6.97, 334 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(354 * 6.97, 334 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(34 * 6.97, 294 * 6.97, 2 * 6.97, 41 * 6.97));
linea.push(new lineas(114 * 6.97, 294 * 6.97, 2 * 6.97, 42 * 6.97));
linea.push(new lineas(214 * 6.97, 294 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(254 * 6.97, 294 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(314 * 6.97, 294 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(354 * 6.97, 294 * 6.97, 2 * 6.97, 21 * 6.97));
linea.push(new lineas(395 * 6.97, 294 * 6.97, 2 * 6.97, 19 * 6.97));
linea.push(new lineas(34 * 6.97, 274 * 6.97, 2 * 6.97, 22 * 6.97));

linea.push(new lineas(74 * 6.97, 274 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(174 * 6.97, 274 * 6.97, 2 * 6.97, 42 * 6.97));
linea.push(new lineas(254 * 6.97, 274 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(334 * 6.97, 274 * 6.97, 2 * 6.97, 22 * 6.97));
linea.push(new lineas(374 * 6.97, 274 * 6.97, 2 * 6.97, 22 * 6.97));





// LINEAS VERTICALES
linea.push(new lineas(34 * 6.97, 15 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(74 * 6.97, 16 * 6.97, 39 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 35 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(94 * 6.97, 34 * 6.97, 21 * 6.97, 2 * 6.97))

linea.push(new lineas(114 * 6.97, 34 * 6.97, 102 * 6.97, 2 * 6.97))
linea.push(new lineas(134 * 6.97, 34 * 6.97, 82 * 6.97, 2 * 6.97))
linea.push(new lineas(174 * 6.97, 16 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(194 * 6.97, 35 * 6.97, 20 * 6.97, 2 * 6.97))

linea.push(new lineas(234 * 6.97, 16 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 34 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 16 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(314 * 6.97, 34 * 6.97, 62 * 6.97, 2 * 6.97))

linea.push(new lineas(374 * 6.97, 34 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(394 * 6.97, 34 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(34 * 6.97, 274 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 115 * 6.97, 20 * 6.97, 2 * 6.97))

linea.push(new lineas(34 * 6.97, 134 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(34 * 6.97, 174 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(34 * 6.97, 274 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 315 * 6.97, 40 * 6.97, 2 * 6.97))

linea.push(new lineas(34 * 6.97, 335 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 374 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(74 * 6.97, 395 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 234 * 6.97, 42 * 6.97, 2 * 6.97))

linea.push(new lineas(74 * 6.97, 234 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(94 * 6.97, 274 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(74 * 6.97, 315 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(94 * 6.97, 354 * 6.97, 21 * 6.97, 2 * 6.97))

linea.push(new lineas(34 * 6.97, 74 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(94 * 6.97, 95 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(74 * 6.97, 135 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(54 * 6.97, 155 * 6.97, 41 * 6.97, 2 * 6.97))

linea.push(new lineas(94 * 6.97, 215 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(114 * 6.97, 235 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(134 * 6.97, 275 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(154 * 6.97, 295 * 6.97, 61 * 6.97, 2 * 6.97))

linea.push(new lineas(114 * 6.97, 315 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(114 * 6.97, 375 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(134 * 6.97, 355 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(154 * 6.97, 375 * 6.97, 21 * 6.97, 2 * 6.97))

linea.push(new lineas(194 * 6.97, 374 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(174 * 6.97, 355 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(194 * 6.97, 335 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(214 * 6.97, 55 * 6.97, 61 * 6.97, 2 * 6.97))

linea.push(new lineas(174 * 6.97, 75 * 6.97, 60 * 6.97, 2 * 6.97))
linea.push(new lineas(154 * 6.97, 115 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(134 * 6.97, 155 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(194 * 6.97, 75 * 6.97, 80 * 6.97, 2 * 6.97))

linea.push(new lineas(234 * 6.97, 74 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(274 * 6.97, 75 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 95 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 95 * 6.97, 41 * 6.97, 2 * 6.97))

linea.push(new lineas(354 * 6.97, 74 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(374 * 6.97, 74 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(334 * 6.97, 94 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(354 * 6.97, 115 * 6.97, 20 * 6.97, 2 * 6.97))

linea.push(new lineas(154 * 6.97, 215 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(194 * 6.97, 215 * 6.97, 60 * 6.97, 2 * 6.97))
linea.push(new lineas(174 * 6.97, 195 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(174 * 6.97, 274 * 6.97, 61 * 6.97, 2 * 6.97))

linea.push(new lineas(214 * 6.97, 394 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(274 * 6.97, 375 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(334 * 6.97, 54 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(314 * 6.97, 114 * 6.97, 22 * 6.97, 2 * 6.97))

linea.push(new lineas(374 * 6.97, 134 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(394 * 6.97, 154 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(374 * 6.97, 195 * 6.97, 40 * 6.97, 2 * 6.97))

linea.push(new lineas(394 * 6.97, 215 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(354 * 6.97, 235 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(374 * 6.97, 274 * 6.97, 62 * 6.97, 2 * 6.97))
linea.push(new lineas(394 * 6.97, 315 * 6.97, 41 * 6.97, 2 * 6.97))

linea.push(new lineas(374 * 6.97, 354 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 394 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(314 * 6.97, 374 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(334 * 6.97, 374 * 6.97, 22 * 6.97, 2 * 6.97))

linea.push(new lineas(354 * 6.97, 334 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(234 * 6.97, 335 * 6.97, 40 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 354 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(314 * 6.97, 335 * 6.97, 20 * 6.97, 2 * 6.97))

linea.push(new lineas(334 * 6.97, 294 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(394 * 6.97, 95 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(334 * 6.97, 174 * 6.97, 102 * 6.97, 2 * 6.97))
linea.push(new lineas(354 * 6.97, 274 * 6.97, 22 * 6.97, 2 * 6.97))

linea.push(new lineas(194 * 6.97, 295 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(214 * 6.97, 294 * 6.97, 62 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 314 * 6.97, 42 * 6.97, 2 * 6.97))
linea.push(new lineas(274 * 6.97, 334 * 6.97, 22 * 6.97, 2 * 6.97))

linea.push(new lineas(214 * 6.97, 235 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(214 * 6.97, 194 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(194 * 6.97, 174 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(234 * 6.97, 154 * 6.97, 41 * 6.97, 2 * 6.97))

linea.push(new lineas(274 * 6.97, 135 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 154 * 6.97, 41 * 6.97, 2 * 6.97))
linea.push(new lineas(234 * 6.97, 214 * 6.97, 82 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 234 * 6.97, 21 * 6.97, 2 * 6.97))

linea.push(new lineas(254 * 6.97, 194 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(274 * 6.97, 215 * 6.97, 61 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 274 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(294 * 6.97, 275 * 6.97, 61 * 6.97, 2 * 6.97))

linea.push(new lineas(274 * 6.97, 294 * 6.97, 21 * 6.97, 2 * 6.97))
linea.push(new lineas(314 * 6.97, 194 * 6.97, 102 * 6.97, 2 * 6.97))
linea.push(new lineas(254 * 6.97, 154 * 6.97, 22 * 6.97, 2 * 6.97))
linea.push(new lineas(74 * 6.97, 95 * 6.97, 20 * 6.97, 2 * 6.97))
linea.push(new lineas(154 * 6.97, 255 * 6.97, 20 * 6.97, 2 * 6.97))



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
    console.log(e)
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
            player.y -= 7
            spri.y = 2
        break;
        case "down":
            player.y += 7
            spri.y = 0
        break;
        case "left":
            player.x -= 7
            spri.y = 1
        break;
        case "right":
            player.x += 7
            spri.y = 3
        break;
    }
    camera.follow(player);
}

let zoomFactor = 1;
ctx.scale(zoomFactor, zoomFactor);

var mono = new Image()
mono.src = "ash.png"

let lastTime = 0; // Último tiempo registrado
let fps = 30;     // Número de frames por segundo deseado (ajusta este valor)
let frameDuration = 1000 / fps; 

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
        
        ctx.drawImage(imgBul ,bul.x - camera.x , bul.y - camera.y , bul.h , bul.w )
        ctx.drawImage(imgDrag ,drag.x - camera.x , drag.y - camera.y , drag.h , drag.w )
        ctx.drawImage(imgGato,gato.x - camera.x , gato.y - camera.y , gato.h , gato.w )
        ctx.drawImage(imgPik,pik.x - camera.x , pik.y - camera.y , pik.h , pik.w )
        ctx.drawImage(imgPin,pin.x - camera.x , pin.y - camera.y , pin.h , pin.w )
        ctx.drawImage(imgPurp,purp.x - camera.x , purp.y - camera.y , purp.h , purp.w )
        ctx.drawImage(imgTort,tort.x - camera.x , tort.y - camera.y , tort.h , tort.w )
        ctx.drawImage(imgTrue,trueno.x - camera.x , trueno.y - camera.y , trueno.h , trueno.w )
        
        ctx.drawImage(mono ,spri.x *30 , spri.y*32 , spri.w , spri.h ,player.x - camera.x,player.y - camera.y, player.h , player.w )


        spri.x += 1
        
        if(spri.x >= 4){
            spri.x = 0
        }

        
    }
    requestAnimationFrame(pintar)
    
}
requestAnimationFrame(pintar)


