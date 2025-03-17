var products = []

// Manual population/populate

var cinquecento = {
    id: "20250315-1601",
    brand: "Fiat",
    model: "500",
    color: "Pink",
    year: 2019,
    kilometers: 145000
}

products[0] = cinquecento

var clio = {
    id: "20250315-1601",
    brand: "Renault",
    model: "500",
    color: "red",
    year: 2015,
    kilometers: 225000
}

products[1] = clio

var c3 = {
    id: "20250315-1605",
    brand: "Citröen",
    model: "C3",
    color: "Black",
    year: 2010,
    kilometers: 310000
}

products[2] = c3

console.table(products);

function generateRandomId() {
    // Get current date
    const now = new Date();
    
    // Format date as YYYYMMDD
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-based
    const day = String(now.getDate()).padStart(2, '0');

    // Generate random time-like number (HHMM)
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    
    // Combine into final ID
    return `${year}${month}${day}-${hours}${minutes}`;
}

// Example usage
/* console.log(generateRandomId()); // Outputs something like "20250317-1432" */

function addCar(brand, model, color, year, kilometers) {
    /* TODO STEPS 
    - Create ID for car (done)
    - Create OBJECT for car data and ID (done)
    - Insert OBJECT in products
    */
    var carId = generateRandomId();

    var car = {
        id: carId,
        brand: brand,
        model: model,
        color: color,
        year: year,
        kilometers: kilometers        
    }
    products[products.length] = car; /* a.[a.length] SIN UTILIZAR EL PUSH AÑADIMOS
    UNA NUEVA PROPIEDAD A CADA ELEMENTO DEL ARRAY */
       
}

addCar("Audi", "A1", "Grey", 2013, 170000);
addCar("Smart", "ForTwo", "Yellow", 2024, 170000);
addCar("Fiat", "500 Abarth", "SkyBlue", 2023, 65000);

console.table(products);