import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { Posts } from './components/Posts'

export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

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
 
    console.log("Home -> render")

    return <div classname="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}</h1>
       
            <button
             classname="bg-black text-white px-2"
             type="button"
                onClick={handleLogoutClick}
            >Logout</button>
         </div>
         <Posts/>
    </div>
} 