let img;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let PosX;
let PosY;
let RojoTotal;
let VerdeTotal;
let AzulTotal;
let RojoProm;
let VerdeProm;
let AzulProm;
function preload(){
img = loadImage("https://i.insider.com/5627b552dd0895ee6a8b4666?width=1009&format=jpeg");
}

function setup(){
    createCanvas(img.width,img.height);
        background(255)
c1 = PosX + 1, PosY;
c2 = PosX + 1, PosY - 1;
c3 = PosX    , PosY - 1;
c4 = PosX - 1, PosY - 1;
c5 = PosX - 1, PosY;
c6 = PosX - 1, PosY + 1;
c7 = PosX,     PosY + 1;
c8 = PosX + 1, PosY + 1;

img.loadPixels();
        for(PosX = 1; PosX  < img.width; PosX + 3 ){
   for(PosY = 1; PosY < img.height; PosY + 3 ){

let p1 = img.get( PosX + 1, PosY    );
let p2 = img.get(PosX + 1, PosY - 1 );
let p3 = img.get(PosX    , PosY - 1 );
let p4 = img.get( PosX - 1, PosY - 1);
let p5 = img.get(PosX - 1, PosY     );
let p6 = img.get(PosX - 1, PosY + 1 );
let p7 = img.get(PosX,     PosY + 1 );
let p8 = img.get(PosX + 1, PosY + 1 );

RojoTotal = p1[0]+p2[0]+p3[0]+p4[0]+p5[0]+p6[0]+p7[0]+p8[0];
    RojoProm = RojoTotal/8;

VerdeTotal = p1[1]+p2[1]+p3[1]+p4[1]+p5[1]+p6[1]+p7[1]+p8[1];   
    VerdeProm = VerdeTotal/8;

AzulTotal = p1[2]+p2[2]+p3[2]+p4[2]+p5[2]+p6[2]+p7[2]+p8[2];
    AzulProm = AzulTotal/8;


let Promedio = [0,0,0,0]

Promedio[0] = RojoTotal;
Promedio[1] = VerdeTotal;
Promedio[2] = AzulTotal;
Promedio[3] = 100;

img.set(PosX,PosY,Promedio);


         }   
    }
}

function draw(){
    image(img,0,0);
}