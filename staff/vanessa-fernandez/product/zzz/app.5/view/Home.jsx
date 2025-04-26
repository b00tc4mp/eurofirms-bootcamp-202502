import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { Posts } from './components/Posts'

export const Home = (props) => {
    const onUserLoggedOut = props.onUserLoggedOut

    const [username,setUsername] = useState('World')

    useEffect(() => {
        try{
            const username = logic.getUserUsername()

            setUsername(username)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try{
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
         

    }    
    console.log('Home -> render')

    return <div className="px-5">

        <i className="text-2xl block">Logo</i>

        <div className="mt-2 flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-[#119fd3]">Hello, {username}!</h1>

            <button className="font-bold rounded-[10px] w-10 h-10 text-center cursor-pointer text-white bg-[#0ab5ee] "
            title="Create new post"    
            type="button"
            /*onClick={handleCreatePostClick}*/> +   
            </button>
        </div>
        <button className=" mt-2 text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2"
            title="Exit to Login"
            type="button"
            onClick={handleLogoutClick}>Logout
        </button>
        <Posts />
    </div>
}

