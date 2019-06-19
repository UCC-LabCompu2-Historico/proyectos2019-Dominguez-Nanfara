/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/*----bandejas----*/

function Bandejas()
{
    PizzaB1();
    PizzaB2();
    PizzaBR();
}

function PizzaB1()
{   var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}

function PizzaB2()
{   var canvas = document.getElementById('SegSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}

function PizzaBR()
{   var canvas = document.getElementById('Resultado');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);
}

function Nrand()
{
    //var val = Math.floor(Math.random() * (7 - 1)) + 1;
    var val = Math.floor(Math.random() * (7));
    document.getElementById('N1').value = val;
    document.getElementById('N2').value = "";
    document.getElementById('Nt').value = "";
    PorcionesR(val);
    PizzaB2();
    PizzaBR();
}

function Verif() {
    var n1 = document.getElementById('N1').value;
    var n2 = document.getElementById('N2').value;
    var nt = document.getElementById('Nt').value;
    var result = parseInt(nt) - parseInt(n2);
    if (n1==result)
    {
        alert("Bien hecho!")
    }
    else{
        var pregunta = confirm("¿Deseas repasar la teoría?")
        if (pregunta){
            alert("Te envío allí rápidamente")
            window.location = "https://ucc-labcompu2.github.io/proyectos2019-Dominguez-Nanfara/";
        }
        else{
            alert("Tu puedes!")
        }
    }}


/*----Canvas y porciones----*/

function PorcionesR(valor)
{
    var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var img;
    switch (valor)
    {
        case 0:
            img = new Image();
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 1:
            img = new Image();
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 2:
            img = new Image();
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 3:
            img = new Image();
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 4:
            img = new Image();
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 5:
            img = new Image();
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 6:
            img = new Image();
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

function PorcionesN2()
{
    var canvas = document.getElementById('SegSumando');
    var ctx = canvas.getContext('2d');
    var img;
    var valor = document.getElementById('N2').value;
    switch (valor)
    {
        case "0":
            img = new Image();
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "1":
            img = new Image();
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "2":
            img = new Image();
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "3":
            img = new Image();
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "4":
            img = new Image();
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "5":
            img = new Image();
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "6":
            img = new Image();
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "7":
            img = new Image();
            img.src = 'assets/images/P7-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

function PorcionesNt()
{
    var canvas = document.getElementById('Resultado');
    var ctx = canvas.getContext('2d');
    var img;
    var valor = document.getElementById('Nt').value;
    switch (valor)
    {
        case "0":
            img = new Image();
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 0:
            img = new Image();
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "1":
            img = new Image();
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "2":
            img = new Image();
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "3":
            img = new Image();
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "4":
            img = new Image();
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "5":
            img = new Image();
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "6":
            img = new Image();
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "7":
            img = new Image();
            img.src = 'assets/images/P7-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

