import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const Workout = ({ day, onBack }) => {
    const { alert } = useContext()
    const [workout, setWorkout] = useState(null)


    useEffect(() => {
        try {
            logic.getWorkouts(day)
                .then(workout => {
                    setWorkout(workout)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
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
                        <div key={index} className="p-4 rounded-xl shadow-md border border-gray-200 bg-white flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-center text-[#119fd3] mb-4">{exercise.name}</h3>
                            <div className="w-full max-w-sm h-60 flex justify-center items-center overflow-hidden mb-4 rounded-xl">
                                <img src={exercise.image} alt={exercise.name} className="object-cover w-full h-full rounded-xl" />
                            </div>
                            <p className="text-sm text-gray-700 text-center mb-4">{exercise.description}</p>
                            < div className=" flex flex-wrap justify-center gap-4 text-sm text-[#119fd3] w-full">
                                <p><strong>Sets: </strong>{exercise.sets}</p>
                                <p><strong>Repetitions: </strong>{exercise.repetitions}</p>
                                <p><strong>Rest Time: </strong>{exercise.restTime} sec</p>
                                <p><strong>Difficulty: </strong>{exercise.difficulty}</p>
                                <p><strong>Muscle Group: </strong>{exercise.muscleGroup}</p>
                            </div>
                        </div>
                    ))}

                </div>

            )}
        </div>
    )
}