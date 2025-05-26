import mongodb from 'mongodb' //trae el driver o cliente que permite conectar con la bbdd

const { MongoClient, ObjectId } = mongodb //constructora de objetos para conectar con mongo

//operador "new" para construir objetos o arrays al que se le pasan parametros. construimos un nuevo cliente contra el servidor que especificamos.
//servidor: protocolo de mongo, nuestra ip local, puerto que utiliza mongo
const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    //uso de promesas asíncronas
  .then(() => {
      //especificar a qué bbdd conectar
      const db = client.db('test')

      //insertar datos. Especificar qué coleccion queremos usar
      const users = db.collection('users')
      const posts = db.collection('posts')

      //return users.insertOne({ name: 'Mu Lan', email: 'mu@lan.com', username: 'mulan', password: '123123123' })
        //.catch(error => { throw new Error('mongo error') })
        //.then(() => console.log('user inserted'))

      //return users.insertOne({ name: 'Do Raemon', email: 'do@raemon.com', username: 'do@raemon.com', password: '123123123' })
        //.catch(error => { throw new Error('mongo error') })
        //.then(() => console.log('user inserted'))

      //return users.insertOne({ name: 'Pi Kachu', email: 'pi@kachu.com', username: 'pikachu', password: '123123123'})
        //.catch(error => { throw new Error('mongo error') })
        //.then(() => console.log('user inserted'))
        
      //return users.deleteOne({ _id: new ObjectId('6830ccce5c2e4339ab6c4bd4') })
        //.catch(error => { throw new Error('mongo error') })
        //.then(() => console.log('user deleted'))
      
      //return users.updateOne({ _id: new ObjectId('6831a3d304ceaed3a3d66f88') }, { $set: { password: '456456456' } })
        //.catch(error => { throw new Error('mongo error') })
        //.then(() => console.log('user updated'))

      // return users.find({}).toArray()
      //   .catch(error => { throw new Error('mongo error') })
      //   .then(users => console.log('users', users))

      // return users.find({ name: /P/ }).toArray()
      //   .catch(error => {throw new Error('mongo error') })
      //   .then(users => console.log('users', users))

      // return posts.insertOne({ author: new ObjectId('6830cf525c2e4339ab6c4bd7'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWxwZmx4c3RwMXZycjUxYjc3eXoxemZkZW00OHNydDc2aDh4eGUyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6nUNZhOJDdlmla00/giphy.gif', text: 'doraemon speaking', date: new Date(), likes: [] })
      //   .catch(error => { throw new Error('mongo error') })
      //   .then(() => console.log('post inserted'))

      //return posts.insertOne({ author: new ObjectId('')})

  })
    //capturamos aquí el error de mongo de arriba a través del return
    .catch(error => console.error(error))

    //despues del catch hay que desconectar. (Solo se mantiene abierta la conexion cuando hay que operar todo el tiempo.) Finally permite hacer una ultima operacion, tanto si ha ido a traves del then o del catch.
    .finally(() => client.close())