import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Places } from './components/Places'
//import { CreatePlace} from './components/CreatePlace'
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

    console.log('Home -> render')

    return <div className="p-5">
        <div className="flex flex-col items-center gap-2">
            <img src="/logo.jpg" alt="Infinity Travel" />
            <i class="logo">Infinity Travel</i>
        </div>
        <div className="my-4">
            <p className="flex my-5 font-semibold">Hello, {username}!</p>

            <a className="underline" href="#" onClick={handleLogoutClick}>Log out</a>
        </div>
        <div>
            <h1 className="text-xl">You might like these</h1>
            {view === 'places' && <Places />}
        </div>
    </div>
}