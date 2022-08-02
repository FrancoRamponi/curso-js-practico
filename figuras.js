// Código del cuadrado
console.group("Cuadrado");

const lado_cuadrado = 5;
console.log("los lados del cuadrado miden: " + lado_cuadrado + "cm")

// const perimetro_cuadrado = lado_cuadrado * 4;
// console.log("el perimetro del cuadrado es: " + perimetro_cuadrado + "cm")

function perimetro_cuadrado(lado){
    return lado * 4;
}

// const area_cuadrado = lado_cuadrado * lado_cuadrado;
// console.log("el area del cuadrado es: " + area_cuadrado + "cm^2")

function area_cuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triangulo
console.group("Triangulo");

const lado_triangulo1 = 6;
const lado_triangulo2 = 6;
const base_triangulo = 4;
const altura_triangulo = 5.5;

console.log("los lados del triangulo miden: " + lado_triangulo1 + "cm, " + lado_triangulo2 + "cm, " + base_triangulo + "cm")

console.log("la altura del triangulo es: " + altura_triangulo + "cm")

const perimetro_triangulo = lado_triangulo1 + lado_triangulo2 + base_triangulo;
console.log("el perimetro del triangulo es: " + perimetro_triangulo + "cm")

const area_triangulo = (base_triangulo * altura_triangulo) / 2;
console.log("el area del triangulo es: " + area_triangulo + "cm^2")

console.groupEnd();

// Código del triangulo
console.group("Circulos");

const radio = 4;
const diametro = 8;
const PI = Math.PI;

const perimetro_circulo = diametro * PI;
console.log("el perimetro del circulo es: " + perimetro_circulo + "cm")

const area_circulo = (radio * radio) * PI;
console.log("el area del circulo es: " + area_circulo + "cm^2")

console.groupEnd();

// TRIANGULO ISOCELES
console.group("isoceles")

function alturaIsoceles(){
    const baseInput = document.getElementById("InputBase");
    const baseValue = baseInput.value;
    const lado1Input = document.getElementById("InputLado1");
    const lado1Value = lado1Input.value;
    const lado2Input = document.getElementById("InputLado2");
    const lado2Value = lado2Input.value;

    const altura = calcularAlturaIsoceles(baseValue, lado1Value, lado2Value);
    alert(altura);
}

function calcularAlturaIsoceles(base, lado1, lado2){
    if (lado1 == lado2 && lado1 != base){
        return Math.sqrt(lado1**2 - base**2 / 4);
    }
    else{
        return "no es un triangulo isoceles";
    }
}


console.groupEnd();


// INTERACCION HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetro_cuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = area_cuadrado(value);
    alert(area);
}