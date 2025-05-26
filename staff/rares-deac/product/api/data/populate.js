import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb //constructora de objetos para conectar con mongo

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        //db esta llamando a la base de datos de mongo a traves de client
        const db = client.db('test')

        //llamamos a la coleccion de users en la base de datos y a la coleccion de posts
        const users = db.collection('users')
        const posts = db.collection('posts')

        //Inserto un usuario

        // return users.insertOne({ name: 'Mu Lan', email:'mu@lan.com', username:'mulan', password: '123123123'})
        //         .catch(error => {throw new Error('mongo error') })
        //         .then(() => console.log('user inserted'))


        // return users.insertOne({ name: 'Do Raemon', email: 'do@raemon.com', username: 'doraemon', password: '123123123'})
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        return users.insertOne({ name:''})
    })