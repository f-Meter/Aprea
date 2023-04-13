function aceptar(){
    var nombre=document.getElementById("nombre").value;
    var fecha=document.getElementById("fecha").value;
    var peso=document.getElementById("peso").value;
    var talla=document.getElementById("talla").value;
    var cintura=document.getElementById("cintura").value;
    var cadera=document.getElementById("cadera").value;
    var patologia=document.getElementById("patologia").value;
    var actividad=document.getElementById("actividad_fisica").value;
    var tiempo=document.getElementById("tiempo").value;

    var imc =peso/(talla*talla);
    var icc = cintura/cadera;
    console.log("IMC: "+imc);
    console.log("ICC: "+icc);
    var nivelM;
    var nivelC;
    var rutaM;
    var speak;

    if(imc<18.5){
        nivelM="-1";
        rutaM="HN-1.png"
        speak = "Te sugerimos visitar nuestras instalaciones de SaludDigna para un chequeo y realizarte un plan nutricional que aporte los requerimientos caloricos, asi como de vitaminas que necesitas para tener un peso adecuado";
    }else if(imc<24.9 && imc>=18.5){
        nivelM="0";
        rutaM="HN0.png"
        speak = "Te esperamos en nuestras instalaciones de SaludDigna para crearte un plan nutricional de acuerdo a tus necesidades";
    }else if(imc<29.9 && imc>=24.9){
        nivelM="1";
        rutaM="HN1.png"
        speak = "Te sugerimos visitar nuestras instalaciones de SaludDigna para realizarte un chequeo y generarte un plan de nutricion para balancear tus alimentos adecuadamente ";
    }else if(imc>=30){
        nivelM="2";
        rutaM="HN2.png"
        speak = "Te recomendamos visitar nuestras instalaciones de SaludDigna para realizarte un chequeo y generarte un plan de nutricion para balancear tus alimentos adecuadamente ";
    }

    if(icc<.71){
        nivelC="-1";
    }else if(icc<.84 && icc>=.71){
        nivelC="0";

    }else if(icc>=.84){
        nivelC="1";
    }

    console.log("NivelIMC "+nivelM);
    console.log("NivelICC "+nivelC);
    console.log("Speak "+speak);
          
    document.getElementById("btn_descargar").style.visibility = "visible";
    document.getElementById("nota").style.visibility = "visible";
    document.getElementById("btn_continuar").style.visibility = "visible";

    var can = document.getElementById("micanvas")
    var ctx = can.getContext("2d")
    can.height = 600;
    ctx.font="50px Georgia";
    ctx.fillStyle="white"
    ctx.fillRect(0,0,micanvas.width,micanvas.height);
    ctx.fillStyle = "black";
    ctx.fillText("Nivel "+nivelM,10,50)
    ctx.font="10px Georgia";
    ctx.fillText("Nombre "+nombre,10,500)
    ctx.fillText("Fecha de nacimiento "+fecha,10,510)
    ctx.fillText("Patologia "+patologia,10,520)
    ctx.fillText("Actividad fisica "+actividad,10,530)
    ctx.fillText("Tiempo de actividad fisica "+tiempo,10,540)
    ctx.fillText("IMC "+imc,10,550)
    ctx.fillText("ICC "+icc,10,560)
    var img = new Image();
    img.src = rutaM;
    img.onload = function(){
        ctx.drawImage(img, 10, 60,300,400);
        img.setAttribute('crossorigin', 'anonymous'); // works for me

      }

      var newt = document.createElement("div");
      newt.style.cssText='padding:12px';                 
      var t = document.createTextNode(""+speak);       
      newt.appendChild(t);                                         
      document.getElementById("cont5").appendChild(newt); 

      
}

function siguiente(){
    var seguimiento=document.getElementById("seguimiento").value;

    if(seguimiento=="Si"){
        console.log("Cita generada");
        document.getElementById("btn").style.visibility = "visible";

    }
}
