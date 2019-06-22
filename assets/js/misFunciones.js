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

function Verif()
{
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
            window.location = 'index.html';
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
function Nrandp()
{   var val= Math.floor(Math.random() * (12-1))+1;
    document.getElementById('numerador1').value = val;
    document.getElementById('numerador2').value = "";
    document.getElementById('numeradorT').value = "";
    Choco1();
    ChocP2();
    ChocPR();
}

function Verifrest(){
    var r1= document.getElementById("Minuendo").value;
    var r2= document.getElementById("Sustraendo").value;
    var rt=document.getElementById("Diferencia").value;
    var resultado = parseInt(rt) + parseInt(r2);
    alert (resultado)
    if(r1==resultado)
    {
        alert("Bien hecho!")
    }
    else {
        var pregunta = confirm("Ups...Intentalo otra vez! ¿O Deseas repasar la teoría?")
        if (pregunta){
            alert("Te envío allí rápidamente")
            window.location = 'index.html';
        }
        else{
            alert("Tu puedes!")
        }
    }
}
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

/*----Comparacion----*/
function Aleat()

{
    var val1 = Math.floor(Math.random() * (10));
    var canvas1 = document.getElementById('Cizq');
    var ctx1 = canvas1.getContext('2d');
    var img1  = new Image();
    switch (val1) {
        case 0:
            img1.src = 'assets/images/F0.jpg';
            ctx1.drawImage(img1, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 6;
            document.getElementById('denizq').value = 8;
            break;
        case 1:
            img1.src = 'assets/images/F1.jpg';
            ctx1.drawImage(img1, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 5;
            document.getElementById('denizq').value = 6;
            break;
        case 2:
            img1.src = 'assets/images/F2.jpg';
            ctx1.drawImage(img1, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 2;
            document.getElementById('denizq').value = 3;
            break;
        case 3:
            img1.src = 'assets/images/F3.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 1;
            document.getElementById('denizq').value = 3;
            break;
        case 4:
            img1.src = 'assets/images/F4.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('denizq').value = 8;
            break;
        case 5:
            img1.src = 'assets/images/F5.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 3;
            document.getElementById('denizq').value = 8;
            break;
        case 6:
            img1.src = 'assets/images/F6.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 3;
            document.getElementById('denizq').value = 6;
            break;
        case 7:
            img1.src = 'assets/images/F7.jpg';
            ctx1.drawImage(img1, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 2;
            document.getElementById('denizq').value = 6;
            break;
        case 8:
            img1.src = 'assets/images/F8.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 4;
            document.getElementById('denizq').value = 6;
            break;
        case 9:
            img1.src = 'assets/images/F9.jpg';
            ctx1.drawImage(img1,0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 7;
            document.getElementById('denizq').value = 8;
            break;
        case 10:
            img1.src = 'assets/images/F10.jpg';
            ctx1.drawImage(img1, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numizq').value = 2;
            document.getElementById('denizq').value = 8;
            break;

    }

}

function Aleatd()
{
    var val2 = Math.floor(Math.random() * (10));
    var canvas2 = document.getElementById('Cder');
    var ctx2 = canvas2.getContext('2d');
    var img2  = new Image();
    switch (val2) {
        case 0:
            img2.src = 'assets/images/F0.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 6;
            document.getElementById('dender').value = 8;
            break;
        case 1:
            img2.src = 'assets/images/F1.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 5;
            document.getElementById('dender').value = 6;
            break;
        case 2:
            img2.src = 'assets/images/F2.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 2;
            document.getElementById('dender').value = 3;
            break;
        case 3:
            img2.src = 'assets/images/F3.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 1;
            document.getElementById('dender').value = 3;
            break;
        case 4:
            img2.src = 'assets/images/F4.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 5;
            document.getElementById('dender').value = 8;
            break;
        case 5:
            img2.src = 'assets/images/F5.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 3;
            document.getElementById('dender').value = 8;
            break;
        case 6:
            img2.src = 'assets/images/F6.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 3;
            document.getElementById('dender').value = 6;
            break;
        case 7:
            img2.src = 'assets/images/F7.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 2;
            document.getElementById('dender').value = 6;
            break;
        case 8:
            img2.src = 'assets/images/F8.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 4;
            document.getElementById('dender').value = 6;
            break;
        case 9:
            img2.src = 'assets/images/F9.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 7;
            document.getElementById('dender').value = 8;
            break;
        case 10:
            img2.src = 'assets/images/F10.jpg';
            ctx2.drawImage(img2, 0, 0, 504, 525, 0, 0, 516, 269);
            document.getElementById('numder').value = 2;
            document.getElementById('dender').value = 8;
            break;
    }

}

function BMa() {
    var n1 = document.getElementById('numizq').value;
    var n2 = document.getElementById('numder').value;
    var d1 = document.getElementById('denizq').value;
    var d2 = document.getElementById('dender').value;
    var result1 = (n1 / d1);
    var result2 = (n2 / d2);
    if (result1 > result2) {
        alert("Bien hecho!")
    } else {
        var pregunta = confirm("¿Deseas repasar la teoría?")
        if (pregunta) {
            alert("Te envío allí rápidamente")
            window.location = 'index.html';
        } else {
            alert("Tu puedes!")
        }
    }
}

function BMe() {
    var n1 = document.getElementById('numizq').value;
    var n2 = document.getElementById('numder').value;
    var d1 = document.getElementById('denizq').value;
    var d2 = document.getElementById('dender').value;
    var result1 = (n1 / d1);
    var result2 = (n2 / d2);
    if (result1 < result2) {
        alert("Bien hecho!")
    } else {
        var pregunta = confirm("¿Deseas repasar la teoría?")
        if (pregunta) {
            alert("Te envío allí rápidamente")
            window.location = 'index.html';
        } else {
            alert("Tu puedes!")
        }
    }
}

function BI() {
    var n1 = document.getElementById('numizq').value;
    var n2 = document.getElementById('numder').value;
    var d1 = document.getElementById('denizq').value;
    var d2 = document.getElementById('dender').value;
    var result1 = (n1 / d1);
    var result2 = (n2 / d2);
    if (result1 == result2) {
        alert("Bien hecho!")
    } else {
        var pregunta = confirm("¿Deseas repasar la teoría?")
        if (pregunta) {
            alert("Te envío allí rápidamente")
            window.location = 'index.html';
        } else {
            alert("Tu puedes!")
        }
    }
}

