let dato = document.getElementById("peso");
let  boton= document.getElementById("calcular");
let MAN= document.getElementById("mante")
MAN.style.display="none"
const VOL = document.getElementById("volumen")
VOL.style.display="none"
boton.addEventListener("click",eventoboton);
function eventoboton() {
    let peso= dato.valueAsNumber;
    let volumen;
    if(peso <= 30){
        volumen=holliday(peso);
        VOL.innerHTML= volumen/24 + "cc/hr";
        VOL.style.display= "block";
        MAN.innerHTML= "m+m/2 ="+ volumen / 24 *1.5 +"cc/hr";
        MAN.style.display="block";
    }else{
        superficiecorporal(peso);
}
}
function holliday(peso) {
    if(peso> 20){
        let aux= (peso-20)*20
        resultado = 1500+aux;
    }
    else if (peso<=20&&peso>10){
        resultado=((peso-10)*50+1000);
    }
    else if (peso <=10){
        resultado=peso*100;
    }
    return resultado;  
}
function superficiecorporal(peso) {
resultado1=((peso*4)+7)/(peso+90)*1500
resultado2=((peso*4)+7)/(peso+90)*2000 
    VOL.innerHTML= resultado1 + "cc*1500";
    VOL.style.display= "block"
    MAN.innerHTML=  resultado2 +"cc*2000";
    MAN.style.display="block";   
}
 





