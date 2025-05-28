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

        // return users.deleteOne({ _id: new ObjectId('6835d96c52d449858b931cae') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user deleted'))

        // return users.insertOne({ name: 'Pi Kachu', email: 'pi@kachu.com', username: 'pikachu', password: '123123123' })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        // return users.updateOne({ _id: new ObjectId('6830cbef04044849676c4bd1') }, { $set: { password: '123123123' } })
        //     .catch(error => { throw new Error('mongo error')})
        //     .then(() => console.log('user updated'))

        // return users.find({}).toArray()
        //     .catch(error => { throw new Error('mongo error')})
        //     .then(users => console.log('users', users))

        // return posts.insertOne({author: new ObjectId('6830ca1404044849676c4bd0'), image: 'https://media.giphy.com/media/GjR6RPcURgiL6/giphy.gif?cid=82a1493boes1c8z12aixgr50rbm6tsqna3xktyqnm44t2gkd&ep=v1_gifs_trending&rid=giphy.gif&ct=g', text: 'No me mires asi', date:new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted')) 

        // return posts.insertOne({ author: new ObjectId('6835e2403222fe589b6d46b2'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFhdjZnYm9nNDdiNmZ1Y2diamp0Z3l1M3I4d3FoaHg2eWhqYjJtcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/U2nN0ridM4lXy/giphy.gif', text: 'Yo cuando veo galletas!', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.deleteOne({ _id: new ObjectId('6835dfef1fdf59d063762fa0') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post deleted'))

        // return posts.find({}).toArray()
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(posts => console.log('posts', posts))

        
        return posts.find({author: new ObjectId('6835e2403222fe589b6d46b2') }).toArray()
            .catch(error => { throw new Error('mongo error') })
            .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => client.close())