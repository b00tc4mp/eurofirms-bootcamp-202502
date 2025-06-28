import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test')
    .then(() => {

        try {

            return createPost('6846fb8055f667299687fc30', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXBzeTV6NWtjemY4MDg3Z2JwZHRqeHpwMm9iN3VzaG1xNWswaGtmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0NwGpoOVLTAyUJSo/giphy.gif', 'I will always be here to help you!')

                .then(() => console.log('post created'))
                .catch(error => console.error(error))

        } catch (error) {

            console.error(error)
        }
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())

