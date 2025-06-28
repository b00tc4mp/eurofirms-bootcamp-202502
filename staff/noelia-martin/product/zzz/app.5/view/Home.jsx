import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost' //la necesitamos

export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    /*Ultima Configuracion de App.5, creacion de Posts
    Creamos estas variables para controlar el estado de las vistas*/
    const [view, setView] = useState('posts')

    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            const username = logic.getUserUsername()

            setUsername(username)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    /*Ultima Configuracion de App.5, creacion de Posts
    configuramos los handle necesarios para manejar las vistas
    */
    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}</h1>

            {/* Ultima Configuracion de App.5, creacion de Posts
            Creamos el boton + para añadir nuevos posts */}
            <button
                className="bg-black text-white px-2"
                type="button"
                onClick={handleCreatePostClick}
            >+</button>

            <button className="bg-black text-white px-2" type='button' onClick={handleLogoutClick}>Logout</button>
        </div>
        {/* Ultima Configuracion de App.5, creacion de Post 
        Configuramos las vistas de posts y una nueva para create-post con las proiedades que necesitara(boton Cancel y submit Create)
        */}
        {view === 'posts' && <Posts />}
        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}
        />}
    </div>
}
//la configuracion es muy parecida a App.jsx de la version App.4

