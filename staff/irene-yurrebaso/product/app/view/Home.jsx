import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'

import { CreatePost } from './components/CreatePosts'

//pasamos la prop con destructuring
export const Home = ({ onUserLoggedOut }) => {
    
    //para mostrar formulario para crear posts
    const [view, setView] = useState('posts')
    
    //definir un useState para username, permite guardar y pintar username
    const [username, setUsername] = useState('World')

    //permite cargar algo ej. username; el array vacio en useEffect indica q solo se ejecute al cargar el componente
    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(username => setUsername(username))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            //para que limpie userId en bbdd
            logic.logoutUser() 
            //si va bien, q nos lleve a login a traves de la prop que viene de App
            onUserLoggedOut()
        } catch(error) {
            alert(error.message)
        }
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Home</h1>
        <h2 className="flex justify-center my-5 font-semibold">Hello, {username}!</h2>
        <button 
            className="bg-black text-white py-2 px-4 mr-4" 
            type="button"
            onClick={handleCreatePostClick}
        >+</button>
        <button 
            className="bg-black text-white py-2 px-4" 
            type="button"
            onClick={handleLogoutClick}
        >Log out</button>

        {view === 'posts' && <Posts />}
        {view === 'create-post' && <CreatePost 
        onCancelClicked={handleCreatePostCancelClicked}
        onPostCreated={handlePostCreated}
        />}
    </div>
}