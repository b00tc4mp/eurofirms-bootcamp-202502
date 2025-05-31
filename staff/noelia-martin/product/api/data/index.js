//Borramos fichero completo, para esta version empezamos de 0

import mongoose from 'mongoose'
import { User, Post } from './models.js' //me traigo los modelos aqui a data para que cualquier logica que lo necesite, lo tenga a traves de data y asi simplificarles trabajo. Hacemos lo mismo con connect y disconnect

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Post
}