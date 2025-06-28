import { useEffect, useState } from 'react'
import { logic } from '../logic'
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
        } catch (error) {
            alert(error.message)
        }
    }

    //const handleCreateProfileClick = () => setView('create-profile')

    //const handleProfileCreated = () => setView('home')

    console.log('Home -> render')

    return <div className="px-5">

        <i className="text-2xl block">🏋️ GymPlan 🏋️</i>

        <div className="mt-2 flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-[#119fd3]">Hello, {username}!!</h1>

            {/*    <button className="font-bold rounded-[10px] w-10 h-10 text-center cursor-pointer text-white bg-[#0ab5ee] transform transition-transform duration-210 hover:scale-100"
            title="Create your profile"
            type="button"
            onClick={handleCreateProfileClick}>Edit your profile
        </button> */}
        </div>
        <button className="mt-2 text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2 transform transition-transform duration-210 hover:scale-110"
            title="Exit to Login"
            type="button"
            onClick={handleLogoutClick}>Logout
        </button>


    </div>
}

