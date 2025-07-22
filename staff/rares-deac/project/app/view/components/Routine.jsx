import { logic } from '../../logic'

import { useContext } from '../../context'
import { useState } from 'react'

export const Routine = ({ routine, onRoutineDeleted, onRoutineUpdated }) => {
    const { alert, confirm } = useContext()
console.log(routine)
    const [view, setView] = useState('')

    const handleSubmitUpdate = (event) => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value
        const description = form.description.value

        confirm('Update routine?')
            .then(result => {
                if (result)
                    try {
                        logic.updateRoutine( routine.id, title, description)
                            .then(() => {
                                form.reset()
                                setView('')
                                onRoutineUpdated()
                            })
                            .catch(error => {
                                console.error(error)

                                alert(error.messsage)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })
    }



    const handleDeleteClick = () => {
        confirm('Delete routine?')
            .then(result => {
                if (result)
                    try {
                        logic.removeRoutine(routine.id)
                            .then(() => onRoutineDeleted())
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })
    }

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Routine -> render')

    return <article className="rounded-2xl border-black border-2 p-2">
        {!view && <div>
            <div >
                <h4>{routine.title}</h4>
                <p>{routine.description}</p>
            </div>

            {(routine.own || isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>
            }
            {(routine.own || isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={() => setView('update')}>✒️</button>}

        </div>
        }
        {view && <form className="mt-2 flex flex-col gap-4" onSubmit={handleSubmitUpdate}>
            <div className="flex flex-col gap">
                <label htmlFor="title">Title</label>
                <input className="border-2 px-1" type="text" id="title" placeholder={routine.title} />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="description">Description</label>
                <textarea className="border-2 px-1" type="text" id="description" placeholder={routine.description} />
            </div>

            <div className="flex justify-between">
                <button onClick={() => setView('')}> Cancel </button>

                <button className="bg-black text-white px-2" type="submit">Update</button>
            </div>
        </form>}
    </article>
}

