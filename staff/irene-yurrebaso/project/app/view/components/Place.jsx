import { logic } from '../../logic'

import { useContext } from '../../context'

export const Place = ({ place, onPlaceClicked, onPlaceDeleted }) => {
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        confirm('Delete this place?')
            .then(result => {
                if (result)
                    try {
                        logic.removePlace(place.id)
                            .then(() => onPlaceDeleted())
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

    const handlePlaceClick = (event) => {
        event.preventDefault() //evita q el <a href="#"> recargue la página

        onPlaceClicked(place.id) //captura el id al hacer click
    }

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Place -> render')

    return <article className="max-w-sm">
        <h3 className="font-semibold"><a className="hover:underline hover:underline-offset-2" href="#" onClick={handlePlaceClick}>{place.name}</a></h3>

        <h4 className="">{place.city}</h4>

        <div className="my-2">
        <a href="#" onClick={handlePlaceClick}>
            <img className="cursor-pointer w-full h-60 object-cover rounded" src={place.image} alt={place.name} />
        </a>
        </div>

        <p className="font-light mt-3">{place.description}</p>
        
        <div className="flex">{(place.own || isAdmin) && <button className="border-b-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}</div>
        
    </article>
}