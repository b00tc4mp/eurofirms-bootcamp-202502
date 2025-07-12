import mongoose from "mongoose"
import { User, Place, Review } from './models.js'

const { connect, disconnect } = mongoose

// connect('mongodb://localhost:27017/infinity')
//     .then(() => {
//         return User.create({
//             username: 'pepitogrillo',
//             email: 'pepito@grillo.com',
//             password: '123123123',
//         })
//     }
//     )
//     .catch(error => console.error(error))
//     .finally(() => disconnect())

connect('mongodb://localhost:27017/infinity')
    .then(() => {
        return Place.create(
        // {
        //     author: '687241824bdfdffade42fda9',
        //     name: 'The Gate Islington',
        //     category: 'restaurants',
        //     country: 'United Kingdom',
        //     city: 'London',
        //     address: '370 St John St, London EC1V 4NN',
        //     website: 'https://www.thegaterestaurants.com',
        //     telephone: '+44 20 7833 0401',
        //     description: 'The Gate Islington is a plant-based restaurant with 35 years of history. It was awarded the UK\’s first autism-friendly restaurant in 2016 by the National Autistic Society for its partnerships with local charities.',
        //     image: 'https://lh3.googleusercontent.com/p/AF1QipOqk_xtsCVEKZEjQyaNKLCGpdK0S_D8u1-pNdNL=s680-w680-h510-rw'
        // },
        // {
        //     author: '687241824bdfdffade42fda9',
        //     name: 'Early birds evening @ The Science Museum',
        //     category: 'museums',
        //     country: 'United Kingdom',
        //     city: 'London',
        //     address: 'Exhibition Rd, South Kensington, London SW7 2DD',
        //     website: 'https://www.sciencemuseum.org.uk/see-and-do/early-birds',
        //     telephone: '+44 033 0058 0058',
        //     description: 'Early Birds is a sensory friendly event for families with members who need a quieter environment to enjoy the museum.',
        //     image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/db/af/3d/the-entrance-to-the-science.jpg?w=1000&h=-1&s=1'
        // },
        // {
        //     author: '68721e0285c279e6939bc937',
        //     name: 'Safari Madrid',
        //     category: 'outdoors',
        //     country: 'Spain',
        //     city: 'Aldea del Fresno',
        //     address: 'Carretera Navalcarnero-Cadalso de los Vidrios Km 22.',
        //     website: 'https://www.safarimadrid.com/',
        //     telephone: '+34 91.862.23.14',
        //     description: 'Take a drive over a course that takes you past African animals roaming the park. There is also an aviary, a reptile house, paddle boats, a giant slide, and go-carts.',
        //     image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/32/70/ea/img-20170506-wa0011-largejpg.jpg?w=700&h=400&s=1'
        // },
        {
            author: '68721e0285c279e6939bc937',
            name: 'Gloria Izaro Club Hotel',
            category: 'hotels',
            country: 'Spain',
            city: 'Puerto del Carmen, Lanzarote',
            address: 'C/ Salinas, 9 35508',
            website: 'https://www.gloriapalaceth.com/en/autism-friendly/',
            telephone: '+34 928 12 86 40',
            description: 'We are aware of the difficulties that people with autism and their families face in their daily life. For this reason, Gloria Thalasso & Hotels chain has been certified as an autism friendly place, so that you can feel welcome in any of our hotels.',
            image: 'https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1182/JON7381-1.jpg'
        },
        {
            author: '68721e0285c279e6939bc937',
            name: 'Gloria Palace San Agustín Thalasso & Hotel',
            category: 'hotels',
            country: 'Spain',
            city: 'San Bartolomé de Tirajana, Las Palmas',
            address: 'C/ Las Margaritas s/n 35100',
            website: 'https://www.gloriapalaceth.com/en/autism-friendly/',
            telephone: '+34 928 12 86 40',
            description: 'We are aware of the difficulties that people with autism and their families face in their daily life. For this reason, Gloria Thalasso & Hotels chain has been certified as an autism friendly place, so that you can feel welcome in any of our hotels.',
            image: 'https://content.tui.co.uk/adamtui/2017_9/14_9/6e1bc27e-0bd9-4552-af09-a7ee00961828/ACC_031945_GCA_15WebOriginalCompressed.jpg?i10c=img.resize(width:470);img.crop(width:470%2Cheight:265)'
        },
        {
            author: '68721a1885c279e6939bc8c7',
            name: 'The Aubergine Café',
            category: 'restaurants',
            country: 'Spain',
            city: 'Cardiff',
            address: '36-38 Cathays Terrace',
            website: 'https://www.auberginecafe.co.uk',
            telephone: 'Not available',
            description: 'The Aubergine Café is the vision of a small team of autistic adults to empower other autistic people through accessible environments and innovative working practices while providing ethically sourced, nutritious and affordable plant-based food to local people in the wider community.',
            image: 'https://lh3.googleusercontent.com/p/AF1QipOvvOtY85QTzl36mPFw7sdFtfjghESMVFJubWMR=s680-w680-h510-rw'
        },
        {
            author: '68721e0285c279e6939bc937',
            name: 'Hampstead Heath park',
            category: 'outdoors',
            country: 'United Kingdom',
            city: 'London',
            address: 'Hampstead Lane, Hampstead, NW3 7JP',
            website: 'https://www.hampsteadheath.net',
            telephone: 'Not available',
            description: 'Hampstead Heath is a wild park of woodland and meadows, tucked inside north London\’s Zone Two - less than four miles from the centre, though you\’d never know it. It sprawls over 800 acres and boasts some of the most spectacular views in the city.',
            image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXduQha6LUYSsufCkXiZgxfw9YXFzfTJ7WjLvxDy-mwucuRU6rp_wvUOxkTGYTTMDDOxiJezPWzr2-pdeWYHJWJUSns6RVZqC8NHPylzIViipGZHYamj39gDquPwFyGkhTslcMeZeMkiQESs_7kaRg?key=HTGn3sjpXoLHKPeqkrXeVg'
        }
    )
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
//         },
    
//     )
//     })
//     .catch(error => console.error(error))
//     .finally(() => disconnect())

// connect('mongodb://localhost:27017/infinity')
//     .then(() => {
//         return Review.create({
//             author: '68641c8883b3e8e0e415df55',
//             place: '686532793d667f4a7a3fd7be',
//             title: 'Review title test',
//             comment: 'Review comment test',
//             features: [],
//             dateVisited: 'May 2025',
//             image: 'https://i0.wp.com/islingtonnow.co.uk/wp-content/uploads/2024/03/IMG_0453.jpg?resize=696%2C557&ssl=1'
//         })
//     })
//     .catch(error => console.error(error))
//     .finally(() => disconnect())