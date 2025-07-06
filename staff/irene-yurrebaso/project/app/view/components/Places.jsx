import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Place } from './Place'

import { useContext } from '../../context'

export const Places = () => {
    const { alert } = useContext()

    const [places, setPlaces] = useState([])

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

    console.log('Places -> render')

    return <div className="flex gap-5 flex-wrap flex-end">
        {places.map(place => <Place key={place.id} place={place} />)}
    </div>
}

