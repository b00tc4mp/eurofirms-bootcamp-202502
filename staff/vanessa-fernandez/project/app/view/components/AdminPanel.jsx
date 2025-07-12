import { use, useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'
import { Days } from './Days'


export const AdminPanel = ({ user, onBack }) => {
    const { alert } = useContext()

    const [selectedDay, setSelectedDay] = useState(null)
    const [workout, setWorkout] = useState(null)

    console.log('Admin pane user:', user)

    useEffect(() => {
        if (!selectedDay || ! user?.id) return
        try {
            if (selectedDay) {
                logic.getWorkoutForUser(user.id, selectedDay)
                    .then(workout => {
                        setWorkout(workout)
                    })
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    })
            }
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
        
    }, [selectedDay, user.id])


    return (
        <div className="p-4">
            <button onClick={onBack} className="mb-4 text-[#0ab5ee] hover:underline">
                ⬅️ Back to users
            </button>

            <h2 className="text-xl font-bold mb-2 text-[#119fd3]">Managing {user.username}</h2>

            <Days onSelect={setSelectedDay} />

            {selectedDay && (
                <>
                    <h3 className="mt-6 text-lg font-semibold text-gray-800">Workout for {selectedDay}</h3>
                </>
            )}

            {workout && (
                <div className="mt-4 space-y-4">
                    {workout.exercises.map((exercise, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-sm">
                            <p className="font-semibold text-[#119fd3]">{exercise.name}</p>
                            <p className="text-sm text-gray-700">{exercise.description}</p>
                        </div>
                    ))}

                    <button
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() => console.log('TODO: delete workout')}>
                        Delete Workout
                    </button>
                </div>
            )}
            {!workout && (
                <button
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    onClick={() => console.log('TODO: create workout')}>
                    Create Workout
                </button>
            )}
        </div>
    )
}