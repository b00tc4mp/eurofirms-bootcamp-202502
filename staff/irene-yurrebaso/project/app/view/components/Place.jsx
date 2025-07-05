import { logic } from '../../logic'

import { useContext } from '../../context'

export const Place = ({ place }) => {
    const { alert } = useContext()

    console.log('Post -> render')

    return <article>
        <h3>{place.name}</h3>
        <h4>{place.city}</h4>
        <img src={place.image} alt=""></img>
        <p>{place.description}</p>
        </article>
}