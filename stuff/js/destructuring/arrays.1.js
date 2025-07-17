var colors = ['red', 'blue', 'yellow', 'green']

// var primaryColor = colors[0]
// var secondaryColor = colors[1]
// var tertiaryColor = colors[2]
// var quaternaryColor = colors[3]

// var [primaryColor, secondaryColor, tertiaryColor, quaternaryColor] = colors

// console.log(primaryColor, secondaryColor, tertiaryColor, quaternaryColor)
// red blue yellow green

var [, secondaryColor, , quaternaryColor] = colors

console.log(secondaryColor, quaternaryColor)
// blue green