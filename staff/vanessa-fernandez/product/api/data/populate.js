import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('test')
        const users = db.collection('users')
        const posts = db.collection('posts')

        return users.insertOne({ name: 'George Weasly', email: 'george@weasly.com', username: 'georgeweasly', password: '123123123' })

            .catch(error => { throw new Error('mongo error')})
            .then(() => console.log('user inserted'))
    })
    .catch(error => console.error(error))
    .finally(() => client.close())
