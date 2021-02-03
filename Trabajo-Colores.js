var indice = 1;

var arrayColor = ["blue", "green", "black", "pink", "red", "orange"];

var numColor = arrayColor.length;


function RelojJS(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("RelojJS()",1000)
}


function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }
 
 
 
 function setRandomColor() {
   $("#colorpad").css("background-color", getRandomColor());
 }



// function cambioColor(indice){

//     var color = arrayColor[indice];

//     var elementos = background-color+ arrayColor[indice]
//     elementos.setAttribute('background-color',color);
// }



/*if(x.style.background=="#F7D358")
    {
        x.style.background="#fff";
   }else{
        x.style.background="#F7D358";
    }*/