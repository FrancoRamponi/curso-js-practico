// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })


function CalcularPrecioDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("Resultado");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const cupones = ["lunes", "martes", "miercoles"];

function calcularPrecioConCupon(precio, cupon) {
    const porcentajePrecioConDescuento = 100 - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function CalcularPrecioCupon(){
    const inputPrecio = document.getElementById("InputPrecio");
    const precioValue = inputPrecio.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = InputCupon.value;

    let desc;

    switch(cuponValue){
        case cupones[0]:
            desc = 15
            break;
        case cupones[1]:
            desc = 20
            break;
        case cupones[2]:
            desc = 25
            break;
    }

    const precioConDescuento = calcularPrecioConCupon(precioValue, desc);

    const result = document.getElementById("Result");
    result.innerText = "El precio con descuento son: $" + precioConDescuento;

    // else{
    //     const result = document.getElementById("Result");
    //     result.innerText = "cupon invalido";
    // }
}

