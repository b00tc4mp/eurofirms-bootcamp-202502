import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { Posts } from './components/Posts'
import { CreatePost } from './components/CreatePost'
import { useContext } from '../context'
import { useNavigate } from 'react-router'

export const Home = ({ onUserLoggedOut }) => {

    const navigate = useNavigate()

    const { alert } = useContext()//I am using a CONTEXT = TOOL which let me to have COMPONENTS ACTIVE // To access Information

    const [view, setView] = useState('posts')

    const [username, setUsername] = useState('World')

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
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {

        try {

            logic.logoutUser()

            onUserLoggedOut() // This prop of HOME which lets me to communicate with App.jsx (Line 31)
        } catch (error) {
            alert(error.message)
        }

    }

    const handleCreatePostClick = () => setView('create-post') //On my button "+""

    const handleCreatePostCancelClicked = () => setView('posts')//It is LINKED with Lines 7 and 91 of components CreatePost.jsx

    const handlePostCreated = () => setView('posts')//It is LINKED with Line 24 components CreatePost.jsx

    console.log('Home -> render')

    return <>
        <i className="text-2xl text-blue-900 font-extrabold">ACONPP</i>

        <div className="mt-2">
            <h1 className="text-3xl text-blue-700 font-bold py-2">HOME Page</h1>

            <h2 className="text-xl text-blue-600 font-semibold py-2">Hello, {username}!</h2>

            <div className="my-2 flex justify-between">
                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer"
                    type="button"
                    onClick={handleCreatePostClick}
                >+</button>

                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer"
                    type="button"
                    onClick={handleLogoutClick}
                >Logout</button>
            </div>
        </div>

        {view === 'posts' && <Posts alert={alert} confirm={confirm} />}

        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}
        />}
    </>
}