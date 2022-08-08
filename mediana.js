let lista1 = [
    100,
    400000000,
    500,
    200,
    
];

lista1.sort(
    function(a, b){
        return (a - b)
    }
);

const mitadLista1 = lista1.length / 2;

function esPar(numero){
    if (numero % 2 === 0){
        return true
    } else {
        return false
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    mediana = (elemento1 + elemento2) / 2;
} else {
    mediana = lista1[parseInt(mitadLista1)];
}