import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()



    const [view, setView] = useState('posts')
    const [username, setUsername] = useState('World')

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
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')

    console.log('Home -> render')


    return <div className="p-5">
        <i className="text2x1">Logo</i>

        <div className="mt-2">
            <h1 className="text-x1">Hello, {username}!</h1>

            <button
                className="bg-black text-white px-2"
                type="button"
                onClick={handleCreatePostClick}
            >+</button>

            <button
                className="bg-black text-white px-2"
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>

        {view === 'posts' && <Posts  alert={alert} confirm={confirm}/> }
        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}

        />}
    </div>
}