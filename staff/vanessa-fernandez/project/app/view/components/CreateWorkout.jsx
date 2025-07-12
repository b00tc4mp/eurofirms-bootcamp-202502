import { useEffect, useState } from 'react'
import { logic } from '../../logic'
import { useContext } from '../../context'

export const CreateWorkout = ({ userId, day, onBack }) => {
    const { alert } = useContext()

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        try {
            logic.getExercises()
                .then(setExercises)
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [])

    const handleCreateWorkoutSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        try {
            const payload = [1, 2, 3].map(i => ({
                exerciseId: form[`exercise${i}`].value,
                sets: parseInt(form[`sets${i}`].value),
                repetitions: parseInt(form[`repetitions${i}`].value),
                restTime: parseInt(form[`restTime${i}`].value)
            }))

            logic.createWorkout(userId, day, payload)
                .then(() => {
                    alert('Workout created successfully')
                    
                    return logic.getWorkoutForUser(userId, day)
                })
                .then(freshWorkout => {
                    onBack(freshWorkout)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    console.log('CreateWorkout -> render')

    return (
        <div className="px-5 py-6 min-h-screen flex flex-col items-center bg-white text-center">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-[#0ab5ee] mb-6">Create Workout for {day}</h2>

                <form className="flex flex-col gap-5" onSubmit={handleCreateWorkoutSubmit}>
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border border-gray-300 rounded-lg p-4">
                            <h3 className="font-semibold mb-2 text-[#119fd3]">Exercise {i}</h3>
                            <select
                                name={`exercise${i}`}
                                required
                                className="w-full p-2 mb-2 border rounded"
                            >
                                <option value="">-- Select exercise --</option>
                                {exercises.map(ex => (
                                    <option key={ex._id} value={ex._id}>{ex.name}</option>
                                ))}
                            </select>

                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    name={`sets${i}`}
                                    placeholder="Sets"
                                    required
                                    className="w-1/3 p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name={`repetitions${i}`}
                                    placeholder="Reps"
                                    required
                                    className="w-1/3 p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name={`restTime${i}`}
                                    placeholder="Rest (sec)"
                                    required
                                    className="w-1/3 p-2 border rounded"
                                />
                            </div>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg px-4 py-2 mt-4"
                    >
                        ✅ Create Workout
                    </button>
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-[#0ab5ee] mt-2 hover:underline"
                    >
                        ⬅️ Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}
