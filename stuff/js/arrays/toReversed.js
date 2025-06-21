function toReversed(array) {
    /*
    array
        0: { image: 'http://image.com/hola-mundo', text: 'hola mundo' }
        1: { image: 'http://image.com/hello-world', text: 'hello world' }
        2: { image: 'http://image.com/ciao-mondo', text: 'ciao-mondo' }

    reversedArray
        0: { image: 'http://image.com/ciao-mondo', text: 'ciao-mondo' }
        1: { image: 'http://image.com/hello-world', text: 'hello world' }
        2: { image: 'http://image.com/hola-mundo', text: 'hola mundo' }
    */

    var reversedArray = []

    for (var i = array.length - 1; i >= 0; i--) {
        var element = array[i]

        //reversedArray.push(element)
        reversedArray[reversedArray.length] = element
    }

    return reversedArray
}

var posts = [
    { image: 'http://image.com/hola-mundo', text: 'hola mundo' },
    { image: 'http://image.com/hello-world', text: 'hello world' },
    { image: 'http://image.com/ciao-mondo', text: 'ciao-mondo' }
]

//var reversedPosts = posts.toReversed()
var reversedPosts = toReversed(posts)

console.log(posts)
console.log(reversedPosts)
