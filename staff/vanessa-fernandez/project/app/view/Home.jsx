import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { CreateProfile } from './components/CreateProfile.jsx'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState(null)

    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(({ username, profileCompleted }) => {
                    setUsername(username)

                    if (!profileCompleted) setView('profile')
                    else setView('home')
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

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCreateProfileClick = () => setView('create-profile')

    const handleCreateProfileCancelClicked = () => setView('home')

    const handleProfileCreated = () => setView('home')

    console.log('Home -> render')

    return <div className="px-5">

        <i className="text-2xl block">🏋️ GymPlan 🏋️</i>

        <div className="mt-2 flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-[#119fd3]">Hello, {username}!!</h1>

            {view === 'home' &&

                <button className="text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2 transform duration-210 hover:scale-110"
                    title="Edit your profile"
                    type="button"
                    onClick={handleCreateProfileClick}>Edit your profile
                </button>}
        </div>
        <button className="mt-2 text-white bg-[#0ab5ee] font-thin border-none rounded-[10px] cursor-pointer px-4 py-2 transform transition-transform duration-210 hover:scale-110"
            title="Exit to Login"
            type="button"
            onClick={handleLogoutClick}>Logout
        </button>
        {view === 'profile' && <CreateProfile onCancelClicked={handleCreateProfileCancelClicked} onProfileCreated={handleProfileCreated} alert={alert} />}
        {view == 'create-profile' && <CreateProfile onCancelClicked={handleCreateProfileCancelClicked} onProfileCreated={handleProfileCreated} alert={alert} />}

    </div>
}

