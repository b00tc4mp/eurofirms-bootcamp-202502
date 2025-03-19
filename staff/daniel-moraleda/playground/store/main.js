var products = []

var rammemory = {
    id: "20250319-1",
    element: "rammemory",
    brand: "corsair",
    model: "hyper",
    amount: "16gb"
}
products[0] = rammemory;

var CPU = {
    id: "20250319-2",
    element: "CPU",
    brand: "intel",
    model: "i5 7600k",
    amount: "3,7 ghz"
}

products[1] = CPU;

var SSD = {
    id: "20250319-3",
    element: "SSD",
    brand: "corsair",
    model: "mp 600",
    amount: "512gb"
    
}

products[2] = SSD

function addpart(element, brand, model, amount) {
    
    var id = Math.random() + '-' + Math.random()
    
    var part = {}

    part.element= element
    part.brand = brand
    part.model = model
    part.amount = amount
    part.id = id

    products[products.length] = part
}
addpart("motherboard", "Asus", "Z890p", "empty")

function updatePart(id, element, brand, model, amount) {
    for (let i = 0; i < products.length; i++) {
        let part = products[i]
        if (products[i].id === id) {
            let part = products[i]
                part.element = element
                part.brand = brand
                part.model = model
                part.amount = amount
        }
    }
}

updatePart("20250319-1", "rammemory", "corsair", "hyper", "32gb" )

console.table(products)