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
linea.push(new lineas(313, 374, 2, 22));

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


