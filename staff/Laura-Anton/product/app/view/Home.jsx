import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost'

export const Home = ({ onUserLoggedOut }) => {
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
    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')

    console.log('Home -> render')

    return <div className="flex flex-col items-center p-5 mb-4">
        <i className="text-2xl  text-purple-800 font-bold bg-pink-200 px-8 py-2 rounded-lg border-pink-900 border-2">Logo</i>

        <div className="mt-2 mb-2 flex ">
            <h1 className="text-xl mr-2">Hello, {username}!</h1>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleCreatePostClick}
            >+</button>

            <button
                className="bg-black text-white px-2 items-center "
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>
        {view === 'posts' && <Posts />}
        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}
        />}
    </div>
}