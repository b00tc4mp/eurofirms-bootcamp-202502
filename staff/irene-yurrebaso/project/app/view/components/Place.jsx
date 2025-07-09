import { logic } from '../../logic'

import { useContext } from '../../context'

export const Place = ({ place, onPlaceClicked }) => {
    const { alert } = useContext()

    const handlePlaceClick = (event) => {
        event.preventDefault() //evita q el <a href="#"> recargue la página

        onPlaceClicked(place.id) //captura el id al hacer click
    }

    console.log('Place -> render')

    return <article className="max-w-xs">
        <h3 className="font-semibold"><a className="hover:underline" href="#" onClick={handlePlaceClick}>{place.name}</a></h3>
        <h4 className="">{place.city}</h4>
        <a href="#" onClick={handlePlaceClick}>
            <img className="py-2 cursor-pointer" src={place.image} alt={place.name} />
        </a>
        <p className="font-light">{place.description}</p>
    </article>
}