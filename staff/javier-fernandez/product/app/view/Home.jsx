import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost' 
 
//export const Home = (props) => {
//  const onUserLoggedOut = props.onUserLoggedOut
export const Home = ({ onUserLoggedOut }) => {
    const [view, setView] = useState('posts')
    const [username, setUsername] = useState('world')

    useEffect(() => {
        try {
            const username = logic.getUserUsername() 

            setUsername(username)
        } catch (error) {
            alert (error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser() 

            onUserLoggedOut()
        } catch (error) {
            alert (error.message)
        }
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClicked = () => setView('posts')

    const handlePostCreated = () => setView('posts')
 
    console.log('Home -> render')

    return <div classname="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl text-black-800 font-semibold py-2">HOME Page</h1>
            <h2 className="text-xl text-blue-300 py-2">Hello, {username}!</h2>
            
            <div className="my-2 flex justify-start">
       
                <button
                    className="bg-black text-white px-2"
                    type="button"
                    onClick={handleCreatePostClick}
                 >+</button>

                <button
                    classname="border-2 rounded-md bg-black-50 text-white-100 px-2 font-medium cursor pointer"
                    type="button"
                    onClick={handleLogoutClick}
                >Logout</button>

                <button className="border-2 rounder-md bg-black-50 text-white-100 px-2 font-medium mx-75 cursor-pointer"
                    type="button"
                ></button> 
            </div>

         </div>
         {view === 'posts' && <Posts />}
         {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}
        />}
    </div>
} 