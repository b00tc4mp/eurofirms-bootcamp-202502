import { logic } from '../../logic'

import { useContext } from '../../context'

import { useState, useEffect } from 'react'

export const PlaceDetails = ({ placeId }) => {
    const { alert } = useContext()

    const [place, setPlace] = useState('')
    
        useEffect(() => {
            try {
                logic.getPlaceDetails(placeId)
                    .then(place => {
                        setPlace(place)
                    })
            } catch(error) {
                console.error(error)
    
                alert(error.message)
            }
        }, [])

    console.log('PlaceDetails -> render')

    return <article>
        <h2>{place.name}</h2>
        <h3>{place.category}</h3>
        <img src={place.image} alt=""/>
        <p>{place.address}</p>
        <p>{place.city}</p>
        <p>{place.country}</p>
        <p>{place.website}</p>
        <p>{place.telephone}</p>
        <p>{place.description}</p>
    </article>
}

//añadir codigo para delete place by admin