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

        // return users.insertOne({ name: 'Pi Kachu', email: 'pi@kachu.com', username: 'pikachu', password: '123123123' })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user inserted'))

        // return users.deleteOne({ _id: new ObjectId('6830ccca4ff3bfc1f7ed7ca2') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user deleted'))

        // return users.updateOne({ _id: new ObjectId('6830cd054ff3bfc1f7ed7ca3') }, { $set: { password: '123123123' } })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('user updated'))

        // return users.find({}).toArray()
        //     .catch(error => { throw new Error('mongo error ') })
        //     .then(users => console.log('users', users))

        // return users.find({ name: /P/ }).toArray()
        //     .catch(error => { throw new Error('mongo error ') })
        //     .then(users => console.log('users', users))

        // return posts.insertOne({ author: new ObjectId('68319605737a2ddcc43a4197'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWxwZmx4c3RwMXZycjUxYjc3eXoxemZkZW00OHNydDc2aDh4eGUyaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6nUNZhOJDdlmla00/giphy.gif', text: 'doraemon speaking', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.insertOne({ author: new ObjectId('68319def1bc5bbc3319896f2'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRweWN5eW53MHl3MGhmeGhxM2J6czBla2JwdzhlMHpxdTAwdnpqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xuXzcHMkuwvf2/giphy.gif', text: 'pikachu happy', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.insertOne({ author: new ObjectId('68319def1bc5bbc3319896f2'), image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRweWN5eW53MHl3MGhmeGhxM2J6czBla2JwdzhlMHpxdTAwdnpqYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/slVWEctHZKvWU/giphy.gif', text: 'pikachu pool', date: new Date(), likes: [] })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post inserted'))

        // return posts.deleteOne({ _id: new ObjectId('68319c70c8b49c65344d541e') })
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(() => console.log('post deleted'))

        // return posts.find({}).toArray()
        //     .catch(error => { throw new Error('mongo error') })
        //     .then(posts => console.log('posts', posts))

        return posts.find({ author: new ObjectId('68319def1bc5bbc3319896f2') }).toArray()
            .catch(error => { throw new Error('mongo error') })
            .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => client.close())