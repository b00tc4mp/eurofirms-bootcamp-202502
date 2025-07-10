import { logic } from '../../logic'

import { useContext } from '../../context'

import { useState, useEffect } from 'react'

//placeId es la variable q se pasa por props desde Home
export const PlaceDetails = ({ placeId, onGoBackClicked }) => {
    const { alert } = useContext()

    const [place, setPlace] = useState('')

    useEffect(() => {
        try {
            logic.getPlaceDetails(placeId)
                .then(place => {
                    setPlace(place)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleGoBackClick = () => onGoBackClicked()


    console.log('PlaceDetails -> render')

    return <div>
        <button className="bg-rose-800 text-white px-2 mb-3 cursor-pointer" onClick={handleGoBackClick}>&lt; Go back</button>
        <article className="flex flex-col gap-2 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold">{place.name}</h2>
            <p>
                <span>{place.city}</span>
                <span>-</span>
                <span> {place.country}</span>
            </p>

            <p><span className="border-2 border-rose-800 rounded-xl px-2 my-2">Category: {place.category}</span></p>
            <img className="my-3 rounded" src={place.image} alt="" />

            <h3 className="font-semibold">Details</h3>
            <p className="font-light"><span>Address:</span> {place.address}</p>
            <p className="font-light"><span>Official website:</span> <a href={place.website} target="_blank" className="hover:underline">{place.website}</a></p>
            <p className="font-light"><span>Phone: </span> {place.telephone}</p>

            <h3 className="font-semibold">About</h3>
            <p className="font-light">{place.description}</p>
        </article>
    </div>
}

//añadir codigo para delete place by admin