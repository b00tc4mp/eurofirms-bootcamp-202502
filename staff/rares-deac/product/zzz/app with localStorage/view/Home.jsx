import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost'

// export const Home = props => {
//     const onUserLoggedOut = props.onUserLoggedOut
export const Home = ({onUserLoggedOut}) => {


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
        }
        catch (error) {
            alert(error.message)
        }
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')

    console.log('Home -> render')

    return <div className="p-5">

        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}!</h1>

            <button
                className="bg-black text-white px-2"
                type="button"
                onClick={handleCreatePostClick}
            >+</button>

            <button className="bg-black text-white px-2"
                type="button"
                onClick={handleLogoutClick}>
                Logout</button>
        </div>

        {view === 'posts' && <Posts />}
        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated} />}
    </div>
}