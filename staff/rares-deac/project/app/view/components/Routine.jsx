import { logic } from '../../logic'

import { useContext } from '../../context'

export const Routine = ({ routine, onRoutineDeleted }) => {
    const { alert, confirm } = useContext()

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

        <div className>
            <h4>{routine.title}</h4>
            <p>{routine.description}</p>
        </div>

        {(routine.own || isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>
        }
    </article>
}

