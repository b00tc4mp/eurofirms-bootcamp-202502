import mongodb from 'mongodb'

const { MongoClient, ObjectId } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('test')

        const users = db.collection('users')
        const posts = db.collection('posts')

        // return users.insertOne({ name: 'ko bi', email: 'ko@bi.com', username: 'kobi', password: '123123123'})
         //.catch(error => { throw new Error('mongo error') })
        // .then(() => console.log('user inserted'))

        // return users.insertOne({ name: 'fran ki', email: 'fran@ki.com', username: 'franki', password: '123123123' })
        //  .catch(error => { throw new Error('mongo error') })
         // .then(() =>  console.log('user inserted'))
        
         //return users.insertOne({ name: 'jin bei', email: 'jin@bei.com', username: 'jimbei', password: '123123123'})
         // .catch(error => { throw new Error('mongo error') })
         // .then(() => console.log('user inserted'))

        // return users.deleteOne({ _id: new ObjectId ('6831b7c1116189b393422348') })
           // .catch(error => { throw new Error('mongo error') })
            //.then(() => console.log('user deleted'))

        //return users.updateOne({ _id: new ObjectId ('6831b82037fa719f061995ea') }, { $set: { password: '234234234' } })
          //  .catch(error => { throw new Error('mongo error') })
            //.then(() => console.log('user updated'))

        //return users.find({}).toArray()
        //.catch(error => { throw new Error('mongo error') })
        //.then(users => console.log('users', users))

        //return users.find({ name: /P/ }).toArray()
          //  .catch(error => { throw new Error('mongo error') })
            //.then(users => console.log('users', users))

        //return posts.insertOne({ author: new ObjectId ('6830cd03d0976cd40d6c4bd4'), image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTRtdTJrMnVvMWdwcTk4NmVjNHVhazllZGV2d3Qxc3BocjdmMm8yOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/es24mS8ffa5tC/100.webp', text: 'sorprise`s ussop', date: new Date(), likes: [] })
            //.catch(error => { throw new Error('mongo error') })
            //.then(() => console.log('post inserted'))

        //return posts.insertOne({ author: new ObjectId ('6830ccc2d0976cd40d6c4bd3'), image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanNnemV1aTYxN2d5bW96c3M4NXlkdng5Y3N3a3pua3hmMWExcGE3ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3QwAvg4bBkr2ElijuF/200.webp', text: 'preparada para la aventura', date: new Date(), likes: [] })
           // .catch(error => { throw new Error('mongo error') })
            //.then(() =>  console.log('post inserted'))

        //return posts.insertOne({ author: new ObjectId ('6830cd79d0976cd40d6c4bd6'), image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lramNxOWE0cmtvbjNncmZoM3Y5cTJ3bWdneDFxamdnY2dxYTk4eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OEqKUD6LHA4QKRnlNm/200.webp', text: 'mi primera aparicion', date: new Date(), likes: [] })
            //.catch(error => { throw new Error ('mongo error') })
            //.then(() => console.log('post inserted'))

        //return posts.find({ _id: new ObjectId ('6830cd79d0976cd40d6c4bd6') })
           // .catch(error => { throw new Error('mongo error') })
            //.then(() => console.log('post deleted'))

        return posts.find({})
            .catch(error => { throw new Error('mongo error') })
            .then(posts => console.log('posts', posts))
    })
    .catch(error => console.error(error))
    .finally(() => client.close()) 