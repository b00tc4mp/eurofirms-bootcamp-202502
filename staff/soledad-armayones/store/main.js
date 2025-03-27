var products = [];
//populate
var cinquecento = {
  id: '2025031-1601',
  brand: 'Fiat',
  model: '500',
  color: 'pink',
  year: 2019,
  kilometers: 145000,
};
products[0] = cinquecento;
var clio = {
  id: '2025031-1603',
  brand: 'Renault',
  model: 'Clio',
  color: 'red',
  year: 2015,
  kilometers: 225000,
};
products[1] = clio;
var c3 = {
  id: '2025031-1605',
  brand: 'Citröen',
  model: 'C3',
  color: 'black',
  year: 2010,
  kilometers: 310000,
};
products[2] = c3;
function generateRandomId() {
  var id = '2025031-160' + products.length + 1;
  var year = new Date().getFullYear();
  var month = new Date().getMonth() + 1;

  var hour = String(Math.floor(Math.random() * 24));
  var minute = String(Math.floor(Math.random() * 60));
  products[products.length - 1].id = id + '-' + year + month;
  return id;
}
function addCar(brand, model, color, year, kilometers) {
  var car = {
    id: generateRandomId(),
    brand: brand,
    model: model,
    color: color,
    year: year,
    kilometers: kilometers,
  };
  //products[products.length] = car;
  products.push(car);
}
function updateCar(id, brand, model, color, year, kilometers) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products[i].kilometers = kilometers;
      products[i].year = year;
      products[i].color = color;
      products[i].model = model;
      products[i].brand = brand;
    }
  }
}
function deleteCar(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.splice(i, 1);
    }
  }
}
updateCar('2025031-1601', 'Fiat', '500', 'pink', 2019, 145000);
addCar('Audi', 'A1', 'gray', 2013, 170000);
addCar('Smart', 'ForTwo', 'yellow', 2024, 17000);
addCar('Fiat', '500 Abarth', 'skyblue', 2023, 56000);
addCar('Voswagen', 'A1', 'skyblue', 2023, 56000);
console.table(products);