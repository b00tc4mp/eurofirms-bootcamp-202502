import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Places } from './components/Places'
import { CreatePlace } from './components/CreatePlace'
import { PlaceDetails } from './components/PlaceDetails'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    //cuando cambias el valor, se recarga el componente completo. setView se encarga de cambiar el valor.
    const [view, setView] = useState('places')
    const [username, setUsername] = useState('World')
    //uso placeId para pasar a PlaceDetails.jsx
    const [placeId, setPlaceId] = useState('')

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

    const handleChangeToPlaceDetails = (placeId) => {
        setPlaceId(placeId)
        
        setView('place-details') 
    }

    const handleGoBackClicked = () => setView('places')
    

    console.log('Home -> render')

    return <div className="px-10 py-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-2">
            <img src="/logo.jpg" alt="Infinity Travel" />
            <i className="logo">Infinity Travel</i>
        </div>
        <div className="my-6">
            <p className="flex my-1">Hello, <span className="font-semibold">{username}</span>!<span><a className="underline text-blue-600 text-sm ml-4" href="#" onClick={handleLogoutClick}>Log out</a></span></p>
        </div>

        <div>
            {view === 'places' && 
            <div>
                <button className="border-2 border-pink-800 p-1 text-rose-800 cursor-pointer hover:text-white hover:bg-rose-800" onClick={handleCreatePlaceClick}>+ Add a place</button>
            </div>}
            {view === 'places' && <Places 
            onChangeToPlaceDetails={handleChangeToPlaceDetails}
            />}
            {view === 'add-place' && <CreatePlace 
            onCancelClicked={handleCreatePlaceCancelClicked}
            onPlaceCreated={handlePlaceCreated}
            />}
            {/*El primer placeId es la propiedad q se le pasa al componente PlaceDetails, y el segundo placeId es el q se coge del useState */}
            {view === 'place-details' && <PlaceDetails 
            placeId={placeId}
            onGoBackClicked={handleGoBackClicked}/>}
        </div>
    </div>
}