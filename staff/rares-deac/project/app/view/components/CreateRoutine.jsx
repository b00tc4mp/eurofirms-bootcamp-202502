import { logic } from '../../logic'

import { useContext } from '../../context'

export const CreateRoutine = ({ onCancelClicked, onRoutineCreated }) => {
    const { alert } = useContext()

    const handleCancelClick = () => onCancelClicked()

    const handleCreateRoutineSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value
        const description = form.description.value

        try {
            logic.createRoutine(title, description)
                .then(() => {
                    form.reset()

                    onRoutineCreated()
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

    console.log('CreateRoutine -> render')

    return <div className="mt-2">
        <h1>Nuevo entrenamiento</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreateRoutineSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="title">Title</label>
                <input className="border-2 px-1" type="text" id="title" placeholder="Title of Routine"/>
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="description">Description</label>
                <textarea className="border-2 px-1" type="text" id="description" placeholder="Type here your routine" />
            </div>

            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-white px-2" type="submit">Create</button>
            </div>
        </form>
    </div>
}   