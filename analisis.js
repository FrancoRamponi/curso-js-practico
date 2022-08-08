// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

// Mediana General
const salarios = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        return (personaMitad1 + personaMitad2) / 2;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const salariosSorted = salarios.sort(
    function (a, b){
        return a - b;
    }
);

const medianaGeneral = medianaSalarios(salariosSorted);

// Mediana del top 10%
const spliceStart = ((salariosSorted.length * 90) / 100 );
const spliceCount = salariosSorted.length - spliceStart;

const salariosTop10 = salariosSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10 = medianaSalarios(salariosTop10);


console.log({
    medianaGeneral,
    medianaTop10
});
