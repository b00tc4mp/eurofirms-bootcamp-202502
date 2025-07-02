import mongoose from "mongoose"
import { User, Place, Review } from './models.js'

const { connect, disconnect } = mongoose

// connect('mongodb://localhost:27017/infinity')
//     .then(() => {
//         return User.create({
//             username: 'pepitapulgarcita',
//             email: 'pepita@pulgarcita.com',
//             password: '123123123'
//         })
//     }
//     )
//     .catch(error => console.error(error))
//     .finally(() => disconnect())

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return Place.create({
            author: '68641c8883b3e8e0e415df55',
            name: 'The Gate Islington',
            category: 'restaurants',
            country: 'United Kingdom',
            city: 'London',
            address: '370 St John St, London EC1V 4NN',
            website: 'www.thegaterestaurants.com',
            telephone: '+44 20 7833 0401',
            description: 'The Gate Islington is a plant-based restaurant with 35 years of history. It was awarded the UK’s first autism-friendly restaurant in 2016 by the National Autistic Society for its partnerships with local charities.',
            image: 'https://lh3.googleusercontent.com/p/AF1QipOqk_xtsCVEKZEjQyaNKLCGpdK0S_D8u1-pNdNL=s680-w680-h510-rw'
        })
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())

// connect('mongodb://localhost:27017/infinity')
//     .then(() => {
//         return Place.create({
//             author: '68641c8883b3e8e0e415df55',
//             name: 'Early birds evening @ The Science Museum',
//             category: 'museums',
//             country: 'United Kingdom',
//             city: 'London',
//             address: 'Exhibition Rd, South Kensington, London SW7 2DD',
//             website: 'https://www.sciencemuseum.org.uk/see-and-do/early-birds',
//             telephone: '+44 033 0058 0058',
//             description: 'Early Birds is a sensory friendly event for families with members who need a quieter environment to enjoy the museum.',
//             image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/db/af/3d/the-entrance-to-the-science.jpg?w=1000&h=-1&s=1'
//         })
//     })
//     .catch(error => console.error(error))
//     .finally(() => disconnect())

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return Review.create({
            author: '68641c8883b3e8e0e415df55',
            place: '686532793d667f4a7a3fd7be',
            title: '',
            comment: '',
            features: '',
            dateVisited: '',
            image: ''
        })
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())