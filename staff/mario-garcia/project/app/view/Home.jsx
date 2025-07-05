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

    return <div className="p-5 grid">

        <i className="text-2xl text-blue-900 font-extrabold">ACONPP</i>

        <div className="mt-2">

            <h1 className="text-3xl text-blue-700 font-bold py-2">HOME Page</h1>

            <h2 className="text-xl text-blue-600 font-semibold py-2">Hello, {username}!</h2>

            <div className="my-2 flex justify-start">

                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium cursor-pointer"
                    type="button"
                    onClick={handleLogoutClick}

                >Logout</button>

                <button className="border-2 rounded-md bg-blue-50 text-blue-900 px-2 font-medium mx-75 cursor-pointer"
                    type="button"
                    onClick={handleCreatePostClick}

                >+</button>

            </div>

        </div>

        {view === 'posts' && <Posts alert={alert} confirm={confirm} />}

        {view === 'create-post' && <CreatePost
            onCancelClicked={handleCreatePostCancelClicked}
            onPostCreated={handlePostCreated}
        />}

    </div>

}