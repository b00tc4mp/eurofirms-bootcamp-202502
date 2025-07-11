import { use, useEffect, useState } from 'react'
import { logic } from '../logic'
import { CreateProfile } from './components/CreateProfile.jsx'
import { Days } from './components/Days.jsx'
import { Workout } from './components/Workout.jsx'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState(null)

    const [username, setUsername] = useState('World')

    const [selectDay, setSelectDay] = useState(null)

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

    const handleDaySelected = (day) => setSelectDay(day)

    const handleBackToDays = () => setSelectDay(null)

    console.log('Home -> render')

    return <div className=" relative px-5 py-6 min-h-screen flex flex-col items-center bg-white text-center">

        <div className="absolute top-4 left-4 text-xl font-bold text-[#0ab5ee]">🏋️ GymPlan 🏋️</div>

        <div className="absolute top-4 right-4 text-xl font-bold text-[#0ab5ee]">🏋️ Gymplan 🏋️</div>


        <h1 className="mt-14 text-[24px] font-bold text-[#119fd3]">Hello, {username}!!</h1>

        <div className="mt-6 flex justify-between gap-6 w-full max-w-md px-4">

            {view === 'home' && (
                <>
                    <button className="flex-1 text-white bg-[#0ab5ee] font-medium rounded-xl px-4 py-2 hover:bg-[#099ecf] transition"
                        title="Edit your profile"
                        type="button"
                        onClick={handleCreateProfileClick}>Edit your profile
                    </button>
                    <button className="flex-1 text-white bg-[#0ab5ee] font-medium rounded-xl px-4 py-2 hover:bg-[#099ecf] transition"
                        title="Exit to Login"
                        type="button"
                        onClick={handleLogoutClick}>Logout
                    </button>
                </>
            )}

        </div>

        <div className="mt-8 w-full flex justify-center">
            {view === 'profile' && <CreateProfile onCancelClicked={handleCreateProfileCancelClicked} onProfileCreated={handleProfileCreated} alert={alert} />}
            {view == 'create-profile' && <CreateProfile onCancelClicked={handleCreateProfileCancelClicked} onProfileCreated={handleProfileCreated} alert={alert} />}
            {view == 'home' && !selectDay && <Days onSelect={handleDaySelected} />}
            {view == 'home' && selectDay && <Workout day={selectDay} onBack={handleBackToDays} />}

        </div>



    </div>
}

