/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function Bandejas()
{
    PizzaB1();
    PizzaB2();
    PizzaBR();
}

function Nrand()
{
    var val = Math.floor(Math.random() * (7 - 1)) + 1;
    document.getElementById('N1').value = val;
    document.getElementById('N2').value = "";
    document.getElementById('Nt').value = "";
    PizzaB2();
    PizzaBR();
    PorcionesR(val);
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

function PorcionesR(valor)
{
    var canvas = document.getElementById('PrimSumando');
    var ctx = canvas.getContext('2d');
    var img;
    switch (valor) {
        case "1":
            img = new Image();
            img.src = 'assets/images/P1-7p.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "2":
            img = new Image();
            img.src = 'assets/images/P2-7p.png';
            ctx.drawImage(img,  0, 0, 350, 350,0,0,524,262);
            break;
        case "3":
            img = new Image();
            img.src = 'assets/images/P3-7p.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 4:
            img = new Image();
            img.src = 'assets/images/P4-7p.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 5:
            img = new Image();
            img.src = 'assets/images/P5-7p.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
        case 6:
            img = new Image();
            img.src = 'assets/images/P6-7p.png';
            ctx.drawImage(img, 0, 0, 350, 350,0,0,524,262);
            break;
}}

/*function PizzaB(id_elem)
{  var canvas;
    var ctx;
    var imgbandeja

    if(id_elem== "SegSumando")
    {
        canvas = document.getElementById('SegSumando');
        ctx = canvas.getContext('2d');
        imgbandeja = new Image();
        imgbandeja.src = 'assets/images/P0-7.png';
        ctx.drawImage(imgbandeja, 0, 0, 350, 350, 0, 0, 524, 262);
    }
    if(id_elem== "Resultado")
    {
        canvas = document.getElementById('Resultado');
        ctx = canvas.getContext('2d');
        imgbandeja = new Image();
        imgbandeja.src = 'assets/images/P0-7.png';
        ctx.drawImage(imgbandeja, 0, 0, 350, 350, 0, 0, 524, 262);
    }

}*/
