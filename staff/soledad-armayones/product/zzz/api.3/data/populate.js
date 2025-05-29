import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {

        const db = client.db('test')
        
        const users = db.collection('users')
        const posts = db.collection('posts')

        // return users.insertOne({ name: 'Mu Lan', email: 'mu@lan.com', username: 'mulan', password: '123123123' })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        // return users.insertOne({ name: 'Do Raemon', email: 'do@raemon.com', username: 'doraemon', password: '123123123' })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        // return users.deleteOne({ _id: new ObjectId('683437f3a21050ab9d6c4bd5' ) })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user deleted'))

        // return users.updateOne({ _id: new ObjectId('68343820a21050ab9d6c4bd6') }, { $set: { password: '123123123' } })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(posts => console.log('user updated'))

        // return users.find({}).toArray()
        //     .catch(error => console.error(error))
        //     .then(users => console.log('users', users))

        // return users.find({ name: /P/ }).toArray()
        //     .catch(error => console.error(error))
        //     .then(users => console.log('users', users))

        //  return posts.insertOne({ author: new ObjectId('6834611ab8b5b71fe90cde27'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWxwZmx4c3RwMXZycjUxYjc3eXoxemZkZW00OHNydDc2aDh4eGUyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6nUNZhOJDdlmla00/giphy.gif', text: 'doraemon speaking', date: new Date(), likes: [] })
        //    .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.deleteOne({ _id: new ObjectId('6834751426a2e01643db3f09') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post deleted'))

        // return posts.insertOne({ author: new ObjectId(''), image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3JsanE5Y3Fkb3pua2NtZWlpdXM5cmV0ejNtZWVjdXUzeWRpZGY0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rrdy4EoMHBAZy/giphy.gif', text: 'Whendy singing', date: new Date(), likes: [] })
        //        .catch(error => { throw new Error('mongo error') })
        //        .then(() => console.log('post inserted'))

    })
    .catch(error => console.error(error))
    .finally(() => client.close())

    