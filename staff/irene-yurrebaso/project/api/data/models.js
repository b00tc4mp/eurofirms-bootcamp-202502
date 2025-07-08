import { validate } from 'com'
import mongoose from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

const place = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        enum: ['hotels', 'restaurants', 'outdoors', 'museums', 'shops', 'sports', 'transport', 'other'],
        required: true
    },

    country: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    website: {
        type: String,
    },

    telephone: {
        type: String,
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now
    },

    reviews: [{
        type: ObjectId,
        ref: 'Review'
    }]
})

const review = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    place: {
        type: ObjectId,
        ref: 'Place',
        required: true
    },

    title: {
        type: String,
        required: true
    },

    comment: {
        type: String,
        required: true
    },

    features: {
        type: [String],
        enum: ['sensory friendly', 'low noise levels', 'flexible food menu', 'quiet', 'clear information', 'soft lighthing', 'low crowd density', 'staff trained in neurodiversity', 'easy-read materials or pictograms', 'accessible times', 'low-odor environment', 'patient staff', 'option to choose quiet room or spot', 'minimal interaction'],
        required: true,
        validate: [arr => arr.length > 0 && arr.length < 6, 'must choose between 1 and 5 features']
    },

    dateVisited: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },

    image: {
        type: String
    }

})

const User = model('User', user)
const Place = model('Place', place)
const Review = model('Review', review)

export {
    User,
    Place,
    Review
}