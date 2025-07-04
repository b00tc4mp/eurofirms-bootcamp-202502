import { connect, disconnect } from '../data/index.js'
import { createPost } from './createPost.js'

connect('mongodb://localhost:27017/test-aconpp')
    .then(() => {

        try {

            return createPost('685fed71e83cd82491583853', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHRuYXg4b3h6Y2Z2bm12eDkzaDMycTg4aDVmYXM3bjV0MWRxZm1oeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WgSNb46kzYCSJKmWkI/giphy.gif', 'Pedro Perez', 'femur elongation', 'Madrid', 'We are very happy with the result of the surgery')

                .then(() => console.log('post created'))
                .catch(error => console.error(error))

        } catch (error) {

            console.error(error)
        }
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())