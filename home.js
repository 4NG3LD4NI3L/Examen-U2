const canvas = document.getElementById('my_canvas');
const ctx = canvas.getContext('2d');

var linea = [];

class lineas{
    constructor(x,y,h,w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }
}

//MARCO
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.strokeRect(15, 15, 400, 400);

//LINEAS HORIZONTALES (X,Y,ALTO,ANCHO)
//linea.push(new lineas(40,59,4,23))

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

linea.push(new lineas(334,114,22,2))
linea.push(new lineas(354,74,22,2))
linea.push(new lineas(374,74,22,2))
linea.push(new lineas(334,94,22,2))

linea.push(new lineas(314,14,22,2))
linea.push(new lineas(354,115,20,2))
linea.push(new lineas(154,215,20,2))
linea.push(new lineas(194,215,60,2))

linea.push(new lineas(174,195,20,2))
linea.push(new lineas(174,274,61,2))
linea.push(new lineas(214,394,20,2))
linea.push(new lineas(274,375,20,2))


function pintar(){
    ctx.fillStyle = "black";


    linea.forEach(function(lin,i,array){
        ctx.fillRect(lin.x,lin.y,lin.w,lin.h)
        //player.siTocar(pared);
    })

}

pintar();


