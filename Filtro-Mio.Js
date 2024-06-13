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
createCanvas(img.width,img.height);
    background(70);

 for(posX = 1; posX < img.width; posX++){
   for(posY = 1; posY < img.height; posY++){

let p1 = img.get(posX + 1, posY);
let p2 = img.get(posX, posY - 1);
let p3 = img.get(posX - 1, posY);
let p4 = img.get(posX, posY + 1);
let p5 = img.get(posX + 1, posY + 1);
let p6 = img.get(posX + 1,posY - 1);
let p7 = img.get(posX - 1, posY - 1);
let p8 = img.get(posX - 1, posY + 1);

TotalRojo = p1[0]+p2[0]+p3[0]+p4[0]+p5[0]+p6[0]+p7[0]+p8[0];
    PromedioRojos = TotalRojo/8;

TotalVerde = p1[1]+p2[1]+p3[1]+p4[1]+p5[1]+p6[1]+p7[1]+p8[1];
    PromedioVerdes = TotalVerde/8;

TotalAzul = p1[2]+p2[2]+p3[2]+p4[2]+p5[2]+p6[2]+p7[2]+p8[2];
    PromediosAzules = TotalAzul/8;
    
let promedio = [0, 0, 0, 0]     


    promedio[0] = PromedioRojos
    promedio[1] = PromedioVerdes
    promedio[2] = PromediosAzules 
    promedio[3] = 100
  
  img.set(posX, posY, promedio);
  img.set(p1, promedio);
  img.set(p2, promedio);
  img.set(p3, promedio);
  img.set(p4, promedio);
  img.set(p5, promedio);
  img.set(p6, promedio);

  
        } 
    }   
img.updatePixels();
console.log(TotalRojo);
console.log(TotalVerde);
console.log(TotalAzul);
}

function draw(){
    image(img,0,0);
}