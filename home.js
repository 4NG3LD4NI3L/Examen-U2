const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');

var linea = [];

let camera = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
    follow(target) {
       
        this.x = target.x + target.w / 6 - this.width / 6;
        this.y = target.y + target.h / 6 - this.height / 6;

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
                    player.y += 0.5
                break;
                case "down":
                    player.y -= 0.5
                break;
                case "left":
                    player.x += 0.5
                break;
                case "rigth":
                    player.x -= 0.5
                break;
                }
            
        }
        
    }
}

//PLAYER
let player = new jugador(20,15,10,10)


//MARCO
ctx.strokeStyle = 'black';
linea.push(new lineas(34,15,1,381))
linea.push(new lineas(15,414,1,380))
linea.push(new lineas(15,15,400,1))
linea.push(new lineas(414,15,380,1))

//LINEAS HORIZONTALES (X,Y,ALTO,ANCHO)
linea.push(new lineas(34,54,2,21))
linea.push(new lineas(94,34,2,22))
linea.push(new lineas(134,34,2,21))
linea.push(new lineas(215,34,2,20))

linea.push(new lineas(254,34,2,21))
linea.push(new lineas(314,34,2,41))
linea.push(new lineas(374,34,2,22))
linea.push(new lineas(54,74,2,61))

linea.push(new lineas(154,54,2,62))
linea.push(new lineas(154,74,2,22))
linea.push(new lineas(275,54,2,21))
linea.push(new lineas(334,54,2,42))

linea.push(new lineas(234,74,2,81))
linea.push(new lineas(334,74,2,22))
linea.push(new lineas(374,74,2,40))
linea.push(new lineas(354,94,2,22))

linea.push(new lineas(314,94,2,22))
linea.push(new lineas(135,94,2,20))
linea.push(new lineas(34,94,2,62))
linea.push(new lineas(16,74,2,20))

linea.push(new lineas(16,114,2,19))
linea.push(new lineas(214,114,2,22))
linea.push(new lineas(295,114,2,21))
linea.push(new lineas(334,114,2,62))

linea.push(new lineas(34,134,2,42))
linea.push(new lineas(114,134,2,21))
linea.push(new lineas(134,114,2,22))
linea.push(new lineas(195,134,2,101))

linea.push(new lineas(314,134,2,22))
linea.push(new lineas(374,134,2,21))
linea.push(new lineas(34,154,2,22))
linea.push(new lineas(94,154,2,121))

linea.push(new lineas(234,154,2,22))
linea.push(new lineas(294,154,2,81))
linea.push(new lineas(394,154,2,20))
linea.push(new lineas(74,174,2,21))

linea.push(new lineas(134,174,2,41))
linea.push(new lineas(194,174,2,41))
linea.push(new lineas(254,174,2,21))
linea.push(new lineas(315,174,2,21))

linea.push(new lineas(355,174,2,21))
linea.push(new lineas(54,194,2,162))
linea.push(new lineas(254,194,2,62))
linea.push(new lineas(335,194,2,61))

linea.push(new lineas(35,214,2,101))
linea.push(new lineas(214,214,2,22))
linea.push(new lineas(254,214,2,41))
linea.push(new lineas(355,214,2,20))

linea.push(new lineas(34,234,2,22))
linea.push(new lineas(74,234,2,22))
linea.push(new lineas(134,234,2,61))
linea.push(new lineas(235,234,2,21))

linea.push(new lineas(295, 234, 2, 20));
linea.push(new lineas(16, 254, 2, 19));
linea.push(new lineas(95, 254, 2, 80));
linea.push(new lineas(275, 254, 2, 20));

linea.push(new lineas(354, 254, 2, 41));
linea.push(new lineas(16, 314, 2, 60));
linea.push(new lineas(95, 314, 2, 40));
linea.push(new lineas(175, 314, 2, 21));

linea.push(new lineas(215, 314, 2, 41));
linea.push(new lineas(295, 314, 2, 60));
linea.push(new lineas(74, 354, 2, 22));
linea.push(new lineas(114, 354, 2, 22));

