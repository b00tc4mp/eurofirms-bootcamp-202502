import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb


//Traemos a la Variable CLIENT la BB.DD. de MONGO

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {

        //ACCEDER a la BB.DD. de PRUEBA
        const db = client.db('test')

        //TRAEMOS a las variables USERS & POSTS los Usuarios & Posts de la BB.DD. de MONGO

        const users = db.collection('users')
        const posts = db.collection('posts')

        //AÑADIR un USUARIO

        // return users.insertOne({ name: 'Peter Parker', email: 'peterparker@spiderman.com', username: 'spiderman', password: '123123123' })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        //BORRAR un USUARIO

        // return users.deleteOne({ _id: new ObjectId('6830cb44f7ba90680e6c4bd1') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user deleted'))

        //ACTUALIZAR un USUARIO

        // return users.updateOne({ _id: new ObjectId('6831a2d1ec035bb14cbca097') }, { $set: { name: 'Steven Grant Rogers' } })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user updated'))

        //DEVOLVER el Listado de Usuarios

        // return users.find({}).toArray()
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(users => console.log('users', users))

        //DEVOLVER Usuarios que CONTENGAN la letra P en el "name"

        // return users.find({ name: /y/ }).toArray()
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(users => console.log('users', users))

        //AÑADIR un POST

        // return posts.insertOne({ author: new ObjectId('6831a2d1ec035bb14cbca097'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjlybXZiNmJldG1wMnQ5dThpcWhnbzNleWFqNHVsaGdleXY5OXBmOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xZcqvAsGNuZlm/giphy.gif', text: 'If you work hardy you can be calm', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        //BORRAR un POST

        return posts.deleteOne({ _id: new ObjectId('6831c8044016dbac666d998c') })
            .catch(error => { throw new Error('mongo error') })
            .then(() => console.log('post deleted'))

    })
    .catch(error => console.error(error))

    //Para CERRAR la Conexión - RETOMAMOS el CONTROL del Terminal
    .finally(() => client.close())