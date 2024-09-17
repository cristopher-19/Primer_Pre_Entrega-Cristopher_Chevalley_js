
const NOMBRE = prompt("Ingresar nombre: ")
const APELLIDO = prompt("Ingrese su apellido: ")
let nombre_baneado=("cristopher")
let apellido_baneado=("chevalley")

function blacklist(nombre2, apellido2){
 
    if (NOMBRE == nombre2 && APELLIDO == apellido2){
        console.log("USTED ESTA BANEADO.")
    }
    else{
        console.log("puede acceder")
    }
}
blacklist(nombre_baneado, apellido_baneado)


let edad = Number(prompt("Ingrese su edad: "))
let carta_usuario = 0
let saldo = Number(prompt("Ingresar dinero: "))


console.log("Su nombre es: " + NOMBRE + " " + APELLIDO + " y su edad es: " + edad);

function blacklist(nombre2, apellido2){
 
    if (NOMBRE == nombre2 && APELLIDO == apellido2){
        console.log("USTED ESTA BANEADO.")
    }
    else{
        console.log("puede acceder")
    }

}
blacklist(nombre_baneado, apellido_baneado)

for (let i = 0; i == 2 ; i++) {
    console.log("Su primera carta es : " );
    carta_usuario = carta_usuario + Math.round(Math.random()* 10)
    console.log("Su primera carta es : " + carta_usuario);
}

 while(true){
    if (edad <= 17){
        console.log("!Debes ser mayor de edad para jugar¡");
        edad = Number(prompt("Ingrese su edad: "))

    }
    else if(saldo <= 99){
        alert("Debe ingresar como minimo 100$");
        saldo = Number(prompt("Ingresar dinero: "))
    }
    else{
        console.log("Bienvenido!");
        console.log("Su saldo es: " + saldo + "$");
        break
    } 
    
}

for (let i = 1; i <= 2 ; i++) {
    carta_usuario = carta_usuario + Math.round(Math.random()* 10)
 
}
console.log("La suma de sus primeras 2 cartas : " + carta_usuario);


let confirmacion = confirm("desea seguir jugando?")
console.log( confirmacion)
let siguiente_carta
while(confirmacion == true){
    switch (confirmacion){
        case true:
        siguiente_carta = Math.round(Math.random()* 10);
        console.log ("carta= " + siguiente_carta);
        carta_usuario = carta_usuario + siguiente_carta ;
        console.log("sus cartas son: " + carta_usuario);
        confirmacion = confirm("desea seguir jugando?");
        
        case false:
        break;
    }
    if (carta_usuario > 20){
        console.log("PERDIO")
        break

    }else{
        console.log("si supera 21 perdera!")
       
        continue

    }

}
console.log("Cantidad de puntos: " + carta_usuario)



