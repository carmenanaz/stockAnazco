let accion=prompt("Ingrese el numero de la acción que desea realizar: \n1: Ingresar un nuevo producto. \n2: ver el listado de productos. \n3: Buscar un producto por EAN. \n4: Eliminar un producto. \nESC para salir")

const productos =[];

class producto{
    constructor(ean, prod, precio, unidades){
        this.ean = Number(ean);
        this.prod = prod.toUpperCase();
        this.precio = Number(precio);
        this.unidades = Number(unidades)
    }
    sumarIva(){this.precio*=1.21}
}

while (accion!='ESC') {  
    switch (accion) {
        case "1":
            do {
                let ean = prompt ("Ingrese el ean del producto")
                let prod =prompt("Ingresa el nombre del producto")
                let precio =prompt("Ingresa el precio")
                let unidades = prompt ("Ingrese las unidades")
                productos.push(new producto(ean, prod, precio, unidades));

            } while (confirm("¿Desea ingresar mas?"));
        break;

        case "2":
            for (const dato of productos) {
                console.log("EAN: "+ dato.ean);
                console.log("Descripcion: " + dato.prod)
                console.log("Precio: " + dato.precio)
                console.log("Stock: " + dato.unidades)
                console.log("Precio para la venta: "+ dato.sumarIva())
            }
        break;

        case "3":
            let buscarEan = Number(prompt("Ingrese el ean del producto a buscar"))
            const ean = productos.find(resultado=>resultado.ean===buscarEan)
            console.log(ean)
        break;
        
        case "4":
        let eliminar = Number(prompt("Ingrese el ean del producto a eliminar"))
        const indice = productos.findIndex(indice=>indice.ean==eliminar)
        productos.splice(indice, 1)  
        alert("El producto ha sido eliminado")
        break;
    
        default:
            alert("La opción ingresada no es válida, por favor ingrese nuevamente")
        break;
    }
    accion=prompt("Ingrese el numero de la acción que desea realizar: \n1: Ingresar un nuevo producto. \n2: ver el listado de productos. \n3: Buscar un producto por EAN. \n4: Eliminar un producto. \nESC para salir")
}