linea.push(new lineas(154, 354, 2, 62));
linea.push(new lineas(254, 354, 2, 22));
linea.push(new lineas(294, 354, 2, 62));
linea.push(new lineas(374, 354, 2, 22));

linea.push(new lineas(54, 374, 2, 62));
linea.push(new lineas(135, 374, 2, 21));
linea.push(new lineas(194, 374, 2, 102));
linea.push(new lineas(314, 374, 2, 22));

linea.push(new lineas(354, 374, 2, 21));
linea.push(new lineas(395, 374, 2, 19));
linea.push(new lineas(34, 394, 2, 22));
linea.push(new lineas(95, 394, 2, 21));

linea.push(new lineas(154, 394, 2, 42));
linea.push(new lineas(214, 394, 2, 41));
linea.push(new lineas(294, 394, 2, 22));
linea.push(new lineas(334, 394, 2, 21));

linea.push(new lineas(374, 394, 2, 21));
linea.push(new lineas(135, 334, 2, 20));
linea.push(new lineas(274, 334, 2, 22));
linea.push(new lineas(354, 334, 2, 22));

linea.push(new lineas(34, 294, 2, 41));
linea.push(new lineas(114, 294, 2, 42));
linea.push(new lineas(214, 294, 2, 22));
linea.push(new lineas(254, 294, 2, 22));

linea.push(new lineas(314, 294, 2, 22));
linea.push(new lineas(354, 294, 2, 21));
linea.push(new lineas(395, 294, 2, 19));
linea.push(new lineas(34, 274, 2, 22));

linea.push(new lineas(74, 274, 2, 22));
linea.push(new lineas(174, 274, 2, 42));
linea.push(new lineas(254, 274, 2, 22));
linea.push(new lineas(334, 274, 2, 22));
linea.push(new lineas(374, 274, 2, 22));




//LINEAS VERTICALES
linea.push(new lineas(34,15,41,2))
linea.push(new lineas(74,16,39,2))
linea.push(new lineas(54,35,41,2))
linea.push(new lineas(94,34,21,2))

linea.push(new lineas(114,34,102,2))
linea.push(new lineas(134,34,82,2))
linea.push(new lineas(174,16,40,2))
linea.push(new lineas(194,35,20,2))

linea.push(new lineas(234,16,40,2))
linea.push(new lineas(254,34,41,2))
linea.push(new lineas(294,16,40,2))
linea.push(new lineas(314,34,62,2))

linea.push(new lineas(374,34,22,2))
linea.push(new lineas(394,34,22,2))
linea.push(new lineas(34,274,22,2))
linea.push(new lineas(54,115,20,2))

linea.push(new lineas(34,134,22,2))
linea.push(new lineas(34,174,61,2))
linea.push(new lineas(34,274,22,2))
linea.push(new lineas(54,315,40,2))

linea.push(new lineas(34,335,61,2))
linea.push(new lineas(54,374,22,2))
linea.push(new lineas(74,395,20,2))
linea.push(new lineas(54,234,42,2))

linea.push(new lineas(74,234,42,2))
linea.push(new lineas(94,274,61,2))
linea.push(new lineas(74,315,41,2))
linea.push(new lineas(94,354,21,2))

linea.push(new lineas(34,74,22,2))
linea.push(new lineas(94,95,61,2))
linea.push(new lineas(74,135,41,2))
linea.push(new lineas(54,155,41,2))

linea.push(new lineas(94,215,21,2))
linea.push(new lineas(114,235,61,2))
linea.push(new lineas(134,275,20,2))
linea.push(new lineas(154,295,61,2))

linea.push(new lineas(114,315,41,2))
linea.push(new lineas(114,375,21,2))
linea.push(new lineas(134,355,40,2))
linea.push(new lineas(154,375,21,2))

linea.push(new lineas(194,374,22,2))
linea.push(new lineas(174,355,20,2))
linea.push(new lineas(194,335,20,2))
linea.push(new lineas(214,55,61,2))

linea.push(new lineas(174,75,60,2))
linea.push(new lineas(154,115,40,2))
linea.push(new lineas(134,155,20,2))
linea.push(new lineas(194,75,80,2))

