/** “El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples,
las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente. La
empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, rea-
lice un algoritmo para determinar cuánto debe pagar una persona por N
hamburguesas.

Datos

A. Qué datos necesito?

Sencillas = 20
Dobles = 25
Triples = 28
Pago tarjeta = 5% adicional

B. Dónde obtengo los datos
Preguntar al usuario : simple doble o triple
pago tarjeta o efectivo
cantidad a llevar
C. Están en la forma que los necesito?

Cantidades en númerico
*/

let precioSimple = 20

let precioDoble = 25

let precioTriple = 28


let totalSimple = 0
let totalDoble = 0
let totalTriple = 0

let finish = false

do{
    let eleccion = +prompt("Seleccione: 1. simple, 2. Doble, 3. Triple, 4. Finalizar")

    switch (eleccion){
        case 1:
            console.log("Se agrego a su pedido")
            totalSimple++
            break
        case 2:
            console.log("Se agregó su pedido")
            totalDoble++
            break
        case 3:
            console.log("Se agregó su pedido")
            totalTriple++
            break
        case 4:
            finish = true
            break
        default:
            console.log("Opción incorrecta")
    }
} while(finish == false)



let total = precioSimple * totalSimple + precioDoble * totalDoble + precioTriple * totalTriple

let calcular = false

do {
    let formaPago = +prompt("Elija medio de pago: 1. Efectivo, 2. Tarjeta (Cargo 5%)")

    switch (formaPago){

        case 1:
            console.log(`El total a pagar en efectivo es: ${total} por ${totalSimple} hamburguesas simples, ${totalDoble} hamburguesas dobles y ${totalTriple} hamburguesas triples `)
            calcular = true
            break
        case 2:
            let totalTarjeta = total + (total * 0.05)
            console.log(`El total a pagar en efectivo es: S/${totalTarjeta} por ${totalSimple} hamburguesas simples, ${totalDoble} hamburguesas dobles y ${totalTriple} hamburguesas triples `)
            calcular = true
            break
        default: 
            console.log("Opción incorrecta, intente de nuevo")
    }
} while (calcular == false)
