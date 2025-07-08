import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Places } from './components/Places'
import { CreatePlace } from './components/CreatePlace'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState('places')
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

    const handleCreatePlaceClick = () => setView('add-place')

    const handleCreatePlaceCancelClicked = () => setView('places')

    const handlePlaceCreated = () => setView('places')

    console.log('Home -> render')

    return <div className="px-10 py-8">
        <div className="flex flex-col items-center gap-2">
            <img src="/logo.jpg" alt="Infinity Travel" />
            <i class="logo">Infinity Travel</i>
        </div>
        <div className="my-8">
            <p className="flex my-1">Hello, <span className="font-semibold">{username}</span>!</p>

            <a className="underline text-blue-600 text-sm" href="#" onClick={handleLogoutClick}>Log out</a>
        </div>

        <div>
            {view === 'places' && 
            <div>
                <button className="border-2 border-pink-800 p-1 text-rose-800 cursor-pointer" onClick={handleCreatePlaceClick}>+ Add a place</button>
            </div>}
            {view === 'places' && <Places />}
            {view === 'add-place' && <CreatePlace 
            onCancelClicked={handleCreatePlaceCancelClicked}
            onPlaceCreated={handlePlaceCreated}
            />}
        </div>
    </div>
}