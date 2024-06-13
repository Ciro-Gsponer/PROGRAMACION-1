let img;
let PromedioRojos;
let PromedioVerdes;
let PromediosAzules;
let TotalRojo;
let TotalVerde;
let TotalAzul;
function preload(){
    img = loadImage("https://i.insider.com/5627b552dd0895ee6a8b4666?width=1009&format=jpeg");
}

function setup(){
createCanvas(1009,757);
    background(70);

 for(posX = 0; posX < img.width; posX++){
   for(posY = 0; posY < img.height; posY++){

let p1 = img.get(posX + 1, posY);
let p2 = img.get(posX, posY - 1);
let p3 = img.get(posX - 1, posY);
let p4 = img.get(posX, posY + 1);

TotalRojo = p1[0]+p2[0]+p3[0]+p4[0];
    PromedioRojos = TotalRojo/4;

TotalVerde = p1[1]+p2[1]+p3[1]+p4[1];
    PromedioVerdes = TotalVerde/4;

TotalAzul = p1[2]+p2[2]+p3[2]+p4[2];
    PromedioVerdes = TotalVerde/4;

    let promedio = [0, 0, 0, 0]

    promedio[0] = (PromedioRojos)
    promedio[1] = (PromedioVerdes)
    promedio[2] = (PromediosAzules) 
    promedio[3] = 100
  
  img.set(posX, posY, promedio);

        } 
    }   
img.updatePixels();
}

function draw(){
    image (img,0,0);
}