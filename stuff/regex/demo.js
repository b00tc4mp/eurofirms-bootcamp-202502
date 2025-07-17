console.log(/^[0-9]+$/.test('123'))
//true

console.log(/^[0-9]+$/.test('abc'))
//false

console.log(/^[a-z]+@[a-z]+.[a-z]+$/.test('a@b.com'))
//true

console.log(/^[a-z]+@[a-z]+.[a-z]+$/.test('a_b.com'))
//false