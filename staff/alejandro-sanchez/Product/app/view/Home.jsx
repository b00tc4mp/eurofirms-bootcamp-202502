import {useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'

export const Home = props => {
    const onUserLoggedOut = props.onUserLoggedOut

    const [username, setUsername] = useState ('World')

    useEffect(()=> {
        try {
            const username = logic.getUsername()

            setUsername(username)
        } catch (error) {
            alert(error.message)
        }
    },[])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Logo</i>

        <div className="mt-2">
            <h1 className= "text-xl">Hello,{username}!</h1>

            <button
                className ="bg-black text-while px-2"
                type="button"
                onclick={handleLogoutClick}
            >Logout</button>    
        </div>
    
        <Posts />
        
    </div>
}


