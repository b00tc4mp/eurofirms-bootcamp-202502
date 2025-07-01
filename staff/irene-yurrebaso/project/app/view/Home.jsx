import { useEffect, useState } from 'react'

import { logic } from '../logic'

//import { Posts } from './components/Posts'
//import { CreatePost } from './components/CreatePost'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

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
        } catch(error) {
            alert(error.message)
        }
    }

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>
        <h1 className="text-2xl my-3">Home</h1>
        <h2 className="flex justify-center my-5 font-semibold">Hello, {username}!</h2>
        
        <button 
            className="bg-black text-white py-2 px-4" 
            type="button"
            onClick={handleLogoutClick}
        >Log out</button>

       
    </div>
}