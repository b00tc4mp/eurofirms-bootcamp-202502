import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [username,setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(username => setUsername(username))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch(error) {
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

    console.log('Home -> render')

    return <div className='p-5'>
        <i classNAme="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className='text-xl'>Hello, {username}</h1>
            
            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleLogoutClick}>Logout</button>
        </div>
        
    </div>
}