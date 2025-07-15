import { useEffect, useState } from "react";

import { logic } from '../../logic'

import { Routine } from './Routine'
import { useContext } from '../../context'

export const Routines = () => {
    const { alert } = useContext()

    const [routines, setRoutines] = useState([])

    useEffect(() => {
        try {
            logic.getRoutines()
                .then(routines => {
                    setRoutines(routines)
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

    const handleRoutineDeleted = () => {
        try {
            logic.getRoutines()
                .then(routines => {
                    setRoutines(routines)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        }   catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Routines -> render')

    return <div className="pb-8 flex flex-col gap-4 mt-4" >

        {routines.map(routine => <Routine key={routine.id} routine={routine} onRoutineDeleted={handleRoutineDeleted} />)}
    </div>
}