import { use, useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'
import { Days } from './Days'
import { CreateWorkout } from './CreateWorkout'


export const AdminPanel = ({ user, onBack }) => {
    const { alert } = useContext()

    const [selectedDay, setSelectedDay] = useState(null)
    const [workout, setWorkout] = useState(null)
    const [showCreate, setShowCreate] = useState(false)

    console.log('Admin panel user:', user)

    useEffect(() => {

        try {
            if (selectedDay) {
                logic.getWorkoutForUser(user.id, selectedDay)
                    .then(workout => {
                        setWorkout(workout)
                        setShowCreate(false)
                    })
                    .catch(error => {
                        if (error.message === 'workout not found') {
                            setWorkout(null)
                            setShowCreate(false)
                        } else {
                            console.error(error)

                            alert(error.message)
                        }
                        
                    })
            }
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
        
    }, [selectedDay, user.id])

    const handleShowCreateWorkout = () => setShowCreate(true)

    const handleBackToDays = () => {
        setShowCreate(false)
        setSelectedDay(null)
        setWorkout(null)
    }


    return (
        <div className="p-4">
            <button onClick={onBack} className="mb-4 text-[#0ab5ee] hover:underline">
                ⬅️ Back to users
            </button>

            <h2 className="text-xl font-bold mb-2 text-[#119fd3]">Managing {user.username}</h2>

            {!selectedDay && ! showCreate && <Days onSelect={setSelectedDay} />}

            {selectedDay && !showCreate && (
                <>
                    <h3 className="mt-6 text-lg font-semibold text-gray-800">Workout for {selectedDay}</h3>

                    {workout ? (
                        <div className="mt-4 space-y-4">
                            {workout.exercises.map((exercise, index) => (
                                <div key={index} className="border rounded-lg p-4 shadow-sm">
                                    <p className="font-semibold text-[#119fd3]">{exercise.name}</p>
                                    <p className="text-sm text-gray-700">{exercise.description}</p>
                                </div>
                            ))}

                            <button
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                onClick={() => console.log('TODO: delete workout')}
                            >
                                Delete Workout
                            </button>
                        </div>
                    ) : (
                        <button
                            className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            onClick={handleShowCreateWorkout}
                        >
                            ➕ Create Workout
                        </button>
                    )}

                    <button
                        className="mt-6 block text-[#0ab5ee] hover:underline"
                        onClick={handleBackToDays}
                    >
                        🔙 Choose another day
                    </button>
                </>
            )}

            {showCreate && (
                <CreateWorkout
                    userId={user._id}
                    day={selectedDay}
                    onBack={handleBackToDays}
                />
            )}
        </div>
    )
}