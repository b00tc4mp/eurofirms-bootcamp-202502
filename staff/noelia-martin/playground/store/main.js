let products = []
 
 // populate
 
 let cinquecento = {
     id: '20250315-1601',
     brand: 'Fiat',
     model: '500',
     color: 'pink',
     year: 2019,
     kilometers: 145000
 }
 
 products[0] = cinquecento
 
 let clio = {
     id: '20250315-1603',
     brand: 'Renault',
     model: 'Clio',
     color: 'red',
     year: 2015,
     kilometers: 225000
 }
 
 products[1] = clio
 
 let c3 = {
     id: '20250315-1605',
     brand: 'Citröen',
     model: 'C3',
     color: 'black',
     year: 2010,
     kilometers: 310000
 }
 
 products[2] = c3
 
 // logic
 
 function addCar(brand, model, color, year, kilometers) {
     /* 
     STEPS
     - create id for car AñoMesDia-HoraMinuto
     - create object for car data and id
     - insert object in products
     */

    let i= products.length
    let car={
        id: "2025031-" + (1600 + (i+3)),
        brand:brand,
        model:model,
        color:color,
        year:year,
        kilometers:kilometers
    }
    products[i]= car;
    
 }
   /*respuesta del profe: 
        var id= Math.random()+ ' + Math.random()
        var car ={}
        car.id=id,
        car.brand=brand,
        car.model=model,
        car.color=color,
        car.year=year
        car.kilometeters=kilometers
        products[products.length]= car
    */

 addCar('Audi', 'A1', 'gray', 2013, 170000)
 addCar('Smart', 'ForTwo', 'yellow', 2024, 17000)
 addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000)
 
 // view cars 
console.table(products)


/*La idea inicial era ponerlo en formato AñoMesDia-HoraMinuto, con la siguiente
function se podria, pero lo voy a dejar tal cual

function crearId() {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // +1 porque enero es 0
    const dia = String(ahora.getDate()).padStart(2, '0');
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    
    return `${año}${mes}${dia}-${horas}${minutos}`;
}

Propuesta : 
 -OBLIGATORIO actualizar un coche con los datos introducidos como parametros
 function updateCar(id,brand,model,color,year,kilometers){
    buscar el coche a traves de el id 
    extraer el coche del array
    actualizar todos los campos

-OPCIONAL eliminar un coche con un identificador pasado como parametro
function deleteCar(cardId){
    primero habria que buscar de que coche estamos hablando a traves de cardId y quitarlo todo
 }
}
*/

function updateCar(id,brand,model,color,year,kilometers){
    for (let i=0;i<products.length;i++){
        let coche= products[i];
        if (coche.id === id){
            coche.brand= brand;
            coche.model= model;
            coche.color= color;
            coche.year=year;
            coche.kilometers=kilometers
        }
    }
}
/*solucion profe
    function updateCar(id,brand,model,color,year,kilometers){
        var index
        for (var i=0; i<products && index === undefined; i++){
            var car = products[i]
            if (car.id === id) index= i
        }
        var car = products[index] 
        car.brand=brand,
        car.model=model,
        car.color=color,
        car.year=year
        car.kilometeters=kilometers
    }
*/



updateCar('2025031-1606','Audi', 'A1', 'yellow', 2013, 170000)

console.table(products);

function deleteCar(id){
    for (let i=0;i<products.length;i++){
        if (products[i].id=== id) delete products[i]
    }
}

deleteCar('2025031-1608')
console.table(products)
