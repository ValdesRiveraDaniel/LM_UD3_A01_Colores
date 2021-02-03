var indice = 1;

var arrayColor = ["blue", "green", "black", "pink", "red", "orange"];

var numColor = arrayColor.length;


function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}


function myFunction() {
    alert("Intente hacer lo de los colores, pero solo puedo añadir un color, en cada cuadrado, pongo esta alerta para que sepas que sabemos hacer alertas");
  }




function cambioColor(x){

  
    if(x.style.background=="#F7D358")
    {
        x.style.background=="#a7D358"
       
   }else if(x.style.background=="#a7D358"){
    x.style.background="#fff";
   }else
   {
        x.style.background="#F7D358";
    }



}



