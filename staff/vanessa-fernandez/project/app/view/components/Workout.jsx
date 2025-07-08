import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const Workout = ({ day, onBack }) => {
    const { alert } = useContext()
    const [workout, setWorkout] = useState(null)
    

    useEffect(() => {
        try{
            logic.getWorkouts(day)
                .then(workout => {
                    setWorkout(workout)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
            
        } catch(error) {
            console.error(error)

            alert(error.message)
        }
    }, [day])

    return (
        <div className="mt-8 px-4">
            <button
                className="mb-4 text-white bg-[#0ab5ee] px-4 py-2 rounded-lg hover:bg-[#099ecf] transition"
                onClick={onBack}
            > ⬅️ Back </button>    

            <h2 className="text-2xl font-bold mb-4">Workout for {day}</h2>

            {!workout && (
                <p className="text-gray-500">Loading workout....</p>
            )}

            {workout && (
                <div className="space-y-6"> 
                    {workout.exercises.map((exercise, index) => (
                        <div key={index} className="p-4 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-xl font-semibold">{exercise.name}</h3>
                            <img src={exercise.image} alt={exercise.name} className="w-full h-48 object-cover rounded-lg my-2" />
                            <p className="text-sm text-gray-700">{exercise.description}</p>
                            < div className="mt-2 text-sm">
                                <p><strong>Sets:</strong>{exercise.sets}</p>
                                <p><strong>Repetitions:</strong>{exercise.repetitions}</p>
                                <p><strong>Rest Time:</strong>{exercise.restTime} sec</p>
                                <p><strong>Difficulty:</strong>{exercise.difficulty}</p>
                                <p><strong>Muscle Group:</strong>{exercise.muscleGroup}</p>
                            </div>
                        </div>
                    ))}

                </div>

            )}
        </div>
    )
}