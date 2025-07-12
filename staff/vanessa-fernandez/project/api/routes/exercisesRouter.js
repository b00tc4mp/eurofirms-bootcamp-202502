import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'

export const exercisesRouter = Router()

exercisesRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { name, description, image, difficulty, muscleGroup } = request.body

        logic.createExercise(name, description, image, difficulty, muscleGroup)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch(error) {
        next(error)
    }
})

exercisesRouter.get('/', (request, response, next) => {
    try{
        logic.getExercises()
            .then(exercises => response.status(200).json(exercises))
            .catch(error => next(error))
    } catch(error) {
        next(error)
    }
})