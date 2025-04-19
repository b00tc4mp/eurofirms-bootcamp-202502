import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Posts } from './components/Posts'


export const Home = props => {

    const onUserLoggedOut = props.onUserLoggedOut

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
        } catch (error) {
            alert(error.message)
        }

    }

    console.log('Home -> render')

    return <div className="p-5 grid">

        <i className="text-xl">Logo</i>

        <div className="mt-2">

            <h1 className="text-3xl text-blue-900 font-semibold py-2">HOME Page</h1>

            <h2 className="text-xl text-orange-700 py-2">Hello, {username}!</h2>

            <div className="my-2 flex justify-start">

                <button className="border-2 rounded-md bg-orange-50 text-orange-900 px-2 font-medium cursor-pointer"
                    type="button"
                    onClick={handleLogoutClick}

                >Logout</button>

                <button className="border-2 rounded-md bg-orange-50 text-orange-900 px-2 font-medium mx-75 cursor-pointer"
                    type="button"

                >+</button>

            </div>



        </div>


        <Posts />

    </div>

}