linea.push(new lineas(234,74,42,2))
linea.push(new lineas(274,75,40,2))
linea.push(new lineas(254,95,40,2))
linea.push(new lineas(294,95,41,2))


linea.push(new lineas(354,74,22,2))
linea.push(new lineas(374,74,22,2))
linea.push(new lineas(334,94,22,2))
linea.push(new lineas(354,115,20,2))

linea.push(new lineas(154,215,20,2))
linea.push(new lineas(194,215,60,2))
linea.push(new lineas(174,195,20,2))
linea.push(new lineas(174,274,61,2))

linea.push(new lineas(214,394,20,2))
linea.push(new lineas(274,375,20,2))
linea.push(new lineas(334, 54, 22, 2));
linea.push(new lineas(314, 114, 22, 2));

linea.push(new lineas(334, 134, 21, 2));
linea.push(new lineas(374, 134, 42, 2));
linea.push(new lineas(394, 154, 42, 2));
linea.push(new lineas(374, 195, 40, 2));

linea.push(new lineas(394, 215, 61, 2));
linea.push(new lineas(354, 235, 21, 2));
linea.push(new lineas(374, 274, 62, 2));
linea.push(new lineas(394, 315, 41, 2));

linea.push(new lineas(374, 354, 42, 2));
linea.push(new lineas(294, 394, 20, 2));
linea.push(new lineas(314, 374, 22, 2));
linea.push(new lineas(334, 374, 22, 2));

linea.push(new lineas(354, 334, 42, 2));
linea.push(new lineas(234, 335, 40, 2));
linea.push(new lineas(294, 354, 22, 2));
linea.push(new lineas(314, 335, 20, 2));

linea.push(new lineas(334, 294, 41, 2));
linea.push(new lineas(394, 95, 21, 2));
linea.push(new lineas(334, 174, 102, 2));
linea.push(new lineas(354, 274, 22, 2));

linea.push(new lineas(194, 295, 21, 2));
linea.push(new lineas(214, 294, 62, 2));
linea.push(new lineas(254, 314, 42, 2));
linea.push(new lineas(274, 334, 22, 2));

linea.push(new lineas(214, 235, 41, 2));
linea.push(new lineas(214, 194, 22, 2));
linea.push(new lineas(194, 174, 21, 2));
linea.push(new lineas(234, 154, 41, 2));

linea.push(new lineas(274, 135, 20, 2));
linea.push(new lineas(294, 154, 41, 2));
linea.push(new lineas(234, 214, 82, 2));
linea.push(new lineas(254, 234, 21, 2));

linea.push(new lineas(254, 194, 22, 2));
linea.push(new lineas(274, 215, 61, 2));
linea.push(new lineas(254, 274, 22, 2));
linea.push(new lineas(294, 275, 61, 2));

linea.push(new lineas(274, 294, 21, 2));
linea.push(new lineas(314, 194, 102, 2));
linea.push(new lineas(254, 154, 22, 2));
linea.push(new lineas(74, 95, 20, 2));
linea.push(new lineas(154, 255, 20, 2));


var direccion = " ";

document.addEventListener("keydown",function(e){
    switch(e.keyCode){
        case 65:
            direccion = "left";
        break;
        case 68:
            direccion = "rigth"
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


function update(){
    switch(direccion){
        case "up":
            player.y -= 0.5
        break;
        case "down":
            player.y += 0.5
            
        break;
        case "left":
        player.x -= 0.5
            
        break;
        case "rigth":
            player.x += 0.5
        break;
    }
    camera.follow(player);
}

let zoomFactor = 3;
ctx.scale(zoomFactor, zoomFactor);

function pintar(){
    
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    
    update()

    
    ctx.fillStyle = "black";
    linea.forEach(function(lin,i,array){
        ctx.fillRect(lin.x - camera.x, lin.y - camera.y, lin.w, lin.h);
        player.siTocar(lin);
    })

    ctx.fillRect(player.x - camera.x, player.y - camera.y, player.h, player.w);
    
    requestAnimationFrame(pintar)
    
}
requestAnimationFrame(pintar)



