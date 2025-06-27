import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb //MongoClient es un objeto de mongodb, que hace de cliente para conectarme a la BD

const client = new MongoClient('mongodb://localhost:27017') //creamos la conexion como cliente de la base de datos de mongo

client.connect()
    .then(() => {
        const db = client.db('test') //especificamos al cliente a que BD conectarnos

        const users = db.collection('users')
        const posts = db.collection('posts') //sino existiera lo crea de forma automatica

        return users.insertOne({ name: 'Mu lan', email: 'mu@lan.com', username: 'mulan', password: '123123123' })
            .catch(error => { throw new Error('mongo error') })
            .then(() => console.log('user inserted'))

        // return users.deleteOne({ _id: new ObjectId('6830cd400042d29c216c4bd5') }) //igual que si lo escribimos directamente en test pero aqui hay que añadir la palabra new
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user deleted'))

        // return users.updateOne({ _id: new ObjectId('6831950e3e85b2514b184eb3') }, { $set: { password: '123456789' } })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user updated'))

        // return users.find({}).toArray() //en test seria users.find(), no hay que indicar que lo ponga en un array
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(users => console.log('users', users))

        // return users.find({ name: /P/ }).toArray() 
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(users => console.log('users', users))

        // return posts.insertOne({ author: new ObjectId('6831950e3e85b2514b184eb3'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdmeHE1b3gwdndvNGt2MTJtbjF3cWxxY3prMnZ6b2I2ZWJ6YmgzMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/EOn1jCfmmDSBlj1H4K/giphy.gif', text: 'primer post', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.find({ text: 'primer post' }).toArray() //ejemplo filtrando por un author concreto posts.find({author: new ObjectId('...')}).toArray()
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(posts => console.log('posts', posts))

    })
    .catch(error => console.error(error))
    .finally(() => client.close()) //desconecta, se ejecuta SIEMPRE al final independientemente si entra en catch o then
//es importante que dentro del callback de then retornamos la operacion de insercion(la promesa de insercion), ya que tardará lo que necesite el servidor y asi indicamos que no se ejecute el callback de finally hasta que haya terminado la insercion
