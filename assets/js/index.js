function Ejercicio() {
    let numero = parseInt(prompt("Ingrese el número"))
    multiplicacion(numero);
}

multiplicacion = (numero) => {
    if (numero < 1 || numero > 20) {
        console.log("Número fuera de rango");
        alert("Número fuera de rango")
        return
    }

    // tablas
    for (let i = 1; i <= numero; i++) {
        let resultado = i * numero;
        console.log(`${i} x ${numero} = ${resultado}`);
    }

    // factorial
    for (let i = 1; i <= numero; i++) {
        let resultado = 1;

        for (let j = 1; j <= i; j++) {
            resultado = resultado * j 
        }

        console.log(`Factorial de ${i} es ${resultado}`);
    }
}
