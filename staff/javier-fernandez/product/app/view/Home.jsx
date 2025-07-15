import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router'

import { logic } from '../logic'

import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost' 
import { useContext } from '../context'

//export const Home = (props) => {
//  const onUserLoggedOut = props.onUserLoggedOut
export const Home = ({ onUserLoggedOut }) => {
    const navigate = useNavigate()

    const { alert } = useContext()

    const [view, setView] = useState('posts')
    const [username, setUsername] = useState('world')

    useEffect(() => {
        try {
            logic.getUserUsername() 
            .then(username => {
                setUsername(username)

                navigate('/posts')
        })
            .catch(error => {
                console.error(error)

                alert(error.message)
            })
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

    const handleCreatePostClick = () => navigate('/create-post')

    const handleCreatePostCancelClicked = () => navigate('/posts')

    const handlePostCreated = () => navigate('/posts')
 
    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl text-black-800 font-semibold py-2">HOME Page</h1>
            <h2 className="text-xl text-blue-300 py-2">Hello, {username}!</h2>
            
            <div className="my-2 flex justify-start">
       
                <button
                    className="bg-black text-white px-2 mr-4"
                    type="button"
                    onClick={handleCreatePostClick}
                 >+</button>

                <button
                    className="border-2 rounded-md bg-black-50 text-white-100 px-2 font-medium cursor pointer"
                    type="button"
                    onClick={handleLogoutClick}
                >Logout</button>

            </div>

         </div>
        <Routes>
            <Route path="/posts" element={<Posts alert={alert} confirm={confirm}/>} />

            <Route path="/create-post" element={<CreatePost onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}/>} />
        </Routes>
    </div>
} 