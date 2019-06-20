/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/*----Suma----*/
/*----bandejas----*/



/*/function Bandejas()
{
    PizzaB1();
    PizzaB2();
    PizzaBR();
}*/

function PizzaB1()
{   var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);}
}

function PizzaB2()
{   var canvas = document.getElementById('SegSumando');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);}
}

function PizzaBR()
{   var canvas = document.getElementById('Resultado');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/P0-7.png';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 350, 350,0,0,524,262);}
}

/*----end bandejas----*/

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


/*----Canvas y Pizzas----*/

function PorcionesR(valor)
{
    var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    switch (valor)
    {
        case 0:
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 1:
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 2:
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case 3:
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 4:
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 5:
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 6:
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

function PorcionesN2()
{
    var canvas = document.getElementById('SegSumando');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    var valor = document.getElementById('N2').value;
    switch (valor)
    {
        case "0":
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "1":
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "2":
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "3":
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "4":
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "5":
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "6":
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "7":
            img.src = 'assets/images/P7-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

function PorcionesNt()
{
    var canvas = document.getElementById('Resultado');
    var ctx = canvas.getContext('2d');
    var img  = new Image();
    var valor = document.getElementById('Nt').value;
    switch (valor)
    {
        case "0":
            img.src = 'assets/images/P0-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "1":
            img.src = 'assets/images/P1-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "2":
            img.src = 'assets/images/P2-7.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "3":
            img.src = 'assets/images/P3-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "4":
            img.src = 'assets/images/P4-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "5":
            img.src = 'assets/images/P5-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "6":
            img = new Image();
            img.src = 'assets/images/P6-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case "7":
            img.src = 'assets/images/P7-7.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
    }}

/*----End canvas y pizzas----*/
/*----End suma----*/

/*----Resta----*/
/*---Papeles/envoltorioa----*/
function ChocP1()
{   var canvas = document.getElementById('Minuendo');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/C0-12.png';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 490, 600,0,0,500,200);}
}

function ChocP2()
{   var canvas = document.getElementById('Sustraendo');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/Cu0-12.jpg';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 500, 600,0,0,500,200);}
}

function ChocPR()
{   var canvas = document.getElementById('Diferencia');
    var ctx = canvas.getContext('2d');
    var imgbandeja = new Image();
    imgbandeja.src = 'assets/images/C0-12.png';
    imgbandeja.onload = function()
    {ctx.drawImage(imgbandeja, 0, 0, 490, 600,0,0,500,200);}
}
/*----End Papeles/Envoltorios----*/
/*----Canvas y Chocolates----*/

function Choco1()
{
    var canvas = document.getElementById('Minuendo');
    var ctx = canvas.getContext('2d');
    var img  = new Image();
    var valor = document.getElementById('numerador1').value;
    switch (valor) {
        case "0":
            img.src = 'assets/images/C0-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "1":
            img.src = 'assets/images/C1-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "2":
            img.src = 'assets/images/C2-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "3":
            img.src = 'assets/images/C3-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "4":
            img.src = 'assets/images/C4-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "5":
            img.src = 'assets/images/C5-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "6":
            img.src = 'assets/images/C6-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "7":
            img.src = 'assets/images/C7-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "8":
            img.src = 'assets/images/C8-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "9":
            img.src = 'assets/images/C9-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "10":
            img.src = 'assets/images/C10-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "11":
            img.src = 'assets/images/C11-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "12":
            img.src = 'assets/images/C12-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
    }
}

function Choco2()
{
    var canvas = document.getElementById('Sustraendo');
    var ctx = canvas.getContext('2d');
    var img  = new Image();
    var valor = document.getElementById('numerador2').value;
    switch (valor) {
        case "0":
            img.src = 'assets/images/Cu0-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "1":
            img.src = 'assets/images/Cu1-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "2":
            img.src = 'assets/images/Cu2-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "3":
            img.src = 'assets/images/Cu3-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "4":
            img.src = 'assets/images/Cu4-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "5":
            img.src = 'assets/images/Cu5-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "6":
            img.src = 'assets/images/Cu6-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "7":
            img.src = 'assets/images/Cu7-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "8":
            img.src = 'assets/images/Cu8-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "9":
            img.src = 'assets/images/Cu9-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "10":
            img.src = 'assets/images/Cu10-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "11":
            img.src = 'assets/images/Cu11-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;
        case "12":
            img.src = 'assets/images/Cu12-12.jpg';
            ctx.drawImage(img, 0, 0, 500, 600,0,0,500,200);
            break;

    }
}

function ChocoR()
{
    var canvas = document.getElementById('Diferencia');
    var ctx = canvas.getContext('2d');
    var img  = new Image();
    var valor = document.getElementById('numeradorT').value;
    switch (valor) {
        case "0":
            img.src = 'assets/images/C0-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "1":
            img.src = 'assets/images/C1-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "2":
            img.src = 'assets/images/C2-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "3":
            img.src = 'assets/images/C3-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "4":
            img.src = 'assets/images/C4-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "5":
            img.src = 'assets/images/C5-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "6":
            img.src = 'assets/images/C6-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "7":
            img.src = 'assets/images/C7-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "8":
            img.src = 'assets/images/C8-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "9":
            img.src = 'assets/images/C9-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "10":
            img.src = 'assets/images/C10-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "11":
            img.src = 'assets/images/C11-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
        case "12":
            img.src = 'assets/images/C12-12.png';
            ctx.drawImage(img, 0, 0, 490, 600, 0, 0, 500, 200);
            break;
    }
}

/*----End Canvas y Chocolates----*/
/*----End Resta----*/


