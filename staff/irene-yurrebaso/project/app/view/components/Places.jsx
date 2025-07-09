import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Place } from './Place'

import { useContext } from '../../context'

export const Places = ({onChangeToPlaceDetails}) => {
    const { alert } = useContext()

    const [places, setPlaces] = useState([])

    //cuando cargue el compo Home se dispara useEffect y se cargan los places
    useEffect(() => { 
        try {
            logic.getPlaces()
                .then(places => {
                    setPlaces(places)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    //Pedir a Home que muestre PlaceDetails.jsx con placeId
    const handlePlaceClicked = (placeId) => {
        onChangeToPlaceDetails(placeId)
    }

    console.log('Places -> render')

    return <div>
        
        <h1 className="text-xl font-semibold my-4">You might like these</h1>
        <div className="flex gap-5 flex-wrap flex-end">
        {places.map(place => <Place key={place.id} place={place} onPlaceClicked={handlePlaceClicked}/>)}
        </div>
    </div>
}

