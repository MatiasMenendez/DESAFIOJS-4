/*Simulador de presupuesto de plancha de metal*/

let material;
let espesor;
let medida1;
let medida2; 
let pesoEspecifico = 7.2
let kiloHierro = 330
let kiloInoxidable = 1300
let valorDolar = 108

/*Funcion encargada de recolectar datos del usuario*/
function solicitarDatos (){
    material = prompt ('Material: hierro o inoxidable')
    espesor = Number (prompt ('Indicar espesor en numeros ( ejemplo 0.7 o 2)'))
    medida1 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 3000)')) /1000
    medida2 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 1500)')) /1000
}
 /*Funcion encargada de hacer la cuenta del valor de la plancha de metal */
function calcularPresupuesto(){
    if (material === 'hierro'){
    let precioHierro = medida1 * medida2 * espesor * pesoEspecifico * kiloHierro;
    alert(precioHierro + 'pesos')
    let precioDolarh = medida1 * medida2 * espesor * pesoEspecifico * kiloHierro / valorDolar;
    alert(precioDolarh + 'dolares')}

    else if(material === 'inoxidable'){
    let precioInoxidable = medida1 * medida2 * espesor * pesoEspecifico * kiloInoxidable;
    alert(precioInoxidable + 'pesos')
    let precioDolari = medida1 * medida2 * espesor * pesoEspecifico * kiloInoxidable / valorDolar;
    alert(precioDolari + 'dolares')}

    else (material !== 'hierro' || material !== 'inoxidable')
        alert('El material ingresado no se encuentra en stock')
}
    
solicitarDatos();
calcularPresupuesto();
