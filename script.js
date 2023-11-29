let dato = document.getElementById("peso");
let  boton= document.getElementById("calcular");
let MAN= document.getElementById("mante")
const VOL = document.getElementById("volumen")
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
        volumen=superficiecorporal(peso);
}
console.log(volumen);
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
    let sc= ((peso*4)+7) / (peso+90)
    return sc;
}
 





