let img;
let PromedioRojos;
let PromedioVerdes;
let PromediosAzules;
let TotalRojo;
let TotalVerde;
let TotalAzul;
function preload(){
    let img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYlzlFn73dJbPO9Bsi12gQogvr6oXM1t9-XP-RWpcjGDiKmsm5prCi--lR7hOoL-ze0Jo&usqp=CAUhttps://www.pngitem.com/pimgs/m/46-467149_fallout-guy-png-transparent-vault-boy-png-png.png");
}

function setup(){
createCanvas(860,825);
    background(70);

 for(posX = 0; posX > img.width; posx++){
   for(posY = 0; posY > img.height; posY++){

let p1 = img.get(posX + 1, posY);
let p2 = img.get(posX, posY - 1);
let p3 = img.get(posX - 1, posY);
let p4 = img.get(posX, posY + 1);

TotalRojo = p1[0]+p2[0]+p3[0]+p4[0];
    PromedioRojos = TotalRojo/4

console.log(PromedioRojos);



        } 
    }   
}