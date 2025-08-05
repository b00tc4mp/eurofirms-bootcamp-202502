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

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    healthCareNumber: {
        type: String,
        required: true,
        unique: true
    },

    dateOfBirth: {
        type: Date,
        required: true,
    },

    role: {
        type: String,
        required: true,
        enum: ['regular', 'doctor'],
        default: 'regular'
    }
})

const child = new Schema({
    parents: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }],
    name: {
        type: String
    },
    surnames: {
        type: String
    },
    birthdate: {
        type: Date
    },
    address: {
        type: String
    },
    healthCenterName: {
        type: String
    },
    healthCenterTfno: {
        type: String
    },
    healthPediatricianName: {
        type: String
    },
    healthPediatricianTfno: {
        type: String
    },
    healthHospitalName: {
        type: String
    },
    healthHospitalTfno: {
        type: String
    },
    healthEmergenciesName: {
        type: String
    },
    healthEmergenciesTfno: {
        type: String
    },
    pregnancyDuration: {
        type: String
    },
    controlledPregnancy: {
        type: String
    },
    maternalSerology: {
        type: String
    },
    problemsDuringPregnancy: {
        type: String
    },
    birthPlace: {
        type: String
    },
    entryDateBirth: {
        type: String
    },
    departureDateBirth: {
        type: String
    },
    typeOfBirth: {
        type: String
    },
    earlyBreastfeelingInTheDeliveryRoom: {
        type: String
    },
    childbirthIncidentschildbirth: {
        type: String
    },
    birthWeight: {
        type: String
    },
    sex: {
        type: String
    },
    birthLenght: {
        type: String
    },
    cephalicPerimeterAtBirth: {
        type: String
    },
    allergiesAndReactionsToDrugsOrVaccines: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    foodIntolerances: {
        type: String
    },
    chronicDiaseases: {
        type: String
    },
    continuedMedication: {
        type: String
    },
    familyHistory: {
        type: String
    },
    congenitalMetabolicDiaseases: {
        type: String
    },
    breastfed: {
        type: String
    },
    exclusiveBreastDuration: {
        type: String
    },
    stopBreastfeeding: {
        type: String
    },
})



const User = model('User', user)
const Child = model('Child', child)

export {
    User, Child
}