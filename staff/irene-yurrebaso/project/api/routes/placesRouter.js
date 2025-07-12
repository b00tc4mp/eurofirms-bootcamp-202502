import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const placesRouter = Router()

placesRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { name, category, country, city, address, website, telephone, description, image } = request.body

        logic.createPlace(userId, name, category, country, city, address, website, telephone, description, image)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//get all places
placesRouter.get('/', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.getPlaces(userId)
            .then(places => response.status(200).json(places))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

//get one place by id
placesRouter.get('/:placeId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        //extract placeId from the request parameters (from :placeId in the route)
        const placeId = request.params.placeId

        logic.getPlaceDetails(userId, placeId)
            .then(place => response.status(200).json(place))
            .catch(error => next(error))
    } catch(error) {
        next(error)
    }
})

placesRouter.delete('/:placeId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { placeId } = request.params

        logic.removePlace(userId, placeId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    } catch(error) {
        next(error)
    }
})