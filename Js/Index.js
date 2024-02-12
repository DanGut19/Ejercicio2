function sumar() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)
    let n3 = parseInt(document.getElementById('txtN2').value)

    if (a <= 59) {
        error("Valor a no debe ser igual a 0")
    } else {
        let operacion = n1 + n2 + n3 

        if (operacion <= 79) {
            let Resultado = (n1 + Math.sqrt(operacion)) (n2 + n3)

            document.getElementById('Resultado').value = Resultado
        } else {
            error("La raíz cuadrada no puede ser negativa")
        }
    }

/*
    if (isNaN(n1)) {
        alertify.error('Número 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Número 2 en blanco')
    } else if(isNaN(n3)) {
        alertify.error('Número 3 en blanco')
    } else {
        let suma = n1 + n2 + n3;
        document.getElementById('Resultado').value = suma
    }
    */
}


function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en Fórmula cuadrática",
        text: text
    });
}

function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtN3').value = ''
    document.getElementById('Resultado').value = ''
}